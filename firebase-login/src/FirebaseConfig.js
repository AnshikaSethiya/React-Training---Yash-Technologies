import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDB84kNwsrJV9TIpBdrgGjXHf1ViHcPp7M",
  authDomain: "movie-ticket-booking-7d752.firebaseapp.com",
  projectId: "movie-ticket-booking-7d752",
  storageBucket: "movie-ticket-booking-7d752.appspot.com",
  messagingSenderId: "178166831645",
  appId: "1:178166831645:web:fd0ce90ede2e2bb00104f4",
  measurementId: "G-6EH649Y7J5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth  = getAuth(app)
export default app