function commentsListController(commentsListFactory) {
	const ctrl = this;

	ctrl.Comment = commentsListFactory.Comment;

	ctrl.addComment = commentsListFactory.addComment;
	ctrl.getComments = commentsListFactory.getComments;
    ctrl.getComments = () => commentsListFactory.getComments(ctrl.commentsType);
	// ctrl.updateCommentsType = commentsListFactory.updateCommentsType;
	ctrl.toggleIsRemoved = commentsListFactory.toggleIsRemoved;
	ctrl.updateLocalStorage = commentsListFactory.updateLocalStorage;

	ctrl.commentsTypes = ['all', 'archived', 'existing'];
	ctrl.isEditPopupDisplayed = false;
	ctrl.commentForEditing = {};
	ctrl.commentsType = 'all';


	if(localStorage.getItem('comments')) {
		commentsListFactory.comments = JSON.parse(localStorage.getItem('comments'));
	} else {
		ctrl.updateLocalStorage();
	}

	ctrl.comments = commentsListFactory.comments;

	ctrl.editComment = (comment) => {
		const index = ctrl.comments.indexOf(comment);
		ctrl.commentForEditing = ctrl.comments[index];
		ctrl.isEditPopupDisplayed = true;

		ctrl.editCommentConfirm = (username, comment) => {
			updateComment(index, username, comment);
			ctrl.isEditPopupDisplayed = false;
            ctrl.updateLocalStorage();
		};
	};

	ctrl.editCommentCancel = () => {
		ctrl.isEditPopupDisplayed = false;
	};

	const updateComment = (index, username, comment) => {
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
