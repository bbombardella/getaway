import { SPRITE_SIZE } from './settings';

export const DOORS = {
    40: {
        id: '40',
        nextWorld: '4',
        newPosition: {
            x: SPRITE_SIZE,
            y: (6*SPRITE_SIZE)
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
    42: {
        id: '42',
        nextWorld: '4',
        newPosition: {
            x: 19*SPRITE_SIZE,
            y: (6*SPRITE_SIZE)
        },
        keyNeeded: 77,
    },
    88: {
        id: '88',
        nextWorld: '1',
        newPosition: {
            x: 10*SPRITE_SIZE,
            y: 3*SPRITE_SIZE
        },
        keyNeeded: 77,
    },
    89: {
        id: '89',
        nextWorld: '5',
        newPosition: {
            x: SPRITE_SIZE,
            y: (6*SPRITE_SIZE)
        },
        keyNeeded: 77,
    },
    91: {
        id: '91',
        nextWorld: '7',
        newPosition: {
            x: 10*SPRITE_SIZE,
            y: SPRITE_SIZE
        },
        keyNeeded: 77,
    }
}