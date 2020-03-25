import firebase from "firebase";
import Competition from "../../../Models/Competition";

const CompetitionConverter: firebase.firestore.FirestoreDataConverter<Competition> = {
  toFirestore: (competition: Competition): firebase.firestore.DocumentData => {
    return {
      address: competition.address,
      competitionGender: competition.competitionGender,
      competitionSport: competition.competitionSport,
      competitionType: competition.competitionType,
      date: competition.date,
      description: competition.description,
      hour: competition.hour,
      id: competition.id,
      name: competition.name,
      organizer: competition.organizer,
      organizerId: competition.organizerId
    };
  },
  fromFirestore: (
    snapshot: firebase.firestore.QueryDocumentSnapshot,
    options: firebase.firestore.SnapshotOptions
  ): Competition => {
    const data = snapshot.data(options);
    const competition = new Competition();
    competition.address = data.address;
    competition.competitionGender = data.competitionGender;
    competition.competitionSport = data.competitionSport;
    competition.competitionType = data.competitionType;
    competition.date = data.date;
    competition.description = data.description;
    competition.hour = data.hour;
    competition.id = data.id;
    competition.name = data.name;
    competition.organizer = data.organizer;
    competition.organizerId = data.organizerId;
    return competition;
  }
};

export default CompetitionConverter;
