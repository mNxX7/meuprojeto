import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  // … os outros campos do firebaseConfig
};

const app = getApps().length ? getApp() : initializeApp(config);
export const db = getFirestore(app);
