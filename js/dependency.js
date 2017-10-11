todo.dependency = (function() {
var item = function(){
return new todo.itemview();
}

var items = function(){
return new todo.itemsview();
}

var app = function(){
return new todo.appview();
}

var store = function(){
return new todo.store();
}

return{
item : item,
items : items,
app : app,
store : store
};
})();