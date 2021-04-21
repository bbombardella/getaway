import { createReducer } from '@reduxjs/toolkit';
import { MIROIR_SET_ORIENTATION } from '../../config/const/settings';

const initialState = [
    {  
        id: 0,//
        x: 17,
        y: 2,
        orientation: 'left',
        nextMirrorUp: -1,
        nextMirrorDown:12,
        nextMirrorLeft:3,
        nextMirrorRight:-1,

    },

    {
        id: 1,//
        x: 4,
        y: 2,
        orientation: 'right',
        nextMirrorUp: -1,
        nextMirrorDown:7,
        nextMirrorLeft:-1,
        nextMirrorRight:2,

    },

    {
        id: 2,//
        x: 8,
        y: 2,
        orientation: 'right',
        nextMirrorUp: -1,
        nextMirrorDown:4,
        nextMirrorLeft:1,
        nextMirrorRight:3,

    },

    {
        id: 3,//
        x: 12,
        y: 2,
        orientation: 'right',
        nextMirrorUp: -1,
        nextMirrorDown:10,
        nextMirrorLeft:2,
        nextMirrorRight:0,

    },

    {
        id: 4,//
        x: 8,
        y: 5,
        orientation: 'right',
        nextMirrorUp: 2,
        nextMirrorDown:13,
        nextMirrorLeft:-1,
        nextMirrorRight:5,

    },

    {
        id: 5,//
        x: 14,
        y: 5,
        orientation: 'right',
        nextMirrorUp: -1,
        nextMirrorDown:11,
        nextMirrorLeft:4,
        nextMirrorRight:6,

    },

    {
        id: 6,//
        x: 16,
        y: 5,
        orientation: 'right',
        nextMirrorUp: -1,
        nextMirrorDown:-1,
        nextMirrorLeft:5,
        nextMirrorRight:-1,
    },

    {
        id: 7,//
        x: 4,
        y: 9,
        orientation: 'right',
        nextMirrorUp: 1,
        nextMirrorDown:-1,
        nextMirrorLeft:-1,
        nextMirrorRight:8,

    },

    {
        id: 8,//
        x: 6,
        y: 9,
        orientation: 'right',
        nextMirrorUp: 9,
        nextMirrorDown:-1,
        nextMirrorLeft:7,
        nextMirrorRight:-1,

    },

    {
        id: 9,//
        x: 6,
        y: 6,
        orientation: 'right',
        nextMirrorUp: -1,
        nextMirrorDown:8,
        nextMirrorLeft:-1,
        nextMirrorRight:-1,

    },

    {
        id: 10,//
        x: 12,
        y: 8,
        orientation: 'right',
        nextMirrorUp: 3,
        nextMirrorDown:-1,
        nextMirrorLeft:-1,
        nextMirrorRight:11,

    },

    {
        id: 11,//
        x: 14,
        y: 8,
        orientation: 'right',
        nextMirrorUp: 5,
        nextMirrorDown:-1,
        nextMirrorLeft:10,
        nextMirrorRight:-1,

        
    },

    {
        id: 12,//
        x: 17,
        y: 10,
        orientation: 'right',
        nextMirrorUp: 0,
        nextMirrorDown:-1,
        nextMirrorLeft:13,
        nextMirrorRight:-1,

    },

    {
        id: 13,
        x: 8,
        y: 10,
        orientation: 'right',
        nextMirrorUp: 4,
        nextMirrorDown:-1,
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