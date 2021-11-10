//JS Scroll
//Get all js-scroll elements on the page
const scrollElements = document.querySelectorAll(".js-scroll") 
//Detect when the element is within the viewport
const elementInView = (el, offset = 100) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - offset)
    )
};
//Assign the scrolled class name to the element if it is in view.
const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
        displayScrollElement(el);
      } else {
        hideScrollElement(el);
      }
  })
};

window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })

//JS Unfade
//Get all js-fade elements on the page
const fadeElements = document.querySelectorAll(".js-unfade"); 
//Assign the fade class if js-scroll element in view
const fadeEl = (element) => {
    element.classList.add("fade")
};
const unfadeEl = (element) => {
    element.classList.remove("fade")
};

const handleFadeAnimation = () => {
    fadeElements.forEach((el) => {
      if (elementInView = true) {
          fadeEl(el);
        } else {
          unfadeEl(el);
        }
    })
  };