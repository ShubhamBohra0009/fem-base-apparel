// btn = document.querySelector('.button1');
const email = document.getElementById('email-box').value;
const emailBorder = document.getElementById('email-box');
const btn = document.getElementById('btn');
const validIcon = document.getElementById('valid-icon');
const validText = document.getElementById('valid-text');
const invalidIcon = document.getElementById('invalid-icon');
const invalidText = document.getElementById('invalid-text');
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

function change() {
    const validIcon = document.getElementById('valid-icon');
    const validText = document.getElementById('valid-text');
    const invalidIcon = document.getElementById('invalid-icon');
    const invalidText = document.getElementById('invalid-text');
    const email = document.getElementById('email-box').value;
    const emailBorder = document.getElementById('email-box');

    if (email == "") {
        emailBorder.classList.remove("soft-red-border");
    }
    validIcon.classList.remove("visible");
    validText.classList.remove("visible");
    invalidIcon.classList.remove("visible");
    invalidText.classList.remove("visible");
}

function clicked() {

    const email = document.getElementById('email-box').value;
    const btn = document.getElementById('btn');
    const validIcon = document.getElementById('valid-icon');
    const validText = document.getElementById('valid-text');
    const invalidIcon = document.getElementById('invalid-icon');
    const invalidText = document.getElementById('invalid-text');
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    const emailBorder = document.getElementById('email-box');

    if (email == "") {
    }
    else {
        emailBorder.classList.add("soft-red-border");

        if (email.match(pattern)) {
            validIcon.classList.add("visible");
            validText.classList.add("visible");
            invalidIcon.classList.remove("visible");
            invalidText.classList.remove("visible");
        }
        else {
            invalidIcon.classList.add("visible");
            invalidText.classList.add("visible");
            validIcon.classList.remove("visible");
            validText.classList.remove("visible");
        }
    }
}