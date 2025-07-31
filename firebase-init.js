// firebase-init.js

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
// We need Firestore, so we import it
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrdCOyTrQ_uU4jID8hWzCQzaXilhAcGcs",
  authDomain: "custom-practices.firebaseapp.com",
  projectId: "custom-practices",
  storageBucket: "custom-practices.firebasestorage.app",
  messagingSenderId: "636700937539",
  appId: "1:636700937539:web:d6ec9d88453e15481d33f6",
  measurementId: "G-JL58DMTZ0W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// Export the database connection to be used in other files
export { db };
