import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyCyd57bKmEOsDvKMg7D1SszpbLjsbx62sk",
  authDomain: "my-demo-f85d3.firebaseapp.com",
  databaseURL: "https://my-demo-f85d3.firebaseio.com",
  projectId: "my-demo-f85d3",
  storageBucket: "my-demo-f85d3.appspot.com",
  messagingSenderId: "855936794155"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(config);
}

// const settings = { timestampsInSnapshots: true };
// firebase.firestore().settings(settings);
export const db = firebase.firestore();

// export db;
