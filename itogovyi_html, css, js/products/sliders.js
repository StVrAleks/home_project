/*document.addEventListener("DOMContentLoaded", function(){
  /*  var scrollbar = document.body.clientWidth - window.innerWidth + 'px';
    console.log(scrollbar);
    document.querySelector('[href="#openModal"]').addEventListener('click',function(){
      document.body.style.overflow = 'hidden';
      document.querySelector('#openModal').style.marginLeft = scrollbar;
    });
    document.querySelector('[href="#close"]').addEventListener('click',function(){
      document.body.style.overflow = 'visible';
      document.querySelector('#openModal').style.marginLeft = '0px';
    });
  });  
  */
const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('img'));
/*for mini*/ 

const sliderMIN = document.querySelector('.slider-min');
const slidesMIN = Array.from(sliderMIN.querySelectorAll('img'));
const prevButtonMIN = document.querySelector('.prev-button-min');
const nextButtonMIN = document.querySelector('.next-button-min');



const slideCount = slides.length;
const slideCountMIN = slidesMIN.length;
var slideIndex = 0;
var slideIndexMIN = 0;

slidesMIN[slideIndex].style.border = '2px solid white';


// Устанавливаем обработчики событий для кнопок
prevButton.addEventListener('click', showPreviousSlide);
nextButton.addEventListener('click', showNextSlide);
/*2*/ 
// Устанавливаем обработчики событий для кнопок
prevButtonMIN.addEventListener('click', showPreviousSlide);
nextButtonMIN.addEventListener('click', showNextSlide);

// Функция для показа предыдущего слайда
function showPreviousSlide() {
  slideIndex = (slideIndex - 1 + slideCount) % slideCount;
  updateSliderMIN();
}
/*2*/ 
// Функция для показа предыдущего слайда
function showPreviousSlideMIN() {
  slideIndexMIN = (slideIndexMIN - 1 + slideCountMIN) % slideCountMIN;
  updateSliderMIN();
}

// Функция для показа следующего слайда
function showNextSlide() {
  slideIndex = (slideIndex + 1) % slideCount;
  updateSlider();
}
/*2 */
// Функция для показа следующего слайда
function showNextSlideMIN() {
  slideIndexMIN = (slideIndexMIN + 1) % slideCountMIN;
  updateSliderMIN();
}
// Функция для обновления отображения слайдера
function updateSlider() {
  var scrollLeft = slidesMIN.scrollLeft;
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';
      slidesMIN.forEach((element) => 
        element.style.border = 'none');
      slidesMIN[slideIndex].style.border = '2px solid white';
    } else {
      slide.style.display = 'none';
    }
  });
}

/*2 */
// Функция для обновления отображения слайдера
function updateSliderMIN() {
  slidesMIN.forEach((slideMIN, index) => {
    if (index === slideIndexMIN) {; 
        slideIndex = slideIndexMIN;     
        updateSlider();
    } 
  });
}

slidesMIN.forEach((slideMIN, index) => {
  slideMIN.addEventListener('click', () => {
    slideIndex = index;     
        updateSlider();
    console.log(index);
    });
});


// Инициализация слайдера
updateSlider();

