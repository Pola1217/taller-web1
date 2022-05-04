import firebaseConfig  from "./utils/firebase.js";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { storage, db } from "./app";
import { addProduct, uploadImages } from "./functions/addProducts";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const createProductForm = document.getElementById("add_product_from");

createProductForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log("Create a new product");

    const name = createProductForm.name.value;
    const description = createProductForm.description.value;
    const price = createProductForm.price.value;
    const category = createProductForm.category.value;
    const stock = createProductForm.stock.value;
    const images = createProductForm.images.files;

    let gallery = [];

    if (images.length) {
        // Vamos a subir las imagenes a firestore
        const uploadedImages = await uploadImages(storage, [...images]);

        gallery = await Promise.all(uploadedImages);
    }

    const newProduct = {
        name,
        description,
        stock,
        category,
        price,
        images: gallery,
    };

    await addProduct(db, newProduct);
});