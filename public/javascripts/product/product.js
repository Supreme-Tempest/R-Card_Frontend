var table_product = document.getElementById("tbody_products");
var product_type = document.getElementById("product_type");
var product_identificative = document.getElementById("product_identificative");
var form = (document.forms.registerProduct);
var type = document.getElementById("product_type");
var identificative = document.getElementById("product_identificative");
let prev = document.getElementById("prevPage");
let next = document.getElementById("nextPage");
let center = document.getElementById("page");
let last = document.getElementById("endPage");
let first = document.getElementById("startPage");
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
        prev.style.display = 'block'
        next.style.display = 'block'
        lastpage = data.pages
        data.data.preview != null ? prev.innerText = data.data.preview : prev.style.display = 'none';
        center.innerText = data.data.current;
        data.data.next != null ? next.innerText = data.data.next : next.style.display = 'none';
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
        data.forEach(element => {
            values = values + `
                <option value="${element.id}">${element.name}</option>
            `
        });
        product_type.innerHTML = values;
    });
};

function productIdentificative() { 
    fetch('/products/productIdentificative', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "<option disabled selected>Identificativo</option>";
        data.forEach(element => {
            if(element.type_id == type.value){
                values = values + `
                <option value="${element.id}">${element.name}</option>
            `
            }
        });
        product_identificative.innerHTML = values;
    });
};


form.addEventListener('submit', function (event) {
    event.preventDefault();
        let data = {
            name: form.product_name.value,
            brand: form.product_brand.value,
            stock: form.product_stock.value,
            price: form.product_price.value,
            productType: parseInt(type.value),
            identificative: parseInt(identificative.value),
        }
        fetch('/products/product', {
                method: 'POST',
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

function hola(){
}

var nextpage = (event) => {
    page = {
        page: next.textContent,
        size: 5,
    };
    onload(page);
}

var prevpage = (event) => {
    page = {
        page: prev.textContent,
        size: 5,
    };
    onload(page);
}

var centerpage = (event) => {
    page = {
        page: center.textContent,
        size: 5,
    };
    onload(page);
}
var firstpagination = (event) => {
    page = {
        page: 1,
        size: 5,
    };
    onload(page);
}
var lastpagination = (event) => {
    page = {
        page: lastpage,
        size: 5,
    };
    onload(page);
}
center.addEventListener('click', centerpage);
next.addEventListener('click', nextpage);
prev.addEventListener('click', prevpage);
first.addEventListener('click', firstpagination);
last.addEventListener('click', lastpagination);