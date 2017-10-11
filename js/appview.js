window.todo = window.todo || {};      
window.todo.appview= (function(window){
'use strict';
var tditems = {};	      													  				
	window.tditems = tditems;
var store=new todo.store();
var Items = new todo.itemsview();	
	function appview() {
                   
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
			//return true;
	};  
	
	appview.prototype.display=function($items){
	for(var i=0;i<$items.length;i++){
				Items.display($items[i]);												
			} 
			return true;
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
 