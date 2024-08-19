// Log a message indicating that background.js is running
console.log("Background.js is running!");

// Event Listener for when a tab is activated (changed)
chrome.tabs.onActivated.addListener(async (activeInfo) => {
  try {
    const tab = await chrome.tabs.get(activeInfo.tabId);
    if (tab && tab.url) {
      console.log(`Tab URL: ${tab.url}`);
    } else {
      console.log(`URL is -> undefined.`);
    }
  } catch (error) {
    console.error('Error retrieving tab info:', error);
  }
});

