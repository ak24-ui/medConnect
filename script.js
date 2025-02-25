// Add any custom JavaScript here if needed
// Example: Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  


  // Scroll functionality for arrows
const scrollContainer = document.getElementById('scroll-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// Scroll left
leftArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: -300, // Scroll by 300px to the left
    behavior: 'smooth' // Smooth scrolling
  });
});

// Scroll right
rightArrow.addEventListener('click', () => {
  scrollContainer.scrollBy({
    left: 300, // Scroll by 300px to the right
    behavior: 'smooth' // Smooth scrolling
  });
});

// Hide arrows when at the start or end of the scroll
scrollContainer.addEventListener('scroll', () => {
  if (scrollContainer.scrollLeft === 0) {
    leftArrow.style.display = 'none'; // Hide left arrow at the start
  } else {
    leftArrow.style.display = 'flex'; // Show left arrow
  }

  if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
    rightArrow.style.display = 'none'; // Hide right arrow at the end
  } else {
    rightArrow.style.display = 'flex'; // Show right arrow
  }
});

// Initial check for arrow visibility
scrollContainer.dispatchEvent(new Event('scroll'));



