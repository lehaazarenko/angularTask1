var app = angular.module("angularTask1", []); 
app.controller("myCtrl", function($scope) {
    $scope.comments = [{text: "Nice...", isRemoved: false}, 
    				   {text:"Dumb", isRemoved: false}, 
    				   {text: "Dope", isRemoved: false}];
});