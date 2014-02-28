'use strict';

/* jasmine specs for controllers go here */
describe('PhoneCat controllers', function() {

  describe('PhoneListCtrl', function(){

    it('should create "phones" model with 3 phones', function() {
      var scope = {},
          ctrl = new PhoneListCtrl(scope);

      expect(scope.phones.length).toBe(3);
    });
  });
    
    describe("PhoneListController", function() {
        it ('should create "phone list" model with 3 phone players', function() {
            var scope = {},
                controller = new PhoneListController(scope);
            expect (scope.items.length).toBe(3);
        });
    });
});
