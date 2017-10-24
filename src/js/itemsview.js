window.todo = window.todo || {};        
window.todo.itemsview=
(function(window){


var todos = {id: "1", name: "Design", state: "unchecked"};
	var divid ="div"+todo.id;
	var item;
	var $div,divid;
	
	
                function itemsview(todos) {
				this.todos= todos;
				this.item = new todo.itemview(todos);
				this.$div = $createElDiv ("div");
				return this;
                }
 
                itemsview.prototype.init = function() {
                        $item1=document.querySelector("#items");
						$ul=document.querySelector("#disp");
						var Item=new todo.itemview();
						Item.init();
						return true;						
                };
 
                itemsview.prototype.display = function (items) { 
					
					var items= this.todo;
					var state= "unchecked";
					this.$div.innerHTML =this.item.display();
					return this;
					// $item1.value = null;
					// $div = document.createElement('DIV');
					// $div.id = items+"div";
					// var divid = $div.id;
					// var stat = "unchecked";
					// var Item=new todo.itemview();
					// $div.innerHTML = Item.display(items,divid);
					// $ul.appendChild($div);
					// var insertedItems = {id : divid, name : items, state : stat};
					// var store=new todo.store();
					// store.save(insertedItems);
					// return insertedItems;					
				};
               
				
				itemsview.prototype.assignListeners=function(){
					var Items= new itemsview();
					var Item=new todo.itemview();
					var store=new todo.store();
					var id = event.target.id;
					item = event.target;
					if (item.classList.contains("checkButton")){ 
						var dvid = event.target.getAttribute("divid");
						Item.checkBoxEffect(id,dvid);
					}
					else if(item.classList.contains("deletestyle")){
						
						var outerDivId = event.target.getAttribute("divid");
						Items.remove(outerDivId);													
						store.remove(outerDivId);														
					}
				
				};
				 itemsview.prototype.remove = function () {
					this.item.remove();
					$removeEl(this.$div);
					this.$div= null;
					// var Item=new todo.itemview();
					// Item.remove(outerDivId);
					return this;
				};
 
              return itemsview;     
})(window);
 