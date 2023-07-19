var app = {
    init: function() {
        // we select all h2
        app.titles = document.querySelectorAll('.titre');

        // i we click on one of them, we will execute toggle function
        for (currentTitle of app.titles) {
            currentTitle.addEventListener('click', app.toggle);
        }
    },
    toggle: function(event) {
        // we retrieve the clicked element
        var clicked = event.target;

        // If we clicked on the arrow (div element), we go back to the parent element because we want to select the h2 element
        if(clicked.nodeName == 'DIV') {
            clicked = clicked.parentNode;
        }

        // for each h2, we remove open class: if we click on another h2, we want to close the previous one
        for (currentTitle of app.titles) {
            currentTitle.classList.remove('open');
        }
        
        // then we add the class 'open' on the corresponding h2
        clicked.classList.add('open');

    }
}

app.init();