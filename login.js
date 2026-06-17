const loginForm = document.getElementById("login-form");
const username = document.getElementById("username");
const usernameError = document.getElementById("username-error");
const password = document.getElementById("password");
const passwordError = document.getElementById("password-error")
const submitButton = document.getElementById("submit-button");
const eyeLogo = document.getElementById("eye-logo");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    checkUsername();
    checkPassword();
})
username.addEventListener("input", updateSubmitButton);
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
    const isPasswordValid = checkPassword();
    const isFormValid = isUsernameValid && isPasswordValid;
    if (isFormValid) {
        submitButton.disabled = false;
    }
    else {
        submitButton.disabled = true;
    }
}

updateSubmitButton();