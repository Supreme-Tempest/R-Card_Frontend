var table_product = document.getElementById("tbody_products");
var product_type = document.getElementById("product-type");
var product_identificative = document.getElementById("product-identificative");
var form = (document.forms.registerProduct);
var type = document.getElementById("product_type");
var identificative = document.getElementById("product_identificative");

console.log(table_product);
onload();
productType();
productIdentificative();


function onload() { 
    fetch('/products/productPage', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "";
        data.data.data.forEach(element => {
            values = values + `
                <tr> 
                    <td>${element.id}</td>
                    <td>${element.name}</td>
                    <td>${element.brand}</td>
                    <td>${element.stock}</td>
                    <td>${element.price}</td>
                    <td>${element.type.name}|${element.identificative.name}</td>
                    <td><button class = "btn btn-success">E</button></td>
                </tr>
            `
        });
        table_product.innerHTML = values;
    });
}

function productType() { 
    fetch('/products/productType', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "<option disabled selected>Tipo de producto</option>";
        console.log(data); 
        data.forEach(element => {
            console.log(element);
            values = values + `
                <option value="${element.id}">${element.name}</option>
            `
        });
        product_type.innerHTML = values;
    });
}

function productIdentificative() { 
    fetch('/products/productIdentificative', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "<option disabled selected>Identificativo</option>";
        console.log(data); 
        data.forEach(element => {
            console.log(element);
            values = values + `
                <option value="${element.id}">${element.name}</option>
            `
        });
        product_identificative.innerHTML = values;
    });
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (form.username.value != "" && form.name.value != "" && form.lastname.value != "" && form.password.value != "") {
        if (form.password.value == form.validated_password.value) {
            let data = {
                name: form.product_name.value,
                brand: form.product_brand.value,
                stock: form.product_stock.value,
                price: form.product_price.value,
                type_id: parseInt(type.value),
                identificative_id: parseInt(identificative.value),
            }
            console.log(data);
            /*fetch('/signup', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .then(res => {
                    if (res.ok) {
                    } else {
                        alert("puede que estes repitiendo nombre o te falten datos");
                    }
                })*/
        }
    }
});