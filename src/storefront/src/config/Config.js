import {initializeApp} from 'firebase/app';
import 'firebase/compat/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAtMX3bGI9F3SBglvJwoHHKw_pV_iDg0kQ",
    authDomain: "ecommerce-storefront-7ebd4.firebaseapp.com",
    projectId: "ecommerce-storefront-7ebd4",
    storageBucket: "ecommerce-storefront-7ebd4.appspot.com",
    messagingSenderId: "486382093714",
    appId: "1:486382093714:web:9573c3541c1df8818d6d4b",
    measurementId: "G-9C0NS83E1C"
};

const app = initializeApp(firebaseConfig);
// const auth = firebase.auth();
const db = getFirestore();

const storage = getStorage(app);

export {db,storage}