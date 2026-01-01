import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNsOe4ut-FH6sQiAr5LpPnYLBuybs4pNY",
  authDomain: "delicious-bitess.firebaseapp.com",
  projectId: "delicious-bitess",
  storageBucket: "delicious-bitess.firebasestorage.app",
  messagingSenderId: "320788984844",
  appId: "1:320788984844:web:aea4c81af5b4db2e046a29",
  measurementId: "G-0ZS5E2PYEH",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

// Initialize Firestore
export const db = getFirestore(app)

// Initialize Auth
export const auth = getAuth(app)

export default app
