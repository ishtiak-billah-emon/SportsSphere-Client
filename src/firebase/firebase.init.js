// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDhXJtKzGbfMrgolqHvDwD7TqGusjyXdN4",
  authDomain: "sports-sphere-7ea1d.firebaseapp.com",
  projectId: "sports-sphere-7ea1d",
  storageBucket: "sports-sphere-7ea1d.firebasestorage.app",
  messagingSenderId: "768649433093",
  appId: "1:768649433093:web:d6313b17e96100eb72cc6c",

  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectID: import.meta.env.VITE_projectID,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
