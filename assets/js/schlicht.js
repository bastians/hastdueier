import { answers } from './answers.js';
import { matomo } from './config.js';

const $ = (selector, root = document) => root.querySelector(selector);

const stage = $('.antwort');
const verdict = $('.urteil');
const friendNote = $('.notiz__kumpel');
const dek = $('.dek');
const lede = $('.lede');
const media = $('.clip__media');
const caption = $('.clip__caption');
const shareButton = $('[data-action="share"]');
const againButton = $('[data-action="again"]');
const againLabel = $('.btn__label', againButton);
const toast = $('.toast');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const params = new URLSearchParams(window.location.search);

// Die Spannung dauert, auch bei reduzierter Bewegung: Sie ist Pause, keine Bewegung.
const SUSPENSE = 1400;
const TEASER = 'Ja?\nNein?';

const yesIndices = answers.flatMap((answer, i) => (answer.found ? [i] : []));
const noIndices = answers.flatMap((answer, i) => (answer.found ? [] : [i]));

let current = null;
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

// Der Clip lädt schon während der Spannung und ist da, wenn die Antwort steht.
function prepareMedia(answer) {
    const isVideo = answer.media.type === 'youtube';
    media.classList.toggle('clip__media--yt', isVideo);
    media.replaceChildren(isVideo ? youtube(answer.media) : giphy(answer.media));
    caption.textContent = isVideo
        ? 'Oliver Kahn: „Eier, wir brauchen Eier!“ Video: YouTube'
        : 'Clip: GIPHY';
}

/* ───────── Urteil ───────── */

// Das Ausrufezeichen ist das einzige Rot auf der Seite.
function setVerdict(text) {
    const bang = text.endsWith('!');
    const word = document.createElement('span');
    word.textContent = bang ? text.slice(0, -1) : text;
    verdict.replaceChildren(word);
    if (bang) {
        const mark = document.createElement('span');
        mark.className = 'urteil__bang';
        mark.textContent = '!';
        verdict.append(mark);
    }
    verdict.style.setProperty('--len', text.length);
}

function typeset(answer) {
    setVerdict(answer.headline);
    stage.dataset.found = String(answer.found);

    // Emoji nie allein in die letzte Zeile
    dek.textContent = answer.title.replace(/ (\S+)$/, '\u00a0$1');
    lede.textContent = answer.description;
    lede.hidden = !answer.description;

    toast.textContent = '';
}

function tease() {
    delete stage.dataset.found;
    stage.dataset.stage = 'waiting';
    setVerdict(TEASER);
    // Zwei Zeilen, so breit wie „Nein?“
    verdict.style.setProperty('--len', 5);
}

async function reveal(index) {
    const answer = answers[index];
    current = index;

    tease();
    prepareMedia(answer);
    await wait(SUSPENSE);

    typeset(answer);
    stage.dataset.stage = 'landed';
    track('Antwort', answer.found ? 'Ja' : 'Nein', answer.title);
}

async function again() {
    if (busy) return;
    busy = true;
    againButton.disabled = true;
    shareButton.disabled = true;

    // Wer über einen geteilten Link kam, fragt ab jetzt selbst.
    if (!friendNote.hidden) {
        friendNote.hidden = true;
        againLabel.textContent = 'Nochmal';
        setPrimary(shareButton);
        window.history.replaceState(null, '', window.location.pathname);
    }

    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    track('Antwort', 'Nochmal');
    await reveal(draw());

    againButton.disabled = false;
    shareButton.disabled = false;
    busy = false;
}

// Hauptknopf ist „Teilen“, bei der Antwort vom Kumpel aber „Und du?“.
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

    // ?og hält die Spannung an: nur für das Vorschaubild.
    if (params.has('og')) {
        tease();
        return;
    }

    const fromFriend = sharedIndex();
    if (fromFriend !== null) {
        friendNote.hidden = false;
        againLabel.textContent = 'Und du?';
        setPrimary(againButton);
        reveal(fromFriend);
    } else {
        reveal(draw());
    }
}

start();
