// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtB5mUJyC-uHyihsLbcNwIj75l4u0EGxE",
  authDomain: "linkedin-clone-efe7c.firebaseapp.com",
  projectId: "linkedin-clone-efe7c",
  storageBucket: "linkedin-clone-efe7c.appspot.com",
  messagingSenderId: "145408389009",
  appId: "1:145408389009:web:9bac392e848e41b2713430"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
