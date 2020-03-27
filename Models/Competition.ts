import { Guid } from "guid-typescript";
import Address from "./Address";
import CompetitionGender from "./Enums/CompetitionGender";
import CompetitionSport from "./Enums/CompetitionSport";
import CompetitionType from "./Enums/CompetitionType";
import Club from "./Club";
import Entity from "./Entity";

export default class Competition extends Entity {
  //#region Fields
  /**
   * Address of the competition
   */
  public address: Address = new Address();
  /**
   * Name of the competition
   */
  public name: string;
  /**
   * Date of the competition
   */
  public date: Date;
  /**
   * Hour of the competition
   */
  public hour: Date;
  /**
   * Competition description
   */
  public description: string;
  /**
   * Authorized gender
   */
  public competitionGender: CompetitionGender = CompetitionGender.Unspecified;
  /**
   * Sport (Petanque or provencal game)
   */
  public competitionSport: CompetitionSport = CompetitionSport.Petanque;
  /**
   * Competition type
   */
  public competitionType: CompetitionType = CompetitionType.Doublet;
  /**
   * Organizer
   */
  public organizer: Club;
  /**
   * Competition organizer identifier
   */
  public organizerId: string;

  //#endregion
}
