
// Function to hide elements with the specified class
function hideElementsWithClass(className) {
    // Find all elements with the specified class
    const elements = document.querySelectorAll(`.${className}`);
    
    // Loop through each element and hide it
    elements.forEach(element => {
      element.style.display = 'none';
    });
  }
  // Call the function with the class you want to hide
  // hideElementsWithClass('-img');

  

