//coment
function filterUsersOnKeyUp(textbox) {
		loadUsers(textbox.value)
}

function getIdOfButton(button) {
	return button.id.substring(BTN.length);
}

function followButtonOnClick() {
	var id = getIdOfButton(this);
	if (this.followed) {
		updateButtonAttributes(this, CLASS_DANGER, CLASS_PRIMARY, FOLLOW);
		moveToUsers(id);
	} else {
		updateButtonAttributes(this, CLASS_PRIMARY, CLASS_DANGER, UNFOLLOW);
		moveToFollowees(id);
	}
	this.followed = !this.followed;
	filterUsersOnKeyUp(document.getElementById("filterUsersTextBox"))
}

function moveToUsers(id) {
	moveElementToUsersList(id); // this gets the li element
	moveToUsersList(id);
}

function moveToFollowees(id) {
	moveElementToFolloweesList(id); // this gets the li element
	moveToFolloweesList(id);
}

function updateButtonAttributes(button, removeClass, addClass, html) {
	button.classList.remove(removeClass);
	button.classList.add(addClass);
	button.innerHTML = html;
}

function moveElementToFolloweesList(liId) {
	moveElementBetweenLists(liId, 'followees-list');
}

function moveElementToUsersList(liId) {
	moveElementBetweenLists(liId, 'users-list');
}

function moveElementBetweenLists(liId, listToId) {
	var element = document.getElementById(LI+liId);
	element.parentNode.removeChild(element);

	var list = document.getElementById(listToId);
	list.appendChild(element);
}

function moveToFolloweesList(id)  {
	usersArray = moveUserBetweenArrays(usersArray, followeesArray, id);
}

function moveToUsersList(id) {
	followeesArray = moveUserBetweenArrays(followeesArray, usersArray, id);
}

function moveUserBetweenArrays(arrayFrom, arrayTo, id) {
	var arrayElement = arrayFrom.find(e=>e.id == id);
	arrayElement.followed = !arrayElement.followed
	arrayTo.push(arrayElement);
	arrayFrom = arrayFrom.filter(e => e.id != id);
	return arrayFrom;
}

function createUserLiElement(user) {

	var userLi = document.createElement(LI);
	userLi.id = LI+user.id;

	var formGroupDiv = createDivElement("form-group");

	var userAvatar = createDivElement("user-avatar")
	var imgElement = createImgElement("../images/useravatar.png");
	userAvatar.appendChild(imgElement);

	var buttonDiv = createDivElement();
	var buttonElement = createButtonElement('btn user-action ', user.followed ? UNFOLLOW : FOLLOW);
	buttonElement.className +=  user.followed ? CLASS_DANGER : CLASS_PRIMARY;
	buttonElement.followed = user.followed;
	buttonElement.id = BTN+user.id;
	buttonElement.addEventListener("click", followButtonOnClick);
	buttonDiv.appendChild(buttonElement);

	var userNameLabel = createLabelElement('user-name', user.username);

	formGroupDiv.appendChild(userAvatar);
	formGroupDiv.appendChild(buttonDiv);
	formGroupDiv.appendChild(userNameLabel)
	userLi.appendChild(formGroupDiv);

	return userLi;
}

function load() {
	loadUsers();
	loadFollowees();
}
function loadUsers(filter) {
	filter = filter || EMPTY_STRING;
	var usersList = document.getElementById('users-list');
	usersList.innerHTML = EMPTY_STRING;
	usersArray.forEach(function (currentUser) {
		if (currentUser.username.includes(filter)) {
			usersList.appendChild(createUserLiElement(currentUser));
		}
	})
}
function loadFollowees() {
	var followeesList = document.getElementById('followees-list');
	followeesList.innerHTML = EMPTY_STRING;
	followeesArray.forEach(function (currentUser) {
		followeesList.appendChild(createUserLiElement(currentUser));
	})
}

var usersArray =
	[
		{id: "0", username: 'Marty McFly', followed: false},
		{id: "1", username: 'Janis Joplin', followed: false},
		{id: "2", username: 'Albert Einstein', followed: false},
		{id: "3", username: 'Genghis Khan', followed: false},
		{id: "5", username: 'Forest Gump', followed: false},
		{id: "6", username: 'Caligula', followed: false},
		{id: "7", username: 'Winnie The Poh', followed: false},
		{id: "8", username: 'Obama', followed: false},
	];

var followeesArray = [
	{id: "4", username: 'Dracula', followed: true},
    {id: "9", username: 'Henry the 8th', followed: true}
];
//constants
const CLASS_PRIMARY = 'btn-primary';
const CLASS_DANGER = 'btn-danger';
const LI = "li";
const BTN = "btn";
const FOLLOW = "follow";
const UNFOLLOW = "unfollow";
const EMPTY_STRING = "";

window.onload = load();
