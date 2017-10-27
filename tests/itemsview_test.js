var expect = chai.expect;


describe("Items view tests", function() {
    "use strict";
	var items,$ul,item;
	 var todos= {id : "1", name: "Impl", status: "checked"};
	 
	 beforeEach(function(){
        items = new Todo.itemsview(todos);
		$ul=document.createElement("ul");
    });
	
	describe("Constructor", function(){
        it("Should be constructor", function() {
          expect(items).to.be.an('object');
        });
    });
	

	
	 describe("Display", function(){
        it("Should return the inserted item", function() {
         expect(items.display().$div).to.be.a.instanceOf(Element);
        });
    });
	
	
	
	describe("Remove", function(){
        it("Should delete the element", function() {
		$ul.append(items.display().$div);
			expect(items.remove().$div).to.be.null;
        });
    });
	
	 });