 // Function to toggle the class based on screen width
 function toggleClassBasedOnWidth() {
    // Get the screen width
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    // Get all offerEl with the class 'toggle-element'
    const offerEl = document.querySelectorAll('.offer__el');

    // Check if the screen width is less than 768px
    if (screenWidth < 992) {
      // Add click event listener to each element
      offerEl.forEach(function(element) {
        element.addEventListener('click', function() {
          // Toggle the 'show' class on the clicked element
          element.classList.toggle('show');
        });
      });
    }
  }

  // Call the function on page load
  toggleClassBasedOnWidth();

  // Add resize event listener to handle changes in screen width
  window.addEventListener('resize', toggleClassBasedOnWidth);