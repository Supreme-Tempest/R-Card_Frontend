var table_client = document.getElementById("tbody_client");
console.log(table_client);

let page = {
    page: 1,
    size: 5,
}

onload();

function onload() { 
    fetch('/clients/clientPage', {
        method: 'POST',
        body: JSON.stringify(page),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        let values = "";
        console.log(data); 
        data.data.data.forEach(element => {
            values = values + `
                <tr>
                    <td>${element.card}</td>
                    <td>${element.name}</td>
                    <td class="btn-toolbar">
                        <button class = "btn btn-success">Editar</button>
                        <button class = "btn btn-danger">Deshabilitar</button>
                    </td>
                </tr>
            ` 
        });
        table_client.innerHTML = values;
    });
}

