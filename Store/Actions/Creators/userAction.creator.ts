import User from "../../../Models/Users/User";
import { EDIT_USER, REMOVE_USER } from "../../storeConstants";
import { EditUserAction, RemoveUserAction } from "../Types/user.actions";

/**
 * Create an EditUserAction
 * @param user User to edit
 */
export const editUserAction = (user: User): EditUserAction => {
  return {
    payload: user,
    type: EDIT_USER
  };
};

/**
 * Create an RemoveUserAction
 * @param user User to edit
 */
export const removeUserAction = (id: string): RemoveUserAction => {
  return {
    payload: id,
    type: REMOVE_USER
  };
};
