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
    82: {
        id: 82,
        name: 'Epee',
        complexChoices: false,
        description: [
            {
                text: 'Une épée au premier abord simple, cependant elle dégage une force incommensurable, vous vous sentez inspiré.e en la saisissant.',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: 'L’envie irrépressible de vous lancez dans la bataille vous submerge. Des souvenirs vous reviennent : vous brandissez votre imposante épée devant un scène effroyable, une mer de corps inerte se tient à vos pieds… Vous revenez à vous.',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'Des souvenirs vous reviennent : vous brandissez votre imposante épée devant un scène effroyable, une mer de corps inerte se tient à vos pieds… Vous revenez à vous.',
                yes: {
                    text: 'Suite',
                    next: 2
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
    145: {
        id: 145,
        name: 'Toby The Fox pétrifié',
        complexChoices: false,
        description: [
            {
                text: 'La pierre de cette statue est étrange, peu classique, de plus son visage traduit une horreur indicible. Une imposante clé se trouve dans sa main… La porte doit être démesurément grande…  Ce n’est décidément pas une statue ordinaire…',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: 'La lumière du faisceau est chaleureuse, vous vous sentez bien sous cette lumière. Elle pourrait peut-être aider cette statue maudite.',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    146: {
        id: 146,
        name: 'Toby The Fox libéré',
        complexChoices: false,
        description: [
            {
                text: 'Ô seigneur ! Merci de m’avoir délivré du mal qui ronge cette demeure, il semblerait que la malédiction ai pris possession de ce temple.',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: 'Hmmm, vous devez vouloir accéder à votre château, j’ai pris soin de conserver les clés après l’arrivée du chevalier sombre dans votre résidence.',
                yes: {
                    text: 'Merci',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    147: {
        id: 147,
        name: 'Le méchant',
        complexChoices: false,
        description: [
            {
                text: 'Votre adversaire est bien trop fort, et vous n’avez pas d’arme, vous n’essayez pas de le combattre et fuyez',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
        ],
    },
    148: {
        id: 148,
        name: 'Le méchant avec épée mais sans biblio',
        complexChoices: false,
        description: [
            {
                text: 'Te voilà! Je t’attendais, ce petit coup que tu as reçu à la tête ne t’aura pas retenu longtemps.',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: 'Tu viens pour te battre ? Tu penses vraiment pouvoir me vaincre ?',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'Haha ! Ignorant ! En garde',
                yes: {
                    text: 'Ok',
                    next: null
                },
                no: null,
                other : null
            },
        ],
    },

    151: {
        id: 151,
        name: 'Victoire nulle',
        complexChoices: false,
        description: [
            {
                text: 'Vous tuez le chevalier noir. Il a causé de gros dégâts dans votre petit royaume, mais vos habitants et vous reconstruirez ensemble, dans la paix. ',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
        ],
    },
    152: {
        id: 152,
        name: 'Victoire bien',
        complexChoices: false,
        description: [
            {
                text: 'Vous triomphez de votre frère maudit, vous le neutralisez et l’enchainez dans votre salle du trône le temps de trouver un moyen de lever l’emprise de la malédiction ',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
        ],
    },
    153: {
        id: 153,
        name: 'Looser',
        complexChoices: false,
        description: [
            {
                text: 'Votre épée vole après un coup d’estoc de votre adversaire, désarmé vous êtes incapable de vous défendre, il touche votre épaule, soudainement, votre vue se trouble, vos sens s’engourdissent...',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: 'Vous avez été maudit, vous n’êtes plus maître de votre corps, il déambule, vous êtes prisonnier de votre propre corps, impuissant.',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
        ],
    },
    200: {
        id: 200,
        name: 'Le roi ',
        complexChoices: false,
        description: [
            {
                text: 'Un livre d’une couverture bleue vous interpelle, vous l’ouvrez, une image vous ressemblant étonnement y est dessinée',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: '« En l’an 1326, un jour sombre arriva, les bois de Rivelia furent menacés par le chaos, les trolls, des créatures de nature violente, se retrouvèrent évincés de leur terre natale par les neiges éternelles.',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'Sans habitat, ils n’eurent d’autres choix que de partir à la recherche d’une nouvelle terre fertile pour s’installer, Rivelia était sur leur passage, et leur dévolu se jeta sur ce havre de paix.',
                yes: {
                    text: 'Suite',
                    next: 3
                },
                no: null,
                other : null
            },
            {
                text: 'Le Roi de Rivelia, dans sa grande clémence, compris assez vite les besoins des trolls, voulant éviter une guerre meurtrière pour son peuple, il leur offra une partie de ses terres au sud, fraiche, fertile, d’une grande puissance magique et inutilisée, elle semblait parfaite pour ces créatures difformes.',
                yes: {
                    text: 'Suite',
                    next: 4
                },
                no: null,
                other : null
            },
            {
                text: 'Cependant, elles étaient résolues à se battre pour récupérer cette forêt, la guerre était inévitable. »',
                yes: {
                    text: 'Fermer le livre',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    201: {
        id: 201,
        name: 'Le frère du roi',
        complexChoices: false,
        description: [
            {
                text: 'Ce livre s’intitule « Au héros d’une guerre oubliée »',
                yes: {
                    text: 'Ouvrir le livre',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: '« Le héros de la guerre de 1326, est sans conteste le frère du Roi, qui aurait pensé qu’un loup solitaire, discret, vivant dans l’ombre de son frère, se révèlerait être la clé d’une victoire écrasante contre un peuple d’une violence inouïe et d’une force de loin supérieur au peuple de Rivelia.',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'Le frère du roi, DarkSasoupex de Konoha, est en réalité un stratège sans pareil, ainsi qu’un guerrier d’une qualité rare pour ce monde, et d’une loyauté sans faille envers son frère qu’il admire en tout point.',
                yes: {
                    text: 'Suite',
                    next: 3
                },
                no: null,
                other : null
            },
            {
                text: 'Il remporta la guerre avec son frère, les trolls, vaincus, n’eurent d’autres choix que d’accepter les terres que leur proposait le roi.',
                yes: {
                    text: 'Suite',
                    next: 4
                },
                no: null,
                other : null
            },
            {
                text: 'La condition était d’y rester sous la surveillance de son frère, ses prouesses martiales durant cette guerre le rendaient parfaitement qualifié pour tenir ces bêtes en respect, mission qu’il accepta sans hésiter en l’honneur de son frère. »',
                yes: {
                    text: 'Fermer le livre',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    202: {
        id: 202,
        name: ' L’histoire du monde',
        complexChoices: false,
        description: [
            {
                text: 'Une forte essence magique se dégage d’un livre, vous le saisissez, sans avoir à l’ouvrir, vous connaissez son contenu...',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other : null
            },
            {
                text: '« En ce monde, des zones méconnues telle que le bois de Rivelia, concentrent de forte quantité de magie, perturbant la flore qui s’y développe tant elle est puissante, mais la rendant idéale pour les créatures empreintes de magie tel que les fées, les homme lézards, ou encore les mandragores.',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other : null
            },
            {
                text: 'La magie influence les créatures qui la côtoient, cependant l’inverse est tout aussi vrai, c’est ainsi que naquirent les Terres Désolées d’Anter’Hia.',
                yes: {
                    text: 'Suite',
                    next: 3
                },
                no: null,
                other : null
            },
            {
                text: 'Autrefois un bosquet paisible aux vents magiques puissants se retrouva corrompu lorsqu’un groupe de dryades s’installe.',
                yes: {
                    text: 'Suite',
                    next: 4
                },
                no: null,
                other : null
            },
            {
                text: 'Ces dryades, marginalisées par leurs congénères car leur esprit était empli de haine et de rancœur, souillèrent la magie présente en ces lieux par leurs pensées viles et noires, le mal était fait. ',
                yes: {
                    text: 'Suite',
                    next: 5
                },
                no: null,
                other : null
            },
            {
                text: 'La magie se transforme en malédiction, aspirant l\'énergie vitale des êtres peuplant l\'endroit.',
                yes: {
                    text: 'Suite',
                    next: 6
                },
                no: null,
                other : null
            },
            {
                text: 'Elle pétrifie les plus faibles et manipule les plus forts pour les pousser à la destruction. ',
                yes: {
                    text: 'Suite',
                    next: 7
                },
                no: null,
                other : null
            },
            {
                text: 'Elle calcine les cœurs et brise les esprits.',
                yes: {
                    text: 'Suite',
                    next: 8
                },
                no: null,
                other : null
            },
            {
                text: 'Elle assèche les sols, se propage à tous ceux qui s\'approchent trop près des terres, et étend son influence toujours plus loin - jusqu\'à ce que l\'esprit corrompu des dryades ne puisse plus alimenter suffisamment la malédiction...',
                yes: {
                    text: 'Suite',
                    next: 9
                },
                no: null,
                other : null
            },
            {
                text: 'Depuis ce jour, Les Terres Désolées sont condamnées et interdites à tous. »',
                yes: {
                    text: 'Reposer le livre',
                    next: null
                },
                no: null,
                other : null
            }
        ],
    },
    203: {
        id: 203,
        name: 'Tableau si livres non lus',
        complexChoices: false,
        description: [
            {
                text: 'Une scène d’une rare violence.',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other: null
            },
        ],
    },
    204: {
        id: 204,
        name: 'Tableau si livres lus',
        complexChoices: false,
        description: [
            {
                text: 'C’est vous, votre épée, et... votre frère, DarkSasoupex.',
                yes: {
                    text: 'Suite',
                    next: 1
                },
                no: null,
                other: null
            },
            {
                text: 'C’est la bataille de 1326 contre les trolls, vous frissonnez, ces souvenirs vous sont fortement désagréables, vous auriez voulu éviter cette guerre inutile...',
                yes: {
                    text: 'Suite',
                    next: 2
                },
                no: null,
                other: null
            },
            {
                text: 'Si seulement vous aviez été plus persuasifs...',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other: null
            },
        ],
    },
    241: {
        id: 241,
        name: 'Débris de la statue',
        complexChoices: false,
        description: [
            {
                text: 'Il serait peut-être temps de passer un coup de balais… ',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other: null
            },
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
    603: {
        id: 603,
        name: 'Bibliothéquaire',
        complexChoices: false,
        description: [
            {
                text: 'Bonjour, que puis-je faire pour vous ?',
                yes: {
                    text: 'Rien, merci',
                    next: 1
                },
                no: {
                    text: 'Je ne comprends pas ce qu’il se passe',
                    next: 2
                },
                other:null
            },
            {
                text: 'Bonne journée',
                yes: {
                    text: 'OK',
                    next: null
                },
                no: null,
                other : null
            },
            {
                text: 'Peut-être que nos livres pourraient vous aider, vous devriez jeter un coup d’œil aux rangés 3 et 4 du bas, et a la cinquième du haut.',
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