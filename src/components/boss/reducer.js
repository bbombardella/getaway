
function random(setPos) {
    var x = Math.floor(Math.random() * 750) + 100 ;
    var y = Math.floor(Math.random() * 450) + 100 ;
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

