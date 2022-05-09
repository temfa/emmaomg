import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
	apiKey: "AIzaSyB0avwqEv30_bRBugdNODD2oLJBW1V5Knw",

	authDomain: "emma-omg.firebaseapp.com",

	projectId: "emma-omg",

	storageBucket: "emma-omg.appspot.com",

	messagingSenderId: "1041803226474",

	appId: "1:1041803226474:web:ab5f4703d3687f3e42c913",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
