//// burada google firebase ile etkileşime buradan girilecek.

import { initializeApp } from "firebase/app";

//authentication işlemleri için giriş ve yetkilendirme
import {getAuth} from "firebase/auth"

//firestore database erişimi için(verilerin kayıt yeri)
import {getFirestore} from "firebase/firestore"

//storage erişimi için (resim kayıt yeri)
import {getStorage} from "firebase/storage"


export const firebaseConfig = {
  apiKey: "AIzaSyDG17s0jgDfJK0XDvATpQRwkRrJn4ZFJXo",
  authDomain: "ecommerceclass-6f4f1.firebaseapp.com",
  projectId: "ecommerceclass-6f4f1",
  storageBucket: "ecommerceclass-6f4f1.appspot.com",
  messagingSenderId: "666645205980",
  appId: "1:666645205980:web:ac60df49ca5c4087397519"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)
export default app