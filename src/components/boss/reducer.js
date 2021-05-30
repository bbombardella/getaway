import { CHANGE_SCORE} from '../../config/const/settings';

function random(setPos) {
    var x = Math.floor(Math.random() * 700) + 100 ;
    var y = Math.floor(Math.random() * 400) + 100 ;
    return({x,y});
}

const initialState = {
    0:random(),
    1:random(),
    2:random(),
    3:random(),
    4:random(),
    5:random(),
    6:random(),
    7:random(),
    8:random(),
    9:random(),
    10:random(),
}

export default function bossReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}

const initialStateScore = 0;

export function scoreReducer(state = initialStateScore, action) {
    switch (action.type) {
        case CHANGE_SCORE:
            return action.payload.score;
        default:
            return state;
    }
}