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
  private _address: Address = new Address();
  /**
   * Name of the competition
   */
  private _name: string;
  /**
   * Date of the competition
   */
  private _date: Date;
  /**
   * Hour of the competition
   */
  private _hour: Date;
  /**
   * Competition description
   */
  private _description: string;
  /**
   * Authorized gender
   */
  private _competitionGender: CompetitionGender = CompetitionGender.Unspecified;
  /**
   * Sport (Petanque or provencal game)
   */
  private _competitionSport: CompetitionSport = CompetitionSport.Petanque;
  /**
   * Competition type
   */
  private _competitionType: CompetitionType = CompetitionType.Doublet;
  /**
   * Organizer
   */
  private _organizer: Club;

  //#endregion

  //#region Getters and setters
  public get organizer(): Club {
    return this._organizer;
  }
  public set organizer(v: Club) {
    this._organizer = v;
  }
  public get address(): Address {
    return this._address;
  }
  public set address(v: Address) {
    this._address = v;
  }
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }
  public get date(): Date {
    return this._date;
  }
  public set date(v: Date) {
    this._date = v;
  }
  public get hour(): Date {
    return this._hour;
  }
  public set hour(v: Date) {
    this._hour = v;
  }
  public get description(): string {
    return this._description;
  }
  public set description(v: string) {
    this._description = v;
  }
  public get competitionType(): CompetitionType {
    return this._competitionType;
  }
  public set competitionType(v: CompetitionType) {
    this._competitionType = v;
  }
  public get competitionSport(): CompetitionSport {
    return this._competitionSport;
  }
  public set competitionSport(v: CompetitionSport) {
    this._competitionSport = v;
  }
  public get competitionGender(): CompetitionGender {
    return this._competitionGender;
  }
  public set competitionGender(v: CompetitionGender) {
    this._competitionGender = v;
  }

  //#endregion
}
