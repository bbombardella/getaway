import { INTERACTION_SET_TEXT, INTERACTION_DELETE_ALL } from '../../config/const';

const initialState = [
    {
        id: '100',
        name: '',
        description: 'Pas d interaction',
        FULLDELETE: "OK",
    },

];

function checkAlreadyExist(array, id) {
    for(var i=0;i<array.length;i++) {
        if(array[i].id === id) {
            return true;
        }
    }
    return false;
}

export default function interactionReducer(state=initialState, action) {
    switch(action.type) {
        case INTERACTION_SET_TEXT:
            const objectAlreadyExist = checkAlreadyExist(state, action.payload.id);
            if(!objectAlreadyExist) {
                return [...state, {
                    name: action.payload.name,
                    description: action.payload.description
                }]
            } else {
                return state
            };
            
        case INTERACTION_DELETE_ALL:
            return[...state=initialState]
                    
        default:
            return state
    }
}