var expect = chai.expect;

describe("Store Testss", function(){
"use strict";
var store,itemname1,itemname2;
var todos = {id: "1", name: "item1", status: "checked"};
var newtodo = {id: "2", name: "item2", status: "checked"};
	beforeEach(function(){
		store = new Todo.dependencies.store(todos);
			
	});
		
	describe("Constructor", function(){
		it("should be constructor", function() {
			expect(store).to.be.an('object');
		});
	});
		
	describe("Fetch preloaded items", function(){
		it("should be an array of preloaded items", function() {
			itemname1 = store.init();
			expect(itemname1).to.be.an('array');
		});
	});
	
	describe("Save items", function(){
		it("should be an object", function() {
			itemname2 = store.save(todo);
			expect(itemname2).to.be.an('object');
			store.remove(todo.id);
		});
	});
	
	describe("Remove stored items", function(){
		it("Should delete the item", function(){
		itemname2=store.save(newtodo);
		store.remove(newtodo.id);
		expect(toDoItems[newtodo.id]).to.be.undefined;
		});
	});

});
