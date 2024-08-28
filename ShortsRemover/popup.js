
  document.getElementById('changeColor').addEventListener('click', () => {
    // Query the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Send a message to the content script to hide elements
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          // This function will run in the context of the webpage
          alert("Hello, Img!");
          const elements = document.querySelectorAll('.style-scope ytd-rich-section-renderer');
          elements.forEach(element => {
            element.style.display = 'none';
            element.style.backgroundColor = 'red';
          });

          elements = document.querySelectorAll('.style-scope ytd-reel-shelf-renderer');
          elements.forEach(element => {
            element.style.display = 'none';
            element.style.backgroundColor = 'red';
          });
        }
      });
    });
  });