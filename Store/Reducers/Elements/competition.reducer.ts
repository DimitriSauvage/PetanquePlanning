import {
  EditCompetitionAction,
  RemoveCompetitionAction,
} from "../../Actions/Types/competition.actions";
import CompetitionState, {
  getInitialCompetitionState,
} from "../../States/CompetitionState";
import { EDIT_COMPETITION, REMOVE_COMPETITION } from "../../storeConstants";
import { createReducer } from "../createReducer";
import Competition from "../../../Models/Competition";

//#region Reducers
/**
 * Add a competition
 * @param state Current state
 * @param action Action to realize
 */
export const editCompetitionReducer = (
  state: CompetitionState,
  action: EditCompetitionAction
): CompetitionState => {
  //Get nextState
  let nextState = state;
  //Search competition;
  const index = nextState.findIndex((x) => x.id === action.payload.id);
  if (index === -1) {
    nextState = nextState.concat(action.payload);
  } else {
    //Action already exists, replace the old one with the new one
    nextState.splice(index, 1, action.payload);
  }

  return nextState;
};

/**
 * Remove a competition
 * @param state current state
 * @param action Action to realize
 */
export const removeCompetitionReducer = (
  state: CompetitionState,
  action: RemoveCompetitionAction
): CompetitionState => {
  const nextState = state.filter((x) => x.id !== action.payload);

  return nextState;
};
//#endregion

/**
 * Competition reducer
 */
const competitionReducer = createReducer<CompetitionState>(
  getInitialCompetitionState(),
  {
    [EDIT_COMPETITION]: editCompetitionReducer,
    [REMOVE_COMPETITION]: removeCompetitionReducer,
  }
);

export default competitionReducer;
