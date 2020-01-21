
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAzxpEb8FLRE8KyPvUCAu6Ct-tkEzj8XUA",
    authDomain: "crown-db-c1482.firebaseapp.com",
    databaseURL: "https://crown-db-c1482.firebaseio.com",
    projectId: "crown-db-c1482",
    storageBucket: "crown-db-c1482.appspot.com",
    messagingSenderId: "53978461035",
    appId: "1:53978461035:web:8cbd0a95a4d2b721cad22e",
    measurementId: "G-0RXGMENN76"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();  

    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try
      {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
      }
    }

    return userRef;
  };

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;