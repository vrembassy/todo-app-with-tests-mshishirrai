var expect = chai.expect;


describe("Item view tests", function() {
    "use strict";

	  var item,name,$ul,divid;
	  var todos= {id : "1", name: "Impl", status: "unchecked"};
	  
    beforeEach(function(){
        item = new Todo.itemview(todos);
		$ul=document.createElement("ul");
		divid=todos.id;
    });

	
	   describe("Constructor", function(){
        it("Should be constructor", function() {
          expect(item).to.be.an('object');
        });
    });
	
	
	 describe("Display", function(){
        it("Should return the html content", function() {
         expect(item.display().$el).to.be.an.instanceOf(Element);
        });
    });

	describe("Checking delegation",function(){
		it("normal effect", function(){
            expect(item.$el.classList.contains('addl')).to.be.false;
        })
        it("check strike effect", function(){
			item.display().checkBoxEffect();
			expect(item.$el.classList.contains('addl')).to.be.true;
        });
        it("uncheck strike effect", function(){
			item.display().checkBoxEffect();
			item.display().checkBoxEffect();
			expect(item.$el.classList.contains('addl')).to.be.false;
        });
    });
	
	
	describe("Remove", function(){
        it("Should delete the element", function() {
		$ul.append(item.display().$el);
			expect(item.remove().$el).to.be.null;
        });
    });
	
	describe("Event handlers", function(){
        it("completion click event", function(){

            $ul.append(item.display().checkBoxEffect().$el);
            $ul.querySelector(".checkButton").click();
            expect(item.$el.classList.contains('addl')).to.be.true;
            
        });
        it("remove click event ", function(){

            $ul.append(item.display().$el);
            $ul.querySelector(".deletestyle").click();
            expect(item.remove().$el).to.be.null;
            
        });

    });

	 });
	 
	 
	 
	  