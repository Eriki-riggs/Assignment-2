// document.getElementById("toHome").addEventListener("click", function(){
//     window.location.href="index.html";
// });

// document.getElementById(LoginForm).addEventListener("submit",function(e){
//     e.preventDefault();
// })

// const Username= document.getElementById(userName);
// const Password= document.getElementById(password);

// console.log('Username:', Username);
// console.log('Password:', Password);

function validateForm() {
    let x = document.forms["Logging"]["logIn"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }



