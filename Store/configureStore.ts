import { createStore } from "redux";
import reducers from "./Reducers/combineReducers";

export default createStore(reducers);
