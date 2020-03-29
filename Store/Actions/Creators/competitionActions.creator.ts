import Competition from "../../../Models/Competition";
import { EDIT_COMPETITION, REMOVE_COMPETITION } from "../../storeConstants";
import { EditCompetitionAction, RemoveCompetitionAction } from "../Types/competition.actionType";

export const editCompetitionAction = (
  competition: Competition
): EditCompetitionAction => {
  return {
    competition: competition,
    type: EDIT_COMPETITION
  };
};

export const removeCompetitionAction = (
  id: string
): RemoveCompetitionAction => {
  return {
    competitionId: id,
    type: REMOVE_COMPETITION
  };
};
