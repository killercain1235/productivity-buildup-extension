//blacklisturl
chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    if (!Array.isArray(local.blocked)) {
      chrome.storage.local.set({ blocked: [] });
    }

    if (typeof local.enabled !== "boolean") {
      chrome.storage.local.set({ enabled: false });
    }
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo) {
  const url = changeInfo.pendingUrl || changeInfo.url;
  if (!url || !url.startsWith("http")) {
    return;
  }

  const hostname = new URL(url).hostname;

  chrome.storage.local.get(["blocked", "enabled"], function (local) {
    const { blocked, enabled } = local;
    if (Array.isArray(blocked) && enabled && blocked.find(domain => hostname.includes(domain))) {
      chrome.tabs.remove(tabId);
    }
  });
});
//blacklisturl

//block http requests
function blockRequest(details) {
  console.log("Blocked: ", details.url);
  return {
    cancel: true
  };
}

chrome.webRequest.onBeforeRequest.addListener(blockRequest, {
  urls: ["*://www.facebook.com/*"]
}, ['blocking']);
//block http requests