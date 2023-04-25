var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

var userinfo = {
  firstname: firstname,
  lasttname: lastname,
  userid: userid,
  password: password
};
renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class" JSON.stringify(userinfo));
}

function renderLastRegistered() {
  let lastname = localStorage.getItem("#email")

  // TODO: Retrieve the last email and password and render it to the page
}

signUpButton.addEventListener("click", function(event){
  event.preventDefault()

  var email = localStorage.getItem("#email")
  var password = localStorage.getItem("password")

  if (email && password){
  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
  }
}
  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");
    localStorage.setItem("email", email)
    localStorage.setItem("password", password)
    renderLastRegistered();
  // TODO: Save email and password to localStorage and render the last registered user
  }
});
