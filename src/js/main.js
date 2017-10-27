window.Todo = window.Todo || {};      
window.Todo.main= (function(){
'use strict';
 document.addEventListener("DOMContentLoaded", function(event){
	 
				var store=new Todo.store();
				
				var items = store.readMany();
									
				for(var i=0;i<items.length;i++){
				var app=new Todo.appview(items[i]);
				} 
 });	           
})();