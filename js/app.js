"use strict";

var NewItemDOM = (function() {
    function addNewItemListener(callback) {
        $("#newItemForm").on('submit', function() {
            var desc = $("#newItem").val();
            callback({desc : desc});
            $("#newItem").val("");
            return false;
        });
    }

    return {
        addNewItemListener: addNewItemListener,
    };
})();

var ItemListDOM = (function() {
    function append(item) {
        $("<li>").text(item.desc).appendTo($("#listItem"));
    }

    return {
        append: append,
    };
})();

var TodoController = (function() {
    var  newItemDOM, itemListDOM;

    function onAddNewItem(item) {
        itemListDOM.append(item);
    }

    function init(NewItemDOM, ItemListDOM) {
        newItemDOM = NewItemDOM;
        itemListDOM = ItemListDOM;

        newItemDOM.addNewItemListener(onAddNewItem);
    }

    return {
        init : init,
        onAddNewItem: onAddNewItem,
    };
})();
