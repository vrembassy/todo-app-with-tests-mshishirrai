var expect = chai.expect;

describe("Store tests", function(){
"use strict";
var store,itemname1,itemname2;
var todos = {id: "2", name: "buy books", state: "unchecked"};

	beforeEach(function(){
		store = new Todo.store(todos);
			
	});
		
	describe("Constructor", function(){
		it("Should be constructor", function() {
			expect(store).to.be.an('object');
		});
	});
		
	describe("Writing item to Local Storage", function(){
		it("Should write the object", function() {
			itemname1 = store.writeone();
			var item = JSON.parse(window.localStorage.getItem(todos.id));
			expect(item).to.be.an('object');
		});
	});
	
	describe("Reading a single item from localStorage", function(){
		it("Should be an object", function() {
			itemname2 = store.readone();
			expect(itemname2).to.be.an('object');
		});
	});
	
	describe("Reading multiple items from local storage", function(){
		it("Should be an array of object", function(){
		itemname2 = store.readMany();
		expect(itemname2).to.be.an('array');
		});
	});

});
