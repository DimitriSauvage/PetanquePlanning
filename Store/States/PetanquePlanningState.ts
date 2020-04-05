import Competition from "../../Models/Competition";
import ClubState from "./ClubState";
import CompetitionState from "./CompetitionState";
import UserState from "./UserState";
import { $CombinedState } from "redux";

/**
 * App state model
 */
export default interface PetanquePlanningState {
  /**Competitions */
  competitions: CompetitionState;
  /**Clubs */
  clubs: ClubState;
  /**Users */
  users: UserState;
}
