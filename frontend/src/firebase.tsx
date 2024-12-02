import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mera-gaon-meri-mitti.firebaseapp.com",
  projectId: "mera-gaon-meri-mitti",
  storageBucket: "mera-gaon-meri-mitti.firebasestorage.app",
  messagingSenderId: "202014631285",
  appId: "1:202014631285:web:3c5e6cf5de7d039de61f3c",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
