/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/

let interceptedData = []; // Store intercepted data here
console.log(interceptedData);
// // Listen for messages from the content script
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'API_RESPONSE') {
//     console.log('[Background] Received API response:', message);
//     interceptedData.push(message); // Store the intercepted data
//   }
//   // Handle requests from the popup
//   if (message.type === 'GET_API_DATA') {
//     console.log('[Background] Sending intercepted data to popup');
//     // sendResponse(interceptedData); // Send the stored data to the popup
//   }
//   return true; // Keep the message channel open for async responses
// });

/******/ })()
;
//# sourceMappingURL=background.js.map