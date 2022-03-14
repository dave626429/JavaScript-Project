let body = document.querySelector("body");

let container = document.createElement("div");
container.style.display = "flex";
container.style.flexDirection = "column";
container.style.justifyContent = "center";
container.style.alignItems = "center";

body.appendChild(container);

let h1 = document.createElement("h1");
h1.innerHTML = "Todo App";
container.appendChild(h1);

let userInput = document.createElement("input");
userInput.className = "user-input";
userInput.onkeyup = (e) => {
  if (e.keyCode === 13) {
    createListItem(e.target.value);
    userInput.value = "";
  }
};

container.appendChild(userInput);

let addButton = document.createElement("button");
addButton.innerHTML = "add";
addButton.style.cursor = "pointer";
addButton.style.fontWeight = "800";
addButton.style.padding = "10px 15px";
addButton.style.color = "#fff";
addButton.style.backgroundColor = "#81B622";
addButton.style.border = "none";
addButton.style.margin = "5px 0";
addButton.onclick = createListItem;
container.appendChild(addButton);

let ul = document.querySelector(".list");
container.appendChild(ul);

let counter = 1;

function createListItem(task) {
  let li = document.createElement("li");
  li.style.display = "flex";
  li.style.listStyle = "none";

  let item = `Item-${counter}`; // Random Item Name
  if (task.pointerId === -1 || task.length === 0) {
    return;
  }
  if (typeof task === "string") {
    item = task;
  }

  let userInput = document.querySelector(".user-input");
  if (userInput.value) {
    userInput.value = "";
  }

  let itemContainer = document.createElement("span");
  li.className = item;
  itemContainer.style.minWidth = "10.5rem";
  // itemContainer.style.border = "2px solid #a7a7a7";
  itemContainer.style.textAlign = "center";
  itemContainer.style.padding = "10px";
  itemContainer.style.marginTop = "5px";
  itemContainer.style.marginRight = "5px";
  itemContainer.style.fontWeight = "800";
  itemContainer.style.backgroundColor = "#ECF87F";
  itemContainer.innerHTML = item;
  li.appendChild(itemContainer);

  let deleteItemButton = document.createElement("button");
  deleteItemButton.innerHTML = "delete";
  deleteItemButton.style.marginTop = "5px";
  deleteItemButton.style.cursor = "pointer";
  deleteItemButton.style.fontWeight = "1000";
  deleteItemButton.style.padding = "5px 10px";
  deleteItemButton.style.backgroundColor = "#b62222";
  deleteItemButton.style.color = "#fff";
  deleteItemButton.style.border = "none";

  deleteItemButton.onclick = () => deleteItem(item);
  li.appendChild(deleteItemButton);

  ul.appendChild(li);

  counter++;
}

function deleteItem(className) {
  let item = document.querySelector(`.${className}`);
  item.remove(item);
}
