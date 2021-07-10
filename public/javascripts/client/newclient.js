const form = (document.forms.newclient);

form.addEventListener('submit', function (event) {
    event.preventDefault();
        let data = {
            number_card: form.number_card.value,
            dui: form.dui.value,
            name: form.name.value,
            birthday: form.birthday.value,
        }
        fetch('/clients/clients', {
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