const initialState = [
    {
        id: '1',
        name: 'Dildo',
        size: '25cm bitch'
    },
    {
        id: '2',
        name: 'Vibro pete sa mère',
        size: 'c\'est secret'
    }
];

const ADD_ACTION = 'ADD';
const REMOVE_ACTION = 'REMOVE';

export default function inventoryReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_ACTION:
            return [...state, {
                nom: action.payload.nom,
                size: action.payload.size
            }]
        default:
            return state
    }
}