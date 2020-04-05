import { useAsyncStorage } from "@react-native-community/async-storage";
import firebase from "firebase";
import { useEffect, useState } from "react";
import {
  AuthUserKey,
  AuthInformations,
} from "../../Models/Auth/AuthInformations";
import User from "../../Models/Users/User";
import { UserCollection } from "../Firestore/CollectionsConstants";
import { IHttpRequestResult } from "../Shared/Types/HttpTypes";

export interface ISignInResult extends IHttpRequestResult<User> {
  /**Invalid credentials */
  invalidCredentials: boolean;
  /**Update the email */
  setEmail: (email: string) => void;
  /**Update the password */
  setPassword: (password: string) => void;
}

/**
 * Manage the sign in operation
 */
export default (): ISignInResult => {
  //#region Fields
  /**Email to check */
  const [email, setEmail] = useState<string>();
  /**Password to check */
  const [password, setPassword] = useState<string>();
  /**User found */
  const [user, setUser] = useState<User>(null);
  /**If there is an error */
  const [error, setError] = useState(null);
  /**If checking is ongoing  */
  const [ongoing, setOngoing] = useState(false);
  /**If the credentials are bads */
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  /**Use the storage to store the connected user */
  const AsyncStorage = useAsyncStorage(AuthUserKey);
  //#endregion

  //Launch the sigin in action when email or password changes
  useEffect(() => {
    const signIn = async () => {
      try {
        setOngoing(true);

        //Try to sign in in firebase
        await firebase.auth().signInWithEmailAndPassword(email, password);

        //Get the user in database with the email
        const response = await firebase
          .firestore()
          .collection(UserCollection)
          .where("email", "==", email)
          .get();

        //No user found
        if (response.size == 0) {
          setInvalidCredentials(true);
        } else {
          //User found
          const user = response.docs[0].data() as User;
          if (user.password !== password) {
            //Invalid password
            setInvalidCredentials(true);
            setUser(null);
          } else {
            const signInInformation: AuthInformations = {
              datetime: new Date(),
              user: user,
            };
            await AsyncStorage.setItem(JSON.stringify(signInInformation));
            setInvalidCredentials(false);
            setUser(user);
          }
          //No error here
          setError(null);
        }

        setUser(user);
      } catch (error) {
        setError(error);
      } finally {
        //Stop ongoing
        setOngoing(false);
      }
    };

    signIn();
  }, [email, password]);

  return {
    result: user,
    setEmail,
    setPassword,
    error,
    ongoing,
    invalidCredentials,
  };
};
