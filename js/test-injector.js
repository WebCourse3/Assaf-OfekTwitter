function test() {
    var testDiv = document.getElementById('test-results');

    function test_group(name, test_group_function) {
        var testGroupPanelDiv = createDivElement('panel panel-success');
        var panelHeadingDiv = createDivElement('panel-heading');
        var headingElement = createHeadingElement(3, 'panel-title', name);
        panelHeadingDiv.appendChild(headingElement);

        var panelBodyDiv = createDivElement('panel-body zero-padding');

        test_group_function();

        testGroupPanelDiv.appendChild(panelHeadingDiv);
        testGroupPanelDiv.appendChild(panelBodyDiv);

        testDiv.appendChild(testGroupPanelDiv);

    }

    function assert(value, name) {
        alert("caller is " + arguments.callee.caller.toString());

    }


    test_group('test', function() {
         assert(true, "test");
         assert(false, "test1");
    });
};
