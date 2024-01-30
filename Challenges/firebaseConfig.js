const firebaseConfig = {
  apiKey: "AIzaSyAr4UmeNkByUvyCwKzGuw7WjaE9iSQet3k",
  authDomain: "healthhub-7e9a0.firebaseapp.com",
  projectId: "healthhub-7e9a0",
  databaseURL:
    "https://healthhub-7e9a0-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "healthhub-7e9a0.appspot.com",
  messagingSenderId: "289046391886",
  appId: "1:289046391886:web:635e5d913fdc440406271f",
  measurementId: "G-ZHFVGTKG92",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
