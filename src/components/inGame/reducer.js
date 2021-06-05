import { INGAME } from '../../config/const/settings';

const initInGame = false;

export function ingameReducer(state = initInGame, action) {
    switch (action.type) {
        case INGAME:
            return action.payload.ingame;
        default:
            return state;
    }
}