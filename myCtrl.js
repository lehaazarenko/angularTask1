const app = angular.module("angularTask1", []); 
app.controller("myCtrl", function($scope) {
    $scope.comments = [{text: "Nice...", isRemoved: false}, 
    				   {text:"Dumb", isRemoved: true}, 
    				   {text: "Dope", isRemoved: false},
    				   {text: "Brilliant", isRemoved: false},
    				   {text: "Generic", isRemoved: false},
    				   {text: "Outstanding", isRemoved: true},
    				   {text: "Borring", isRemoved: false}];
});