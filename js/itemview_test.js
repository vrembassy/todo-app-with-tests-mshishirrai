var expect =chai.expect;
describe("Itemview", function() {
	describe("constructor", function() {
		it("should have a default name", function() {
			var item = new todo.itemview();
			expect(item.name).to.equal("success");
		});
		it("should set todo name if provided", function() {
			var items = new todo.itemview("items");
			expect(items.name).to.equal("items");
		});
	});
	describe("#display",function(){
		it("should throw if no target is passed ", function() {
			expect(function() {
				(new itemview()).display();
			}).to.throw(Error);
		});
		
	});
});