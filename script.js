var nameInput = document.getElementById("name");
var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var bioInput = document.getElementById("bio");

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");

var charCounter = document.getElementById("charCounter");
var submitBtn = document.getElementById("submitBtn");


// Validation variables

var nameValid = false;
var emailValid = false;
var passwordValid = false;


// NAME VALIDATION

nameInput.addEventListener("input", function () {

    var name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Name is required";
        nameValid = false;

    } else {

        nameError.textContent = "";
        nameValid = true;
    }

    checkForm();
});


// EMAIL VALIDATION

emailInput.addEventListener("input", function () {

    var email = emailInput.value.trim();

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Email is required";
        emailValid = false;

    } else if (!emailPattern.test(email)) {

        emailError.textContent = "Please enter a valid email";
        emailValid = false;

    } else {

        emailError.textContent = "";
        emailValid = true;
    }

    checkForm();
});


// PASSWORD VALIDATION

passwordInput.addEventListener("input", function () {

    var password = passwordInput.value;

    if (password === "") {

        passwordError.textContent = "Password is required";
        passwordValid = false;

    } else if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters";

        passwordValid = false;

    } else {

        passwordError.textContent = "";
        passwordValid = true;
    }

    checkForm();
});


// BIO CHARACTER COUNTER

bioInput.addEventListener("input", function () {

    var currentLength = bioInput.value.length;

    charCounter.textContent =
        currentLength + " / 200 characters";

    checkForm();
});


// CHECK ALL FIELDS

function checkForm() {

    var bioValid = bioInput.value.length <= 200;

    if (nameValid && emailValid && passwordValid && bioValid) {

        submitBtn.disabled = false;

    } else {

        submitBtn.disabled = true;
    }
}


// FORM SUBMISSION

document.getElementById("registrationForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        var username = nameInput.value.trim();

        alert("Registration Successful!");

        document.getElementById("registrationForm").style.display = "none";

        document.getElementById("successPage").style.display = "block";

        document.getElementById("registeredUsername").textContent = username;

    });

    document.getElementById("backBtn")
    .addEventListener("click", function () {

        document.getElementById("successPage").style.display = "none";

        document.getElementById("registrationForm").style.display = "block";

        document.getElementById("registrationForm").reset();

        nameError.textContent = "";
        emailError.textContent = "";
        passwordError.textContent = "";

        charCounter.textContent = "0 / 200 characters";

        nameValid = false;
        emailValid = false;
        passwordValid = false;

        submitBtn.disabled = true;
    });