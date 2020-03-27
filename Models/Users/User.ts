import Club from "../Club";
import Entity from "../Entity";
import Profile from "./Profile";

export default class User extends Entity {
  //#region Fields
  /**
   * Name
   */
  public name: string;
  /**
   * First name
   */
  public firstName: string;
  /**
   * Birth date
   */
  public birthDate: Date;
  /**
   * Subscription date
   */
  public subscriptionDate: Date;
  /**
   * Avatar
   */
  public avatar: string;
  /**
   * Email
   */
  public email: string;
  /**
   * Password
   */
  public password: string;
  /**
   * Profile
   */
  public profile: Profile;
  /**
   * Club of the user
   */
  public club: Club;
  /**
   * Club identifier
   */
  public clubId: string;

  //#endregion
}
