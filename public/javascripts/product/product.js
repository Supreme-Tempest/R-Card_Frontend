var table_product = document.getElementById("tbody_products");
var product_type = document.getElementById("product-type");

console.log(table_product);
onload();

function onload() { 
    fetch('/products/productPage', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "";
        console.log(data.data.data); 
        data.data.data.forEach(element => {
            console.log(element);
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
        let values = "";
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

