document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let email = document.querySelector("input[name='email']").value;
  let password = document.querySelector("input[name='password']").value;

  if (email === "test@gmail.com" && password === "12345") {
    alert("Login Successful!");
  } else {
    alert("Invalid email or password!");
  }
});