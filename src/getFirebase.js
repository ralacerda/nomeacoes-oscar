import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAZaEquQX9WcIoLfxLYw_xySEM_3ANyY6M",
  authDomain: "sequelamovies.firebaseapp.com",
  projectId: "sequelamovies",
  storageBucket: "sequelamovies.appspot.com",
  messagingSenderId: "719114623298",
  appId: "1:719114623298:web:ec8e016179e986c584d0db",
};

function initialize() {
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  return { firebaseApp, firestore };
}

export function getFirebase() {
  const existingApp = getApps().at(0);
  if (existingApp) return initialize();
  return initialize();
}
