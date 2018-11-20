// (function(angular) {
// 	'use strict';
	function commentsListController(commentsListFactory) {
		const ctrl = this;



        ctrl.comments = commentsListFactory.comments;
        ctrl.Comment = commentsListFactory.Comment;

        ctrl.addComment = commentsListFactory.addComment;
        ctrl.getComments = commentsListFactory.getComments;
        ctrl.updateCommentsType = commentsListFactory.updateCommentsType;
        ctrl.toggleIsRemoved = commentsListFactory.toggleIsRemoved;

		ctrl.commentsTypes = ['all', 'archived', 'existing'];
	    ctrl.isEditPopupDisplayed = false;
	    ctrl.commentForEditing = {};
	    ctrl.commentsType = 'all';

        if(!localStorage.getItem('comments')) {
            localStorage.setItem('comments', JSON.stringify(ctrl.comments));
        } else {
        	ctrl.comments = JSON.parse(localStorage.getItem('comments'));
		}

        ctrl.editComment = (comment) => {
        	const index = ctrl.comments.indexOf(comment);
        	console.log(index);
        	ctrl.commentForEditing = ctrl.comments[index];
        	ctrl.isEditPopupDisplayed = true;
        	console.log(ctrl.commentForEditing);

            ctrl.editCommentConfirm = (username, comment) => {
				updateComment(index, username, comment);
				ctrl.isEditPopupDisplayed = false;
            }
		};

        ctrl.updateLocalStorage = () => {
        	localStorage.setItem('comments', ctrl.comments);
		};

        ctrl.editCommentCancel = () => {
        	ctrl.isEditPopupDisplayed = false;
		};

        const updateComment = (index, username, comment) => {
        	console.log(username);
        	console.log(comment);
            ctrl.comments[index].text = comment ?
                comment : ctrl.comments[index].text;
            ctrl.comments[index].username = username ?
                username : ctrl.comments[index].username;
            ctrl.comments[index].isEdited = true;
            ctrl.comments[index].editDate = new Date();
        }
	}

    angular.module('angularTask1').controller('commentsListController', commentsListController);

	angular.module('angularTask1').component('commentsList', {
		templateUrl: 'components/commentsList/commentsList.View.html',
		controller: commentsListController,
		controllerAs: 'ctrl'
	});
// })(window.angular);