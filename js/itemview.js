window.todo = window.todo || {};        
window.todo.itemview=
(function(window){
             "use strict"; 
                function itemview() {
                               
								return this;
                }
			   
 
                
                itemview.prototype.init = function() {
                   var $ul = document.querySelector("#disp");
					var init = document.querySelector("#items");
					return true;					
                };
 
                itemview.prototype.display = function (items,divid) {

					//var count =$ul.childNodes.length;
					var buttonid="button"+items;
					var elm = [];
					var index =0;
					elm[index++] = "<li id="+items+"li>";
					
					elm[index++] = "<input type = 'checkbox' id = '"+buttonid+"' class='checkButton' divid='"+divid+"'/>";
					elm[index++] = "<span>"+items+"</span>";
					elm[index++] = "<a href='#' divid="+divid+" id="+items+"delete"+" class='deletestyle'>Delete</a>";
					elm[index++] = "</li>";
					elm = elm.join("");
					//console.log(elm);
					return elm;
				};
				
				
	itemview.prototype.checkBoxEffect=function(id,divId){
		
	var chk = document.getElementById(id);
	var name = chk.nextSibling;
	if(chk.checked)
	{     
	
	name.classList.add("addl");
	tditems[divId].state = "checked";
	}
	else 
	{
		name.classList.remove("addl");
		tditems[divId].state = "unchecked";
	}
	//retun this;	
}
		
				
                itemview.prototype.remove = function (divid) {
							var outerDivId = "#"+divid;
							
							var outerDiv = document.querySelector(outerDivId);
							
							outerDiv.remove();
							
						outerDiv= null;
						return outerDiv;
					}	
 return itemview;
                     
})(window);
	