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
                    <td name="card">${element.card}</td>
                    <td>${element.name}</td>
                    <td class="btn-toolbar">
                        <button class="btn btn-success">Editar</button>
                        ${element.state 
                            ? `<button class="btn btn-danger" name="editstatus" status="false" card="${element.card}">Deshabilitar</button>`
                            : `<button class="btn btn-primary" name="editstatus" status="true" card="${element.card}">Habilitar</button>`
                        }
                        
                    </td>
                </tr>
            ` 
        });
        table_client.innerHTML = values;
        let btn_state = document.getElementsByName('editstatus');
        btn_state.forEach(element => {
            element.addEventListener("click", function (event) {
                event.preventDefault();
                let params = {
                    card: element.getAttribute("card"),
                    state: element.getAttribute("status"),
                }
                console.log("param: ", params);
                fetch('/clients/clientState', {
                    method: 'PUT',
                    body: JSON.stringify(params),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json()).then(data => {
                    console.log("se actualizo");
                    console.log(data);
                })

            });
        });
    });
}

