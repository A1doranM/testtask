import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {toolBarReducer} from "./toolBarReducer";
import {PersonalCabinetReducer} from "./PersonalCabinetReducer";

let reducers = combineReducers({
    toolBar: toolBarReducer,
    personalCabinet: PersonalCabinetReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;