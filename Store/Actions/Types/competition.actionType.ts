import { Guid } from "guid-typescript";
import { Action } from "redux";
import Competition from "../../../Models/Competition";

export default interface CompetitionAction extends Action {
  payLoad: Guid | Competition;
}
