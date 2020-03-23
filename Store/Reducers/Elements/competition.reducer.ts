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
  const competition1 = new Competition();
  competition1.date = new Date(2020, 3, 23, 14, 0);
  competition1.description = "Quartier de Dimitri";
  competition1.hour = new Date(2020, 3, 23, 14, 0, 0);
  competition1.name = "Quartier";
  competition1.address.city = "Angers";
  competition1.address.number = "15";
  competition1.address.street = "Résidence du Puy Garnier";
  competition1.address.zipCode = "49100";
  competition1.address.coordinate = {
    latitude: 47.4701573,
    longitude: -0.5312701
  };
  const competition2 = new Competition();
  competition2.date = new Date(2020, 3, 25, 14, 0);
  competition2.description = "Luciano";
  competition2.hour = new Date(2020, 3, 25, 14, 0, 0);
  competition2.name = "Luciano";
  competition2.address.city = "La Possonnière";
  competition2.address.id = Guid.create();
  competition2.address.number = "15";
  competition2.address.street = "Avenue du stade";
  competition2.address.zipCode = "49170";
  competition2.address.coordinate = {
    latitude: 47.37529373168945,
    longitude: -0.694717288017273
  };
  initialState.push(competition1);
  initialState.push(competition2);
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
