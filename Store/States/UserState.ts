import User from "../../Models/Users/User";

export const getInitialUserState = (): UserState => {
  return [];
};

type UserState = User[];

export default UserState;
