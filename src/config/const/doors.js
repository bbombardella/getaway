import { SPRITE_SIZE } from './settings';

export const DOORS = {
    40: {
        id: '40',
        nextWorld: '4',
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