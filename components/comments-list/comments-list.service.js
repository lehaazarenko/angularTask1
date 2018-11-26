(function(angular) {
    function CommentsListFactory() {

        const calService = {};

        calService.comments = [
            {
                text: "Nice...", username: "Vera",
                creationDate: new Date(), editDate: '',
                isRemoved: false, isEdited: false
            },
            {
                text: "Dumb", username: "Elena",
                creationDate: new Date(), editDate: new Date(),
                isRemoved: false, isEdited: true
            },
            {
                text: "Dope", username: "Alexandr",
                creationDate: new Date(), editDate: '',
                isRemoved: true, isEdited: false
            },
            {
                text: "Brilliant", username: "Alexei",
                creationDate: new Date(), editDate: '',
                isRemoved: false, isEdited: false
            },
            {
                text: "Generic", username: "Anthony",
                creationDate: new Date(), editDate: '',
                isRemoved: true, isEdited: false
            },
            {
                text: "Outstanding", username: "Jack",
                creationDate: new Date(), editDate: '',
                isRemoved: false, isEdited: false
            },
            {
                text: "Borring", username: "Eva",
                creationDate: new Date(), editDate: '',
                isRemoved: false, isEdited: false
            }];

        calService.getComments = (type) => {
            switch (type) {
                case 'all':
                    return calService.comments;
                case 'archived':
                    return calService.comments.filter(x => x.isRemoved);
                case 'existing':
                    return calService.comments.filter(x => !x.isRemoved);
            }
        };

        calService.addComment = (username, comment) => {
            // const newComment = new Comment(comment, username, new Date());
            const newComment = {
                text: comment,
                username: username,
                creationDate: new Date(),
                editDate: '',
                isRemoved: false,
                isEdited: false
            }
            calService.comments.push(newComment);
            updateLocalStorage();
        };

        calService.toggleIsRemoved = (comment) => {
            const index = calService.comments.indexOf(comment);
            calService.comments[index].isRemoved = !calService.comments[index].isRemoved;
            updateLocalStorage();
        };

        calService.editComment = (comment) => {
            const index = calService.comments.indexOf(comment);
            calService.commentForEditing = calService.comments[index];
            calService.isEditPopupDisplayed = true;

            calService.editCommentConfirm = (username, comment) => {
                updateComment(index, username, comment);
                calService.isEditPopupDisplayed = false;
                calService.updateLocalStorage();
            };
        };

        calService.editCommentCancel = () => {
            calService.isEditPopupDisplayed = false;
        };

        const updateComment = (index, username, comment) => {
            calService.comments[index].text = comment ?
                comment : calService.comments[index].text;
            calService.comments[index].username = username ?
                username : calService.comments[index].username;
            calService.comments[index].isEdited = true;
            calService.comments[index].editDate = new Date();
        };

        calService.updateLocalStorage = () => {
            localStorage.removeItem('comments');
            localStorage.setItem('comments', JSON.stringify(calService.comments));
        };

        return calService;
    }

    angular.module('angularTask1').factory('CommentsListFactory', CommentsListFactory);
})(window.angular);
