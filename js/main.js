window.todo = window.todo || {};      
window.todo.main= (function(){
'use strict';
 document.addEventListener("DOMContentLoaded", function(event){
				var app=new todo.appview();
				app.init();
 });	           
})();