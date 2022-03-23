const user = [
    {
    userName: 'lilia ortega',
    mail: 'liliaaaa17@gmail.com',
    gender: 'female',
    age: '20',
    birthday: 01/01/2001,
    }
]

const products = [
    {
        image: './img/product1.png',
        name: 'Superfood Cleanser',
        price: {sample: 15.00, full:36.00},
        stock: 100,
        fill: {sample: 20, full:237} //mililiters
    },
    {
        image: './img/product2.png',
        name: 'Unity Acid Exfoliant',
        price: {sample: 20.00, full:38.00},
        stock: 50,
        fill: {sample: 20, full:237} //mililiters
    },
    {
        image: './img/product3.png',
        name: 'Cactus Oasis Serum',
        price: {sample: 25.00, full:54.00},
        stock: 80,
        fill: {sample: 20, full:237} //mililiters
    },
    {
        image: './img/product4.png',
        name: 'Air-Whip Moisture Cream',
        price: {sample: 22.00, full:48.00},
        stock: 20,
        fill: {sample: 20, full:237} //mililiters
    },
    {
        image: './img/product5.png',
        name: 'Superfood Cleanser Refill',
        price: {sample: 15.00, full:36.00},
        stock: 100,
        fill: {sample: 20, full:237} //mililiters
    },
    {
        image: './img/product6.png',
        name: 'The Minimalist Kit',
        price: {full:60.00},
        stock: 50,
        fill: {full:237} //mililiters
    },
    {
        image: './img/product7.png',
        name: 'The Superfood Routine',
        price: {full:110.00},
        stock: 80,
        fill: {full:237} //mililiters
    },
    {
        image: './img/product8.png',
        name: 'Superberry Dream Mask',
        price: {sample: 22.00, full:40.00},
        stock: 20,
        fill: {sample: 20, full:237} //mililiters
    },
]

console.log(products)

//filter that returns sample prices over 50.00
for ( let i = 0; i < products.length; i++){
    const item = products[i];

    if(item.price.full > 49.00) {
        console.log(products[i].name);
    }

}
/*const productP = () => {
  return products.filter((product) => (product.price.full > 50.00))
}
console.log(productP())*/


//HTML for render
const shop = document.getElementById("cart");

//render of the products
function shopProducts(){
    //Leave div empty to fill
    shop.innerHTML = " ";
    for (let i = 0; i < products.length; i++) {
        shop.appendChild(render(products[i]));
    }
}

function render(product) {

    let item = document.createElement("ul");
    item.className = "product";

    // image
    let img = document.createElement("img");
    img.className = "products";
    img.src = product.image;

    // name
    let name = document.createElement("p");
    name.className = "items";
    name.innerHTML = product.name;

    // price
    let price = document.createElement("h4");
    price.className = "items"
    price.innerHTML = "$" + product.price.full;

    item.appendChild(img);
    item.appendChild(name);
    item.appendChild(price);

    return item;
}

shopProducts();