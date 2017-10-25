
function followButtonOnClick() {

	var classPrimary = 'btn-primary';
	var classDanger = 'btn-danger';
	if (this.followed) {
		this.classList.remove(classDanger);
		this.classList.add(classPrimary);
		this.innerHTML = "follow";
	} else {
		this.classList.remove(classPrimary);
		this.classList.add(classDanger);
		this.innerHTML = "unfollow";
	}

	this.followed = !this.followed;
}

function createUserLiElement(user) {
	var userLi = document.createElement("li");
	var formGroupDiv = createDivElement("form-group");

	var userAvatar = createDivElement("user-avatar")
	var imgElement = createImgElement("../images/useravatar.png");
	userAvatar.appendChild(imgElement);

	var buttonDiv = document.createElement("div");

	var buttonElement = createButtonElement('btn user-action ', user.followed ? 'unfollow' : 'follow');
	buttonElement.className +=  user.followed ? 'btn-danger' : 'btn-primary';
	buttonElement.followed = user.followed;

	buttonElement.addEventListener("click", followButtonOnClick);

	buttonDiv.appendChild(buttonElement);

	var userNameLabel = createLabelElement('user-name', user.username);

	formGroupDiv.appendChild(userAvatar);
	formGroupDiv.appendChild(buttonDiv);
	formGroupDiv.appendChild(userNameLabel)

	userLi.appendChild(formGroupDiv);

	return userLi;
}

function loadUsers() {
	var usersElement = document.getElementById('users');
	var ulList = usersElement.getElementsByClassName('users-list')[0];

	usersArray.forEach(function (currentUser) {
		ulList.appendChild(createUserLiElement(currentUser));
	})
}

var usersArray =
	[
		{username: 'Marty McFly', followed: false},
		{username: 'Janis Joplin', followed: false},
		{username: 'Albert Einstein', followed: false},
		{username: 'Genghis Khan', followed: false},
		{username: 'Dracula', followed: true},
		{username: 'Forest Gump', followed: false},
		{username: 'Caligula', followed: false},
		{username: 'Winnie The Poh', followed: false},
		{username: 'Obama', followed: false},
		{username: 'Henry the 8th', followed: true}

	];

window.onload = loadUsers();