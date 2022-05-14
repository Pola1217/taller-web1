import { auth, db } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./functions/cart";
import { addProductToCart } from "./utils";
import { getMyLocalCart, currencyFormat } from "./utils/index";

const cartSection = document.getElementById("cart");
const totalSection = document.getElementById("total");
const checkoutForm = document.getElementById("checkout__Form");
let cart = [];

function loadCart(cart) {
    let total = 0;
    cart.forEach(product => {
        renderProduct(product);
        total += parseInt(product.price);
    });

    totalSection.innerText = currencyFormat(total);

};

async function removeProduct(productId) {
    const newCart = cart.filter(product => product.id !== productId);
    
    cart = newCart;

    if (userLogged) {
        await createFirebaseCart(db, userLogged.uid, newCart);
        
    }

    addProductToCart(newCart);

    cartSection.innerHTML = "";

    loadCart(newCart);

}


function renderProduct(product) {
    const productCart = document.createElement("li");
    productCart.className = "product";
    productCart.innerHTML = `
    <img src="${product.images[0]}" class="product__image">
    <h2 class="product__name">${product.name}</h2>
    <h3 class="product__price">${currencyFormat(product.price)}</h3>
    <button class="product__delete">X</button>
    `;

    cartSection.appendChild(productCart);

    productCart.addEventListener("click", e => {
         if (e.target.tagName === "BUTTON") {
             console.log("remove it!");
             alert("Log in to remove");
             removeProduct(product.id);
         }
    })
};

checkoutForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("clicked");

    const name = checkoutForm.name.value;
    const address = checkoutForm.address.value;
    const city = checkoutForm.city.value;
    const cellphone = checkoutForm.cellphone.value;
    const shipping = checkoutForm.shipping.value;
    const cardNum = checkoutForm.card.value;
    const expiration = checkoutForm.expiration.value;
    const code = checkoutForm.code.value;

    const userInfo = {
       firstname,
       lastname,
       address,
       city, 
       cellphone 
    }

    const paymentInfo = {
        shipping, 
        cardNum,
        expiration,
        code
    }

    const orderComplete = {
        userInfo,
        paymentInfo,
        order,
        finalTotal
    }

    //Add order to firestore database
    await addOrder(db, orderComplete, userLogged.uid);

    //Show popup
    popup.classList.add('popup--open');
    //Delete bag from firestore and local storage
    deleteFromBag(db, userLogged.uid);
    deleteMyLocalBag();

});

onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userLogged = user;
      cart = await getFirebaseCart(db, userLogged.uid);
    } else {
        cart = getMyLocalCart();
      // User is signed out
      // ...
    }

    loadCart(cart);

  });