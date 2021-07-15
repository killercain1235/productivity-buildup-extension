"use strict";

const lockbutton = document.getElementById("block");
const unlockbutton = document.getElementById("unblock");

// lockbutton.addEventListener("click", function locking(){
    
//     console.log("locked");
//     chrome.storage.local.set({locked: true});
// });

lockbutton.addEventListener("click", (event) => {
  console.log("locked");
  localStorage.setItem("dummy", "fuckit");
  chrome.storage.local.set({ locked: "yes" });
});

unlockbutton.addEventListener("click",() => {
  console.log("unlocked");
  localStorage.setItem("dummy", "jello");
  chrome.runtime.reload();
  // chrome.storage.local.remove(["locked"],function(){
  //   var error = chrome.runtime.lastError;
  //      if (error) {
  //          console.error(error);
  //      }
  //  })
  //  chrome.storage.local.set({ locked: "no" });
})

// window.addEventListener("DOMContentLoaded", () => {
//   chrome.storage.local.get(["locked"], function (local) {
//     const { locked } = local;
//     // if (!Array.isArray(blocked)) {
//     //   return;
//     // }
    
//     // enabled
//     lockbutton.checked = locked;

//   });
// });
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