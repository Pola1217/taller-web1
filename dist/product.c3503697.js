var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequire8cd9;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var o={id:e,exports:{}};return t[e]=o,n.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},e.parcelRequire8cd9=n);var o=n("jQQXv"),c=n("1tHc5"),a=n("6naOk"),d=n("2EF88"),s=(o=n("jQQXv"),n("etBjH"));const i=document.getElementById("productInfo"),u=document.getElementById("productAssets");async function l(){const e=function(e){const t=window.location.search;return new URLSearchParams(t).get(e)}("id");!function(e){u.innerHTML=`\n    <img class="product__mainImage" id="mainImage" src="${e.images[0]}">`,i.innerHTML=`\n    <h1 class="product__name">${e.name}</h1>\n    <p class="product__description">${e.description}</p>\n    <p class="product__howToUse">How to use:</p>\n    <p class="product__howTo">${e.howToUse}</p>\n    <h3 class="product__price">${d.currencyFormat(e.price)}</h3>\n    <button class="product__cart">Add to cart</button>`,e.images.length>1&&function(e){const t=document.getElementById("mainImage"),r=document.createElement("div");r.className="product__gallery",e.forEach((e=>{r.innerHTML+=`<img src="${e}">`})),u.appendChild(r);document.querySelector(".product__gallery").addEventListener("click",(e=>{"IMG"===e.target.tagName&&t.setAttribute("src",e.target.currentSrc)}))}(e.images);const t=document.querySelector(".product__cart");t.addEventListener("click",(r=>{cart.push(e),d.addProductToCart(cart),userLogged&&a.createFirebaseCart(o.db,userLogged.uid,cart),t.setAttribute("disabled",!0),t.innerText="Producto añadido"}))}({...await async function(e){const t=s.doc(o.db,"products",e);try{return(await s.getDoc(t)).data()}catch(e){console.log(e)}}(e),id:e})}c.onAuthStateChanged(o.auth,(async e=>{e?(userLogged=e,cart=await a.getFirebaseCart(o.db,userLogged.uid),console.log(cart)):cart=d.getMyLocalCart(),l()}));
//# sourceMappingURL=product.c3503697.js.map