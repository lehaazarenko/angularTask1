(function() {
    'use strict';

    angular.module('angularTask1').component('CommentsList', {
        templateUrl: 'components/comments-list/comments-list.view.html',
        controller: 'CommentsListController',
        controllerAs: 'ctrl'
    });
})();
