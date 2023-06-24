const concepts = document.querySelectorAll('.concept')
console.log(concepts)
concepts.forEach(concept=>{
    const strongElement = concept.querySelector('strong');
    concept.addEventListener('mouseenter',()=>{
        strongElement.style.color = "orange"
    })
    concept.addEventListener('mouseleave',()=>{
        strongElement.style.color ='#00a7c8'
    })
})
// Smooth scrolling for all anchor links on the page
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(anchorLink => {
  anchorLink.addEventListener('click', smoothScroll);
});

function smoothScroll(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  targetElement.scrollIntoView({ behavior: 'smooth' });
}

var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Print the screen width to the console
console.log("Screen Width: " + screenWidth + "px");

// Conditionally execute code based on the screen width
if (screenWidth < 768) {
    // Code for screens smaller than 768px
    console.log("Small Screen");
} else if (screenWidth >= 768 && screenWidth < 1024) {
    // Code for screens between 768px and 1023px
    console.log("Medium Screen");
} else {
    // Code for screens larger than or equal to 1024px
    console.log("Large Screen");
}