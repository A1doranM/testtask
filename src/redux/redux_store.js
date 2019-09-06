import {applyMiddleware, combineReducers, createStore} from "redux";
import {menuReducer} from './menuReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
   menuPage: menuReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;