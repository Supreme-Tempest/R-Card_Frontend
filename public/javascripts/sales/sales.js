var table_sales = document.getElementById("table_sales");
var carrito = []
var form = (document.forms.sales);

function getProduct(id, cantidad) {
    fetch('/products/productId', {
        method: 'POST',
        body: JSON.stringify({id: id}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        console.log("data", data);  
        if (data.success) {
            console.log("data", data.data[0]);
            let element = data.data[0];
            let value = '';
            value = `
            <tr> 
                    <td>${element.name}</td>
                    <td>${cantidad}</td>
                    <td>${element.price}</td>
                    <td>${element.price * cantidad}</td>
                    <td>
                        '<button class = "btn btn-danger" name="edit">X</button>'
                    </td>
                </tr>
            `
            table_sales.innerHTML = table_sales.innerHTML + value;
        }
            
    });
}

console.log("en javascrip sales");

form.addEventListener('submit', (event) => {
    event.preventDefault();
    let data = {
        id: form.sale_cod.value,
        cantidad: parseInt(form.sale_cantidad.value),
    }
    console.log("preveProduct");
    getProduct(data.id, data.cantidad);
});

