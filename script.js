document.getElementById("button").addEventListener("click", function () {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTabId = tabs[0].id;
        const currentURL = tabs[0].url;

        // Inject and execute the content.js script in the current tab
        chrome.scripting.executeScript({
            target: { tabId: currentTabId },
            files: ["content.js"]
        }, () => {
            console.log("Script injected.");
        });

        // Display the current URL in the popup
        const p = document.getElementById("url");
        p.innerHTML = currentURL;
    });
});

