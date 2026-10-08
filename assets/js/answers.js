// Die vier Antworten. Reihenfolge = Index im geteilten Link (?a=0 … ?a=3).
// Gezogen wird 50/50 Ja oder Nein, danach eine der Ja-Antworten.
// headline: die Schlagzeile, die über die Titelseite geht.
export const answers = [
    {
        found: true,
        title: 'Ja, riesen Kawenzmänner! 😎',
        description: '',
        headline: 'Ja!',
        media: {
            type: 'giphy',
            id: '62PP2yEIAZF6g',
            alt: 'GIF zur Antwort „Ja, riesen Kawenzmänner!“',
        },
    },
    {
        found: true,
        title: 'Ja, aber schwer zu finden. 😏',
        description: '',
        headline: 'Ja!',
        media: {
            type: 'giphy',
            id: 'l3q2PZSVUUEsajBIY',
            alt: 'GIF zur Antwort „Ja, aber schwer zu finden.“',
        },
    },
    {
        found: true,
        title: 'Ja! 😃',
        description: '',
        headline: 'Ja!',
        media: {
            type: 'giphy',
            id: 'l0HlvcRyVJeO8Gmju',
            alt: 'GIF zur Antwort „Ja!“',
        },
    },
    {
        found: false,
        title: 'Nein. 😔',
        description: 'Schade! Denn: Eier! Wir brauchen Eier!',
        headline: 'Nein!',
        media: {
            type: 'youtube',
            id: 'JriQQkxWI9o',
            alt: 'Oliver Kahn: „Eier, wir brauchen Eier!“',
        },
    },
];
