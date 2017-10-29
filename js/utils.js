//comment
function createDivElement(className) {
	className = className || "";
	var div = document.createElement('div');
	div.className = className;
	return div;
}

function createImgElement(srcRef) {
	var img = document.createElement('img');
	img.src = srcRef;
	return img;
}

function createLabelElement(className, value) {
	var label = document.createElement('label');
	label.className = className;
	label.innerHTML = value;
	return label;
}

function createButtonElement(className, value) {
	var button = document.createElement('button');
	button.type = 'button';
	button.className = className;
	button.innerHTML = value;
	return button;
}

