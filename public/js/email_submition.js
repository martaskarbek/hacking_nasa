const submit = document.getElementById('validate');


function validateEmail(email) {
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(email);
}

function validate() {
    const email = document.getElementById('email').value;
    if (validateEmail(email)) {
        alert("E mail is OK");
    } else {
        alert("Whaaaaat?");
    }
}

function check() {
    submit.addEventListener("click", validate)
}

check();