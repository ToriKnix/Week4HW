var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
  if (element.matches(".box")){
    //   <div class="box" data-number="1" data-state="hidden"></div>
    var state = element.dataset.state;
    //var state = element.getAttribute("data-state"); //same thing
    if (state==="hidden"){
      element.textContent = element.dataset.number;
      element.dataset.state = "visible";
      //element.setAttribute("state", "visible"); //same thing
    }
    else{
      element.textContent = "";
      element.dataset.state = "hidden";
    }

  }
});
