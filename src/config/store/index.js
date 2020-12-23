import { combineReducers, createStore } from 'redux';
import inventoryReducer from '../../components/inventory/reducer';
import interactionReducer from '../../components/interaction/reducer';
import worldReducer from '../../components/map/world/reducer';

export default createStore(
    combineReducers({
        world: worldReducer,
        inventory: inventoryReducer,
        interaction: interactionReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);