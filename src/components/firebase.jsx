import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/database';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyAgJWwn6IzDC0zfTrACKrpeQSD6HDrp2SI",

  authDomain: "opulenting-48349.firebaseapp.com",

  databaseURL: "https://opulenting-48349-default-rtdb.firebaseio.com",

  projectId: "opulenting-48349",

  storageBucket: "opulenting-48349.appspot.com",

  messagingSenderId: "633071806432",

  appId: "1:633071806432:web:89ca1e74dd935f20b1ad85",

  measurementId: "G-MWPKBPVC89"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export default app;
