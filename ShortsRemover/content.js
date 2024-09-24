
// Function to hide elements with the specified class
function hideElementsWithClass(className) {
    // Find all elements with the specified class
    const elements = document.querySelectorAll(`.${className}`);
    
    // Loop through each element and hide it
    elements.forEach(element => {
      console.log("Test : foreach");
      element.style.display = 'none';
    });
  }
  // Call the function with the class you want to hide
console.log("Test : StartContent");
hideElementsWithClass('style-scope ytd-rich-section-renderer');
console.log("Test : MidContent");
hideElementsWithClass('style-scope ytd-reel-shelf-renderer');
console.log("Test : FinishContent");

  

