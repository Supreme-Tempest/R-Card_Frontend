var table_client = document.getElementById("tbody_client");
console.log(table_client);
onload();

function onload() {
    fetch('/clients/client_list', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "";
        console.log(data);
        data.forEach(element => {
            values = values + `
                <tr>
                    <td>1234 5678 5789</td>
                    <td>Raul Perez </td>
                    <td><button class = btn-Naranja>Editar</button>
                        <button class = btn-Rojo>Deshabilitar</button>
                    </td>
                </tr>
            `
        });
        table_client.innerHTML = values;
    });
}