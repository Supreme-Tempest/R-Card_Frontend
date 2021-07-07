var form = (document.forms.newclient);

form.addEventListener('submit', function (event) {
    event.preventDefault();
        let data = {
            number_card: form.username.value,
            password: form.password.value,
            name: form.name.value,
            lastname: form.lastname.value,
            workshop: parseInt(workshop.value),
            role: parseInt(role.value),
        }
        fetch('/client/clients', {
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
);