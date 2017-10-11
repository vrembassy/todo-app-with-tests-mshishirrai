var expect = chai.expect;

describe("App view", function() {
    "use strict";

	  var app,itemBox,item;

    beforeEach(function(){
		app = todo.dependency.app();
		item = todo.dependency.item();
		itemBox=document.querySelector("#items");
    });

	
	   describe("Constructor", function(){
        it("Should be constructor", function() {
          expect(app).to.be.an('object');
        });
    });
	
	 // describe("Init", function(){
        // it("Should init dom content", function() {
        // expect(app.init()).to.be.true;;
		// item.remove("Designdiv");
		// item.remove("Codediv");
        // });
    // });
	
	
		 describe("Display", function(){
        it("Should have preloaded items", function() {
        expect(app.display("T")).to.be.true;
		item.remove("Tdiv")
        });
    });
	
	
describe("Add",function(){
		it("Event should fire on pressing enter button",function(){
			var eventObj = document.createEvent("Events");
			eventObj.initEvent("keydown", true, true);
			itemBox.value = "Impl";
			eventObj.keyCode = 13;
			itemBox.dispatchEvent(eventObj);
			expect(document.getElementById("Impldiv")).to.exist;
			item.remove("Impldiv");
		});
	});
	});