// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzt2KHHH29QZqeQ_0pwT9sLfPQkoGAY6s",
  authDomain: "super-elevators.firebaseapp.com",
  projectId: "super-elevators",
  storageBucket: "super-elevators.firebasestorage.app",
  messagingSenderId: "627625423196",
  appId: "1:627625423196:web:a8de4755b6fe15fcb0d199",
  measurementId: "G-KL4KGVNL5F"
};

db.collection("job_positions").get().then((querySnapshot) => {
    console.log("Jobs fetched successfully!");
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());
    });
  }).catch((error) => {
    console.error("Error fetching jobs: ", error);
  });
  
