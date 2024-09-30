  function logMessage(message)
  {
    console.log("YTPlugin: " + message);
  }
  
  document.getElementById('changeColor').addEventListener('click', () => {
    // Query the active tab in the current window
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      // Send a message to the content script to hide elements
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: () => {
          // This function will run in the context of the webpage
          console.log("All : popup start removing");
          console.log("YTPlugin: ");
          logMessage("All");
          const elements = document.querySelectorAll('.style-scope ytd-rich-section-renderer');
          elements.forEach(element => {
            element.style.display = 'none';
          });
        }
      });
    });
  });