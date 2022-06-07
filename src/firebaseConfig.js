// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDKGHbYASCfFl_DLDrledE54Vj77UrZf-w',
  authDomain: 'gdocs-clone-4118.firebaseapp.com',
  projectId: 'gdocs-clone-4118',
  storageBucket: 'gdocs-clone-4118.appspot.com',
  messagingSenderId: '744450473616',
  appId: '1:744450473616:web:4a86eab4add8fc98436215',
  measurementId: 'G-VTN8887D8B'
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const database = getFirestore(app);
