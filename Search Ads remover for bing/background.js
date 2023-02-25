chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.indexOf('https://www.bing.com/*') > -1) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            files: ['content_scripts.js'],
        });
    }
});