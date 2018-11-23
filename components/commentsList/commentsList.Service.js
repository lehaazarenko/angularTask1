function commentsListFactory() {

    const calService = {};

    calService.comments = [{text: "Nice...", username: "Vera",
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

    calService.getComments = (type) => {
            switch (type) {
                case 'all': return calService.comments;
                case 'archived': return calService.comments.filter(x => x.isRemoved);
                case 'existing': return calService.comments.filter(x => !x.isRemoved);
            }
    };

    calService.addComment = (CommentClass, updateLocalStorage) => {
        return (username, comment) => {
            const newComment = new CommentClass(comment, username, new Date());
            calService.comments.push(newComment);
            updateLocalStorage();
        };
    };

    calService.toggleIsRemoved = (updateLocalStorage) => {
        return (comment) => {
            const index = calService.comments.indexOf(comment);
            calService.comments[index].isRemoved = !calService.comments[index].isRemoved;
            updateLocalStorage();
        };
    };

    return calService;
}

angular.module('angularTask1').factory('commentsListFactory', commentsListFactory);
