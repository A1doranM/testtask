import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {toolBarReducer} from "./toolBarReducer";
import {PersonalCabinetReducer} from "./personalCabinetReducer";
import {OperatorCabinetReducer} from "./operatorCabinetReducer";
import {TableAllTrackersReducer} from "./tableAllTrackersReducer";

let reducers = combineReducers({
    toolBar: toolBarReducer,
    personalCabinet: PersonalCabinetReducer,
    operatorCabinet: OperatorCabinetReducer,
    tableAllTrackers: TableAllTrackersReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;