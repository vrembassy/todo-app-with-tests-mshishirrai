window.todo = window.todo || {};        
window.todo.store =
(function(window){
              
                function store() {
                               
								return this;
                }
 
        store.prototype.init = function() {
                 var plitms = ["Design","Code"];
				return plitms;					
            }
 
		store.prototype.save = function (insertedItems) {
				idOfTheItem = insertedItems.id;
				tditems[idOfTheItem] = insertedItems;
				return insertedItems;//.........
			}
        store.prototype.remove = function (id) {
				return delete tditems[id];//.........
					
			}
 
         return store;           
})(window);
 