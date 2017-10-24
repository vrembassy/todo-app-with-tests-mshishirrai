window.todo = window.todo || {};        
window.todo.itemview=
(function(window){
             "use strict"; 
			 
			 var todo = {id: "1", name: "Impl", stat: "unchecked"};
			 var divid = "div"+todo.id;
			 
                function itemview(todo) {
				this.todo= todo;
             this.$el = $createEl("li"); 
			 this.$el.id = this.elId = "item_" + this.itemid;
			$delegate(this.$el,"checkButton","click",this.checkBoxEffect.bind(this));
			$delegate(this.$el,"deletestyle","click",this.remove.bind(this));
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
					this.$el.innerHTML=elm;
					return this;
				};
				
				
	itemview.prototype.checkBoxEffect=function(id,divId){
		//alert(id+"gg"+divId);
	var chk = document.getElementById(id);
			this.$el.classList.toggle("addl");
			if(this.$el.classList.contains("addl")){
				todo.stat = "checked";
				return this;
	}
	else 
	{
		todo.stat = "unchecked";
	}
	//retun this;	
};
		
				
                itemview.prototype.remove = function () {
						var outerDivId = "#"+this.divid;
					//	var outerDiv = document.querySelector(outerDivId);
						$removeEl(this.$el);
						this.$el=null;
						return this;
					}	
 return itemview;
                     
})(window);
	