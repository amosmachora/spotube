import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  authDomain: "mixine-45a45.firebaseapp.com",
  projectId: "mixine-45a45",
  storageBucket: "mixine-45a45.appspot.com",
  messagingSenderId: "874042522876",
  appId: "1:874042522876:web:af1d5e79da371d6a12eb79",
  measurementId: "G-1HHFE3ZYX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);