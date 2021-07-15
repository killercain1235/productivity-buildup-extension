"use strict";

const lockbutton = document.getElementById("block");
const unlockbutton = document.getElementById("unblock");


lockbutton.addEventListener("click", (event) => {
  console.log("locked");
  localStorage.setItem("dummy", "fuckit");
  chrome.storage.local.set({ locked: "yes" });
});

unlockbutton.addEventListener("click",() => {
  console.log("unlocked");
  localStorage.setItem("dummy", "jello");
  chrome.runtime.reload();
})
