// Module for slider section (The goal here is to change the image based on the button clicked (next or previous))

const slider = {
    // we create an empty array sliderImagesElements
    sliderImagesElements : [],
    // currentImageIndex defines the image's index currently displayed
    currentImageIndex : 0,

    init : function() {
        // creation of 3 images element
        slider.generateSliderImages();
        // Here we store all the img tags that contain our images in slider.sliderImagesElements
        slider.sliderImagesElements = document.querySelectorAll('.slider__img');
        // we retrieve the previous and the next button of the slider
        const sliderButtons = document.querySelectorAll('.slider__btn');
        // handleClickPreviousSlide will handle the event of the previous slidebutton
        const previousSliderButton = sliderButtons[0];
        previousSliderButton.addEventListener('click', slider.handleClickPreviousSlide);
        // handleClickNextSlide will handle the event of the next slidebutton
        const nextSliderButton = sliderButtons[1];
        nextSliderButton.addEventListener('click', slider.handleClickNextSlide);
    },

    handleClickPreviousSlide : function() {
        // we retrieve the current image displayed
        const currentImage = document.querySelector('.slider__img--current');
        // we remove the --current atttribute
        currentImage.classList.remove('slider__img--current');
        slider.currentImageIndex--;
        // Here we set a condition to handle the case where our index is smaller than 0 (if smaller than 0, we are trying to display an image that does not exist)
        if (slider.currentImageIndex < 0) {
            slider.currentImageIndex = 2;
        }
        // example : the current image was the first image (index 0). 
        // when you click on the "previous" button, handleClickPreviousSlide will execute, currentimageindex switches to 2. newCurrentimage = sliderimageselements[2]. (we previously stored all the img tags in this array (see init function line 18)
        const newCurrentImage = slider.sliderImagesElements[slider.currentImageIndex];
        // then we add the slider__img--current so that the new image is displayed
        newCurrentImage.classList.add('slider__img--current');
    },

    handleClickNextSlide : function() {
        // we retrieve the current image displayed
        const currentImage = document.querySelector('.slider__img--current');
        // we remove the --current atttribute
        currentImage.classList.remove('slider__img--current');
        slider.currentImageIndex++;
        // Here we set a condition to handle the case where our index is higher that 2 (if so, we are trying to display an image that does not exist)
        if (slider.currentImageIndex > 2){
            slider.currentImageIndex = 0;
        }
        // example : the current image was the first image (index 0).
        // when you click on the "next" button, handleClickNextSlide will execute, currentimageindex switches to 1. newCurrentimage = sliderimageselements[1]. (we previously stored all the img tags in this array (see init function line 18)
        const newCurrentImage = slider.sliderImagesElements[slider.currentImageIndex];
        // then we add the slider__img--current so that the new image is displayed
        newCurrentImage.classList.add('slider__img--current');
    },

    // this array will contains all our src's value of images attribute (we'll use it in generateSliderImages, see above)
    sliderImages : [
        'ocean.jpg',
        'ski.jpg',
        'city.jpg'
    ],

    generateSliderImages : function() {
        const sliderContainer = document.querySelector('.slider');
        // for of loop gets datas from sliderImages array
        for (const current of slider.sliderImages) {
            // we create the img element
            const newSliderImage = document.createElement('img');
            // we set src attribute
            newSliderImage.src = "img/"+current;
            // we add the corresponding class
            newSliderImage.classList.add("slider__img");
            // we set alt attribute while removing the .jpg extension using split() function
            newSliderImage.alt = current.split(".jpg")[0];
            // and we insert the image 
            sliderContainer.prepend(newSliderImage);
        }
        // once the loop finished, we select the first slider's image
        const firstSliderImage = document.querySelector('.slider__img');
        // we add .slider__img--current class to display it
        firstSliderImage.classList.add('slider__img--current');
    },
}

