var form = (document.forms.newclient);

form.addEventListener('submit', function (event) {
    event.preventDefault();
        let data = {
            number_card: form.number_card.value,
            dui: form.dui.value,
            name: form.name.value,
            creation_date: form.creation_date.value,
            birthday: form.birthday.value,
            state: true,
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