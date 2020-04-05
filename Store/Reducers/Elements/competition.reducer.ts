import Competition from "../../../Models/Competition";
import { EditCompetitionAction } from "../../Actions/Types/competition.actionType";
import {
  getInitialState,
  PetanquePlanningState,
} from "../../PetanquePlanningState";
import { EDIT_COMPETITION, REMOVE_COMPETITION } from "../../storeConstants";
import { createReducer } from "../createReducer";

/**Initial state */
const initialState: Competition[] = [];

//#region DEV state init
if (__DEV__) {
  const randomCompetition = () => {
    const competition = new Competition();
    competition.date = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      Math.floor(Math.random() * 30 + 1)
    );
    competition.description = Math.random().toString(36).substring(7);
    competition.hour = new Date(2020, 3, 15, 14, 0);
    competition.name = Math.random().toString(36).substring(7);
    competition.address.city = Math.random().toString(36).substring(7);
    competition.address.number = "15";
    competition.address.street = "Résidence du Puy Garnier";
    competition.address.zipCode = "49100";
    competition.address.city = "Angers";
    competition.address.coordinate = {
      latitude: 47.4701573,
      longitude: -0.5312701,
    };
    return competition;
  };
  initialState.push(randomCompetition());
  initialState.push(randomCompetition());
  initialState.push(randomCompetition());
  initialState.push(randomCompetition());
  initialState.push(randomCompetition());
}
//#endregion

//#region Reducers
/**
 * Add a competition
 * @param state Current state
 * @param action Action to realize
 */
export const editCompetitionReducer = (
  state: PetanquePlanningState,
  action: EditCompetitionAction
): PetanquePlanningState => {
  //Get nextState
  const nextState = { ...state };
  //Search competition;
  const index = nextState.competitions.findIndex(
    (x) => x.id === action.payload.id
  );
  if (index === -1) {
    nextState.competitions = nextState.competitions.concat(action.payload);
  } else {
    //Action already exists, replace the old one with the new one
    nextState.competitions.splice(index, 1, action.payload);
  }

  return nextState;
};

/**
 * Remove a competition
 * @param state current state
 * @param action Action to realize
 */
export const removeCompetitionReducer = (
  state: PetanquePlanningState,
  action: EditCompetitionAction
): PetanquePlanningState => {
  const nextState = { ...state };
  nextState.competitions = nextState.competitions.filter(
    (x) => x.id !== action.payload.id
  );

  return nextState;
};
//#endregion

/**
 * Competition reducer
 */
const competitionReducer = createReducer({
  [EDIT_COMPETITION]: editCompetitionReducer,
  [REMOVE_COMPETITION]: removeCompetitionReducer,
});

export default competitionReducer;
