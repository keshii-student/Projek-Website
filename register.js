const registerForm = document.getElementById("register-form");
const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const email = document.getElementById("email");
const emailError = document.getElementById("email-error");
const phone = document.getElementById("phone");
const phoneError = document.getElementById("phone-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error")
const submitButton = document.getElementById("submit-button");
const eyeLogo = document.getElementById("eye-logo");

registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkUsername();
    checkEmail();
    checkPhone();
    checkPassword();
})
username.addEventListener("input", updateSubmitButton);
email.addEventListener("input", updateSubmitButton);
phone.addEventListener("input", updateSubmitButton);
password.addEventListener("input", updateSubmitButton);

eyeLogo.addEventListener('click', function() {
    if (password.type === "password") {
        password.type = "text";
    }
    else {
        password.type = "password";
    }
})

function checkUsername() {
    const usernameValue = username.value.trim();
    if (usernameValue === "")
    {
        usernameError.textContent = "Username cannot be empty.";
        usernameError.style.display = "block";
        return false;
    }
    else if (usernameValue.length < 3) {
        usernameError.textContent = "Username minimal 3 karakter";
        usernameError.style.display = "block";
        return false;
    } 
    else if (usernameValue.includes(" ")) {
        usernameError.textContent = "Tidak boleh ada spasi";
        usernameError.style.display = "block";
        return false;
    }
    else {
        usernameError.textContent = "";
        usernameError.style.display = "none";
        return true;
    }
}

function checkEmail() {
    const emailValue = email.value.trim();
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (emailValue === "")
    {
        emailError.textContent = "Email cannot be empty.";
        emailError.style.display = "block";
        return false;
    }
    else if (!emailRegex.test(emailValue)) {
        emailError.textContent = "Invalid Email Format";
        emailError.style.display = "block";
        return false;
    }
    else {
        emailError.textContent = "";
        emailError.style.display = "none";
        return true;
    }
}

function checkPhone() {
    const phoneValue = phone.value.trim();
    const digitRegex = /^\d+$/;
    if (phoneValue === "")
    {
        phoneError.textContent = "Phone number cannot be empty.";
        phoneError.style.display = "block";
        return false;
    }
    else if (!digitRegex.test(phoneValue)) {
        phoneError.textContent = "Phone number should only contain digit!";
        phoneError.style.display = "block";
        return false;
    }
    else if (phoneValue.length < 10 || phoneValue.length > 13)
    {
        phoneError.textContent = "Phone number must be between 10 - 13 digits.";
        phoneError.style.display = "block";
        return false;
    }
    else {
        phoneError.textContent = "";
        phoneError.style.display = "none";
        return true;
    }
}

function checkPassword() {
    const passwordValue = password.value.trim();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (passwordValue === "")
    {
        passwordError.textContent = "Password cannot be empty.";
        passwordError.style.display = "block";
        return false;
    }
    else if (!passwordRegex.test(passwordValue)) {
        passwordError.textContent = "Must be a random combination.";
        passwordError.style.display = "block";
        return false;
    }
    else if (passwordValue.length < 8)
    {
        passwordError.textContent = "Minimum 8 characters for password";
        passwordError.style.display = "block";
        return false;
    }
    else {
        passwordError.textContent = "";
        passwordError.style.display = "none";
        return true;
    }
}

function updateSubmitButton() {
    const isUsernameValid = checkUsername();
    const isEmailValid = checkEmail();
    const isPhoneValid = checkPhone();
    const isPasswordValid = checkPassword();
    const isFormValid = isUsernameValid && isEmailValid && isPhoneValid && isPasswordValid;
    if (isFormValid) {
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}

updateSubmitButton();