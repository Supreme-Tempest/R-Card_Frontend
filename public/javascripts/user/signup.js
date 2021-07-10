
var form = (document.forms.signup);
var rol = document.getElementById("rol");
var workshop = document.getElementById("workshop");
var table_employee = document.getElementById("table_employee");
var myRoleLevelAccess = document.getElementById("myRolLevelAcess").textContent;
var tbody_products = document.getElementById("tbody_products");

const cancel = document.getElementById("cancelarUpdate");
const labelNewProduct = document.getElementById('labelNewProduct');
let userId = null;


let page = {
    page: 1,
    size: 5,
}

onloadRegister();
onload(page);

function onloadRegister(){
    //console.log("sho mero", myRoleLevelAccess);
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
                <option value="${element.role}" levelaccess="${element.levelaccess}">${element.name}</option>
            `
            }
        });
        rol.innerHTML = roles;
    });
}


form.addEventListener('submit', function (event) {
    console.log("intentando crear usuario");
    event.preventDefault();
    if (form.username.value != "" && form.name.value != "" && form.lastname.value != "" && form.password.value != "") {
        if (form.password.value == form.validated_password.value) {
            
            let data = {
                username: form.username.value,
                password: form.password.value,
                name: form.name.value,
                lastname: form.lastname.value,
                workshop: parseInt(workshop.value),
                role: rol.value,
                roleAccess: parseInt(rol.options[rol.selectedIndex].getAttribute("levelaccess")),
            }
            let method = 'POST';
            if (userId) {
                method = 'PUT';
                console.log("method user: ", 'PUT');
            }
            fetch('/signup', {
                    method: method,
                    body: JSON.stringify(data),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                .then(data => {
                    console.log("data", data);
                    if (data.success) {
                        alert("Producto agregado con exito");
                        form.reset();
                    } else {
                        data.error.forEach(e=>{
                            console.log("error", e.message);
                        })
                        alert("puede que estes repitiendo nombre o te falten datos");
                    }
                })
        }
    }
});

cancel.addEventListener('click', ()=> {
    userId = null;
    $("#cancelarUpdate").hide();
    form.reset();
    labelNewProduct.innerText= "Agregar nuevo empleado";
    document.getElementById("username").readOnly = false;
    //alert("Cancel update");
})

function onload(page) { 
    fetch('/userPage', {
        method: 'POST',
        body: JSON.stringify(page),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json()).then(data => { 
        let values = "";
        paginateAux(data.data)
        data.data.data.forEach(element => {
            //console.log("eleemtne user", element.role.levelaccess);
            values = values + `
                <tr>  
                    <td>${element.username}</td>
                    <td>${element.name}</td>
                    <td>${element.lastname}</td>
                    <td roleid="${element.role.role}">${element.role.name}</td>
                    <td workshopid="${element.workshop.id}">${element.workshop.name}</td>
                    <td>
                        ${element.role.levelaccess < myRoleLevelAccess ? 
                            '<button class = "btn btn-success" name="edit">E</button>' : ''
                        }
                    </td>
                </tr>
            `
        });
        tbody_products.innerHTML = values;
        $("#cancelarUpdate").hide();
        let btn_update = document.getElementsByName('edit');
        btn_update.forEach(element => {
            element.addEventListener("click", function (event) {
                event.preventDefault();
                fila = element.parentNode.parentNode.childNodes;
                
                userId = fila[1].innerText;
                form.username.value = fila[1].innerText;
                form.name.value = fila[3].innerText;
                form.lastname.value = fila[5].innerText;
                rol.value = fila[7].getAttribute("roleid");
                workshop.value = fila[9].getAttribute("workshopid");
                //console.log('rol',fila[9].getAttribute("workshopid"));
                //console.log('fila',fila);
                labelNewProduct.innerText= "Actualizar Empleado";
                $("#cancelarUpdate").show();
                document.getElementById("username").readOnly = true;
                //console.log('fila',fila[11].getAttribute("typeid"));
            });
        });
    });
}