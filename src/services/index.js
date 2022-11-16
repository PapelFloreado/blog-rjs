// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDu43hEkmmAQOPipSrGWSXHEfOOQdxzjqI",
  authDomain: "food-blog-e87ed.firebaseapp.com",
  projectId: "food-blog-e87ed",
  storageBucket: "food-blog-e87ed.appspot.com",
  messagingSenderId: "1079501494685",
  appId: "1:1079501494685:web:187077a4a8a0056e73f774"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);

export default db