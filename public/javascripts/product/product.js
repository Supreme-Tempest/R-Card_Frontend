var table_product = document.getElementById("tbody_products");
console.log(table_product);
onload();

function onload() { 
    fetch('/purchases/productPage', {
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
                    <td>Detalle</td>
                    <td><button class = "btn btn-success">Editar</button></td>
                </tr>
            `
        });
        table_product.innerHTML = values;
    });
}

