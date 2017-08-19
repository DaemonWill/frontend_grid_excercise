/*
 Contains logic to add and delete boxes from the div.grid located in index.html
 Box elements are layered in this order:
    div.outerBox (floated divs that hold all other relevant content)
      button.destroy (once clicked, removes the entirety of its outerBox)
         div.innerBox (styled in order to have its content centered in outerBox, contains a message)
            h3 message (a message fetched randomly from a restful webservice)
*/

var gridApp = angular.module('gridApp', []);

gridApp.controller('gridCtrl', function($scope,$http,$q,$compile) {
  /*
  returns a random message from a restful service
  the service responds with a json containing an id, title, and body;
  title and body properties are latin messages, the title prop is used as the message
 */
  $scope.getMessage = function(){
    //create a promise object to ensure a value is returned after the AJAX response is received
    var deferMessage = $q.defer();
    //generate a psuedo-random integer between 1-100 to get a random response
    var randomId = Math.floor(Math.random() * 100) + 1; //NOTE unitTest
    //Http get request, obtain title prop from JSON and store it as a promise
    $http.get("https://jsonplaceholder.typicode.com/posts/" + randomId)
          .then(function(response){
              deferMessage.resolve(response.data.title);
    });
    return deferMessage.promise;  //NOTE unitTest
  };

  /*
   fetches the outerBox whose destroy button was clicked, removes the box from the div.grid
  */
  $scope.destroyBox = function(clickedEle){
    var boxDiv = clickedEle.target.parentElement;
    boxDiv.parentElement.removeChild(boxDiv); //NOTE unitTest
  }

  /*
   returns a new div.outerBox parent element containing a random message and a
   button.destroy child ("X" icon)
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
    //compile service used to couple this ctrlr's scope with newly created element
    $compile(destroyButton)($scope);
    outerBoxDiv.appendChild(destroyButton);
    outerBoxDiv.appendChild(innerBoxDiv);
    //add random message as an h3 to the innerBox
    var messagePromise = $scope.getMessage().then(function(message){
      var h3Element = document.createElement("h3") ;
      h3Element.innerHTML = message;
      innerBoxDiv.appendChild(h3Element); //NOTE unitTest
    });
    return outerBoxDiv; //NOTE unitTest
  }

  /*
   onClick handler for addBox button, creates a box in the div.grid element
  */
  $scope.addBox = function(){
    var gridDiv = document.getElementById("grid");
    if(gridDiv != null){
      gridDiv.appendChild($scope.makeBox()); //NOTE unitTest
    }
  };

  /*
   generates 9 boxes in the div.grid upon pageload
  */
  $scope.setup = function(){
    for(i=0; i<9; i++){
      $scope.addBox();
    }
  };

  $scope.setup(); //NOTE unitTest
});
