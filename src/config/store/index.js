import { combineReducers, createStore } from 'redux';
import inventoryReducer from '../../components/inventory/reducer';
import interactionReducer from '../../components/interaction/reducer';
import worldReducer, { worldLoadingReducer } from '../../components/map/world/reducer';
import { miroirsReducer } from '../../components/miroir/reducer';
import { pnj_coliseReducer } from '../../components/pnj_colise/reducer';
import { settingsReducer, luminosityReducer} from '../../components/settings/reducer';
import bossReducer, { clickableReducer, playingReducer, scoreReducer } from '../../components/boss/reducer';

export default createStore(
    combineReducers({
        world: worldReducer,
        worldLoading: worldLoadingReducer,
        inventory: inventoryReducer,
        interaction: interactionReducer,
        miroirs: miroirsReducer,
        pnj_colise: pnj_coliseReducer,
        settings: settingsReducer,
        luminosity: luminosityReducer,
        boss: bossReducer,
        score: scoreReducer,
        playing: playingReducer,
        clickable: clickableReducer,
        
    }),
    // À enlever lors du build final, les users peuvent changer les states
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);