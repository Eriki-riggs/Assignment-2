document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  let username = document.getElementById("userName").value;
  let password = document.getElementById("password").value;

  const validUsername = "admin";
  const validPassword = "password123";

  if (username === "" || password === "") {
      alert("Both fields must be filled out.");
      return;
  }

  if(username === validUsername && password ===validPassword){
    console.log('Login Successful');
    localStorage.setItem("loggedIn", "true");
    // Redirect to home page after successful login
    window.location.href = "Home.html";
  }
  else{
    alert("Invalid Username or Password");
  }

  console.log("Username:", username);
  console.log("Password:", password);

});




