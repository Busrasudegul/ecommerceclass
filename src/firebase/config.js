//// burada google firebase ile etkileşime buradan girilecek.


import { initializeApp } from "firebase/app";

//authentication işlemleri için giriş ve yetkilendirme
import {getAuth} from "firebase/auth"

//firestore database erişimi için (verilerin kayıt yeri için)
import {getFirestore} from "firebase/firestore"

// storage erişimi için (resim kayıt yeri)
import {getStorage} from "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyC18lV1Q2K7R55V2s716mtChTIvd7yB7lM",
  authDomain: "ecommerceclass-1a2b1.firebaseapp.com",
  projectId: "ecommerceclass-1a2b1",
  storageBucket: "ecommerceclass-1a2b1.appspot.com",
  messagingSenderId: "439376949570",
  appId: "1:439376949570:web:e432ac605b38efb77a98db"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app