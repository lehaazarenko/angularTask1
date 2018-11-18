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

	    ctrl.getComments = () => {
	    	return ctrl.areDisplayedCommentsArchived ? ctrl.comments.filter(x => x.isRemoved) : ctrl.comments;
	    }

	    ctrl.toggleIsArchived = () => {
	    	ctrl.areDisplayedCommentsArchived = !ctrl.areDisplayedCommentsArchived;
	    } 

        ctrl.toggleIsRemoved = (comment) => {
        	const index = ctrl.comments.indexOf(comment);
			ctrl.comments[index].isRemoved = !ctrl.comments[index].isRemoved;
        }
	}

	angular.module('angularTask1').component('commentsList', {
		templateUrl: 'components/commentsListView.html',
		controller: commentsListController,
		controllerAs: 'ctrl'
	});
})(window.angular);