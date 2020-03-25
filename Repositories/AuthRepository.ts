import * as firebase from "firebase";
import { Toast } from "native-base";
import User from "../Models/Users/User";
import Repository from "./Repository";
import UserConverter from "./Firestore/Converters/UserConverter";
import { UserCollection } from "./Firestore/CollectionsConstants";

/**
 * Address repository
 */
class AuthRepository extends Repository {
  //#region Fields
  //#endregion

  //#region Methods
  /**
   * Create a new user
   * @param user User to add
   */
  public createUserAsync = async (user: User): Promise<User> => {
    try {
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

      return user;
    } catch (error) {
      Toast.show({ text: error.message, position: "top" });
    }
  };

  /**
   * Try to sign a user
   * @param email User email
   * @param password User password
   */
  public signInAsync = async (
    email: string,
    password: string
  ): Promise<User> => {
    let result: User = null;
    //Sign in in firebase
    await firebase.auth().signInWithEmailAndPassword(email, password);

    //Get the user in database
    const response = await firebase
      .firestore()
      .collection(UserCollection)
      .where("email", "==", email)
      .get();

    let invalidCrendentials = false;
    if (response.size == 0) {
      invalidCrendentials = true;
    } else {
      const user = response.docs[0].data() as User;
      if (user.password !== password) {
        invalidCrendentials = true;
      } else {
        result = user;
      }
    }

    if (invalidCrendentials)
      Toast.show({ text: "User not found or invalid password" });

    return result;
  };
  //#endregion
}

export default new AuthRepository();
