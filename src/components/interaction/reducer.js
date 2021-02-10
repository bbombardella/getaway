import { INTERACTION_SET_TEXT } from '../../config/const/settings';

const initialState = [
    {
        interact: false,
        id: 0,
        name: '',
        description: '',
    },

];

export default function interactionReducer(state=initialState, action) {
    switch(action.type) {
        case INTERACTION_SET_TEXT:
            return({
                ...action.payload
            })  
        default:
            return state
    }
}