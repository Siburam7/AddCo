// open HTML main page

let loginBtn = document.querySelector(".btn-login");

loginBtn.addEventListener("click", () => {
  window.location.href = "main.html";
});

// Eye In Password

let password = document.querySelector(".password-box input");
let eye = document.querySelector(".password-box i");

eye.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  } else {
    password.type = "password";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  }
});
