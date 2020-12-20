const initialState = [
    {
        id: '0',
        name: 'Clé du cabanon',
        description: 'Une clé couverte de mousse'
    },
    {
        id: '2',
        name: 'Vibro pete sa mère',
        description: 'c\'est secret'
    }
];

const ADD_ACTION = 'ADD';
//const REMOVE_ACTION = 'REMOVE';

export default function inventoryReducer(state=initialState, action) {
    switch(action.type) {
        case ADD_ACTION:
            return [...state, {
                name: action.payload.name,
                description: action.payload.description
            }]
        default:
            return state
    }
}