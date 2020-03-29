import User from "../../../Models/Users/User";
import { EDIT_USER, REMOVE_USER } from "../../storeConstants";
import { EditUserAction, RemoveUserAction } from "../Types/user.actionType";

export const editUserAction = (user: User): EditUserAction => {
  return {
    user: user,
    type: EDIT_USER
  };
};

export const removeUserAction = (id: string): RemoveUserAction => {
  return {
    userId: id,
    type: REMOVE_USER
  };
};
