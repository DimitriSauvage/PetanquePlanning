import Competition from "../../../Models/Competition";
import { SAVE_COMPETITION } from "../../storeConstants";
import CompetitionAction from "../Types/competition.actionType";

export default (competition: Competition): CompetitionAction => {
  return {
    payLoad: competition,
    type: SAVE_COMPETITION
  };
};
