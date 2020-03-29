import Address from "./Address";
import Club from "./Club";
import Entity from "./Entity";
import CompetitionGender from "./Enums/CompetitionGender";
import CompetitionSport from "./Enums/CompetitionSport";
import CompetitionType from "./Enums/CompetitionType";
import CompetitionLevel from "./Enums/CompetitionLevel";

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
   * Competition level
   */
  public competitionLevel: CompetitionLevel = CompetitionLevel.Free;
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
