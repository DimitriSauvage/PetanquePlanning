import Competition from "../../../Models/Competition";
import { CompetitionAction } from "../../Actions/Types/competition.actionType";
import { EDIT_COMPETITION, REMOVE_COMPETITION } from "../../storeConstants";

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
    competition.description = Math.random()
      .toString(36)
      .substring(7);
    competition.hour = new Date(2020, 3, 15, 14, 0);
    competition.name = Math.random()
      .toString(36)
      .substring(7);
    competition.address.city = Math.random()
      .toString(36)
      .substring(7);
    competition.address.number = "15";
    competition.address.street = "Résidence du Puy Garnier";
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

/**
 * Competition reducer
 * @param state Current state
 * @param action Action to realize
 */
export default (state = initialState, action: CompetitionAction) => {
  let nextState: Competition[] = state;

  if (action.competition && action.type === EDIT_COMPETITION) {
    switch (action.type) {
      case EDIT_COMPETITION:
        //Search competition;
        const index = state.findIndex(x => x.id === action.competition.id);
        if (index === -1) {
          nextState = state.concat(action.competition);
        } else {
          //Action already exists, replace the old one with the new one
          const newCompetitions = [...state];
          newCompetitions.splice(index, 1, action.competition);
          nextState = newCompetitions;
        }
        break;

      case REMOVE_COMPETITION:
        nextState = state.filter(x => x.id !== action.competition.id);
        break;
    }
  }

  return nextState;
};
