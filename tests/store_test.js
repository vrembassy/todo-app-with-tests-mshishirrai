var expect = chai.expect;

describe("Store", function() {
    "use strict";

	  var store,itm;

    beforeEach(function(){
		store = todo.dependency.store();
		itm = {id : "Tdiv", name : "T", state : "unchecked"};
    });

	
	   describe("Constructor", function(){
        it("Should be constructor", function() {
          expect(store).to.be.an('object');
        });
    });
	
	 describe("Init", function(){
        it("Should init preloaded items", function() {
        expect(store.init()).to.be.an('array');
		
        });
    });
	
		 describe("Save", function(){
        it("Should store the preloaded items", function() {
        expect(store.save(itm)).to.be.an('object');
		
        });
    });
	
	
		 describe("Remove", function(){
        it("Should remove the item", function() {
        expect(store.remove("Tdiv")).to.be.true;
		
        });
    });
	  });