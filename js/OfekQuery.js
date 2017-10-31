function $(query) {
	return new OfekQuery(query);
}

function OfekQuery(query) {
	this.result = ResolveQuery(query);

	function ResolveQuery(rquery) {
		function ResolveRecursion(query, array, inside) {
			var firstChar = query[0];
			var word = getWord(query.substring(1));
			var newArray = [];

			if (firstChar === ' ') {
				return ResolveRecursion(query.substring(1), array, true);
			}
			else {
				for (var fatherElement of array) {
					if (inside) {
						for (var j = 0; j < fatherElement.childNodes.length; j++) {
							var allowPush =
								(firstChar === '.' && fatherElement.childNodes[j].className === word) ||
								(firstChar === '#' && fatherElement.childNodes[j].id === word) ||
								(fatherElement.childNodes[j].tagName === word);

							if (allowPush) {
								newArray.push(fatherElement.childNodes[j]);
							}
						}
					} else {
						var allowPush =
							(firstChar === '.' && fatherElement.className === word) ||
							(firstChar === '#' && fatherElement.id === word) ||
							(fatherElement.tagName === word);

						if (allowPush) {
							newArray.push(fatherElement);
						}
					}
				}
			}

			if (word.length === 0) {
				return array;
			}

			return ResolveRecursion(query.substring(1 + word.length), newArray, false)
		}

		function getWord(query) {
			var i = 0;
			while (!('#. '.includes(query[i])) && i < query.length) {
				i++;
			}
			return query.substring(0, i);
		}

		return ResolveRecursion(rquery, [document.body], true);
	}

}

OfekQuery.prototype.addClass = function (className) {
	for (var index = 0; index < this.result.length; ++index) {
		this.result[index].classList.add(className);
	}
}

OfekQuery.prototype.removeClass = function (className) {
	for (var index = 0; index < this.result.length; ++index) {
		this.result[index].classList.remove(className);
	}
}

OfekQuery.prototype.each = function (func) {
	for (var index = 0; index < this.result.length; ++index) {
		func(this.result[index]);
	}
}

OfekQuery.prototype.map = function (func) {
	var funcResult = [this.result.length]
	for (var index = 0; index < this.result.length; ++index) {
		funcResult[index] = this.result[index].cloneNode(true);
		func(funcResult[index]);
	}
	return funcResult;
}

OfekQuery.prototype.any = function (...funcs) {
	var ret = true;
	for( var i = 0; i < this.result.length; i++) {
		ret = true;
		for(var j = 0; j < funcs.length && ret; j++) {
			ret = ret && funcs[j](this.result[i]);
		}
		if (ret == true)
			return ret;
	}
	return false;
}

OfekQuery.prototype.all = function (...funcs) {
	var ret = true;
	for( var i = 0; i < this.result.length; i++) {
		ret = true;
		for(var j = 0; j < funcs.length && ret; j++) {
			ret = ret && funcs[j](this.result[i]);
			if (ret == false)
				return false;
		}

	}
	return true;
}


OfekQuery.prototype.filter = function (...funcs) {
	var ret = new OfekQuery(this.query);
	for( var i = 0; i < this.result.length; i++) {
		ret = true;
		for(var j = 0; j < funcs.length && ret; j++) {
			ret = ret && funcs[j](this.result[i]);
		}
		if (ret == true)
		{
			ret.result.add(this.result[i]);
		}
	}
	return ret;
}

OfekQuery.prototype.css = function (property, value) {
	for (ele in this.result) {
		ele.style[property] = value;
	}
}

OfekQuery.prototype.count = function () {
	return this.result.length;
}

OfekQuery.prototype.appendChild = function (childElement) {
	for (ele in this.result) {
		ele.appendChild(childElement.cloneNode(true));
	}
}

OfekQuery.prototype.getAttribute = function (attributeName) {
	var ret = [this.result.length];
	for (var i = 0; i < this.result.length; i++) {
		ret[i] = this.result[i].getAttribute(attributeName);
	}
}

OfekQuery.prototype.setAttribute = function (attributeName, attributeValue) {
	for (var i = 0; i < this.result.length; i++) {
		this.result[i].setAttribute(attributeName, attributeValue);
	}
}

OfekQuery.prototype.get = function (index) {
		return this.result[index];
}

