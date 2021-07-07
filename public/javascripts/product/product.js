var table_product = document.getElementById("tbody_product");
console.log(table_product);
onload();

function onload() { 
    fetch('/purchases/productPage', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "";
        console.log(data.data.data); 
        data.data.data.forEach(element => {
            values = values + `
                <tr>
                    <td></td>
                    <td>${element.name}</td>
                    <td><button class = btn btn-success>Editar</button>
                        <button class = btn btn-danger>Deshabilitar</button>
                    </td>
                </tr>
            `
        });
        table_product.innerHTML = values;
    });
}

