import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  // ... other config
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);