import User from "../Users/User";

/**Key used to save the connected user informations */
export const AuthUserKey = "ConnectedUserInformations";

export interface AuthInformations {
  /**
   * Connected user
   */
  user: User;
  /**
   * Date and time of the connection
   */
  datetime: Date;
}
