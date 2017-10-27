window.Todo = window.Todo || {};        
window.Todo.itemsview=
(function(window){


//var todos = {id: "1", name: "Design", state: "unchecked"};
	//var divid ="div"+todo.id;
	var item,itemstodo,$div,divid;
	
	
	
                function itemsview(todoarray) {
				this.todoarray= todoarray;
				this.item = new Todo.itemview(this.todoarray);
				this.itemstodo= new Todo.itemview(this.todoarray);
				//this.$div = $createElDiv ("div");
				return this;
                }
 
            
 
                itemsview.prototype.display = function () { 
					
					var items= this.todoarray;
					var div= document.createElement("DIV");
					div.id="div"+items.id;
				//	var state= "unchecked";
					div.innerHTML =this.item.display();
					var $ul = document.querySelector("#disp");//........
			$ul.appendChild(div);
					return this;
									
				};
               
			   itemsview.prototype.add = function(){
	
			this.display();
			   }
				
				itemsview.prototype.assignListeners=function(){
					this.item= new Todo.itemview(this.todoarray);
					this.itemstodo= new Todo.itemsview(this.todoarray);
					
					var id = event.target.id;
				var	$item = event.target;
					if ($item.classList.contains("checkButton")){ 
						var dvid = event.target.getAttribute("id");
						this.item.checkBoxEffect(dvid);
					}
					else if($item.classList.contains("deletestyle")){
						
						var outerDivId = event.target.getAttribute("dvid");
						var itemid = event.target.getAttribute("itemid");
						this.itemstodo.remove(outerDivId,itemid);													
					}
				
				};
				 itemsview.prototype.remove = function (id,itid) {
					
					 var item=new Todo.itemview(this.todoarray);
					this.item.remove(id,itid);
					//return this;
				};
 
              return itemsview;     
})(window);
 