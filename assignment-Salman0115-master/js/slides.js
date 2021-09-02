"use strict";
const slides = document.querySelectorAll('#slides section');
let currentSlide = 0;

function setSlide(slide_number){
let candidate = document.querySelector('#slides section.current');
if(candidate){
  candidate.classList.remove('current');
}
let mySlide = slides.item(slide_number);
if(mySlide){
mySlide.classList.add('current');
}
// candidate.textContent = `${slide_number + 1} of ${slides.length}`;
}

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

function prevSlide(ev) {
  currentSlide--;
  if(currentSlide < 0){
    currentSlide = slides.length -1;
  }
  setSlide(currentSlide);
}

function nextSlide(ev) {
  currentSlide++;
  if(currentSlide >= slides.length){
    currentSlide = 0;
  }
  setSlide(currentSlide);
}

setSlide(currentSlide);
