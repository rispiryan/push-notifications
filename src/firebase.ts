import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyC5cWyEjgFYSQ4kn8IiIBlBShe0zEf5lSw",
    authDomain: "push-notifications-2fd58.firebaseapp.com",
    projectId: "push-notifications-2fd58",
    storageBucket: "push-notifications-2fd58.appspot.com",
    messagingSenderId: "913610996199",
    appId: "1:913610996199:web:d6ed37d39fb84ce490e542",
    measurementId: "G-JFLWV73NT4"
};

export const firebaseApp = initializeApp(firebaseConfig);