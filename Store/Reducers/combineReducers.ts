import { combineReducers } from "redux";
import competitionReducer from "./Elements/competition.reducer";

export default combineReducers({
  competitions: competitionReducer
});
