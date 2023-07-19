// Module for theme management (two goals here : switch between light and dark mode, switch between colorThemes by using localstorage for better UX)

const theme = {
    init : function() {
        // we select the theme switch button
        const changeThemeButton = document.querySelector('#theme-switch');
        // handleChangeTheme will manage the color change on body element
        changeThemeButton.addEventListener('click', theme.handleChangeTheme);
        
        // we select all the color buttons
        const colorButtonsElements = document.querySelectorAll('.theme-button');

        for (const Element of colorButtonsElements) {
            // handleThemeColorClick will manage the theme color switch
            Element.addEventListener('click', theme.handleThemeColorClick);
        }
        // we initialize initLocalState(), which will recall theme user settings
        theme.initLocalState();
    },

    // this function allows us to set a colorTheme in our localstorage (depending on the color button you clicked)
    handleThemeColorClick : function(event) {
        // we retrieve the id value (it contains the name of the theme)
        const themeColor = event.target.id;
        theme.changeColorTheme(themeColor);
        // we store themeColor in the localstorage
        localStorage.setItem('colorTheme', themeColor);
    },

    // this function allows us to recall theme user settings using local storage datas (for better UX)
    // this way, if i refresh or quit and come back on the website, our last theme settings will be restored 
    // it simply reads local storage values, and apply the last used theme 
    initLocalState : function() {
        // here we retrieves the theme (dark) value in localstorage
        const localSave = localStorage.getItem('theme');
        // we make sure that darktheme is set (or not)
        if (localSave === "dark") {
            // if so, we add theme dark
            document.body.classList.add('theme-dark');
        }
        // else, theme is light
        else {
            document.body.classList.remove('theme-dark');
        }
        // here we retrieves the theme (color) value in localstorage
        const colorTheme = localStorage.getItem('colorTheme');
        // If colorTheme contains any other value than undefined, null, false, 0 or NaN, the conditional expression will return true, and the code inside the if block will be executed.
        if (colorTheme) {
            theme.changeColorTheme(colorTheme);
        }
    },

    // this function manages the color theme
    changeColorTheme : function(theme) {
        // we select body element
        const bodyElement = document.querySelector('body');
        // we remove existing theme
        bodyElement.classList.remove('theme-red', 'theme-blue', 'theme-green');
        // here i set the theme depending on datas on local storage
        bodyElement.classList.add(theme);
        // we select the logo
        const logoElement = document.querySelector('.logo__image');
        // we set logo src attribute
        logoElement.src = "img/logo-"+theme+".png";
        // we set the value of alt attribute
        // split function allows me to delete "theme" in "theme-red" (for example)
        logoElement.alt = "logo" + theme.split("theme")[1];
    },

    // "why slide, and dark theme button change color when we switch colorTheme ?"  
    // lets say we add .theme-blue to our body changeColorTheme() function, then the body element will have this proprety : .theme-blue {--color-main: var(--theme-blue-main);}
    // slide, and dark theme button have .btn class by default. .btn has this proprety : {background: var(--color-main)}
    // when we add .theme-blue class on the body element, the value of --color-main variable changes, so does the value of .btn's background.

    // this function manages the dark/light theme depending on localstorage datas. This function also stores the correct theme in localstorage 

    handleChangeTheme : function() {
        const body = document.querySelector('body');
        // if body element contains theme-dark class
        if (body.classList.contains('theme-dark')) {
            // then we remove it
            body.classList.remove('theme-dark');
            // finally, i save in the localStorage in the 'theme' key, then i assign the value 'light'
            localStorage.setItem('theme', 'light');
        }
        // else it's theme-light
        else {
            // si we add theme-dark
            body.classList.add('theme-dark');
            // finally, i save in the localStorage in the 'theme' key, then i assign the value 'dark'
            localStorage.setItem('theme', 'dark');
        }
    }
};

