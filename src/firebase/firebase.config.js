// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsIl_xb522hBHLy15Z9hlVB_TTXxScUIk",
  authDomain: "pandas-food.firebaseapp.com",
  projectId: "pandas-food",
  storageBucket: "pandas-food.appspot.com",
  messagingSenderId: "405509789550",
  appId: "1:405509789550:web:0e653c78a322d95969537f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
