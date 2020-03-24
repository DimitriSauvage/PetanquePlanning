import User from "../Models/Users/User";
import Repository from "./Repository";
import * as Firebase from "firebase";
import { Toast } from "native-base";

/**
 * Address repository
 */
class AuthRepository extends Repository {
  //#region Fields
  private userCollectionName = "users";
  //#endregion

  //#region Methods
  /**
   * Create a new user
   * @param user User to add
   */
  public createUserAsync = async (user: User): Promise<User> => {
    try {
      //Create the user in firebase auth
      await Firebase.auth().createUserWithEmailAndPassword(
        user.email,
        user.password
      );

      //Create user in the database
      const addResult = await Firebase.firestore()
        .collection(this.userCollectionName)
        .doc(user.id)
        .set(user);

      return user;
    } catch (error) {
      Toast.show({ text: error.message });
    }
  };

  public signInAsync = async (
    email: string,
    password: string
  ): Promise<User> => {
    //Sign in in firebase
    await Firebase.auth().signInWithEmailAndPassword(
      email,
      password
    );

    //Get the user in database
    const response = await Firebase.firestore()
      .collection(this.userCollectionName)
      .where("email", "==", email)
      .get();
    
    return response.docs[0].data() as User;
  };
  //#endregion
}

export default new AuthRepository();
