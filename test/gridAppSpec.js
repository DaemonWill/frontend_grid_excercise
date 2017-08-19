//very simple testing to be expanded upon
describe("testing", function(){
  //set up a dummy controller instance and obtain a copy of the scope used in the controller
  var $controller, $scope, controller;
  beforeEach(module('gridApp'));
  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
    $scope = {};
    controller = $controller('gridCtrl', {$scope: $scope});
  }));

  //make sure an object is returned from ajax call
  describe("$scope.getMessage(),",function(){
    it("should send out an AJAX request to specified url and retrieve a json response", function(){
      var message = $scope.getMessage();
      expect(typeof message).toBe("object");
    });
  });

  //make sure each element located in the grid boxes are being created
  describe("$scope.makeBox(),", function(){
    var outerBox, innerBox, destroyButton, children;

    beforeEach(function(){
      outerBox = $scope.makeBox();
      children = outerBox.children;
      destroyButton = children[0];
      innerBox = children[1];
    });

    it("should make an outerBox div element", function(){
      expect(outerBox.className).toBe("outerBox");
    });
    it("should make an innerBox element within the outerbox", function(){
      expect(innerBox.className).toBe("innerBox");
    });
    it("should make a destroy button element within the outerbox", function(){
      //check if the destroy class is included within its classes
      expect(destroyButton.className.indexOf("destroy")).not.toBe(-1);
    });
  });
});
