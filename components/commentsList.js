(function(angular) {
	'use strict';
	function commentsListController($scope, $element, $attrs) {
		var ctrl = this;

		this.comments = [{text: "Nice...", isRemoved: false}, 
    					 {text:"Dumb", isRemoved: false}, 
    				     {text: "Dope", isRemoved: false}];
	}

	angular.module('angularTask1').component('commentsList', {
		templateUrl: 'commentsListView.html',
		controller: commentsListController
	});
})(window.angular);