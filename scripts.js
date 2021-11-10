//Get all js-scroll elements on the page
const scrollElements = document.querySelectorAll(".js-scroll") 
//Fade out elements
scrollElements.forEach((el) => {
    el.style.opacity = 0
})
//Detect when the element is within the viewport
const elementInView = (el, scrollOffset = 100px) => {
    const elementTop = el.getBoundingClientRect().top;
  
    return (
      elementTop <= 
      ((window.innerHeight || document.documentElement.clientHeight) - scrollOffset)
    );
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
}

window.addEventListener('scroll', () => {
    handleScrollAnimation();
  })