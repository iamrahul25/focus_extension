// Log a message indicating that background.js is running
console.log("Background.js is running!");

//List of URLs to inject the content script
const arrInject = [
	"www.linkedin.com/feed/",
	"facebook.com",
	"youtube.com",
	"instagram.com",
];


//Inject Script Method
function injectScript(tabId) {
	try {
		//Inject and execute the content.js script in the current tab
		chrome.scripting.executeScript({
			target: { tabId: tabId },
			files: ["content.js"]
		}, () => {
			console.log("Script injected.");
		});
	} catch (error) {
		console.error('Error injecting script:', error);
	}
}

// Event Listener for when a tab is reloaded!
chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
	console.log("Current URL: ", tab.url);

	//Check if the URL is in the list. If yes, inject the content script
	if (arrInject.some(ele => tab.url.includes(ele))) {
		injectScript(tabId);
	}

});


// Event Listener for when a tab is changed or url is changed!
chrome.tabs.onActivated.addListener(async (activeInfo) => {
	try {
		const tab = await chrome.tabs.get(activeInfo.tabId);
		if (tab && tab.url) {
			const url = tab.url;
			console.log(`Tab URL: ${url}`);

			//Check if the URL is in the list. If yes, inject the content script
			if (arrInject.some(ele => url.includes(ele))) {
				injectScript(activeInfo.tabId);
			}

		} else {
			console.log(`URL is -> undefined.`);
		}
	} catch (error) {
		console.error('Error retrieving tab info:', error);
	}
});

