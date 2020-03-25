import firebase from "firebase";
import Club from "../../../Models/Club";

const ClubConverter: firebase.firestore.FirestoreDataConverter<Club> = {
  toFirestore: (club: Club): firebase.firestore.DocumentData => {
    return {
      address: club.address,
      id: club.id,
      name: club.name,
      shortName: club.shortName
    };
  },
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): Club => {
    const data = snapshot.data(options);
    const club = new Club();
    club.address = data.address;
    club.id = data.id;
    club.name = data.name;
    club.shortName = data.shortName;
    return club;
  }
};

export default ClubConverter;
