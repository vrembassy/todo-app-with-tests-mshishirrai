window.todo = window.todo || {};        
window.todo.itemsview=
(function(window){
                function itemsview(name) {
                               
								this.name= name || "success";
                }
 
                itemsview.prototype.init = function() {
                        $item1=document.querySelector("#items");
						$ul=document.querySelector("#disp");
						var Item=new todo.itemview();
						Item.init();   
                };
 
                itemsview.prototype.display = function (items) {
					var item1= document.querySelector("#items");				
					item1.value = null;
					$div = document.createElement('DIV');
					$div.id = items+"div";
					var divid = $div.id;
					var stat = "unchecked";
					var Item=new todo.itemview();
					$div.innerHTML = Item.display(items,divid);
					$ul.appendChild($div);
					var insertedItems = {id : divid, name : items, state : stat};
					var store=new todo.store();
					store.save(insertedItems);	
					return items;
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
				 itemsview.prototype.remove = function (outerDivId) {
					
					var Item=new todo.itemview();
					Item.remove(outerDivId);
					return outerDivId;
				};
 
              return itemsview;     
})(window);
 