(function() {
    'use strict';

    angular.module('angularTask1').controller('CommentsListController', CommentsListController);

    function CommentsListController(commentsListFactory, COMMENTS_TYPES) {

        // CommentsListController.$inject = ['commentsListFactory', 'COMMENTS_TYPES'];

        const ctrl = this;

        ctrl.commentsTypes = COMMENTS_TYPES;
        ctrl.isEditPopupDisplayed = false;
        ctrl.commentForEditing = {};
        ctrl.commentsType = 'all';

        ctrl.getComments = commentsListFactory.getComments;
        ctrl.addComment = commentsListFactory.addComment;
        ctrl.toggleIsRemoved = commentsListFactory.toggleIsRemoved;
        ctrl.editComment = commentsListFactory.editComment;
        ctrl.editCommentConfirm = commentsListFactory.editCommentConfirm;
        ctrl.editCommentCancel = commentsListFactory.editCommentCancel;
        ctrl.updateLocalStorage = commentsListFactory.updateLocalStorage;

            if (localStorage.getItem('comments') && localStorage.getItem('comments') !== "undefined") {
                commentsListFactory.comments = JSON.parse(localStorage.getItem('comments'));
            } else {
                ctrl.updateLocalStorage();
            }

            ctrl.comments = commentsListFactory.comments;


    }

})();
