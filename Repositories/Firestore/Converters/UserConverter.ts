import User from "../../../Models/Users/User";
import firebase from "firebase";

const UserConverter: firebase.firestore.FirestoreDataConverter<User> = {
  toFirestore: (user: User): firebase.firestore.DocumentData => {
    return {
      avatar: user.avatar,
      birthDate: user.birthDate,
      club: user.club,
      clubId: user.clubId,
      email: user.email,
      firstName: user.firstName,
      id: user.id,
      name: user.name,
      password: user.password,
      profile: user.profile,
      subscriptionDate: user.subscriptionDate
    };
  },
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): User => {
    const data = snapshot.data(options);
    const user = new User();
    user.avatar = data.avatar;
    user.birthDate = data.birthDate;
    user.club = data.club;
    user.clubId = data.clubId;
    user.email = data.email;
    user.firstName = data.firstName;
    user.id = data.id;
    user.name = data.name;
    user.password = data.password;
    user.profile = data.profile;
    user.subscriptionDate = data.subscriptionDate;
    return user;
  }
};

export default UserConverter;
