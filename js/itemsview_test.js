var expect = chai.expect;

describe("Itemsview", function() {
  describe("constructor", function() {
  it("should have default name", function() {
var val  = new todo.itemsview();
expect(val.name).to.equal("success");
	});
	
	it("should set name if provided", function() {
			var val= new todo.itemsview("items");
			expect(val.name).to.equal("items");
		});
	});
	
	describe("#display", function() {
		it("should throw if no target is passed", function() {
			expect(function() {
			(new itemsview()).display();
			}).to.throw(Error);
		});
		it("should dispaly new item passed", function() {
			
			disp = (new todo.itemsview("items")).display("items");
			expect(disp).to.equal("items");
		});
	});
	describe("#remove", function() {
		it("should throw if no target is passed ", function() {
			expect(function() {
			(new itemsview()).remove();
			}).to.throw(Error);
		});
		// it("should dispaly new item if passed", function() {
			//this.timeout(10000);
			// disp = (new todo.itemsview("item2")).remove("itemdiv");
			// expect(disp).to.equal("itemdiv");
		// });
	});
});