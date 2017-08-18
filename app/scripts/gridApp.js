var gridApp = angular.module('gridApp', []);

gridApp.controller('gridCtrl', function($scope,$http,$q) {
  /*
 *returns a random message from a restful service
 *the service responds with a json containing an id, title, and body;
 *title and body properties are latin messages, the title prop is used as the message
 */
  $scope.getMessage = function(){
    var deferMessage = $q.defer();
    //generate a psuedo-random integer between 1-100 to get a random response
    var randomId = Math.floor(Math.random() * 100) + 1; //NOTE unitTest
    //Http get request, obtain title prop from JSON
    $http.get("https://jsonplaceholder.typicode.com/posts/" + randomId)
          .then(function(response){
              deferMessage.resolve(response.data.title);
    });
    return deferMessage.promise;  //NOTE unitTest
  };

  /*
  *fetches the box whose destroy button was clicked, removes the box from the div.grid
  */
  $scope.destroyBox = function(clickedEle){
    var boxDiv = clickedEle.target.parentElement;
    boxDiv.parentElement.removeChild(boxDiv); //NOTE unitTest
  }

  /*
  *returns a new div.box parent element containing a random message and a
  *button.destroy child ("X" icon)
  */
  $scope.makeBox = function(){
    var outerBoxDiv = document.createElement("div");
    outerBoxDiv.setAttribute("class","outerBox");
    var innerBoxDiv = document.createElement("div");
    innerBoxDiv.setAttribute("class","innerBox");
    var destroyButton = document.createElement("button");
    destroyButton.setAttribute("class","destroy");
    destroyButton.setAttribute("ng-click","destroyBox($event)");
    destroyButton.appendChild(document.createTextNode("X"));
    outerBoxDiv.appendChild(destroyButton);
    outerBoxDiv.appendChild(innerBoxDiv);
    //include random message
    var messagePromise = $scope.getMessage().then(function(message){
      innerBoxDiv.appendChild(document.createTextNode(message)); //NOTE unitTest
    });
    //innerBoxDiv.appendChild(document.createTextNode(message));
    return outerBoxDiv; //NOTE unitTest
  }

  /*
  *onClick handler for addBox button, creates a box in the div.grid element
  */
  $scope.addBox = function(){
    var gridDiv = document.getElementById("grid");
    gridDiv.appendChild($scope.makeBox()); //NOTE unitTest
  };

  /*
  *generates 9 boxes in the div.grid upon pageload
  */
  $scope.setup = function(){
    for(i=0; i<9; i++){
      $scope.addBox();
    }
  };

  $scope.setup(); //NOTE unitTest
});
