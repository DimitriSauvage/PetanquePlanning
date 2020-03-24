import { Guid } from "guid-typescript";
import Competition from "../../../Models/Competition";
import CompetitionAction from "../../Actions/Types/competition.actionType";
import { DELETE_COMPETITION, SAVE_COMPETITION } from "../../storeConstants";
import deleteCompetitionReducer from "./competition/deleteCompetition.reducer";
import saveCompetitionReducer from "./competition/saveCompetition.reducer";
import Address from "../../../Models/Address";

const initialState: Competition[] = [];

//#region DEV state init
if (__DEV__) {
  const randomCompetition = () => {
    const competition = new Competition();
    competition.date = new Date();
    competition.description = Math.random()
      .toString(36)
      .substring(7);
    competition.hour = new Date();
    competition.name = Math.random()
      .toString(36)
      .substring(7);
    competition.address.city = Math.random()
      .toString(36)
      .substring(7);
    competition.address.id = Guid.create();
    competition.address.number = "15";
    competition.address.street = "Résidence du puy garnier";
    competition.address.zipCode = "49100";
    competition.address.city = "Angers";
    competition.address.coordinate = {
      latitude: 47.4701573,
      longitude: -0.5312701
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
