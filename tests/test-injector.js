class testInjector {

	constructor(testGroupName, functions) {
		this.testGroupName = testGroupName;
		this.functions = functions;
	}

	inject() {

		//injects main element
		var rowDiv = createDivElement('row');
		var colDiv = createDivElement('col-sm-6');
		var testDiv = createDivElement();
		testDiv.id = "test-results";
		colDiv.appendChild(testDiv);
		rowDiv.appendChild(colDiv);
		document.body.appendChild(rowDiv);

		var that = this;                                      //test injector context

		function inject_test_group(name, test_group_function) {

			that.testGroupPanelDiv = createDivElement('panel panel-success');

			that.panelBodyDiv = createDivElement('panel-body');
			that.panelBodyDiv.style.padding = 0;

			var panelHeadingDiv = createDivElement('panel-heading');
			var headingElement = createHeadingElement(3, 'panel-title', name);
			panelHeadingDiv.appendChild(headingElement);

			test_group_function();

			that.testGroupPanelDiv.appendChild(panelHeadingDiv);
			that.testGroupPanelDiv.appendChild(that.panelBodyDiv);

			testDiv.appendChild(that.testGroupPanelDiv);
		}

		function assert(value, name) {
			var testResultDiv = createDivElement('text-white');

			testResultDiv.classList.add(value ? 'bg-success' : 'bg-danger');

			if (value === false) {
				that.testGroupPanelDiv.classList.remove('panel-success')
				that.testGroupPanelDiv.classList.add('panel-danger');
			}
			testResultDiv.innerHTML = name + ' has ' +  (value ? 'succeeded' : 'failed');
			that.panelBodyDiv.appendChild(testResultDiv);
		}


		inject_test_group(that.testGroupName, function () {
			that.functions.forEach(jFunc=>{
				assert(jFunc.func(), jFunc.desc);
			}
			);
		});

	}
}
