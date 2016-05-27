var myApp = angular.module('app', ['ngMaterial', 'ngRoute', 'firebase']);



myApp.controller('LandingPageCtrl', ['$scope', '$firebaseAuth', function($scope, $firebaseAuth){
  $scope.signIn = function(){
    var firebaseObj = new Firebase("https://hos-login.firebaseio.com");
    $scope.authObj = $firebaseAuth(firebaseObj);
      $scope.authObj.$authWithPassword({
        "email": $scope.email,
        "password": $scope.password
        }, function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
  };



}]);
