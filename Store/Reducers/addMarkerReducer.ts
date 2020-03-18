import initialState from "../initialState";
import { ADD_MARKER_REDUCER } from "./reducers";
import PetanquePlanningState from "../../Models/PetanquePlanningState";

export default (state: PetanquePlanningState = initialState, action) => {
  let nextState: PetanquePlanningState;

  switch (action.type) {
    case ADD_MARKER_REDUCER:
      nextState = {
        ...state,
        competitions: state.competitions.concat(action.value)
      };
      return nextState;
    default:
      return state;
  }
};
