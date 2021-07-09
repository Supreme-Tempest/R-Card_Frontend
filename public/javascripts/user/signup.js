
var form = (document.forms.signup);
var rol = document.getElementById("rol");
var workshop = document.getElementById("workshop");
var table_employee = document.getElementById("table_employee");
var myRoleLevelAccess = document.getElementById("myRolLevelAcess").textContent;
var tbody_products = document.getElementById("tbody_products");


let prev = document.getElementById("prevPage");
let next = document.getElementById("nextPage");
let center = document.getElementById("page");
let last = document.getElementById("endPage");
let first = document.getElementById("startPage");

let page = {
    page: 1,
    size: 5,
}

onload();
onloadclient(page);

function onload(){
    console.log("sho mero", myRoleLevelAccess);
    fetch('/workshop',{
        method: 'GET'
    }).then(res => res.json()).then(data => {
        console.log(data);
        let values = "<option disabled selected>Selecciona una sucursal</option>";
        data.data.forEach(element => {
            values = values + `
                <option value="${element.id}">${element.name}</option>
            `
        });
        workshop.innerHTML = values;
    }); 
    fetch('/roles',{
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let roles = "<option disabled selected>Selecciona un rol</option>";
        data.forEach(element => {
            if (element.levelaccess < myRoleLevelAccess) {
                roles = roles + `
                <option value="${element.role}">${element.name}</option>
            `
            }
        });
        rol.innerHTML = roles;
    });
}


form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (form.username.value != "" && form.name.value != "" && form.lastname.value != "" && form.password.value != "") {
        if (form.password.value == form.validated_password.value) {
            let data = {
                username: form.username.value,
                password: form.password.value,
                name: form.name.value,
                lastname: form.lastname.value,
                workshop: parseInt(workshop.value),
                role: parseInt(role.value),
            }
            fetch('/signup', {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .then(res => {
                    if (res.ok) {
                    } else {
                        alert("puede que estes repitiendo nombre o te falten datos");
                    }
                })
        }
    }
});

function onloadclient(page) { 
    fetch('/userPage', {
        method: 'POST',
        body: JSON.stringify(page),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => {
        let values = "";
        console.log("hola buenas");
        prev.style.display = 'block'
        next.style.display = 'block'
        lastpage = data.data.pages
        data.data.preview != null ? prev.innerText = data.data.preview : prev.style.display = 'none';
        center.innerText = data.data.current;
        data.data.next != null ? next.innerText = data.data.next : next.style.display = 'none';
        console.log(data.data.data)
        data.data.data.forEach(element => {
            //console.log("eleemtne user", element.role.levelaccess);
            values = values + `
                <tr>  
                    <td>${element.username}</td>
                    <td>${element.name}</td>
                    <td>${element.lastname}</td>
                    <td>${element.role.name}</td>
                    <td>${element.workshop.name}</td>
                    <td>
                        ${element.role.levelaccess < myRoleLevelAccess ? 
                            '<button class = "btn btn-success">E</button>' : ''
                        }
                    </td>
                </tr>
            `
        });
        tbody_products.innerHTML = values;
    });
}