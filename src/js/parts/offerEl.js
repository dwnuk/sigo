 // Function to toggle the class based on screen width
 function toggleClassBasedOnWidth() {
    // Get the screen width


    // Get all offerEl with the class 'toggle-element'
    const offerEl = document.querySelectorAll('.offer__el');

    // Check if the screen width is less than 768px
    if (window.innerWidth < 992) {
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

