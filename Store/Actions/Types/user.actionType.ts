import { Action } from "redux";
import User from "../../../Models/Users/User";

export interface EditUserAction extends Action {
  user: User;
}

export interface RemoveUserAction extends Action {
  userId: string;
}
