var expect = chai.expect;

describe("Items View test",function(){
var items,app,item,store,$checkBox,deleteButton,name;
beforeEach(function(){
		 item = todo.dependency.item();
		items = todo.dependency.items();
		app= todo.dependency.app();
		$div = document.createElement('DIV');
		$checkBox = document.getElementById("buttonDesign");
		$name = $checkBox.nextSibling;
	});
	
	describe("Constructor",function(){
		it("Should be a constructor",function(){
			expect(items).to.be.an('object');
		});
	});
	
	
	describe("Init",function(){
		it("Should be an object",function(){
			expect(items.init()).to.be.an('object');
		});
	});
	
	
	describe("Display",function(){
		it("Should return the html element",function(){
		
	expect($div.innerHTML=item.display("Code","Codediv")).to.be.a("string");
	
	});
	});
	describe("Checking delegation",function(){
		it("Checkbox effect delegation",function(){
			$checkBox.click();
			expect($name.classList.contains("addl")).to.be.true;
			$checkBox.click();
		});
		it("Delete button delegation",function(){
			app.display("T");
			$outerDiv = document.getElementById("Tdiv");
			$deleteButton = document.getElementById("Tdelete");
			$deleteButton.click();
			expect($deleteButton.classList.contains("deletestyle")).to.be.true;
			
		});
	});
		describe("Remove",function(){
		it("Should remove the html element",function(){
			items.remove("Codediv")
			$div = document.querySelector("Codediv");
			expect($div).to.be.null;
	});
	});
	
	
	
	});