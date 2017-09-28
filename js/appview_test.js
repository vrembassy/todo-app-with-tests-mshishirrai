var expect = chai.expect;

describe("Appview", function() {
describe("constructor", function() {
  it("should have default name", function() {
var val  = new todo.appview();
expect(val.name).to.equal("success");
	});
	
	it("should set name if provided", function() {
			var val= new todo.appview("items");
			expect(val.name).to.equal("items");
		});
	});
	
	
	
		describe("#display", function() {
		it("should throw if no target is passed in", function() {
			expect(function() {
			(new appview()).display();
			}).to.throw(Error);
		});
		it("should dispaly new item if target is passed", function() {
			
			disp = (new todo.appview("item1")).display("item1");
			expect(disp).to.equal("item1");
		});
	});
	
	describe("#add", function() {
		it("should throw if target is passed in", function() {
			expect(function(){
				(new todo.appview()).add();
			}).to.throw(Error);
		});
	});
});
