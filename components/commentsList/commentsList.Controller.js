function commentsListController(commentsListFactory, commentsTypes) {

    const ctrl = this;

    class Comment {
        constructor(text, username, date) {
            this.text = text;
            this.username = username;
            this.creationDate = date;
            this.editDate = '';
            this.isRemoved = false;
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

    ctrl.commentsTypes = commentsTypes;
    ctrl.isEditPopupDisplayed = false;
    ctrl.commentForEditing = {};
    ctrl.commentsType = 'all';

    if(localStorage.getItem('comments') && localStorage.getItem('comments') !== "undefined") {
        commentsListFactory.comments = JSON.parse(localStorage.getItem('comments'));
    } else {
        ctrl.updateLocalStorage();
    }

    ctrl.comments = commentsListFactory.comments;

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