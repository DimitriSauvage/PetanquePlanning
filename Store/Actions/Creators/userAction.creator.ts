import User from "../../../Models/Users/User";
import { EDIT_USER, REMOVE_USER } from "../../storeConstants";
import { EditUserAction, RemoveUserAction } from "../Types/user.actionType";

/**
 * Create an EditUserAction
 * @param user User to edit
 */
export const editUserAction = (user: User): EditUserAction => {
  return {
    user: user,
    type: EDIT_USER
  };
};

/**
 * Create an RemoveUserAction
 * @param user User to edit
 */
export const removeUserAction = (id: string): RemoveUserAction => {
  return {
    userId: id,
    type: REMOVE_USER
  };
};
