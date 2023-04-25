var firstName = localStorage.getItem("firstName");
     
document.querySelector("h1").textContent = "FIRSTNAME:" + firstName;
if (!firstName){
    localStorage.setItem("firstName", "Chris");
}

//localStorage.removeItem("firstName"); //individual key
//localStorage.clear(); //all 
