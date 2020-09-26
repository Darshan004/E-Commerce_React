import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyBRFnpwc2BDtySM4zq-ajPt_tMcWAbvPvA",
    authDomain: "e-commerce-f1237.firebaseapp.com",
    databaseURL: "https://e-commerce-f1237.firebaseio.com",
    projectId: "e-commerce-f1237",
    storageBucket: "e-commerce-f1237.appspot.com",
    messagingSenderId: "824978648136",
    appId: "1:824978648136:web:2cab4846a29157e1fffc7d",
    measurementId: "G-H9GVMC95B1"
  };

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt : 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;