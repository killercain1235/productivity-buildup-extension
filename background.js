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
  };
// function blockhttpreq(){
//   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {
//     urls: ["https://*/*"]
//   }, ['blocking']);
// };

// function unblockhttpreq(){
//   chrome.webRequest.onBeforeRequest.addListener(blockRequest, {
//     // urls: ["https://*/*"]
//   }, ['blocking']);
// };





// chrome.tabs.onUpdated.addListener(function () {
//   chrome.storage.local.get(["unlocked"], function (local) {
//     const { unlocked } = local;
//     if (unlocked){
//       console.log("unlocking");
//       chrome.storage.local.remove(["locked"],function(){
//         var error = chrome.runtime.lastError;
//            if (error) {
//                console.error(error);
//            }
//        })
       
//     }
//   });
// });



chrome.runtime.onInstalled.addListener(function () {
  chrome.storage.local.get(["locked"], function (local) {

    if (typeof local.locked !== "boolean") {
      chrome.storage.local.set({ locked: false });
    }
  });
});

chrome.tabs.onUpdated.addListener(function () {
  chrome.storage.local.get(["locked"], function (local) {
    const { locked } = local;
    if (locked){
      console.log("working");
      blockhttpreq();
    }
  });
});

//block http requests



// Alarm Clock 

// listener for alarm, execute when an alarm has elasped
chrome.alarms.onAlarm.addListener((alarm) => {
    console.log("alarm", alarm);
    chrome.notifications.create({
        type: 'basic',
        iconUrl: 'notification32.png',
        title: 'Alarm',
        message: alarm.name,
        buttons: [{
            title: 'Keep it Flowing.'
        }],
        priority: 0
    });
    const audio = new Audio('./');
    audio.play();
})

// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//     console.log('tabId, changeInfo, tab', tabId, changeInfo, tab);
//     chrome.storage.sync.get('alarmData', (storage) => {
//         console.log('storage', storage);

//         if (storage.alarmData.length) {

//         } else {

//         }
//     });
// })
