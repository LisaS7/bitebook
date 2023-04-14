import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { seedNewAccount } from "./seed/seed_food";

const firebaseConfig = {
  apiKey: "AIzaSyCvDGNgCOc-THRKGNLFY4MWuDufM3fh4Dk",
  authDomain: "bitebook-99854.firebaseapp.com",
  projectId: "bitebook-99854",
  storageBucket: "bitebook-99854.appspot.com",
  messagingSenderId: "645161016588",
  appId: "1:645161016588:web:3396ba2f9fcfca5faa7d29",
  measurementId: "G-DDJ1T6WRFM",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

async function signInWithGoogle() {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      // if user is not found in db then create a new user
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
      seedNewAccount(user.uid);
    }
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function logInWithEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function registerWithEmailAndPassword(name, email, password) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
    seedNewAccount(user.uid);
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent! Please check your emails.");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
}

function logout() {
  signOut(auth);
}

export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
