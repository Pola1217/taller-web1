import { db, auth } from "./app";
import { onAuthStateChanged } from "firebase/auth";
import { getFirebaseCart, createFirebaseCart } from "./functions/cart";
import { getMyLocalCart, addProductToCart, currencyFormat } from "./utils";
import { getProduct } from "./functions/getProduct";


const productInfoSection = document.getElementById("productInfo");
const productAssetsSection = document.getElementById("productAssets");

function getParam(param) {
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get(param);
    return productId;
}

async function loadProduct() {
    const productId = getParam("id"); 
    const data = await getProduct(productId);

    const product = {
        ...data,
        id: productId,
    }

    renderProduct(product);
}

function renderProduct(item) {
    productAssetsSection.innerHTML = `
    <img class="product__mainImage" id="mainImage" src="${item.images[0]}">`;

    productInfoSection.innerHTML = `
    <h1 class="product__name">${item.name}</h1>
    <p class="product__description">${item.description}</p>
    <h3 class="product__price">$${currencyFormat(item.price)}</h3>
    <button class="product__cart">Add to cart</button>`;

    if (item.images.length > 1) {
        createGallery(item.images);
    }

    const productCartBtn = document.querySelector(".product__cart");
    productCartBtn.addEventListener("click", e => {
        cart.push(item);

        addProductToCart(cart);

        if (userLogged) {
            createFirebaseCart(db, userLogged.uid, cart);
        }

        productCartBtn.setAttribute("disabled", true);
        productCartBtn.innerText = "Producto añadido";
    });

}

function createGallery(images) {
    const mainImage = document.getElementById("mainImage");

    const gallery = document.createElement("div");
    gallery.className = "product__gallery";

    images.forEach(image => {
        gallery.innerHTML += `<img src="${image}">`;
    });

    productAssetsSection.appendChild(gallery);

    const galleryImages = document.querySelector(".product__gallery");

    galleryImages.addEventListener("click", e => {
        if (e.target.tagName === "IMG") {
            mainImage.setAttribute("src", e.target.currentSrc);
        }
    });
}

onAuthStateChanged(auth, async (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userLogged = user;
      cart = await getFirebaseCart(db, userLogged.uid);
      console.log(cart);
      // ...
    } else {
        cart = getMyLocalCart();
      // User is signed out
      // ...
    }

    loadProduct();

  });