chrome.browserAction.onClicked.addListener(function(activeTab){
  	chrome.tabs.create({ url: "http://stackoverflow.com/" });
});