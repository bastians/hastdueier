import { answers } from './answers.js';
import { matomo } from './config.js';

const $ = (selector, root = document) => root.querySelector(selector);

const paper = $('.paper');
const front = $('.front');
const story = $('.story');
const headline = $('.headline');
const banderole = $('.banderole');
const dek = $('.dek');
const lede = $('.lede');
const media = $('.photo__media');
const caption = $('.photo__caption');
const dateLine = $('.masthead__date');
const editionLine = $('.masthead__edition');
const shareButton = $('[data-action="share"]');
const againButton = $('[data-action="again"]');
const againLabel = $('.btn__label', againButton);
const toast = $('.toast');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const params = new URLSearchParams(window.location.search);

// Die Eilmeldung läuft vor jedem Aufschlag. Sie ist Spannung, keine Bewegung,
// und bleibt deshalb auch bei reduzierter Bewegung.
const SUSPENSE = 1400;

const yesIndices = answers.flatMap((answer, i) => (answer.found ? [i] : []));
const noIndices = answers.flatMap((answer, i) => (answer.found ? [] : [i]));

let current = null;
let edition = 1;
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

/* ───────── Foto ───────── */

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
        track('Foto', 'Video abgespielt');
    }, { once: true });
    return button;
}

/* ───────── Satz ───────── */

function typeset(answer) {
    headline.textContent = answer.headline;
    headline.style.setProperty('--len', answer.headline.length);
    story.dataset.found = String(answer.found);

    // Emoji nie allein in die letzte Zeile
    dek.textContent = answer.title.replace(/ (\S+)$/, ' $1');
    lede.textContent = answer.description;
    lede.hidden = !answer.description;

    toast.textContent = '';
}

// Der Clip lädt schon, während die Eilmeldung läuft, und ist da, wenn die Schlagzeile landet.
function prepareMedia(answer) {
    const isVideo = answer.media.type === 'youtube';
    media.classList.toggle('photo__media--yt', isVideo);
    media.replaceChildren(isVideo ? youtube(answer.media) : giphy(answer.media));
    caption.textContent = isVideo
        ? 'Oliver Kahn: „Eier, wir brauchen Eier!“ Video:\u00a0YouTube'
        : 'Foto: GIPHY';
}

/* ───────── Druck ───────── */

// Während die Eilmeldung läuft, steht die offene Frage in der Schlagzeile.
function tease() {
    headline.textContent = 'Ja? Nein?';
    // Schmal: zwei Zeilen, so breit wie „Nein?“. Breit: eine Zeile.
    const narrow = window.matchMedia('(max-width: 899px)').matches;
    headline.style.setProperty('--len', narrow ? 5.8 : 10.5);
    delete story.dataset.found;
}

async function print(index) {
    current = index;
    front.dataset.stage = 'waiting';
    tease();
    prepareMedia(answers[index]);
    await wait(SUSPENSE);

    typeset(answers[index]);
    front.dataset.stage = 'printed';
    jolt();
    track('Titelseite', 'Gedruckt', answers[index].title);
}

function jolt() {
    if (reducedMotion.matches) return;
    // Der Aufschlag kommt, wenn die Schlagzeile landet
    setTimeout(() => {
        paper.classList.remove('is-jolted');
        void paper.offsetWidth;
        paper.classList.add('is-jolted');
    }, 220);
}

async function again() {
    if (busy) return;
    busy = true;
    againButton.disabled = true;
    shareButton.disabled = true;

    // Wer über einen geteilten Link kam, zieht ab jetzt selbst.
    if (!banderole.hidden) {
        banderole.hidden = true;
        againLabel.textContent = 'Nochmal';
        setPrimary(shareButton);
        window.history.replaceState(null, '', window.location.pathname);
    }

    edition += 1;
    editionLine.textContent = edition;
    window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'auto' : 'smooth' });
    track('Titelseite', 'Nochmal');
    await print(draw());

    againButton.disabled = false;
    shareButton.disabled = false;
    busy = false;
}

// Hauptknopf ist „Teilen“, bei der Ausgabe vom Kumpel aber „Und du?“.
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
    // Auf dem Handy kurz, damit die Kopfzeile in eine Zeile passt
    const short = window.matchMedia('(max-width: 899px)').matches;
    dateLine.textContent = new Date().toLocaleDateString('de-DE', short
        ? { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' }
        : { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
    shareButton.addEventListener('click', share);
    againButton.addEventListener('click', again);

    // ?og hält die Eilmeldung an: nur für das Vorschaubild.
    if (params.has('og')) {
        front.dataset.stage = 'waiting';
        tease();
        return;
    }

    const fromFriend = sharedIndex();
    if (fromFriend !== null) {
        banderole.hidden = false;
        againLabel.textContent = 'Und du?';
        setPrimary(againButton);
        print(fromFriend);
    } else {
        print(draw());
    }
}

start();
