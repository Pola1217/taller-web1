// Import the functions you need from the SDKs you need
import firebaseConfig  from "./utils/firebase.js";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

import { login, createUser, addUserToDatabase } from "./functions/auth";
import { getStorage } from "firebase/storage";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);

//Page components
const createUserForm = document.getElementById("signupForm");
const loginForm = document.getElementById("loginForm");
const logOut = document.getElementById("account");

//submit log in
if(loginForm != null) { 
  
  loginForm.addEventListener("submit", e => {
    e.preventDefault();
  
    const email = loginForm.email.value;
    const password = loginForm.password.value;
  
    login(auth, email, password);
  
  });
}


//submit signin 
if(createUserForm != null) { 
createUserForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = createUserForm.name.value;
  const email = createUserForm.email.value;
  const password = createUserForm.password.value;

  const userInfo = {
    name,
    email,
    password,
    isAdmin: false,
  };
  //createUser(auth, newUser);
  const newUser = await createUser(auth, userInfo);
    await addUserToDatabase(db, newUser.uid, userInfo);

    alert(`Bienvenido, ${name}`);
    window.location.href = "/index.html";
});
}

logOut.addEventListener("click", () => {

  onAuthStateChanged(auth, (user) =>{

    if (user){

       signOut(auth).then(() =>{
         window.location.href = "/index.html"; 

         alert("Signed out succesfully");

       }).catch((error) =>{
         
         console.log(error);

       });

       }else {

   window.location.href="/login.html";

 }
});
});

export {
  db,
  auth,
  app,
  storage
}