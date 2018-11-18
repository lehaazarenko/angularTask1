(function (angular) {
    'use strict';

    function commentsListController() {
        const ctrl = this;

        ctrl.comments = [
            {text: "Nice...", isRemoved: false},
            {text: "Dumb", isRemoved: false},
            {text: "Dope", isRemoved: false},
            {text: "Brilliant", isRemoved: false},
            {text: "Generic", isRemoved: false},
            {text: "Outstanding", isRemoved: false},
            {text: "Borring", isRemoved: false}
        ];
        ctrl.commentsTypes = [
            {value: 'all', label: 'All'},
            {value: 'existing', label: 'Existing'},
            {value: 'archived', label: 'Archived'}
        ];
        ctrl.selectedType = 'all';
        ctrl.commentsList = ctrl.comments;


        ctrl.toggleIsRemoved = (index) => {
            ctrl.comments[index].isRemoved === true ?
                ctrl.comments[index].isRemoved = false :
                ctrl.comments[index].isRemoved = true;
            // console.log(index);
        };

        ctrl.updateCommentsList = () => {
            switch (ctrl.selectedType) {
                case 'all':
                    ctrl.commentsList = ctrl.comments;
                    break;
                case 'existing':
                    ctrl.commentsList = ctrl.comments.filter(item => item.isRemoved === false);
                    break;
                case 'archived':
                    ctrl.commentsList = ctrl.comments.filter(item => item.isRemoved === true);
                    break;
                default:
                    ctrl.commentsList = ctrl.comments;
            }
        };
    }


    angular.module('angularTask1').component('commentsList', {
        templateUrl: 'components/commentsListView.html',
        controller: commentsListController,
        controllerAs: 'ctrl'
    });
})(window.angular);