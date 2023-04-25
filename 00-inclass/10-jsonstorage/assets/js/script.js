var signUpButton = document.querySelector("#sign-up");
var userNameLabelEl = document.querySelector("#userNameLabel");
var userIDlabelEl = document.querySelector("#userIDlabel");

renderLastUser();

function renderLastUser() {
    // TODO: Retrieve the last email and password and render it to the page
    var userInfo = JSON.parse(localStorage.getItem("userInfo"));


    console.log("USERID", userInfo.userID)

    if (userInfo.first){
        userNameLabelEl.textContent = userInfo.first + " " + userInfo.last;
        userIDlabelEl.textContent = "USERID: " + userInfo.user;
    }
  
  }
  
  signUpButton.addEventListener("click", function(event) {
    event.preventDefault();
  
    var firstName = document.querySelector("#firstName").value.trim();
    var lastName = document.querySelector("#lastName").value.trim();
    var userID = document.querySelector("#userID").value.trim();
    var password = document.querySelector("#password").value.trim();

    var userInfo = {
        first:firstName,
        last:lastName,
        user:userID,
        pass:password
    };

    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  
    renderLastUser();

  });
  