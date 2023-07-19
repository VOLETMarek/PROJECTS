// Module for destination section (the goal here is to display a message when we click on the like button)

const destinations = {

    errorMessage : "Vous devez être connecté pour gérer vos favoris",

    init : function() {
        // here we're targetting all the like buttons on cards 
        const likeButton = document.querySelectorAll('.btn__like');
        for (const currentLike of likeButton) {
            currentLike.addEventListener('click', destinations.handleLikeClick);
        }
    },
    
    handleLikeClick : function (event) {
        // here closest(.card) iterates through the acestors of the current element (the current like button) to find the first element with CSS class ".card"
        const card = event.target.closest('.card');
        // we target all the card element with CSS class ".message". We need to delete the previous error message if we click on it several times
        const oldMessages = card.querySelectorAll('.message');
        for (const oldMessage of oldMessages) {
            oldMessage.remove();
        }
        // Then we can create and display our error message
        const errorMessage = document.createElement('p');
        errorMessage.classList.add('message');
        errorMessage.textContent = destinations.errorMessage;
        card.prepend(errorMessage);
    }
}
