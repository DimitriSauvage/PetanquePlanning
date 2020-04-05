import { Action } from "redux";
import User from "../../../Models/Users/User";
import BaseAction from "./baseAction";

export interface EditUserAction extends BaseAction<User> {}

export interface RemoveUserAction extends BaseAction<string> {}
