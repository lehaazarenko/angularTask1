(function(angular) {
	'use strict';
	function commentsListController($scope, $element, $attrs) {
		const ctrl = this;

		ctrl.comments = [{text: "Nice...", isRemoved: false}, 
	    				   {text:"Dumb", isRemoved: false}, 
	    				   {text: "Dope", isRemoved: false},
	    				   {text: "Brilliant", isRemoved: false},
	    				   {text: "Generic", isRemoved: false},
	    				   {text: "Outstanding", isRemoved: false},
	    				   {text: "Borring", isRemoved: false}];
	}

	angular.module('angularTask1').component('commentsList', {
		templateUrl: 'components/commentsListView.html',
		controller: commentsListController,
		controllerAs: 'ctrl'
	});
})(window.angular);