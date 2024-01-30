function validateForm() {
    const firstName = document.getElementById("fname");
    const lastName = document.getElementById("lname");
    const email = document.getElementById("email1");
    const password = document.getElementById("password1");
    const errorMessage1 = document.getElementById("errorMessage1");
    const errorMessage2 = document.getElementById("errorMessage2");
    const errorMessage3 = document.getElementById("errorMessage3");
    const errorMessage4 = document.getElementById("errorMessage4");
    const thanks = document.getElementById("thanks");
    const form = document.getElementById("form");

    let isValid = true;
    // read on event listener

    function hideErrorMessage(input, errorMessage) {
        input.addEventListener("input", function() {
            errorMessage.style.display = "none";
        })
    }

    if (firstName.value === "") {
        errorMessage1.style.display = "block";
        hideErrorMessage(firstName, errorMessage1);
        isValid = false;
    } else {
        errorMessage1.style.display = "none";
    }
    if (lastName.value === "") {
        errorMessage2.style.display = "block";
        hideErrorMessage(firstName, errorMessage2);
        isValid = false;
    } else {
        errorMessage2.style.display = "none";
    }
    if (email.value === "") {
        errorMessage3.style.display = "block";
        hideErrorMessage(firstName, errorMessage3);
        isValid = false;
    } else {
        errorMessage3.style.display = "none";
    }
    if (password.value === "") {
        errorMessage4.style.display = "block";
        hideErrorMessage(firstName, errorMessage4);
        isValid = false;
    } else {
        errorMessage4.style.display = "none";
    }
    
    if (isValid) {
        thanks.style.display = "block";
        form.style.display = "none";

    }
}