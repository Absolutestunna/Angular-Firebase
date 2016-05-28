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
        alert("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $scope.email = "";
        $scope.password = "";
      }
    });
  };
  // $scope.gitSignIn = function(){
  //     $scope.authObj.$authWithOAuthToken("github", "<ACCESS_TOKEN>").then(function(authData) {
  //       console.log("Logged in as:", authData.uid);
  //     }).catch(function(error) {
  //       console.error("Authentication failed:", error);
  //     });
  // };



}]);
