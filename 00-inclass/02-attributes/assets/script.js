var siteHeader = document.querySelector(".mainHeader");
var groceryListItems = document.querySelectorAll(".item");
var otherNotes = document.querySelectorAll("div");

siteHeader.style.fontSize = "50px";
siteHeader.style.backgroundColor = "yellow";



for (var i = 0; i < groceryListItems.length; i++){
    // groceryListItems[i].style.color = "blue";
    // groceryListItems[i].style.fontSize = "24px";
    groceryListItems[i].setAttribute("style", "font-weight:bold; font-family:times; padding-left: 5px")
    groceryListItems[i].setAttribute("id", "Grocery_" + i)
}





