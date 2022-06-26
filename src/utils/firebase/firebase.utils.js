import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAXHYuap6ko5__wvgp3OjcyguHOK0CfxCM",
    authDomain: "shop-db-e56cd.firebaseapp.com",
    projectId: "shop-db-e56cd",
    storageBucket: "shop-db-e56cd.appspot.com",
    messagingSenderId: "1091153173011",
    appId: "1:1091153173011:web:d532ccbbffa79918807de6"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt
            })
        } catch (err) {
            console.log('Error creating the user',err.message);
        }
    }

    return userDocRef
    //if user data does not exists
    //create / set the document with the data from userAuth in my collection

    //if user data exists
    //if user data exists
}
