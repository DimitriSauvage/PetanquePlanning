import { useEffect, useState } from "react";
import WithError from "../../Models/Types/WithError";
import WithOngoing from "../../Models/Types/WithOngoing";
import useLocalStorage from "../Storage/useLocalStorage";
import { ApplicationUserDTO } from "../../Models/generated";
import { AuthUserKey, AuthInformations } from "../../Models/Auth/AuthInformations";

export interface IConnectedUserResult extends WithOngoing, WithError {
  connectedUser: ApplicationUserDTO;
}

/**
 * Manage the sign in operation
 */
export default (): IConnectedUserResult => {
  //#region Fields
  /**Ongoing or not */
  const [ongoing, setOngoing] = useState<boolean>(false);
  /**Error */
  const [error, setError] = useState<Error>(null);
  /**Connected user */
  const [connectedUser, setConnectedUser] = useState<ApplicationUserDTO>(null);
  /**Local storage */
  const LocalStorage = useLocalStorage(AuthUserKey);
  //#endregion

  //Launch the sigin in action when email or password changes
  useEffect(() => {
    const checkConnection = async () => {
      setOngoing(true);

      //Get the connected user in local storage
      try {
        const infos = await LocalStorage.getItemAsync<AuthInformations>();
        if (infos !== null) {
          setConnectedUser(infos.user);
        }
      } catch (error) {
        setError(error);
      } finally {
        setOngoing(false);
      }
    };

    checkConnection();
  }, []);

  return {
    error,
    ongoing,
    connectedUser,
  };
};
