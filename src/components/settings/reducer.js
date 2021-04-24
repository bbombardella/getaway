import { createReducer } from '@reduxjs/toolkit';
import { CHANGE_SETTING } from '../../config/const/settings';

const initialState = {
    up : 'ArrowUp',
    down : 'ArrowDown',
    left : 'ArrowLeft',
    right : 'ArrowRight',
    music : 'm',
    interaction : 'a',
    help : 'h',
    inventory: 'i',

}

export const settingsReducer = createReducer(initialState, builder => {
    builder.addCase(CHANGE_SETTING, (state, action) => {
            state.up = action.payload.up
            state.down = action.payload.down
            state.left = action.payload.left
            state.right = action.payload.right
            state.music = action.payload.music
            state.interaction = action.payload.interaction
            state.help = action.payload.help
            state.inventory = action.payload.inventory
            /*const setting = action.playload.setting;
            const newKey = action.payload.orientation;
            switch (setting){
                case 'up':
                    state.up = newKey;
                    break;
                case 'down':
                    state.down = newKey;
                    break;
                case 'left':
                    state.left = newKey;
                    break;
                case 'right' :
                    state.right = newKey;
                    break;
                case 'music' :
                    state.music = newKey;
                    break;
                case 'interaction':
                    state.interaction = newKey;
                    break;
                case 'help':
                    state.help = newKey;
                    break;
                case 'inventory':
                    state.inventory = newKey;
                    break;
                default:
                    break;
            }*/
    })
})

            