import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: 'YOUR_API',
  authDomain: "learnifyme-c5965-c02c3.firebaseapp.com",
  databaseURL: "https://learnifyme-c5965-default-rtdb.firebaseio.com",
  projectId: "learnifyme-c5965",
  storageBucket: "learnifyme-c5965.appspot.com",
  messagingSenderId: "362826558856",
  appId: "1:362826558856:web:c967a560ca6c9033771e3d",
  measurementId: "G-RDZMDMT3BE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
