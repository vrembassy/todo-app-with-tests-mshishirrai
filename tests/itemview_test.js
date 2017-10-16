var expect = chai.expect;


describe("Item view tests", function() {
    "use strict";

	  var item,name,$ul;
	  var todos= {id : "1", name: "Impl", status: "checked"};
	  
    beforeEach(function(){
        item = new todo.itemview();
		$ul=document.createElement("ul");
		
    });

	
	   describe("Constructor", function(){
        it("Should be constructor", function() {
          expect(item).to.be.an('object');
        });
    });
	
	 describe("Init", function(){
        it("Should initialize the element", function() {
        expect(item.init()).to.be.true;
		
        });
    });
	 describe("Display", function(){
        it("Should return the html content", function() {
         expect(item.display(todos.name,todos.id).$el).to.be.an.instanceOf(Element);
        });
    });

	describe("Checking delegation",function(){
		it("Checkbox effect delegation",function(){
		item.display().checkBoxEffect();
			expect(item.$el.classList.contains('addl')).to.be.true;
	//expect($name.classList.contains("addl")).to.be.true;
		});
		it("Striked effect",function(){
		 expect(item.$el.classList.contains('addl')).to.be.false;
		});
	});
	
	
	describe("Remove", function(){
        it("Should delete the element", function() {
		$ul.append(item.display(todos.name, todos.id).$el);
			expect(item.remove(todos.id).$el).to.be.null;
        });
    });
	 });
	 
	 
	 
	  