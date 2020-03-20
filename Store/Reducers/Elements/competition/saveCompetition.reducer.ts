import PetanquePlanningState from "../../../../Models/PetanquePlanningState";
import Competition from "../../../../Models/Competition";

export default (
  state: Competition[],
  competition: Competition
): Competition[] => {
  let nextState = state;

  //Search competition;
  const index = state.findIndex(x => x.id.equals(competition.id));
  if (index === -1) {
    nextState = state.concat(competition);
  } else {
    //Action already exists, replace the old one with the new one
    const newCompetitions = [...state];
    newCompetitions.splice(index, 1, competition);
    nextState = newCompetitions;
  }

  return nextState;
};
