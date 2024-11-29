let username = document.getElementById("userName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
const emailRegex = new RegExp("/^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/");
const passwordRegex = "";
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let userNameError = "";
  let emailError = "";
  let passwordError = "";
  let confirmPasswordError = "";
  if (username.value.trim() == "") {
    userNameError = "Please enter username";
    showError(username, userNameError);
  } else {
    showSucess(username);
  }
  if (email.value.trim() == "") {
    emailError = "Please enter email";
    showError(email, emailError);
  } else if (emailRegex.test(email.value.trim())) {
    emailError = "Please enter correct email";
    showError(email, emailError);
  } else {
    showSucess(email);
  }
  if (password.value.trim().length < 1) {
    passwordError = "Password has be greater than 8 characters";
    showError(password, passwordError);
  } else if (password.value.trim().toLowerCase() == password.value.trim()) {
    password = "Password need to have atleast one capital letter";
    showError(password, passwordError);
  } else {
    showSucess(password);
  }
  if (passwordError.length > 0) {
    showError(confirmPassword, passwordError);
  } else if (confirmPassword.value != password.value) {
    confirmPasswordError = "Doesn't match with password";
    showError(confirmPassword, confirmPasswordError);
  } else {
    showSucess(confirmPassword);
  }
});

function showError(ele, msg) {
  ele.classList.remove("success-border");
  ele.classList.add("error-border");
  let parent = ele.parentElement;
  let span = parent.querySelector(".error");
  span.innerText = msg;
}

function showSucess(ele) {
  ele.classList.add("success-border");
  ele.classList.remove("error-border");
  let parent = ele.parentElement;
  let span = parent.querySelector(".error");
  span.innerText = "";
}
