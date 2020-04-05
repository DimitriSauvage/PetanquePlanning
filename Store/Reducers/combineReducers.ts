import { combineReducers } from "redux";
import competitionReducer from "./Elements/competition.reducer";

/**
 * App reducerss
 */
export default combineReducers({
  competitions: competitionReducer,
  clubs: null,
});
