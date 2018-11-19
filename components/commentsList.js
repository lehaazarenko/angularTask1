(function(angular) {
	'use strict';
	function commentsListController() {
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

		ctrl.newDate = new Date();

		ctrl.comments = [{text: "Nice...", username: "Vera",
						  creationDate: new Date(), editDate: '',
						  isRemoved: false, isEdited: false},
					     {text:"Dumb", username: "Elena",
						  creationDate: new Date(), editDate: new Date(),
						  isRemoved: false, isEdited: true},
					     {text: "Dope", username: "Alexandr",
						  creationDate: new Date(), editDate: '',
						  isRemoved: true, isEdited: false},
					     {text: "Brilliant", username: "Alexei",
						  creationDate: new Date(), editDate: '',
						  isRemoved: false, isEdited: false},
					     {text: "Generic", username: "Anthony",
						  creationDate: new Date(), editDate: '',
						  isRemoved: true, isEdited: false},
					     {text: "Outstanding", username: "Jack",
						  creationDate: new Date(), editDate: '',
						  isRemoved: false, isEdited: false},
					     {text: "Borring", username: "Eva",
						  creationDate: new Date(), editDate: '',
						  isRemoved: false, isEdited: false}];

	    ctrl.areDisplayedCommentsArchived = false;
	    ctrl.isEditPopupDisplayed = false;
	    ctrl.commentForEditing = {};

	    ctrl.getComments = () => {
	    	return ctrl.areDisplayedCommentsArchived ?
				ctrl.comments.filter(x => x.isRemoved) :
				ctrl.comments.filter(x => !x.isRemoved);
	    };

	    ctrl.toggleIsArchived = () => {
	    	ctrl.areDisplayedCommentsArchived = !ctrl.areDisplayedCommentsArchived;
	    };

        ctrl.toggleIsRemoved = (comment) => {
        	const index = ctrl.comments.indexOf(comment);
			ctrl.comments[index].isRemoved = !ctrl.comments[index].isRemoved;
        };

        ctrl.addComment = (username, comment) => {
        	const newComment = new Comment(comment, username, false);
        	ctrl.comments.push(newComment);
		};

        ctrl.editComment = (comment) => {
        	const index = ctrl.comments.indexOf(comment);
        	ctrl.commentForEditing = ctrl.comments[index];
        	ctrl.isEditPopupDisplayed = true;
        	console.log(ctrl.commentForEditing);

            ctrl.editCommentConfirm = (username, comment) => {
				updateComment(index, username, comment);
				ctrl.isEditPopupDisplayed = false;
            }

		};

        ctrl.editCommentCancel = () => {
        	ctrl.isEditPopupDisplayed = false;
		};

        const updateComment = (index, username, comment) => {
            ctrl.comments[index].text = comment === undefined ?
                ctrl.comments[index].text : comment;
            ctrl.comments[index].username = username === undefined ?
                ctrl.comments[index].username : username;
            ctrl.comments[index].isEdited = true;
            ctrl.comments[index].editDate = new Date();
        }
	}

	angular.module('angularTask1').component('commentsList', {
		templateUrl: 'components/commentsListView.html',
		controller: commentsListController,
		controllerAs: 'ctrl'
	});
})(window.angular);