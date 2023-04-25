
var body = document.querySelector("body");
var h1El = document.createElement("h1");
var h2El = document.createElement("h2");
var link = document.createElement("a");

var groceryList = document.createElement("ul");



h1El.textContent = "Grocery List!";
h2El.textContent = "Stuff I need to get!";
h2El.setAttribute("style", "color:blue");

function linkAppears(){
    link.setAttribute("href", "https://google.com");
    link.textContent = "Link To Google";
    body.appendChild(link);
}

  F
body.appendChild(h1El);
body.appendChild(h2El);


//body.appendChild(groceryList);

// var groceryListArr = ["Milk", "Cookies", "Water", "Pop", "OJ"];

// for (var i = 0; i < groceryListArr.length; i++){
//     var groceryItem = document.createElement("li");
//     groceryItem.textContent = groceryListArr[i];
//     groceryItem.setAttribute("style", "color:blue")
//     groceryList.appendChild(groceryItem);

// }


// h1El.textContent = "Best Grocery List!";









