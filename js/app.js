"use strict";

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

var NewItemDOM = (function() {
    function addNewItemListener(callback) {
        document.querySelector("#newItemForm").addEventListener('submit', function(e) {
            var desc = document.querySelector("#newItem").value;
            callback({desc : desc});
            document.querySelector("#newItem").value = '';
            e.preventDefault();
            return false;
        });
    }

    return {
        addNewItemListener: addNewItemListener,
    };
})();

var ItemListDOM = (function() {
    function append(item) {
        var l = document.createElement("li");
        l.innerHTML = item.desc;
        document.querySelector('#listItem').appendChild(l);
    }

    return {
        append: append,
    };
})();

var NewItemDOMJQuery = (function() {
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

var ItemListDOMJQuery = (function() {
    function append(item) {
        $("<li>").text(item.desc).appendTo($("#listItem"));
    }

    return {
        append: append,
    };
})();

