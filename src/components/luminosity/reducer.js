import { createReducer } from '@reduxjs/toolkit';
import { CHANGE_LUMINOSITY } from '../../config/const/settings';

const initialState = {
    luminosity : 0,
}

export const luminosityReducer = createReducer(initialState, builder => {
    builder.addCase(CHANGE_LUMINOSITY, (state, action) => {
        state.luminosity = action.payload.luminosity;
    })
})