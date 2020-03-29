import { Action } from "redux";
import Competition from "../../../Models/Competition";

export interface CompetitionAction extends Action {
  competition: Competition;
}