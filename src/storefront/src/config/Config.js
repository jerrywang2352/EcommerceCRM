import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAtMX3bGI9F3SBglvJwoHHKw_pV_iDg0kQ",
  authDomain: "ecommerce-storefront-7ebd4.firebaseapp.com",
  projectId: "ecommerce-storefront-7ebd4",
  storageBucket: "ecommerce-storefront-7ebd4.appspot.com",
  messagingSenderId: "486382093714",
  appId: "1:486382093714:web:9573c3541c1df8818d6d4b",
  measurementId: "G-9C0NS83E1C",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const storage = getStorage(app);
const auth = getAuth();

export { db, storage, auth };
