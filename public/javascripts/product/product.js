var table_product = document.getElementById("tbody_products");
//var product_type = document.getElementById("product_type");
//var product_identificative = document.getElementById("product_identificative");
var form = (document.forms.registerProduct);
var type = document.getElementById("product_type");
var identificative = document.getElementById("product_identificative");

let productId = 1; // aqui poner id de  producto a editar  ;v
var lastpage;
console.log(table_product);
console.log(center);

let page = {
    page: 1,
    size: 5,
}

onload(page);
productType();



function onload(page) { 
    
    fetch('/products/productPage', {
        method: 'POST',
        body: JSON.stringify(page),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        let values = "";
        console.log(data);
        paginateAux(data.data)
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
        console.log("productType", data);
        data.forEach(element => {
            values = values + `
                <option value="${element.id}" typeid="${element.type_id}">${element.name}</option>
            `
        });
        type.innerHTML = values;
    });
};

function productIdentificative() { 
    fetch('/products/productIdentificative', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "<option disabled selected>Identificativo</option>";
        console.log("identificatives", data);
        //console.log("typeid", type.options[type.selectedIndex].getAttribute('typeid'));
        data.forEach(element => {
            if(element.type_id == type.options[type.selectedIndex].getAttribute('typeid')){ 
                values = values + `
                <option value="${element.id}">${element.name}</option>
            `
            }
        });
        identificative.innerHTML = values;
    });
};


form.addEventListener('submit', function (event) {
    event.preventDefault();
        let data = {
            id: productId,
            name: form.product_name.value,
            brand: form.product_brand.value,
            stock: form.product_stock.value,
            price: form.product_price.value,
            productType: parseInt(type.value),
            identificative: parseInt(identificative.value),
        }
        let method = 'POST';
        if (productId) {
            method = 'PUT';
        }
        fetch('/products/product', {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
            .then(res => {
                console.log(res)
                if (res.success) {
                    alert("Producto agregado con exito");
                    form.reset();
                } else {
                    
                }
            })
});

type.addEventListener('click', (event) => {
    productIdentificative();
});


