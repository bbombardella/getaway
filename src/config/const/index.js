export const SPRITE_SIZE = 40;

export const DIRECTIONS = {
    down:0,
    left:1,
    right:2,
    up:3,
}

export const MAP_DIMENSION = {
    column: 21,
    line: 13
}

export const MAP_TILES = {
    0: 'sol_plancher.png',
    1: 'sol_plancher.png',
    2: 'mur_haut.png',
    3: 'mur_gauchedroite.png',
    4: 'mur_bas.png',
    5: 'mur_coin_hautgauche.png',
    6: 'mur_coin_hautdroite.png',
    7: 'mur_coin_basdroite.png',
    8: 'mur_coin_basgauche.png',
    9: 'mur_bord_haut.png',
    10: 'mur_bord_droite.png',
    11: 'mur_bord_bas.png',
    12: 'mur_bord_gauche.png',
    13: 'mur_bord_coin_hautgauche.png',
    14: 'mur_bord_coin_haudroite.png',
    15: 'mur_bord_coin_basdroite_.png',
    16: 'mur_bord_coin_basgauche.png',
    17: 'mur_porte_bord_hautgauche.png',
    18: 'mur_porte_bord_hautcentre.png',
    19: 'mur_porte_bord_hautdroite.png',
    20: 'mur_porte_hautgauche.png',
    21: 'mur_porte_hautdroite.png',
    22: 'mur_porte_bord_basgauche.png',
    23: 'mur_porte_bord_bascentre.png',
    24: 'mur_porte_bord_basdroite.png',
    25: 'mur_porte_basgauche.png',
    26: 'mur_porte_basdroite.png',
    27: 'mur_porte_bord_droitehaut.png',
    28: 'mur_porte_bord_droitecentre.png',
    29: 'mur_porte_bord_droitebas.png',
    30: 'mur_porte_droitehaut.png',
    31: 'mur_porte_droitebas.png',
    32: 'mur_porte_bord_gauchehaut.png',
    33: 'mur_porte_bord_gauchecentre.png',
    34: 'mur_porte_bord_gauchebas.png',
    35: 'mur_porte_gauchehaut.png',
    36: 'mur_porte_gauchebas.png',
    40: 'porte_haut.png',
    41: 'porte_bas.png',
    69: 'vide_bleu.png',
    70: 'coffre1_gauche.png',
    71: 'coffre1_droite.png',
    72: 'fleurs.png',
    73: 'table_hautgauche.png',
    74: 'table_hautdroite.png',
    75: 'table_basgauche.png',
    76: 'table_basdroite.png',
    77: 'cle_poisseuse.png',
    78: 'glace.png',
    79: 'glace_roche.png',
    80: 'sol_pierre.png',
    81: 'socle_gauche.png',
    82: 'socle_droite.png',
    83: 'escalier_haut.png',
    84: 'escalier_centre.png',
    85: 'barriere.png',
    86: 'herbe.png',
    87: 'chemin.png',
    88: 'chemin_gauche.png',
    89: 'chemin_droite.png',
    90: 'chemin_haut.png',
    91: 'chemin_bas.png',
    92: 'vide_vert.png',
    93: 'vide_marron',
    94: 'barriere_droite.png',
    95: 'barriere_gauche.png',
    96: 'panneau_face.png',
    97: 'panneau_dos.png',
    98: 'escalier_bas.png',
    99: 'barriere_coin_inf_gauche1.png',
    100: 'barriere_coin_inf_droit1.png',
    101: 'barriere_coin_sup_gauche1.png',
    102: 'barriere_coin_sup_gauche2.png',
}

export const INVENTORY_ADD_ACTION = 'ADD';

export const INVENTORY_OBJECTS = {
    40: {
        id: 40,
        name: 'Porte',
        description: "La porte est verrouillée...",
        pickable: false,
        descVisible : true,
        visible: false,
    },
    41: {
        id: 41,
        name: 'Porte',
        description: "La porte est verrouillée...",
        pickable: false,
        descVisible : true,
        visible: false,
    },
    70: {
        id: 70,
        name: 'Coffre',
        description: 'Un coffre imposant se trouve devant vous. Voulez-vous l’ouvrir ?',
        pickable: true,
        descVisible : true,
        visible: false,
        associatedKey: 77
    },
    71: {
        id: 71,
        name: 'Coffre',
        description: 'Un coffre imposant se trouve devant vous. Voulez-vous l’ouvrir ?',
        pickable: true,
        descVisible : true,
        visible: false,
        associatedKey: 77
    },
    72: {
        id: 72,
        name: 'Fleurs',
        description: 'De magnifiques fleurs blanches. L\'une d\'elles semble vous observer.',
        pickable: true,
        descVisible : true,
        visible: true,
    },
    73: {
        id: 73,
        name: 'Table',
        description: "C'est une vieille table en bois.",
        pickable: false,
        descVisible : true,
        visible: false,
    },
    74: {
        id: 74,
        name: 'Table',
        description: "C'est une vieille table en bois.",
        pickable: false,
        descVisible : true,
        visible: false,
    },
    75: {
        id: 75,
        name: 'Table',
        description: "C'est une vieille table en bois",
        pickable: false,
        descVisible : true,
        visible: false,
    },
    76: {
        id: 76,
        name: 'Table',
        description: "C'est une vieille table en bois",
        pickable: false,
        descVisible : true,
        visible: false,
    },
    77: {
        id: 77,
        name: 'Clé moussue',
        description: "C'est une clé couverte de mousse.",
        pickable: true,
        descVisible : true,
        visible: false,
    }
}

export const DOORS = {
    40: {
        id: '40',
        nextWorld: '7',
        newPosition: {
            x: -(10*SPRITE_SIZE),
            y: 3*SPRITE_SIZE
        },
        keyNeeded: 77,
    },
    41: {
        id: '41',
        nextWorld: '1',
        newPosition: {
            x: 0,
            y: -(8*SPRITE_SIZE)
        },
        keyNeeded: 77,
    },
    88: {
        id: '88',
        nextWorld: '1',
        newPosition: {
            x: 0,
            y: -(8*SPRITE_SIZE)
        },
        keyNeeded: 77,
    }
}

export const INTERACTION_SET_TEXT = 'SET';

export const INTERACTION_DELETE_ALL = 'DELETE';

export const WORLD_SET_NUMBER = 'SET_WORLD';

export const INTRO = [
    "Vous vous relevez, titubant. Votre tête vous fait mal, un terrible sifflement résonne dans vos oreilles.",
    "Votre vue est floue. Vous percevez une faible lueur. Vous vous asseyez à même le sol, et essayez de rassembler vos souvenirs...",
    "Comment êtes-vous arrivé.e ici ?",
    "Où étiez-vous avant ?",
    "...Qui êtes-vous ?",
    "Submergé.e par vos questions, vous n’avez pas remarqué que votre vue était revenue, que votre mal de tête s’était apaisé et que le sifflement s’était évanoui.",
    "Vous regardez alors autour de vous : une pièce, sombre, éclairée par un filet de lumière traversant le mur. Vous vous approchez, observez l’extérieur.",
    "Ce n’est pas le monde que vous connaissez, vous pensez reconnaître des arbres, mais ils sont différents : ils sont plus volumineux, leurs branches sont plus aventureuses et arborent des couleurs agréables, certains ont des feuilles d’un rose flamant, d’autres d’un jaune vif - rien d’un arbre dont les feuilles mourraient.",
    "Ces couleurs atypiques forment une forêt des plus particulières, gouvernée par un immense arbre paré d’un incroyable feuillage violacé.",
    "Il est si imposant, si grand que vous ne pouvez en voir le sommet par votre ouverture.",
    "Cet arbre roi est entouré d’une vaste clairière dans laquelle vous distinguez une faune des plus étranges, empruntant des traits à des animaux que vous connaissez, sans être ces animaux. Vous apercevez ce qui semble être une biche à six pattes avancer tranquillement vers un point d’eau, accompagnée d’un lion ailé à la crinière imposante et rayonnante…",
    "Un lion dans une clairière ? Pendant que vous vous demandez si vous n'avez pas perdu la tête, votre regard s'attarde sur autre chose. Par cette brèche, vous contemplez le ciel brillant et bercé par l’éclat de deux magnifiques astres : le premier plus rouge que les enfers, le second d’un bleu calme et paisible.",
    "Un courant d’air frais, pur, vous effleure le visage. Vous frémissez.",
    "À quand remonte la dernière fois que vous avez respiré un air de cette qualité ?",
    "Vous ne savez plus, vous avez oublié.",
    "La mémoire rafraichie, vous vous retournez et faites face à cette pièce sombre, déterminé.e à comprendre comment vous avez atterri ici.",
]