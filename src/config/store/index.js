import { combineReducers, createStore } from 'redux';
import inventoryReducer from '../../components/inventory/reducer';

export default createStore(
    combineReducers({
        inventory: inventoryReducer,
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);