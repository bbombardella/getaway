import { WORLD_SET_NUMBER } from '../../../config/const/settings';

const initialState = 1;

export default function worldReducer(state=initialState, action) {
    switch(action.type) {
        case WORLD_SET_NUMBER:
            return action.payload.number
        default:
            return state
    }
}