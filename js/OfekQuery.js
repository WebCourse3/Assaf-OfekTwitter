function $(query) {
	return new OfekQuery(query);
}

function OfekQuery(query) {

	this.query = query;

	var oQuery = this;

	this.result = [];

	var separation = ['#', '.', ' '];

	(function () {var firstChar = query[0];
	if (firstChar === separation[0]) {
		oQuery.result = [document.getElementById(query.substring(1))];
	} else if (firstChar === separation[1]) {
		oQuery.result = document.getElementsByClassName(query.substring(1));
	} else {
		debugger;
		oQuery.result = document.getElementsByTagName(query);
	}})();

}

OfekQuery.prototype.addClass = function (className) {
	for (let index = 0; index < this.result.length; ++index) {
		this.result[index].classList.add(className);
	}
}

OfekQuery.prototype.removeClass = function (className) {
	for (let index = 0; index < this.result.length; ++index) {
		this.result[index].classList.remove(className);
	}
}

OfekQuery.prototype.each = function (func) {
	for (let index = 0; index < this.result.length; ++index) {
		func(this.result[index]);
	}
}



OfekQuery.prototype.map = function (func) {
	var funcResult = [this.result.length]
	for (let index = 0; index < this.result.length; ++index) {
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

	}
}
