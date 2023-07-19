// Module for newsletter section (the goal here is to display a newsletter container when we click on the newsletter button. Then, we want to display a success/error message when we submit the container's form)

const newsletter = {

    init : function() {
        // we select the newletter button (header section)
        const menuItemElement = document.querySelector('#newsletter-btn');
        // handleClickNewsletterMenu will handle the event
        menuItemElement.addEventListener('click', newsletter.handleClickNewsletterMenu);
        // we select the cross item to hide the newsletterbox
        const closeElement = document.querySelector('.newsletter__close');
        // handleClickNewsletterCross will handle the event
        closeElement.addEventListener('click', newsletter.handleClickNewsletterCross);
        // we select the form
        const formElement = document.querySelector('.newsletter form');
        // handleNewsletterSubmit will handle the submit event
        formElement.addEventListener('submit', newsletter.handleNewsletterSubmit);
    },
    
    // this function that allows us to display the newsletter container
    handleClickNewsletterMenu : function (event) {
        // PreventDefault prevents page redirection
        event.preventDefault();
        // we select the newsletter box
        const newsletterPanel = document.querySelector('.newsletter');
        // .newsletter--on class allows us to display the selected box (default -> display: none; newsletter--on -> display: block)
        newsletterPanel.classList.add('newsletter--on');
    },

    // this function that allows us to hide the newsletter container
    handleClickNewsletterCross : function () {
        // once again, we select the newsletter box
        const newsletterPanel = document.querySelector('.newsletter');
        // we remove .newsletter--on class, this way, it goes back to display:none
        newsletterPanel.classList.remove('newsletter--on');
    },

    // this function manages the success/error message when the form was submitted
    handleNewsletterSubmit : function (event) {
        // PreventDefault prevents page redirection
        event.preventDefault();
        // we retrieve datas the user has entered
        const userValue = document.querySelector('.newsletter__field').value;
        // if user email is disposable
        if (newsletter.isForbiddenEmail(userValue) === false) {
            // we create p element to display the error message
            const newError = document.createElement('p');
            newError.classList.add('message');
            // we add the error message to our p element
            newError.innerHTML = "Les adresses jetables ne sont pas admises";
            // we select the newsletter box
            const newsletterPanel = document.querySelector('.newsletter');
            // and we insert the error message
            newsletterPanel.append(newError);
        }
        else {
            // we create p element to display the success message
            const successMessage = document.createElement('p');
            successMessage.classList.add('message');
            // we add the success message to our p element
            successMessage.innerHTML = "vous avez entré un email valide";
            // we select the newsletter box
            const newsletterPanel = document.querySelector('.newsletter');
            // and we insert the success message
            newsletterPanel.append(successMessage);
        }

    },

    // we buil and array of several disposable emails
    forbiddenDomains : [
        '@yopmail.com',
        '@yopmail.fr',
        '@yopmail.net',
        '@cool.fr.nf',
        '@jetable.fr.nf',
        '@courriel.fr.nf',
        '@moncourrier.fr.nf',
        '@monemail.fr.nf',
        '@monmail.fr.nf',
        '@hide.biz.st',
        '@mymail.infos.st',
    ],

    // this function returns false if user email is invalid, else it returns true. 
    isForbiddenEmail : function(email) {
        // we use for loop to get all disposable emails
        for (const domain of newsletter.forbiddenDomains) {
            // the function allows me to know if the email entered by the user appears in one of the values of the table
            if (email.includes(domain)) {
                // if it does, we return false
                return false;
            }
        }
        // else if user email is valid, we return true
        return true;
    }
}
