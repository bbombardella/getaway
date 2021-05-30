import { CHANGE_SCORE,NB_CIRCLE} from '../../config/const/settings';


function random(setPos) {
    var x = Math.floor(Math.random() * 700) + 100 ;
    var y = Math.floor(Math.random() * 400) + 100 ;
    return({x,y});
}

let coordonne =[ {
    coord:random(),
    succes:false
  }];

for ( let i = 0; i < NB_CIRCLE ; i++){
    coordonne.push({
        coord:random(),
        succes:false
      })
}

const initialState = coordonne;

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