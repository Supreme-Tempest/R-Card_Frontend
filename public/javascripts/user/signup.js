var form = (document.forms.signup);
var role = document.getElementById("role");
var workshop = document.getElementById("workshop");
console.log(role);

fetch('/workshop',{
    method: 'GET'})


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
                        console.log("se pudo perro")
                    } else {
                        alert("puede que estes repitiendo nombre o te falten datos");
                    }
                })
        }
    }
});