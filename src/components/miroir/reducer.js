import { createReducer } from '@reduxjs/toolkit';
import { MIROIR_SET_ORIENTATION } from '../../config/const/settings';

const initialState = [
    {  
        id: 0,
        x: 17,
        y: 2,
        orientation: 'left',
        enlightened: false,
        nextMirrorUp: null,
        nextMirrorDown:-10,
        nextMirrorLeft:3,
        nextMirrorRight:-1,

    },

    {
        id: 1,
        x: 4,
        y: 2,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: -1,
        nextMirrorDown:7,
        nextMirrorLeft:null,
        nextMirrorRight:-10,

    },

    {
        id: 2,
        x: 8,
        y: 2,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: null,
        nextMirrorDown:-10,
        nextMirrorLeft:1,
        nextMirrorRight:3,

    },

    {
        id: 3,
        x: 12,
        y: 2,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: -1,
        nextMirrorDown:10,
        nextMirrorLeft:null,
        nextMirrorRight:-10,

    },

    {
        id: 4,
        x: 8,
        y: 5,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: 2,
        nextMirrorDown:13,
        nextMirrorLeft:null,
        nextMirrorRight:-10,

    },

    {
        id: 5,
        x: 14,
        y: 5,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: -1,
        nextMirrorDown:-1,
        nextMirrorLeft:null,
        nextMirrorRight:null,

    },

    {
        id: 6,
        x: 16,
        y: 5,
        orientation: 'right',
        enlightened: false,
        prevMirror: 0,
    },

    {
        id: 7,
        x: 4,
        y: 9,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: -10,
        nextMirrorDown:null,
        nextMirrorLeft:-1,
        nextMirrorRight:8,

    },

    {
        id: 8,
        x: 6,
        y: 9,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: 9,
        nextMirrorDown:-1,
        nextMirrorLeft:-10,
        nextMirrorRight:null,

    },

    {
        id: 9,
        x: 6,
        y: 6,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: null,
        nextMirrorDown:-10,
        nextMirrorLeft:'end',
        nextMirrorRight:-1,

    },

    {
        id: 10,
        x: 12,
        y: 8,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: -10,
        nextMirrorDown:null,
        nextMirrorLeft:-1,
        nextMirrorRight:11,

    },

    {
        id: 11,
        x: 14,
        y: 8,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: null,
        nextMirrorDown:-10,
        nextMirrorLeft:5,
        nextMirrorRight:4,

        
    },

    {
        id: 12,
        x: 17,
        y: 10,
        orientation: 'left',
        enlightened: true,
        nextMirrorUp: 0,
        nextMirrorDown:-1,
        nextMirrorLeft:null,
        nextMirrorRight:-10,

    },

    {
        id: 13,
        x: 8,
        y: 10,
        orientation: 'right',
        enlightened: false,
        nextMirrorUp: -10,
        nextMirrorDown:null,
        nextMirrorLeft:-1,
        nextMirrorRight:12,

    },
];

export const miroirsReducer = createReducer(initialState, builder => {
    builder.addCase(MIROIR_SET_ORIENTATION, (state, action) => {
        const ref = action.payload.id;
        const newOrientation = action.payload.orientation;
        state[ref].orientation = newOrientation;
    })
})


/*export default function miroirsReducer(state = initialState, action) {
    switch (action.type) {
        case MIROIR_SET_ORIENTATION:
            return action.payload.number
        default:
            return state
    }
}*/