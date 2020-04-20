import { useState, useEffect } from "react";
import firebase from "firebase";
import UserConverter from "../Firestore/Converters/UserConverter";
import { UserCollection } from "../Firestore/CollectionsConstants";
import { IHttpRequestResult } from "../Shared/Types/HttpTypes";
import { ApplicationUserDTO } from "../../Models/generated";

/**
 * Try to add a user
 * @param user User to add
 */
export default (
  user: ApplicationUserDTO
): IHttpRequestResult<ApplicationUserDTO> => {
  const [addedUser, setAddedUser] = useState<ApplicationUserDTO>(null);
  const [error, setError] = useState(null);
  const [ongoing, setOngoing] = useState(false);

  // const addUser = async () => {
  //   try {
  //     setOngoing(true);

  //     //Create the user in firebase auth
  //     await firebase
  //       .auth()
  //       .createUserWithEmailAndPassword(user.Email, user.PasswordHash);

  //     //Create user in the database
  //     await firebase
  //       .firestore()
  //       .collection(UserCollection)
  //       .doc(user.Id)
  //       .withConverter(UserConverter)
  //       .set(user);

  //     setAddedUser(user);
  //   } catch (error) {
  //     setError(error);
  //   }

  //   //Stop ongoing
  //   setOngoing(false);
  // };

  // useEffect(() => {
  //   addUser();
  // });

  return {
    error,
    ongoing,
    result: addedUser,
  };
};
