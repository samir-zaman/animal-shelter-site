import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC-osNgy5MtLmJlsL6uI5LnMveCfHqup5Y",
  authDomain: "pet-adoption-site-46eb2.firebaseapp.com",
  projectId: "pet-adoption-site-46eb2",
  storageBucket: "pet-adoption-site-46eb2.firebasestorage.app",
  messagingSenderId: "985803805121",
  appId: "1:985803805121:web:451bfe42800d7acd70df40"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
