const container = document.querySelector('.slider-container')
const rightSlider = document.querySelector('.right-slider-container')
const leftSlider = document.querySelector('.left-slider-container')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const lengthOfSlides = rightSlider.querySelectorAll('div').length;
const stopButton = document.querySelector('.btn-round');
const clickButton = document.querySelector('.btn');

let activeSliderIndex = 0;

leftSlider.style.top = `-${(lengthOfSlides - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlides('up'));
downButton.addEventListener('click', () => changeSlides('down'));

const changeSlides = (direction) => {
    const sliderHieght = container.clientHeight;
    // console.log(sliderHieght)
    if(direction === 'up'){
        activeSliderIndex++
        if(activeSliderIndex > lengthOfSlides -1){
            activeSliderIndex = 0
        }
    } else if(direction === 'down'){
        activeSliderIndex--
        if(activeSliderIndex < 0){
            activeSliderIndex = lengthOfSlides - 1;
        }
    }

    rightSlider.style.transform = `translateY(-${activeSliderIndex * sliderHieght}px)`
    leftSlider.style.transform = `translateY(${activeSliderIndex * sliderHieght}px)`
}

stopButton.addEventListener('click', visitPage);

function visitPage(e){
    // e.preventDefault();
    location.href = 'slide.html'
}

