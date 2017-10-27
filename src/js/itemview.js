window.Todo = window.Todo || {};        
window.Todo.itemview=
(function(window){
             "use strict"; 
			
			 
                function itemview(todo) {
				this.todo= todo;
				this.$el = $createEl("li"); 
				$delegate(this.$el,"checkButton","click",this.checkBoxEffect.bind(this));
				$delegate(this.$el,"deletestyle","click",this.remove.bind(this));
				return this;
                }
			  
 
                itemview.prototype.display = function () {
				var items = this.todo;
				var itemid= this.todo.id;
				var ul = document.querySelector("#disp");
					//var count =$ul.childNodes.length;
					var checkbuttonid=this.todo.id;
					var deletebuttonid="deletebutton"+this.todo.id;
					var divid="div"+this.todo.id;
					var liid="li"+this.todo.id;
					
					var elm = [];
					var index =0;
					elm[index++] = "<li id="+liid+"li>";
					
					elm[index++] = "<input type = 'checkbox' id = '"+checkbuttonid+"' class='checkButton' divid='"+divid+"'/>";
					elm[index++] = "<span>"+items.name+"</span>";
					elm[index++] = "<a href='#' divid="+divid+" id="+deletebuttonid+"delete"+" class='deletestyle'>Delete</a>";
					elm[index++] = "</li>";
					elm = elm.join("");
					this.$el.append(elm);
			this.$el.innerHTML = elm;
					return this;
				};
				
				
	itemview.prototype.checkBoxEffect=function(id){
		//alert(id+"gg"+divId);
		//var store= new Todo.store(this.todo);
		//var chk= document.getElementById(id);
		//var name= chk.nextSibling;
		//name.classList.toggle("addl");
		this.$el.classList.toggle("addl");
		
			if(this.$el.classList.contains("addl")){
				//this.todo.state = "checked";
				var state = "checked";
				//store.setStatus(id,name.innerHTML,state);
				//store.setStatus(id,name.innerHTML,state);
				//console.log(todo);
				return this;
			}
			else{
				var state = "unchecked";
				//store.setStatus(id,name.innerHTML,state);
				//console.log(todo);
			}
		};
		
	
		
				
                itemview.prototype.remove = function (divid,itemid) {
						var outerDivId = divid;
					//var outerDiv = document.querySelector("#"+divid);
						//outerDiv.innerHTML= "";
						//store.updateItems(itemid);
							$removeEl(this.$el);
					this.$el=null;
						return this;
					}	
 return itemview;
                     
})(window);
	