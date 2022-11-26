// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
import { getStorage, uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";


/* console.log(process.env.REACT_APP_API_KEY) */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY ,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
};

console.log(import.meta.env.VITE_API_KEY, "auth", import.meta.env.VITE_AUTH_DOMAIN, import.meta.env.VITE_PROJECT_ID, import.meta.env.VITE_STORAGE_BUCKET,import.meta.env.VITE_MESSAGING_SENDER_ID,import.meta.env.VITE_APP_ID)

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);

export async function uploadFile(file){
  const storage = getStorage()
  const recetasRef = ref(storage, `ImagenesRecetas/${v4()}`)
  await uploadBytes(recetasRef, file)
  const url = await getDownloadURL(recetasRef)
  return url
}

export default db