"use strict";
describe("TodoController", function() {
    describe("Native querySelector", function() {
        beforeEach(function() {
            document.querySelector = setupContext('' +
                    '<form id="newItemForm">Item <input id="newItem" />' +
                    '<button id="add">Add</button>' +
                    '</form>' + 
                    '<h1>Todo List</h1>' +
                    '<ul id="listItem"></ul>'
                    );
        });

        it("add item update ItemListDOM when onAddNewItem called", function() {
            TodoController.init(NewItemDOM, ItemListDOM);

            document.querySelector("#newItem").value = "ทดสอบ";
            document.querySelector("#newItemForm").dispatchEvent(new Event('submit'));

            expect(document.querySelector("#listItem li").innerHTML).toEqual('ทดสอบ');
        });
    });

    describe("jQuery", function() {
        beforeEach(function() {
            $ = setupContextJQuery('' +
                    '<form id="newItemForm">Item <input id="newItem" />' +
                    '<button id="add">Add</button>' +
                    '</form>' + 
                    '<h1>Todo List</h1>' +
                    '<ul id="listItem"></ul>'
                    );
        });

        it("add item update ItemListDOM when onAddNewItem called", function() {
            TodoController.init(NewItemDOMJQuery, ItemListDOMJQuery);

            $("#newItem").val("ทดสอบ");
            $("#newItemForm").trigger('submit');

            expect($("#listItem li").text()).toEqual('ทดสอบ');
        });
    });
});

function setupContext(htmlFixture) {
    var realDocument = document;

    var body = realDocument.createElement("body");
    body.innerHTML = htmlFixture;

    return function(selector) {
        return body.querySelector(selector);
    };
}

function setupContextJQuery(htmlFixture) {
    var body = document.createElement("body");
    jQuery(body).html(htmlFixture);

    return function(selector) {
        return jQuery(selector, body);
    };
}
