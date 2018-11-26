(function(angular) {
    'use strict';

    angular.module('angularTask1').controller('CommentsListController', CommentsListController);

    function CommentsListController(CommentsListFactory, COMMENTS_TYPES) {

        const ctrl = this;

        ctrl.commentsTypes = COMMENTS_TYPES;
        ctrl.isEditPopupDisplayed = false;
        ctrl.commentForEditing = {};
        ctrl.commentsType = 'all';

        ctrl.getComments = CommentsListFactory.getComments;
        ctrl.addComment = CommentsListFactory.addComment;
        ctrl.toggleIsRemoved = CommentsListFactory.toggleIsRemoved;
        ctrl.editComment = CommentsListFactory.editComment;
        ctrl.editCommentConfirm = CommentsListFactory.editCommentConfirm;
        ctrl.editCommentCancel = CommentsListFactory.editCommentCancel;
        ctrl.updateLocalStorage = CommentsListFactory.updateLocalStorage;

        const init = () => {
            if (localStorage.getItem('comments') && localStorage.getItem('comments') !== "undefined") {
                CommentsListFactory.comments = JSON.parse(localStorage.getItem('comments'));
            } else {
                ctrl.updateLocalStorage();
            }

            ctrl.comments = CommentsListFactory.comments;
        };

        init();
    }

})(window.angular);
