import { answers } from './answers.js';
import { matomo } from './config.js';

const $ = (selector, root = document) => root.querySelector(selector);

const pool = $('.becken');
const verdict = $('.urteil');
const counter = $('.zaehler');
const friendSign = $('.kumpel');
const dek = $('.dek');
const lede = $('.lede');
const media = $('.clip__media');
const caption = $('.clip__caption');
const attemptLine = $('.turm__versuch');
const shareButton = $('[data-action="share"]');
const againButton = $('[data-action="again"]');
const againLabel = $('.btn__label', againButton);
const toast = $('.toast');
const rings = $('.platsch');
const ripple = $('#unterwasser feDisplacementMap');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const params = new URLSearchParams(window.location.search);

// Drei, zwei, eins: Das Zählen ist Spannung, keine Bewegung,
// und bleibt deshalb auch bei reduzierter Bewegung.
const COUNT = ['3', '2', '1'];
const BEAT = 470;
const FALL = 420;
const CLIMB = 1000;

const yesIndices = answers.flatMap((answer, i) => (answer.found ? [i] : []));
const noIndices = answers.flatMap((answer, i) => (answer.found ? [] : [i]));

let current = null;
let attempt = 1;
let busy = false;

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const pick = (list) => list[Math.floor(Math.random() * list.length)];

// 50/50 Ja oder Nein, danach gleich verteilt innerhalb der Seite.
function draw() {
    return pick(Math.random() < 0.5 ? yesIndices : noIndices);
}

function sharedIndex() {
    const value = params.get('a');
    return /^\d+$/.test(value ?? '') && Number(value) < answers.length ? Number(value) : null;
}

/* ───────── Clip ───────── */

function giphy(item) {
    const video = document.createElement('video');
    video.src = `https://media.giphy.com/media/${item.id}/giphy.mp4`;
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
    video.preload = 'auto';
    video.setAttribute('aria-label', item.alt);
    video.addEventListener('error', () => {
        const img = document.createElement('img');
        img.src = `https://media.giphy.com/media/${item.id}/giphy.gif`;
        img.alt = item.alt;
        video.replaceWith(img);
    }, { once: true });
    return video;
}

function youtube(item) {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'play';
    button.setAttribute('aria-label', `${item.alt} abspielen, mit Ton`);
    button.innerHTML = `
        <img src="https://i.ytimg.com/vi/${item.id}/hqdefault.jpg" alt="" width="480" height="360">
        <span class="play__badge" aria-hidden="true">
            <svg viewBox="0 0 24 24"><path d="M7 4.5v15l13-7.5z"/></svg>
            Video mit Ton
        </span>`;
    button.addEventListener('click', () => {
        const frame = document.createElement('iframe');
        frame.src = `https://www.youtube-nocookie.com/embed/${item.id}?autoplay=1&rel=0&playsinline=1`;
        frame.title = item.alt;
        frame.allow = 'autoplay; encrypted-media; picture-in-picture';
        frame.allowFullscreen = true;
        button.replaceWith(frame);
        track('Clip', 'Video abgespielt');
    }, { once: true });
    return button;
}

// Der Clip lädt schon, während gezählt wird, und ist da, wenn das Urteil landet.
function prepareMedia(answer) {
    const isVideo = answer.media.type === 'youtube';
    media.classList.toggle('clip__media--yt', isVideo);
    media.replaceChildren(isVideo ? youtube(answer.media) : giphy(answer.media));
    caption.textContent = isVideo
        ? 'Oliver Kahn: „Eier, wir brauchen Eier!“ Video: YouTube'
        : 'Clip: GIPHY';
}

/* ───────── Urteil ───────── */

function typeset(answer) {
    verdict.textContent = answer.headline;
    verdict.style.setProperty('--len', answer.headline.length);
    pool.dataset.found = String(answer.found);

    // Emoji nie allein in die letzte Zeile
    dek.textContent = answer.title.replace(/ (\S+)$/, ' $1');
    lede.textContent = answer.description;
    lede.hidden = !answer.description;

    toast.textContent = '';
}

async function countdown() {
    for (const n of COUNT) {
        counter.textContent = n;
        counter.classList.remove('is-tick');
        void counter.offsetWidth;
        counter.classList.add('is-tick');
        await wait(BEAT);
    }
}

// Unter Wasser wackeln die Buchstaben, bis sich die Oberfläche beruhigt.
function wobble() {
    const start = performance.now();
    const duration = 1200;
    verdict.style.filter = 'url(#unterwasser)';
    rings.style.filter = 'url(#unterwasser)';

    const frame = (now) => {
        const t = Math.min((now - start) / duration, 1);
        ripple.setAttribute('scale', (38 * (1 - t) ** 2).toFixed(2));
        if (t < 1) {
            requestAnimationFrame(frame);
        } else {
            verdict.style.filter = '';
            rings.style.filter = '';
        }
    };
    requestAnimationFrame(frame);
}

async function jump(index) {
    const answer = answers[index];
    current = index;

    pool.classList.remove('is-splash', 'is-settled');
    delete pool.dataset.found;
    pool.dataset.stage = 'waiting';
    prepareMedia(answer);
    await countdown();

    typeset(answer);
    pool.dataset.stage = 'landed';
    track('Sprung', answer.found ? 'Gesprungen' : 'Runtergeklettert', answer.title);

    if (reducedMotion.matches) {
        pool.classList.add('is-settled');
        return;
    }

    if (answer.found) {
        await wait(FALL);
        pool.classList.add('is-splash');
        wobble();
        await wait(300);
    } else {
        await wait(CLIMB);
    }
    pool.classList.add('is-settled');
}

async function again() {
    if (busy) return;
    busy = true;
    againButton.disabled = true;
    shareButton.disabled = true;

    // Wer über einen geteilten Link kam, springt ab jetzt selbst.
    if (!friendSign.hidden) {
        friendSign.hidden = true;
        againLabel.textContent = 'Nochmal';
        setPrimary(shareButton);
        window.history.replaceState(null, '', window.location.pathname);
    }

    attempt += 1;
    attemptLine.textContent = attempt;
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    track('Sprung', 'Nochmal');
    await jump(draw());

    againButton.disabled = false;
    shareButton.disabled = false;
    busy = false;
}

// Hauptknopf ist „Teilen“, beim Sprung vom Kumpel aber „Und du?“.
function setPrimary(button) {
    for (const b of [shareButton, againButton]) {
        b.classList.toggle('btn--primary', b === button);
        b.classList.toggle('btn--secondary', b !== button);
    }
    againButton.parentElement.prepend(button);
}

/* ───────── Teilen ───────── */

async function share() {
    const answer = answers[current];
    const url = `${window.location.origin}${window.location.pathname}?a=${current}`;
    const text = `Hast du Eier? Bei mir: „${answer.title}“ Und bei dir?`;

    if (navigator.share) {
        try {
            await navigator.share({ title: 'Hast du Eier?', text, url });
            track('Teilen', 'Share-Sheet', answer.title);
        } catch (error) {
            if (error.name !== 'AbortError') copy(text, url, answer);
        }
        return;
    }
    copy(text, url, answer);
}

async function copy(text, url, answer) {
    try {
        await navigator.clipboard.writeText(`${text} ${url}`);
        toast.textContent = 'Link kopiert';
        track('Teilen', 'Link kopiert', answer.title);
    } catch {
        toast.textContent = `Kopieren ging nicht. Dein Link: ${url}`;
    }
}

/* ───────── Matomo ───────── */

function initMatomo() {
    if (!matomo.url || !matomo.siteId) return;
    const queue = (window._paq = window._paq || []);
    queue.push(['disableCookies']);
    queue.push(['trackPageView']);
    queue.push(['setTrackerUrl', `${matomo.url}matomo.php`]);
    queue.push(['setSiteId', String(matomo.siteId)]);
    const script = document.createElement('script');
    script.async = true;
    script.src = `${matomo.url}matomo.js`;
    document.head.append(script);
}

function track(category, action, name) {
    if (!window._paq) return;
    window._paq.push(name ? ['trackEvent', category, action, name] : ['trackEvent', category, action]);
}

/* ───────── Start ───────── */

function start() {
    initMatomo();
    shareButton.addEventListener('click', share);
    againButton.addEventListener('click', again);

    // ?og hält das Zählen bei der 3 an: nur für das Vorschaubild.
    if (params.has('og')) {
        pool.dataset.stage = 'waiting';
        counter.textContent = COUNT[0];
        return;
    }

    const fromFriend = sharedIndex();
    if (fromFriend !== null) {
        friendSign.hidden = false;
        againLabel.textContent = 'Und du?';
        setPrimary(againButton);
        jump(fromFriend);
    } else {
        jump(draw());
    }
}

start();
