import { INVENTORY_ADD_ACTION } from '../../config/const';

const initialState = [ ];

function checkAlreadyExist(array, id) {
    for(var i=0;i<array.length;i++) {
        if(array[i].id === id) {
            return true;
        }
    }
    return false;
}

export default function inventoryReducer(state=initialState, action) {
    switch(action.type) {
        case INVENTORY_ADD_ACTION:
            const objectAlreadyExist = checkAlreadyExist(state, action.payload.id);
            if(!objectAlreadyExist) {
                return [...state, {
                    id: action.payload.id,
                    name: action.payload.name,
                    description: action.payload.description,
                    visible: action.payload.visible
                }]
            } else {
                return state
            }
        default:
            return state
    }
}