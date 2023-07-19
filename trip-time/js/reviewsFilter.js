// Module for last comments section (the goal here is to filter the results based on the rating button clicked)

const reviewsFilter = {
    init : function() {
        // here we select all the inputs that are in an element with the .filter class (rating checkbox)
        const ratingCheckboxes = document.querySelectorAll('.filter input');
        for (const checkBox of ratingCheckboxes) {
            // And we add an event listener to each array element
            checkBox.addEventListener('click', reviewsFilter.handleClickOnRatingCheckbox);
        }
    },
    
    // this function triggers when we click on a checkbox button
    handleClickOnRatingCheckbox : function(event) {
        // current clicked box (event.target)
        const ratingCheckbox = event.target;
        // here we retrieve the exact value of the input (rate). If you click on "3 étoiles", we retrieve "3"
        const rating = ratingCheckbox.value;
        // We hide or display comments with the same rating
        reviewsFilter.toggleReviewsFromRating(rating);
    },
    
    // Based on the value of the checkbox input, we either hide or display the targeted comments.
    toggleReviewsFromRating : function (rating) {
        // we start by getting the list of comments with the current rating using data-rating attribute
        const reviewsToFilter = document.querySelectorAll('.review[data-rating="'+rating+'"]');
        for (const reviewElement of reviewsToFilter) {
            // .review--hidden allow us to hide a comment
            reviewElement.classList.toggle('review--hidden');
        }
    }
}