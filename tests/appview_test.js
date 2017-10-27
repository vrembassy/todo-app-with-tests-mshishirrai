var expect = chai.expect;

describe("App view tests", function() {
    "use strict";

	  var items,item,app;
	var todos = {id: "1", name: "Code", state: "unchecked"};
	var $ul,$checkbox,$delButton,$itemBox;

    beforeEach(function(){
		$itemBox= document.getElementById("items");//.........
		app = new Todo.appview(todos);
		items = new Todo.itemsview(todos);
		item = new Todo.itemview(todos);
		$ul = document.createElement("ul");
		$itemBox = document.createElement("input"); 
		$itemBox.type = "text";
		$itemBox.id = "textBoxId"
    });

	
	   describe("Constructor", function(){
        it("Should be constructor", function() {
          expect(app).to.be.an('object');
        });
    });
	
		 describe("Display", function(){
        it("Should have preloaded items", function() {
        expect(app.display()).to.be.an.instanceOf(Object);;
		
        });
    });
	
	
describe("Add",function(){
		it("Event should fire on pressing enter button",function(){
			$ul.appendChild($itemBox);
			var eventObj = document.createEvent("Events");
			eventObj.initEvent("keydown", true, true);
			$itemBox.value = "impl";
			eventObj.keyCode = 13;
			$itemBox.dispatchEvent(eventObj);
			expect($ul.querySelector("#textBoxId")).to.exist;
		});
	});
	});