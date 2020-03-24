import Club from "../Club";
import Entity from "../Entity";

export default class User extends Entity {
  //#region Fields
  /**
   * Name
   */
  private _name: string;
  /**
   * First name
   */
  private _firstName: string;
  /**
   * Birth date
   */
  private _birthDate: Date;
  /**
   * Subscription date
   */
  private _subscriptionDate: Date;
  /**
   * Avatar
   */
  private _avatar: string;
  /**
   * Email
   */
  private _email: string;
  /**
   * Password
   */
  private _password: string;
  /**
   * Profile
   */
  private _profile: Profile;
  /**
   * Club of the user
   */
  private _club: Club;

  //#endregion

  //#region Getters and setters

  public get email(): string {
    return this._email;
  }
  public set email(v: string) {
    this._email = v;
  }
  public get club(): Club {
    return this._club;
  }
  public set club(v: Club) {
    this._club = v;
  }
  public get profile(): Profile {
    return this._profile;
  }
  public set profile(v: Profile) {
    this._profile = v;
  }
  public get password(): string {
    return this._password;
  }
  public set password(v: string) {
    this._password = v;
  }
  public get avatar(): string {
    return this._avatar;
  }
  public set avatar(v: string) {
    this._avatar = v;
  }
  public get subscriptionDate(): Date {
    return this._subscriptionDate;
  }
  public set subscriptionDate(v: Date) {
    this._subscriptionDate = v;
  }
  public get birthDate(): Date {
    return this._birthDate;
  }
  public set birthDate(v: Date) {
    this._birthDate = v;
  }
  public get firstName(): string {
    return this._firstName;
  }
  public set firstName(v: string) {
    this._firstName = v;
  }
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }
  //#endregion
}
