var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequire8cd9;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,a.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequire8cd9=a);var o=a("jQQXv"),c=a("1tHc5"),r=a("etBjH");var d=a("6naOk"),i=a("2EF88");const s=document.getElementById("products"),l=document.getElementById("category"),u=document.getElementById("order");let p,m=[],f=[];async function g(){const e=await async function(e){const t=r.collection(e,"products");try{const{docs:e}=await r.getDocs(t);return e.map((e=>({...e.data(),id:e.id})))}catch(e){console.log(e)}}(o.db);s.innerHTML="",e.forEach((e=>{h(e)})),m=e}function h(e){const t=document.createElement("a");t.className="product",t.setAttribute("href",`./product.html?id=${e.id}`);const n=e.images?e.images[0]:"https://cdn1.iconfinder.com/data/icons/business-company-1/500/image-512.png",a=f.some((t=>t.id===e.id))?'<button class="product__cart" disabled>Product added</button>':'<button class="product__cart">Add to Cart</button>';t.innerHTML=`\n    <img src="${n}" alt="" class="product__image">\n    <div class="product__info">\n        <p class="product__category">${e.category}</p> \n        <h2 class="product__name">${e.name}</h2>\n        <h3 class="product__price">${i.currencyFormat(e.price)}</h3>\n        ${a}\n    </div>\n    `,s.appendChild(t);const c=t.querySelector(".product__cart");c.addEventListener("click",(async t=>{t.preventDefault(),f.push(e),i.addProductToCart(f),p&&await d.createFirebaseCart(o.db,p.uid,f),c.setAttribute("disabled",!0),c.innerText="Product added"}))}function y(){const e=l.value,t=u.value;let n=[];n=""!==e?m.filter((t=>t.category===e)):m,"asc"===t&&(n=n.sort(((e,t)=>t.price-e.price))),"desc"===t&&(n=n.sort(((e,t)=>e.price-t.price))),"AtoZ"===t&&(n=n.sort(((e,t)=>e.name.localeCompare(t.name)))),"ZtoA"===t&&(n=n.sort(((e,t)=>t.name.localeCompare(e.name)))),s.innerHTML="",n.forEach((e=>{h(e)}))}l.addEventListener("change",(e=>{y()})),u.addEventListener("change",(e=>{y()})),c.onAuthStateChanged(o.auth,(async e=>{console.log(e),e?(p=e,f=await d.getFirebaseCart(o.db,p.uid)):f=function(){const e=localStorage.getItem("cart");return e?JSON.parse(e):[]}(),g()}));
//# sourceMappingURL=skincare.5a9bd0ae.js.map