window.Todo = window.Todo || {};        
window.Todo.store =
(function(window){
              
                function store(itd) {
                               
								this.itd= itd;
                }
 
 
 store.prototype.writeone = function() {
	// var count=localStorage.length;
	// count++;
		//	var itemid = "todo"+count
		//	var itemname= this.itd;
		var itemid = this.itd.id;
		var itemname= this.itd.id
			var stat = "unchecked";
		    window.localStorage.setItem(itemid,JSON.stringify({id:itemid,name:itemname,state:stat}));
		}
		
 store.prototype.readone = function() {
			var itemid = localStorage.length-1;
			var newitem = JSON.parse(window.localStorage.getItem(itemid));
			return newitem;
		}
 
 store.prototype.readMany = function(){
			var arr = [];
			var index = 0;
			window.localStorage.setItem('todo1', JSON.stringify({id:'todo1',name:'buy milk',state:'unchecked'}));
			for(var key in localStorage){
				var storeditems =JSON.parse(window.localStorage.getItem(key));
				arr[index++]=storeditems;
			}
			return arr; 
		}
 
 	store.prototype.setStatus = function(Id,Name,State){
			window.localStorage.setItem(Id,JSON.stringify({id:Id,name:Name,state:State}));
			var newitem = JSON.parse(window.localStorage.getItem(Id));
			
		}
		store.prototype.updateItems = function(id)
		{
			window.localStorage.removeItem(id);
			
		}
 
       
 
         return store;           
})(window);
 