const form = document.getElementById("add_form");
//Page components
const names = document.getElementById("name");
const description = document.getElementById("description");
const stock = document.getElementById("stock");
const price = document.getElementById("price");
const addBtn = document.getElementById("addBtn");
form.addEventListener("submit", (ev)=>{
    ev.preventDefault();
    if (names.value === '' || description.value === '' || price.value === '') alert("Llena los campos obligatorios");
    else {
        const product = {
            name: names.value,
            description: description.value,
            stock: stock.value,
            price: price.value
        };
        console.log(product);
    }
});

//# sourceMappingURL=admin.f29d10c4.js.map
