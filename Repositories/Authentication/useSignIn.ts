import firebase from "firebase";
import { useEffect, useState } from "react";
import User from "../../Models/Users/User";
import { UserCollection } from "../Firestore/CollectionsConstants";
import { IHttpRequestResult } from "../Shared/Types/HttpTypes";

export interface ISignInResult extends IHttpRequestResult<User> {
  invalidCredentials: boolean;
}

/**
 * Try to sign in a user
 * @param email User email
 * @param password User password
 */
export default (email: string, password: string): ISignInResult => {
  const [user, setUser] = useState<User>(null);
  const [error, setError] = useState(null);
  const [ongoing, setOngoing] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);

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
        } else {
          setUser(user);
        }
      }

      setUser(user);
    } catch (error) {
      setError(error);
    }

    //Stop ongoing
    setOngoing(false);
  };

  useEffect(() => {
    signIn();
  });

  return {
    error,
    ongoing,
    result: user,
    invalidCredentials
  };
};
