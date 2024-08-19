// Log a message indicating that background.js is running
console.log("Background.js is running!");


//Inject Script Method
function injectScript(tabId) {
	try{
		//Inject and execute the content.js script in the current tab
		chrome.scripting.executeScript({
			target: { tabId: tabId },
			files: ["content.js"]
		}, () => {
			console.log("Script injected.");
		});
	}catch(error){
		console.error('Error injecting script:', error);
	}
}	

// Event Listener for when a tab is reloaded!
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
	console.log("Current URL: ", tab.url);

	//Check if current URL matches with : "www.linkedin.com/feed/"
	if (tab.url.includes("www.linkedin.com/feed/")) {
		console.log("Injecting the script!");

		//Inject content script
		injectScript(tabId);
	}
});

// Event Listener for when a tab is changed or activated!
chrome.tabs.onActivated.addListener(async (activeInfo) => {
	try {
		const tab = await chrome.tabs.get(activeInfo.tabId);
		if (tab && tab.url) {
			const url = tab.url;
			console.log(`Tab URL: ${url}`);

			//Check if current URL matches with : "www.linkedin.com/feed/"
			if (url.includes("www.linkedin.com/feed/")) {

				//Inject content script
				injectScript(activeInfo.tabId);
			}

		} else {
			console.log(`URL is -> undefined.`);
		}
	} catch (error) {
		console.error('Error retrieving tab info:', error);
	}
});

