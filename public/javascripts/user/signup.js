var form = (document.forms.signup);


function verificarPasswords() {
 
    // Ontenemos los valores de los campos de contraseñas 
    pass1 = document.getElementsByName('password');
    pass2 = document.getElementsByName('validated_password');
 
    // Verificamos si las constraseñas no coinciden 
    if (pass1.value != pass2.value) {
 
        // Si las constraseñas no coinciden mostramos un mensaje 
        document.getElementById("error").classList.add("mostrar");
 
        return false;
    } else {
 
        // Si las contraseñas coinciden ocultamos el mensaje de error
        document.getElementById("error").classList.remove("mostrar");
 
        // Mostramos un mensaje mencionando que las Contraseñas coinciden 
        document.getElementById("ok").classList.remove("ocultar");
 
        // Desabilitamos el botón de login 
        document.getElementById("login").disabled = true;
 
        // Refrescamos la página (Simulación de envío del formulario) 
        setTimeout(function() {
            location.reload();
        }, 3000);
 
        return true;
    }
 
}

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let data = {
        username: form.username.value,
        password: form.password.value,
        name: form.name.value,
        lastname: form.lastname.value,
        workshop: 1,
        role: 2,
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
});