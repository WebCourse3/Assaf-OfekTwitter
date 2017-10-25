
function createDivElement(className) {
	var div = document.createElement('div');
	div.className = className;
	return div;
}

function createImgElement(srcRef) {
	var img = document.createElement('img');
	img.src = srcRef;
	return img;
}