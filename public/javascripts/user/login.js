var form = (document.forms.login);
console.log(form); 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    let data = {
        username: form.username.value,
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
            if (res.status) {
                console.log("se pudo perro")
            } else {
                console.log("error")
            }
        })
});