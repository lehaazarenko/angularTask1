function commentsListController(commentsListFactory) {

	const ctrl = this;

    class Comment {
        constructor(text, username, date, isRemoved) {
            this.text = text;
            this.username = username;
            this.creationDate = date;
            this.editDate = '';
            this.isRemoved = isRemoved;
            this.isEdited = false;
        }
    }

    ctrl.updateLocalStorage = () => {
        localStorage.removeItem('comments');
        localStorage.setItem('comments', JSON.stringify(ctrl.comments));
    };

	ctrl.getComments = commentsListFactory.getComments;
    ctrl.getComments = () => commentsListFactory.getComments(ctrl.commentsType);
    ctrl.addComment = commentsListFactory.addComment(Comment, ctrl.updateLocalStorage);
	ctrl.toggleIsRemoved = commentsListFactory.toggleIsRemoved(ctrl.updateLocalStorage);
	// ctrl.updateLocalStorage = commentsListFactory.updateLocalStorage;



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

	console.log(ctrl.comments);

    ctrl.updateLocalStorage = () => {
        localStorage.removeItem('comments');
        localStorage.setItem('comments', JSON.stringify(ctrl.comments));
    };

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

angular.module('angularTask1').directive('val', function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attributes, control) {
            control.$validators.val = function (modelValue, viewValue) {

            	const helloRegExp = new RegExp('^hello');

                const commentText = String(viewValue).toLowerCase();

                return helloRegExp.test(commentText);
            };
        }
    };
});
