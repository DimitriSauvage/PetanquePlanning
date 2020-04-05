import Competition from "../../../Models/Competition";
import { EDIT_COMPETITION, REMOVE_COMPETITION } from "../../storeConstants";
import {
  EditCompetitionAction,
  RemoveCompetitionAction
} from "../Types/competition.actions";

/**
 * Create an EditCompetitionAction
 * @param competition Competition to edit
 */
export const editCompetitionAction = (
  competition: Competition
): EditCompetitionAction => {
  return {
    payload: competition,
    type: EDIT_COMPETITION
  };
};

/**
 * Create a RemoveCompetitionAction
 * @param id Identifier of the competition to delete
 */
export const removeCompetitionAction = (
  id: string
): RemoveCompetitionAction => {
  return {
    payload: id,
    type: REMOVE_COMPETITION
  };
};
