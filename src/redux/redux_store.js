import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {toolBarReducer} from "./toolBarReducer";

let reducers = combineReducers({
    toolBar: toolBarReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;