import { CHANGE_SCORE,NB_CIRCLE,SUCCESS,PLAYING} from '../../config/const/settings';


function random(setPos) {
    var x = Math.floor(Math.random() * 700) + 100 ;
    var y = Math.floor(Math.random() * 400) + 100 ;
    return({x,y});
}

let coordonne =[ {
    coord:random(),
    success:false
  }];

for ( let i = 0; i <= NB_CIRCLE+1 ; i++){
    coordonne.push({
        coord:random(),
        success:false
      })
}

const initialState = coordonne;

export default function bossReducer(state = initialState, action) {
    switch (action.type) {
        case SUCCESS:
            const num = action.payload.num;
            state[num].success= true;
            return state;
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

const initPlaying = true;

export function playingReducer(state = initPlaying, action) {
    switch (action.type) {
        case PLAYING:
            return action.payload.playing;
        default:
            return state;
    }
}