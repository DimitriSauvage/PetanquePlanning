import User from "../../Models/Users/User";
import { useState, useEffect } from "react";
import firebase from "firebase";
import UserConverter from "../Firestore/Converters/UserConverter";
import { UserCollection } from "../Firestore/CollectionsConstants";
import { IHttpRequestResult } from "../Shared/Types/HttpTypes";

/**
 * Try to add a user
 * @param user User to add
 */
export default (user: User): IHttpRequestResult<User> => {
  const [addedUser, setAddedUser] = useState<User>(null);
  const [error, setError] = useState(null);
  const [ongoing, setOngoing] = useState(false);

  const addUser = async () => {
    try {
      setOngoing(true);

      //Create the user in firebase auth
      await firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password);

      //Create user in the database
      await firebase
        .firestore()
        .collection(UserCollection)
        .doc(user.id)
        .withConverter(UserConverter)
        .set(user);

      setAddedUser(user);
    } catch (error) {
      setError(error);
    }

    //Stop ongoing
    setOngoing(false);
  };

  useEffect(() => {
    addUser();
  });

  return {
    error,
    ongoing,
    result: addedUser
  };
};
