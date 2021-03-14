import { createReducer } from '@reduxjs/toolkit';
import { MIROIR_SET_ORIENTATION } from '../../config/const/settings';

const initialState = [
    {
        x: 17,
        y: 2,
        orientation: 'right'
    },

    {
        x: 4,
        y: 2,
        orientation: 'right'
    },

    {
        x: 8,
        y: 2,
        orientation: 'right'
    },

    {
        x: 12,
        y: 2,
        orientation: 'right'
    },

    {
        x: 8,
        y: 5,
        orientation: 'right'
    },

    {
        x: 14,
        y: 5,
        orientation: 'right'
    },

    {
        x: 16,
        y: 5,
        orientation: 'right'
    },

    {
        x: 4,
        y: 9,
        orientation: 'right'
    },

    {
        x: 6,
        y: 9,
        orientation: 'right'
    },

    {
        x: 6,
        y: 6,
        orientation: 'right'
    },

    {
        x: 12,
        y: 8,
        orientation: 'right'
    },

    {
        x: 14,
        y: 8,
        orientation: 'right'
    },

    {
        x: 17,
        y: 10,
        orientation: 'right'
    },

    {
        x: 8,
        y: 10,
        orientation: 'right'
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