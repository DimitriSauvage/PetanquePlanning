import Competition from "../../../Models/Competition";
import BaseAction from "./baseAction";

export interface EditCompetitionAction extends BaseAction<Competition> {}

export interface RemoveCompetitionAction extends BaseAction<string> {}
