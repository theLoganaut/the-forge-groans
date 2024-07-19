"use client";
let internalForgeLoad = 0;
let metalForged = 1;
let intervalId;

function sendUpdateToMainThread() {
  console.log("update");
  postMessage({ internalForgeLoad, metalForged });
}

function updateInternalForgeLoad() {
  internalForgeLoad -= 5;
  sendUpdateToMainThread();
}

function onmessage(event) {
  console.log("start");
  internalForgeLoad = event.data.internalForgeLoad;
  if (!intervalId) {
    intervalId = setInterval(updateInternalForgeLoad, 1000);
  }
}

// onmessage = function (event) {
//   console.log("start");
//   internalForgeLoad = event.data.internalForgeLoad;
//   if (!intervalId) {
//     intervalId = setInterval(updateInternalForgeLoad, 1000);
//   }
// };
