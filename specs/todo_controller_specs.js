"use strict";

describe("TodoController", function() {
    it("set up NewItemDOM add new item callback", function() {
        spyOn(NewItemDOM, "addNewItemListener");
        TodoController.init(NewItemDOM, ItemListDOM);
        expect(NewItemDOM.addNewItemListener).toHaveBeenCalledWith(TodoController.onAddNewItem);
    });

    it("add item update ItemListDOM when onAddNewItem called", function() {
        spyOn(NewItemDOM, "addNewItemListener");
        spyOn(ItemListDOM, "append");

        TodoController.init(NewItemDOM, ItemListDOM);


        TodoController.onAddNewItem({"desc": "sample"});
        expect(ItemListDOM.append).toHaveBeenCalledWith({"desc": "sample"});
    });
});
