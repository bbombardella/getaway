export const DIALOGUE = {
    67: {
        id: 67,
        name: 'Panneau Colisée et Bibliothèque',
        complexChoices: false,
        description: [
            {
                text: '↑ Colisée et Bibliothèque',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null
            }
        ],
    },
    68: {
        id: 68,
        name: 'Panneau Cabanon',
        complexChoices: false,
        description: [
            {
                text: '← Cabanon',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null
            }
        ],
    },
    96: {
        id: 96,
        name: 'Panneau Château',
        complexChoices: false,
        description: [
            {
                text: '→ Château',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null
            }
        ],
    },
    97: {
        id: 97,
        name: 'Panneau Fontaine',
        complexChoices: false,
        description: [
            {
                text: '↓ Fontaine',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null
            }
        ],
    },
    103: {
        id: 103,
        name: 'Cameleon',
        complexChoices: false,
        description: [
            {
                text: 'Hey yo seigneur, y’a un p’tit problème avec le pont, t’as vu il semblerait qu’il soit cassé, mais t’inquiète pô, j’ai vu la fée partir vers La Fontaine en disant qu’elle avait une solution.',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null
            },
            {
                text: 'P’t’être qu’tu devrais aller taper la causette avec elle !',
                yes: {
                    text: 'Ok',
                    next: null
                },
                no: null
            }
        ],
    },
}