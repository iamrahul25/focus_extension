document.getElementById("button").addEventListener("click", function () {
    // Get the current active tab
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        const currentTabId = tabs[0].id;
        const currentURL = tabs[0].url;

        // Display the current URL in the popup
        const p = document.getElementById("url");
        p.innerHTML = currentURL;
    });
});

