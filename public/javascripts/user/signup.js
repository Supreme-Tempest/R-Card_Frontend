onload();
var form = (document.forms.signup);
var rol = document.getElementById("rol");
var workshop = document.getElementById("workshop");

function onload(){
    fetch('/workshop',{
        method: 'GET'
    }).then(res => res.json()).then(data => {
        let values = "<option disabled selected>Selecciona una sucursal</option>";
        data.forEach(element => {
            values = values + `
                <option value="${element.id}">${element.name}</option>
            `
        });
        workshop.innerHTML = values;
    }); 
    fetch('/roles',{
        method: 'GET'
    }).then(res => res.json()).then(data => {
        console.log(data);
        let roles = "<option disabled selected>Selecciona un rol</option>";
        data.forEach(element => {
            roles = roles + `
                <option value="${element.role}">${element.name}</option>
            `
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