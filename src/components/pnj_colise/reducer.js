import { createReducer } from '@reduxjs/toolkit';
import { PNJ_CHANGE_STATE } from '../../config/const/settings';

const initialState = [
    {  
        id: 0,
        status: 'petrified'

    },
]

export const pnj_coliseReducer = createReducer(initialState, builder => {
    builder.addCase(PNJ_CHANGE_STATE, (state, action) => {
        const ref = action.payload.id;
        const newStatus = action.payload.state;
        state[ref].status = newStatus;
    })
})