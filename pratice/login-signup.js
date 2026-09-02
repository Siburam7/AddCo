// Open Main HTML page
let loginBtn = document.querySelector(".btn-login");

if (loginBtn) {
  loginBtn.addEventListener("click", () => {
    window.location.href = "main.html";
  });
}

// Open Sign Up page
let signUpBtn = document.querySelector("#sign-up-btn");

if (signUpBtn) {
  signUpBtn.addEventListener("click", () => {
    window.location.href = "signUp.html";
  });
}

// Open Login page
let logInBtn = document.querySelectorAll(".log-in-btn");

if (logInBtn) {
  logInBtn.forEach((LogBtn) => {
    LogBtn.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  });
}

// Eye In Password

let password = document.querySelector(".password-box input");
let eye = document.querySelector(".password-box i");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    password.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
});
