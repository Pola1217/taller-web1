// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBNiKnu4U5TAdU-eyOWnvn6qYMOPHaufjY",
    authDomain: "yttp-6dd51.firebaseapp.com",
    databaseURL: "https://yttp-6dd51-default-rtdb.firebaseio.com",
    projectId: "yttp-6dd51",
    storageBucket: "yttp-6dd51.appspot.com",
    messagingSenderId: "843459044875",
    appId: "1:843459044875:web:2f60094013185d78fb090e",
    measurementId: "G-539G90NCVL"
  };

export function getFirebaseConfig(){
    if (!firebaseConfig || !firebaseConfig.apiKey){
        throw new Error("Firebase configuration error");
    } else {
        return firebaseConfig;
    }
}