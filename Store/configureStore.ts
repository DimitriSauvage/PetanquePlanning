import { createStore } from "redux";
import reducers from "./Reducers/combineReducers";
import initialState from "./initialState";

export default createStore(reducers);
