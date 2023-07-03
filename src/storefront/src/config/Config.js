import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAtMX3bGI9F3SBglvJwoHHKw_pV_iDg0kQ",
    authDomain: "ecommerce-storefront-7ebd4.firebaseapp.com",
    projectId: "ecommerce-storefront-7ebd4",
    storageBucket: "ecommerce-storefront-7ebd4.appspot.com",
    messagingSenderId: "486382093714",
    appId: "1:486382093714:web:9573c3541c1df8818d6d4b",
    measurementId: "G-9C0NS83E1C"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, db, storage}