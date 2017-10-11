var expect = chai.expect;


describe("Item view", function() {
    "use strict";

	  var item,app,$checkBox,$ul,$name,items;

    beforeEach(function(){
        item = todo.dependency.item();
		app = todo.dependency.app();
		items = todo.dependency.items();
		$ul= document.createElement("li");
		$checkBox = document.getElementById("buttonCode");
		$name = $checkBox.nextSibling;//..........
    });

	
	   describe("Constructor", function(){
        it("Should be constructor", function() {
          expect(item).to.be.an('object');
        });
    });
	
	 describe("Init", function(){
        it("Should init dom content", function() {
        expect(item.init()).to.be.true;;
		
        });
    });
	 describe("Display", function(){
        it("Should return the html content", function() {
        expect(item.display()).to.be.a("string");
        });
    });

	describe("Checking delegation",function(){
		it("Checkbox effect delegation",function(){
			$checkBox.click();
			expect($name.classList.contains("addl")).to.be.true;
			
		});
		it("Striked effect",function(){
			$checkBox.checked = true;
			expect($name.classList.contains("addl")).to.be.true;
			$checkBox.click();
		});
	});
	
	
	describe("Remove", function(){
        it("Should delete the element", function() {
			app.display("C");
			item.remove("Cdiv")
			$div = document.querySelector("Cdiv");
			expect($div).to.be.null;
        });
    });
	 });
	 
	 
	 
	  