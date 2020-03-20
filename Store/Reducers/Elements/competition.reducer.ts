import PetanquePlanningState from "../../../Models/PetanquePlanningState";
import { SAVE_COMPETITION, DELETE_COMPETITION } from "../../storeConstants";
import CompetitionAction from "../../Actions/Types/competition.actionType";
import { Guid } from "guid-typescript";
import Competition from "../../../Models/Competition";
import saveCompetitionReducer from "./competition/saveCompetition.reducer";
import deleteCompetitionReducer from "./competition/deleteCompetition.reducer";

const initialState: Competition[] = [];

export default (state = initialState, action: CompetitionAction) => {
  let nextState: Competition[] = state;

  if (action?.payLoad) {
    switch (action.type) {
      case SAVE_COMPETITION:
        const competition = action.payLoad as Competition;
        nextState = saveCompetitionReducer(state, competition);
        break;
      case DELETE_COMPETITION:
        const id = action.payLoad as Guid;
        nextState = deleteCompetitionReducer(state, id);
    }
  }
  return nextState;
};
