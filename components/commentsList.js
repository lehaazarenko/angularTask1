(function (angular) {
    'use strict';

    function commentsListController($scope, $element, $attrs) {
        const ctrl = this;

        ctrl.comments = [{text: "Nice...", isRemoved: false},
            {text: "Dumb", isRemoved: false},
            {text: "Dope", isRemoved: true},
            {text: "Brilliant", isRemoved: false},
            {text: "Generic", isRemoved: true},
            {text: "Outstanding", isRemoved: false},
            {text: "Borring", isRemoved: false}
        ];
        ctrl.commentsTypes = [
            {value: 'all', label: 'All'},
            {value: 'existing', label: 'Existing'},
            {value: 'archived', label: 'Archived'}
        ];
        ctrl.selectedType = 'all';

        ctrl.getComments = () => {
            switch (ctrl.selectedType) {
                case 'all':
                    return ctrl.comments;
                case 'existing':
                    return ctrl.comments.filter(item => item.isRemoved === false);
                case 'archived':
                    return ctrl.comments.filter(item => item.isRemoved === true);
                default:
                    return ctrl.comments;
            }
        };

        ctrl.toggleIsRemoved = (index) => {
            ctrl.comments[index].isRemoved === true ?
                ctrl.comments[index].isRemoved = false :
                ctrl.comments[index].isRemoved = true;
        };
    }

    angular.module('angularTask1').component('commentsList', {
        templateUrl: 'components/commentsListView.html',
        controller: commentsListController,
        controllerAs: 'ctrl'
    });
})(window.angular);