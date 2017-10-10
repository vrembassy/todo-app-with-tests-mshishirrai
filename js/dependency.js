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

return{
item : item,
items : items,
app : app
};
})();