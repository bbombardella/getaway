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

            const setting = action.payload.setting;
            const newKey = action.payload.newkey;
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
            }
    })
})

            