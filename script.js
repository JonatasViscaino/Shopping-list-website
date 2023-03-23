const enterButton = document.getElementById("btn_newitem");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
const listElements = document.querySelectorAll("li");
const allDeleteButtons = document.querySelectorAll(".delete");

// Creating new list Element

function createListElement() {
	const li = document.createElement("li");
	const sp = document.createElement("span")
	const deleteButton = document.createElement("button");
	sp.appendChild(document.createTextNode(input.value));
	li.addEventListener("click", addClass);
	li.appendChild(sp);
	li.appendChild(deleteButton);
	deleteButton.textContent = "DELETE";
	deleteButton.setAttribute("class","delete");
	deleteButton.addEventListener("click", dissapear);
	ul.appendChild(li);
	input.value = "";
}

// Adding click and enter action on the enter button

function addListAfterClick() {
	if (input.value.length > 0) {
		createListElement();
	}
}

function addListAfterEnter(event) {
	if (input.value.length > 0 && event.which === 13) {
		createListElement();
	}
}

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterEnter);

// Adding click action on the delete button
function dissapear() {
	this.parentElement.remove();
}

for (let x = 0; x < allDeleteButtons.length; x++) {
	allDeleteButtons[x].addEventListener("click", dissapear);
}

// Adding click on the list elements

function addClass() {
	this.classList.toggle("done");
}


for (let i = 0; i < listElements.length; i++) {
	listElements[i].addEventListener("click", addClass);
}