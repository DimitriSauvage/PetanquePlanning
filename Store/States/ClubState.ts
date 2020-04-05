import Club from "../../Models/Club";

export const getInitialClubState = (): ClubState => {
  return [];
};

type ClubState = Club[];
export default ClubState;
