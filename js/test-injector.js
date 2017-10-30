class testInjector {

/*	constructor(name, booleanFunctions) {
		this.name = name;
		this.booleanFuncitons = booleanFunctions;
	}*/

	inject() {
		var testDiv = document.getElementById('test-results');//main div, should appear on html page
		var that = this;//test injector context

		function inject_test_group(name, test_group_function) {

			that.testGroupPanelDiv = createDivElement('panel panel-success');

			var panelBodyDiv = createDivElement('panel-body zero-padding');
			that.panelBodyDiv = panelBodyDiv;

			var panelHeadingDiv = createDivElement('panel-heading');
			var headingElement = createHeadingElement(3, 'panel-title', name);
			panelHeadingDiv.appendChild(headingElement);

			test_group_function();

			that.testGroupPanelDiv.appendChild(panelHeadingDiv);
			that.testGroupPanelDiv.appendChild(panelBodyDiv);

			testDiv.appendChild(that.testGroupPanelDiv);
		}

		function assert(value, name) {
			var testResultDiv = createDivElement('text-white');
			var classToAdd = value ? 'bg-success' : 'bg-danger';
			var message = value ? 'succeed' : 'failed';
			testResultDiv.classList.add(classToAdd);
			if (value === false) {
				that.testGroupPanelDiv.classList.remove('panel-success')
				that.testGroupPanelDiv.classList.add('panel-danger');
			}
			testResultDiv.innerHTML = name + ' test has ' + message;
			that.panelBodyDiv.appendChild(testResultDiv);
		}

		inject_test_group('test', function () {
			assert(true, "test true");
			assert(false, "test false");
			assert(true, "test true");
		});

		inject_test_group('test2', function () {
			assert(true, "test true");
			assert(true, "test true");
			assert(true, "test true");
		});
	}
}


