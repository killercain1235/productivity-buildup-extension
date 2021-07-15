"use strict";

const lockbutton = document.getElementById("block");
const unlockbutton = document.getElementById("unblock");

// lockbutton.addEventListener("click", function locking(){
    
//     console.log("locked");
//     chrome.storage.local.set({locked: true});
// });

lockbutton.addEventListener("change", (event) => {
  const locked = event.target.checked;

  chrome.storage.local.set({ locked });
});


window.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get(["locked"], function (local) {
    const { locked } = local;
    // if (!Array.isArray(blocked)) {
    //   return;
    // }
    
    // enabled
    lockbutton.checked = locked;

  });
});
// unlockbutton.addEventListener("click", function unlocking(){
    
//   console.log("unlocked");
//   // chrome.storage.local.set({unlocked: true});
//   chrome.storage.local.remove("locked",function(){
//     chrome.storage.local.set({locked: false});
//     var error = chrome.runtime.lastError;
//        if (error) {
//            console.error(error);
//        }
//    })
// });


// window.addEventListener("DOMContentLoaded", () => {
//     chrome.storage.local.get(["locked"], function (local) {
//       const { locked } = local;
//     })});