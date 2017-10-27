window.Todo = window.Todo || {};      
window.Todo.appview= (function(window){
'use strict';
var items,store;	      													  				
	//window.tditems = tditems;
//var store= new todo.store();
//var Items = new todo.itemsview();	
	function appview(todoarray) {
                   this.todoarray= todoarray;
				   this.items= new Todo.itemsview(todoarray);
				   var ulElement = document.querySelector("#disp");//...
					var itemText = document.querySelector("#items");//.....
				// itemText.addEventListener("keydown" ,this.add, false); 
			// ulElement.addEventListener("click",this.items.assignListeners); 
				this.display();
				return this;
    }
	

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
					var itemid= "todo"+itemText.value;
					this.store= new Todo.store(itemText.value);
					this.store.writeone();
					var inserteditem = this.store.readone();
						this.items = new Todo.itemsview(inserteditem);
						this.items.add();
						itemText.value = null;					  				
				}
			}
	}
 
                 
			   return appview; 
})(this);
 