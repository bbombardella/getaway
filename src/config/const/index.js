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
    1: 'sol.png',
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
    20: 'coffre1_gauche.png',
    21: 'coffre1_droite.png',
    22: 'fleurs.png',
    23: 'table_hautgauche.png',
    24: 'table_hautdroite.png',
    25: 'table_basgauche.png',
    26: 'table_basdroite.png',
    31: 'mur_porte_bord_hautcentre.png',
    32: 'porte_haut.png',
    33: 'mur_porte_bord_hautgauche.png',
    17: 'mur_porte_hautgauche.png',
    18: 'mur_porte_hautdroite.png',
    36: 'mur_porte_bord_hautdroite.png'
}

export const INVENTORY_ADD_ACTION = 'ADD';

export const INVENTORY_OBJECTS = {
    22: {
        id: "22",
        name: 'Fleurs',
        description: 'De manifique plantes vertes...',
        pickable: true
    },  
    20: {
        id: "20",
        name: 'Coffre',
        description: 'Un joli coffre se trouve devant vous, voulez-vous l’ouvrir ?',
        pickable: false
    },
    21: {
        id: "21",
        name: 'Coffre',
        description: 'Un joli coffre se trouve devant vous, voulez-vous l’ouvrir ?',
        pickable: false
    },
    23: {
        id: "23",
        name: 'Table',
        description: "C'est une ancienne table en bois",
        pickable: false
    },
    24: {
        id: "24",
        name: 'Table',
        description: "C'est une ancienne table en bois",
        pickable: false
    },
    25: {
        id: "25",
        name: 'Table',
        description: "C'est une ancienne table en bois",
        pickable: false
    },
    26: {
        id: "26",
        name: 'Table',
        description: "C'est une ancienne table en bois",
        pickable: false
    },
    32: {
        id: "32",
        name: 'Porte',
        description: "La pote est vérouillée...",
        pickable: false
    }
}

export const INTERACTION_SET_TEXT = 'SET';

export const INTERACTION_DELETE_ALL = 'DELETE';