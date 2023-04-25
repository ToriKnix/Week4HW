var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  // TODO: Create user object from submission
  var firstNameValue = firstNameInput.value.toLowerCase.trim();

  var user = {
    firstName: firstNameValue,
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  }

  localStorage.setItem("user", JSON.stringify(user))
  //localStorage.clear();
  // TODO: Set new submission to local storage 
  
});
