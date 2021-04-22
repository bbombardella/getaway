import { createReducer } from '@reduxjs/toolkit';
import { PNJ_CHANGE_STATE } from '../../config/const/settings';

const initialState = {
    petrified : true,
    changed: false,
}

export const pnj_coliseReducer = createReducer(initialState, builder => {
    builder.addCase(PNJ_CHANGE_STATE, (state, action) => {
        state.petrified = action.payload.petrified
        state.changed = action.payload.changed
    })
})