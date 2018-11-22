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
