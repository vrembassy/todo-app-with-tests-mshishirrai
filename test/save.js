window.Todo = window.Todo || {};
var Save = (function(){
	var ref;
    var readHandler = null;
  var TODOS_URL = 'todos/';
	var app;
	function init(readHandler){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAObUIaoTt8pij0hYF-67V2608WBw58Q38",
    authDomain: "todo-8670c.firebaseapp.com",
    databaseURL: "https://todo-8670c.firebaseio.com",
    projectId: "todo-8670c",
    storageBucket: "todo-8670c.appspot.com",
    messagingSenderId: "740606377160"
  };
 
        app = firebase.initializeApp(config);
        console.log(app.name);
        ref = firebase.database().ref(TODOS_URL);
        ref.on('child_added', function(snapshot){
            if (readHandler) readHandler(snapshot.val());
        });
    }

    function add(item) {
        var key = ref.push().key; 
        var updates = {};
        updates[item.id] = item;
        ref.update(updates);
    }

    function update(item) {
        var updates = {};
        updates[item.id] = item;
        ref.update(updates);
    }

    function remove(id) {
        var updates = {};
        updates[id] = null;
        ref.update(updates);
    }

    function clean() {
        ref.off();
    }
	
	function read(){
		var item;
		var store = new Todo.Store();
		ref.on("value", function(items) {
			item = items.val();
			for(var x in item){
			store.writeOne(item[x]);
			console.log(item[x].id);
			console.log(item[x].name);
			console.log(item[x].state);
			}
		});
	}
    return {
        init: init,
        add: add,
        update: update,
        remove: remove,
        clean: clean,
		read : read,
    }
})();