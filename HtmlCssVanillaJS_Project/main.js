var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

//Form submit event
form.addEventListener("submit", addItem);
//Delete event
itemList.addEventListener("click", removeItem);
//Filter event
filter.addEventListener("keyup", filterItems);

//Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  //create new li element
  var li = document.createElement("li");
  //add class
  li.className = "list-group-item";
  li.appendChild(document.createTextNode(newItem));

  //create del button element
  var deleteBtn = document.createElement("button");

  //add classes to del button (check the delete button in
  //know what to add)
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //append text node
  deleteBtn.appendChild(document.createTextNode("X"));

  //append button to Li
  li.appendChild(deleteBtn);

  itemList.appendChild(li);
}

//Remove item
function removeItem(e) {
  //we want to remove the item only when we click on the button, not
  //the whole element
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure?")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

//Filter Items(from search box element)
function filterItems(e) {
  //convert text to lowercase
  var text = e.target.value.toLowerCase();
  //Get li's
  var items = itemList.getElementsByTagName("li");

  //convert items to array (since it's an html collection)
  Array.from(items).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    //compares the items to what is typed in
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}
