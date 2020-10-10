const submit = document.getElementById('validate');

document.querySelector("#validate").disabled = true;

const name = document.querySelector('#name');
name.addEventListener('input', evt => {
    const regex = /^[a-zA-Z]*[A-Z]+[a-zA-Z]*$/g;
    if (name.value !== "") {
        document.querySelector("#validate").disabled = false;
    }
    if (name.value.length > 10) {
        document.querySelector("#validate").disabled = true;
        alert("To long name!");
    }
    if (!regex.test(name.value)) {
        document.querySelector("#validate").disabled = true;
        alert("Name should starts with capital letter, no spaces, no numerics!");
    }
});

const form = document.querySelector('form');

form.addEventListener('submit', evt => {
    const email = document.getElementById('email').value;
    const message = document.querySelector('#message');
    evt.preventDefault();
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!emailRegex.test(email) || message.value === "") {
        alert('Not correct data!')
    }
    else {
        document.querySelector("#validate").disabled = false;
        alert("Message sent!")
    }
});

