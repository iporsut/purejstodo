"use strict";
describe("TodoController", function() {
    beforeEach(function() {
        $ = setupContext('<form id="newItemForm">Item <input id="newItem" /><button id="add">Add</button></form><h1>Todo List</h1><ul id="listItem"></ul>');
    });

    it("add item update ItemListDOM when onAddNewItem called", function() {

        TodoController.init(NewItemDOM, ItemListDOM);

        $("#newItem").val('ทดสอบ');

        $("#newItemForm").trigger("submit");

        expect($("#listItem li").text()).toEqual('ทดสอบ');
    });
});

function setupContext(htmlFixture) {
    var body = document.createElement("body");
    jQuery(body).html(htmlFixture);

    return function(selector) {
        return jQuery(selector, body);
    };
}
