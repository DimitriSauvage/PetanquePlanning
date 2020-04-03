import firebase from "firebase";

export default () => {
  if (!firebase.apps.length) {
    const firebaseConfig = {
      apiKey: "AIzaSyDN0UUjGjKW9y-fyLBnLAIakDx3cq38MrI",
      authDomain: "planning-petanque.firebaseapp.com",
      databaseURL: "https://planning-petanque.firebaseio.com",
      projectId: "planning-petanque",
      storageBucket: "planning-petanque.appspot.com",
      messagingSenderId: "703799963919",
      appId: "1:703799963919:web:0818816114c741a9b24e7a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
};
