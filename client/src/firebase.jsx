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
  updateDoc,
  doc,
} from "firebase/firestore";
import { seedNewAccount } from "./seed/seed_food";
import { infoStyle } from "./consolecss";

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
      console.info("%c Created user " + user.uid, infoStyle);
      seedNewAccount(user.uid);
    }
    localStorage.setItem("uid", user.uid);
  } catch (error) {
    console.error(error);
    alert("Sign in error: " + error.message);
  }
}

async function logInWithEmailAndPassword(email, password) {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    localStorage.setItem("uid", auth.currentUser.uid);
  } catch (error) {
    console.error(error);
    alert("Login error: " + error.message);
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
    console.info("%c Created user " + user.uid, infoStyle);
    seedNewAccount(user.uid);
    localStorage.setItem("uid", user.uid);
  } catch (error) {
    console.error(error);
    alert("Registration error: " + error.message);
  }
}

async function sendPasswordReset(email) {
  try {
    await sendPasswordResetEmail(auth, email);
    alert("Password reset link sent! Please check your emails.");
    console.info("%c Password reset link sent to " + email, infoStyle);
  } catch (error) {
    console.error(error);
    alert(`Email could not be sent\n${error.message}`);
  }
}

async function updateUserProfile(uid, data) {
  try {
    const q = query(collection(db, "users"), where("uid", "==", uid));
    const docSnapshot = await getDocs(q);
    const ref = doc(db, "users", docSnapshot.docs[0].id);
    await updateDoc(ref, data);
    alert("Profile updated!");
    console.info("%c Updated profile for " + uid, infoStyle);
  } catch (err) {
    console.error(err);
    alert("Error while updating profile");
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
  updateUserProfile,
  logout,
};
