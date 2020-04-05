import Competition from "../Models/Competition";
import Club from "../Models/Club";

/**
 * App state model
 */
export interface PetanquePlanningState {
  /**Competitions */
  competitions: Competition[];
  /**Clubs */
  clubs: Club[];
}

/**
 * Initial state
 */
export const getInitialState = (): PetanquePlanningState => {
  return {
    clubs: [],
    competitions: [],
  };
};
