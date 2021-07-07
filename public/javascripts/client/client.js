var table_client = document.getElementById("tbody_client");
console.log(table_client);
onload();

function onload() { 
    fetch('/clients/clientpage', {
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "";
        console.log(data.data.data); 
        data.data.data.forEach(element => {
            values = values + `
                <tr>
                    <td>${element.card}</td>
                    <td>${element.name}</td>
                    <td><button class = btn btn-success>Editar</button>
                        <button class = btn btn-danger>Deshabilitar</button>
                    </td>
                </tr>
            `
        });
        table_client.innerHTML = values;
    });
}

