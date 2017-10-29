//comment
function createDivElement(className) {
	className = className || "";
	var div = document.createElement('div');
	div.className = className;
	return div;
}

function createHeadingElement(headingSize, headingClass, headingContent) {
    headingClass = headingClass || "";
    var headingElement = document.createElement('h'+headingSize);
    headingElement.className = headingClass;
    headingElement.innerHTML = headingContent;
    return headingElement;
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

