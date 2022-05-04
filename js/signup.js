const name = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const signupBtn = document.getElementById("signupBtn");
const loginQuestion = document.getElementById("logIn");

function createUser(user_account){
    const user = {
        id: user_account.uid,
        name: name.value,
        email:  email.value,
        password: password.value
    }

    const userRef = ref(db, "users/" + user.id);
    set(userRef, user).then(() => {
        console.log("guardó");
        window.location.href = "pet-signup.html";
    });
}