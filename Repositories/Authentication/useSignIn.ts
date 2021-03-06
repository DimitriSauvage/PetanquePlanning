import firebase from "firebase";
import { useEffect, useState } from "react";
import {
  AuthInformations,
  AuthUserKey,
} from "../../Models/Auth/AuthInformations";
import { UserCollection } from "../Firestore/CollectionsConstants";
import { IHttpRequestResult } from "../Shared/Types/HttpTypes";
import useLocalStorage from "../Storage/useLocalStorage";
import { ApplicationUserDTO } from "../../Models/generated";

export interface ISignInResult extends IHttpRequestResult<ApplicationUserDTO> {
  /**Invalid credentials */
  invalidCredentials: boolean;
  /**Update the email */
  setEmail: (email: string) => void;
  /**Update the password */
  setPassword: (password: string) => void;
  /**Launch the operation */
  launchSignIn: () => void;
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
  const [user, setUser] = useState<ApplicationUserDTO>(null);
  /**If there is an error */
  const [error, setError] = useState(null);
  /**If checking is ongoing  */
  const [ongoing, setOngoing] = useState(false);
  /**If the credentials are bads */
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  /**If we have to start the operation */
  const [signIn, setSignIn] = useState(false);
  /** Local storage */
  const LocalStorage = useLocalStorage(AuthUserKey);
  //#endregion

  //#region Methods
  /**
   * Launch the operation of signing
   */
  const launchSignIn = () => {
    setSignIn(true);
  };

  //Launch the sigin in action when email or password changes
  // useEffect(() => {
  //   const signIn = async () => {
  //     try {
  //       //Start to logging
  //       setSignIn(false);
  //       setOngoing(true);

  //       //Try to sign in in firebase
  //       await firebase.auth().signInWithEmailAndPassword(email, password);

  //       //Get the user in database with the email
  //       const response = await firebase
  //         .firestore()
  //         .collection(UserCollection)
  //         .where("email", "==", email)
  //         .get();

  //       //No user found
  //       if (response.size == 0) {
  //         setInvalidCredentials(true);
  //       } else {
  //         //User found
  //         const user = response.docs[0].data() as ApplicationUserDTO;
  //         if (user.password !== password) {
  //           //Invalid password
  //           setInvalidCredentials(true);
  //           setUser(null);
  //         } else {
  //           const signInInformation: AuthInformations = {
  //             datetime: new Date(),
  //             user: user,
  //           };
  //           await LocalStorage.setItemAsync(JSON.stringify(signInInformation));
  //           setInvalidCredentials(false);
  //           setUser(user);
  //         }
  //         //No error here
  //         setError(null);
  //       }

  //       setUser(user);
  //     } catch (error) {
  //       console.log("Sign In error", error);
  //       setError(error);
  //     } finally {
  //       console.log("Sign In end");
  //       //Stop ongoing
  //       setOngoing(false);
  //     }
  //   };

  //   console.log("Ask to signIn");
  //   if (
  //     !ongoing &&
  //     password &&
  //     email &&
  //     password.length > 0 &&
  //     email.length > 0
  //   ) {
  //     console.log("Start to signIn");
  //     signIn();
  //   } else {
  //     console.log("Refuse signIn");
  //   }
  // }, [signIn]);

  //#endregion

  return {
    result: user,
    setEmail,
    setPassword,
    error,
    ongoing,
    invalidCredentials,
    launchSignIn,
  };
};
