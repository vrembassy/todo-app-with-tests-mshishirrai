window.todo = window.todo || {};      
window.todo.appview= (function(window){
'use strict';
var tditems = {};	      													  				
	window.tditems = tditems;
//var store= new todo.store();
var Items = new todo.itemsview();	
	function appview(todos) {
                   this.todos= todos;
				   this.items= new todo.itemsview(todos);
				return this;
    }
	
	appview.prototype.init = function() {
            var ul = document.querySelector("#disp");
			var itm = document.querySelector("#items");
			itm.addEventListener("keydown" ,this.add, false);       				
			ul.addEventListener("click",Items.assignListeners);  				
			var items = store.init();											  				
			
			Items.init();																
			this.display(items);
	};  
	
	appview.prototype.display=function($items){
				this.items.display();	
				return this;
			
		//return $items[0];	
	};
	appview.prototype.add=function(){
		var itemText = document.querySelector("#items");
			if(event.keyCode === 13){
				if (itemText.value.length < 1 || itemText.value == " "){
					alert("enter proper input");
				}
				else{  	
					
					Items.display(itemText.value);					  				
				}
			}
	};
 
                 
			   return appview; 
})(this);
 