function commentsListFactory() {

    const calService = {}

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

    calService.commentsType = 'all';

    calService.updateCommentsType = (type) => {
        calService.commentsType = type;
    };

    calService.getComments = (type) => {
            switch (type) {
                case 'all': return calService.comments;
                case 'archived': return calService.comments.filter(x => x.isRemoved);
                case 'existing': return calService.comments.filter(x => !x.isRemoved);
            }
    };

    calService.addComment = (username, comment) => {
        const newComment = new Comment(comment, username, new Date(), false);
        calService.comments.push(newComment);
        calService.updateLocalStorage();
    };

    calService.toggleIsRemoved = (comment) => {
        const index = calService.comments.indexOf(comment);
        calService.comments[index].isRemoved = !calService.comments[index].isRemoved;
        calService.updateLocalStorage();
    };

    calService.updateLocalStorage = () => {
        localStorage.removeItem('comments');
        localStorage.setItem('comments', JSON.stringify(calService.comments));
    };

    return calService;
}

angular.module('angularTask1').factory('commentsListFactory', commentsListFactory);
