import { combineReducers } from "redux";
import { PetanquePlanningState } from "../PetanquePlanningState";
import competitionReducer from "./Elements/competition.reducer";

/**
 * App reducers
 */
export default combineReducers({
  competitions: competitionReducer,
  clubs: null,
});
