(function(angular) {
	'use strict';
	function commentsListController($scope, $element, $attrs) {
		const ctrl = this;

		ctrl.comments = [{text: "Nice...", isRemoved: false}, 
	    				   {text:"Dumb", isRemoved: false},
	    				   {text: "Dope", isRemoved: true},
	    				   {text: "Brilliant", isRemoved: false},
	    				   {text: "Generic", isRemoved: true},
	    				   {text: "Outstanding", isRemoved: false},
	    				   {text: "Borring", isRemoved: false}];

	    ctrl.areDisplayedCommentsArchived = false; 
	    // Added due to not loading archived checkbox checked property on load

	    ctrl.toggleIsArchived = function() {
	    	ctrl.areDisplayedCommentsArchived = !ctrl.areDisplayedCommentsArchived;
	    } 

        ctrl.toggleIsRemoved = function (index) {
            ctrl.comments[index].isRemoved === true ?
				ctrl.comments[index].isRemoved = false :
				ctrl.comments[index].isRemoved = true;
        }
	}

	angular.module('angularTask1').component('commentsList', {
		templateUrl: 'components/commentsListView.html',
		controller: commentsListController,
		controllerAs: 'ctrl'
	});
})(window.angular);