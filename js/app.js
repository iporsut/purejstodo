"use strict";

var NewItemDOM = (function() {
    function addNewItemListener(callback) {
        $("#add").on('click', function() {
            var desc = $("#newItem").val();
            callback({"desc" : desc});
        });
    }

    return {
        addNewItemListener: addNewItemListener,
    };
})();

var ItemListDOM = (function() {
    function append(item) {
        $("#listItem").append($("<li>").text(item.desc));
    }

    return {
        append: append,
    };
})();

var TodoController = (function() {
    var  _newItemDOM, _itemListDOM;

    function onAddNewItem(item) {
        _itemListDOM.append(item);
    }

    function init(NewItemDOM, ItemListDOM) {
        _newItemDOM = NewItemDOM;
        _itemListDOM = ItemListDOM;

        _newItemDOM.addNewItemListener(onAddNewItem);
    }

    return {
        init : init,
        onAddNewItem: onAddNewItem,
    };
})();
