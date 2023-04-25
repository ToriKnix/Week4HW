var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  localStorage.setItem("myObject", JSON.stringify(myObject));
  localStorage.getItem("myObject", JSON.parse(myObject));
  // TODO: Create user object from submission
  // TODO: Set new submission to local storage 
});
