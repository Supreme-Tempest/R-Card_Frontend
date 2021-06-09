var form = (document.forms.login);
console.log(form);
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let data = {
        username: form.name.value,
        password: form.password.value,
    }
    fetch('/login', {
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
});