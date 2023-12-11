const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const hiddenBtn = document.getElementById('hidden');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// validasi

document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
  
    usernameError.textContent = "";
    passwordError.textContent = "";
  
    if (username !== "revou" || password !== "revou2023") {
      passwordError.textContent = "Invalid username or password.";
      return;
    }
  
    window.location.href = "index.html";
  });