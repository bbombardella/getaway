import { combineReducers, createStore } from 'redux';
import inventoryReducer from '../../components/inventory/reducer';
import interactionReducer from '../../components/interaction/reducer';
import worldReducer, { worldLoadingReducer } from '../../components/map/world/reducer';

export default createStore(
    combineReducers({
        world: worldReducer,
        worldLoading: worldLoadingReducer,
        inventory: inventoryReducer,
        interaction: interactionReducer
    }),
    // À enlever lors du build final, les users peuvent changer les states
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);