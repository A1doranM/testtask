import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {toolBarReducer} from "./toolBarReducer";
import {PersonalCabinetReducer} from "./personalCabinetReducer";
import {AllTrackersTableReducer} from "./allTrackersTableReduced";
import {OperatorCabinetReducer} from "./operatorCabinetReducer";
import {TableAllTrackersReducer} from "./tableAllTrackersReducer";

let reducers = combineReducers({
    toolBar: toolBarReducer,
    personalCabinet: PersonalCabinetReducer,
    allTrackersTable: AllTrackersTableReducer,
    operatorCabinet: OperatorCabinetReducer,
    tableAllTrackers: TableAllTrackersReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;