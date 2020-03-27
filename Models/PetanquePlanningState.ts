import Competition from "./Competition";
import Club from "./Club";

export default interface PetanquePlanningState {
  /**Competitions */
  competitions: Competition[];
  /**Clubs */
  clubs: Club[];
}
