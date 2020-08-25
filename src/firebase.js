import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDFSnFukdQZuvk36-Nj3A0IihyYjmvyq9k",
	authDomain: "twitter-864b1.firebaseapp.com",
	databaseURL: "https://twitter-864b1.firebaseio.com",
	projectId: "twitter-864b1",
	storageBucket: "twitter-864b1.appspot.com",
	messagingSenderId: "182086543210",
	appId: "1:182086543210:web:9587a2f823b94637f1a713",
	measurementId: "G-WCKG4F55NP"
});

const db = firebaseApp.firestore();

export { db };
