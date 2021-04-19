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
                no: null,
                other : null
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
                no: null,
                other : null
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
                no: null,
                other : null
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
                no: null,
                other : null
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
                no: null,
                other : null
            },
            {
                text: 'P’t’être qu’tu devrais aller taper la causette avec elle !',
                yes: {
                    text: 'Ok',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    526: {
        id: 526,
        name: 'Fée fontaine',
        complexChoices: false,
        description: [
            {
                text: 'Bonjour mon seigneur. En quoi puis-je vous être utile ?',
                yes: {
                    text: 'Comment traverser la rivière ?',
                    next: 1
                },
                no: {
                    text: 'Rien, merci',
                    next: 3
                },
                other:{
                    text: 'Pourquoi “mon seigneur” ?',
                    next: 4
                }
            },
            {
                text: 'Connaissez-vous la légende des bottes d’Hermès ? Ce sont des bottes magiques qui permettent à son porteur de marcher sur l’eau.',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'Par chance, il se trouve qu’elles sont coincées dans cette fontaine. Malheureusement, celui qui les a posées ici les a bloqués par une magie qui me dépasse…',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
            {
                text: 'Passez une bonne journée',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
            {
                text: 'Car vous êtes notre seigneur, …. Enfin me semble-t-il ?',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
        ],
    },
}