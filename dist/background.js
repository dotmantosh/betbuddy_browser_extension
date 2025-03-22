/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/config/siteDetector.ts":
/*!************************************!*\
  !*** ./src/config/siteDetector.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   detectSite: () => (/* binding */ detectSite),
/* harmony export */   supportedSites: () => (/* binding */ supportedSites)
/* harmony export */ });
const supportedSites = {
    'sportybet.com': 'sportybet',
    'betway.com': 'betway',
    'bet9ja.com': 'bet9ja',
    'betking.com': 'betking',
    'bet365.com': 'bet365',
    'betpawa.com': 'betpawa',
    'betika.com': 'betika',
    'betfair.com': 'betfair',
    'betfred.com': 'betfred',
    'betvictor.com': 'betvictor',
    'betdaq.com': 'betdaq',
    'betsson.com': 'betsson',
    'bet-at-home.com': 'bet-at-home',
    'betbright.com': 'betbright',
    'betcris.com': 'betcris',
    'betclic.com': 'betclic',
    'betonline.com': 'betonline'
};
function detectSite(url) {
    for (const [domain, site] of Object.entries(supportedSites)) {
        if (url.includes(domain)) {
            return site;
        }
    }
    return null;
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!***************************!*\
  !*** ./src/background.ts ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _config_siteDetector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config/siteDetector */ "./src/config/siteDetector.ts");
// import { detectSite } from './config/siteDetector';
// chrome.tabs.onUpdated.addListener((
//   tabId: number,
//   changeInfo: chrome.tabs.TabChangeInfo,
//   tab: chrome.tabs.Tab
// ) => {
//   if (changeInfo.status === 'complete' && tab.url) {
//     const site = detectSite(tab.url);
//     console.log(`[Background] Detected site: ${site || 'none'} for URL: ${tab.url}`);
//     if (site) {
//       console.log(`[Background] Injecting content script for site: ${site}`);
//       chrome.scripting.executeScript({
//         target: { tabId: tabId },
//         files: ['content.js'], // Single content script
//       }, () => {
//         if (chrome.runtime.lastError) {
//           console.error('[Background] Injection failed:', chrome.runtime.lastError.message);
//         } else {
//           console.log('[Background] Successfully injected content.js');
//           // Pass the site ID after injection
//           chrome.scripting.executeScript({
//             target: { tabId: tabId },
//             func: (siteId: string) => {
//               (window as any).runSiteLogic(siteId);
//             },
//             args: [site],
//           });
//         }
//       });
//     } else {
//       console.log('[Background] No supported site detected');
//     }
//   }
// });
// // Message listener for popup verification
// chrome.runtime.onMessage.addListener((
//   message: { action: string; url: string },
//   sender: chrome.runtime.MessageSender,
//   sendResponse: (response: { script?: string }) => void
// ) => {
//   console.log('[Background] Received message:', message);
//   if (message.action === 'getInjectedScript') {
//     const site = detectSite(message.url);
//     sendResponse({ script: site ? `content.js (running ${site})` : 'None' });
//   }
//   return true; // Asynchronous response
// });
// import { detectSite } from './config/siteDetector';
// chrome.tabs.onUpdated.addListener((
//   tabId: number,
//   changeInfo: chrome.tabs.TabChangeInfo,
//   tab: chrome.tabs.Tab
// ) => {
//   if (changeInfo.status === 'complete' && tab.url) {
//     const site = detectSite(tab.url);
//     console.log(`[Background] Detected site: ${site || 'none'} for URL: ${tab.url}`);
//     if (site) {
//       console.log(`[Background] Injecting content script for site: ${site}`);
//       chrome.scripting.executeScript({
//         target: { tabId: tabId },
//         files: ['content.js'], // Single content script
//       }, () => {
//         if (chrome.runtime.lastError) {
//           console.error('[Background] Injection failed:', chrome.runtime.lastError.message);
//         } else {
//           console.log('[Background] Successfully injected content.js');
//           // Pass the site ID after injection
//           chrome.scripting.executeScript({
//             target: { tabId: tabId },
//             func: (siteId: string) => {
//               (window as any).runSiteLogic(siteId);
//             },
//             args: [site],
//           });
//         }
//       });
//     } else {
//       console.log('[Background] No supported site detected');
//     }
//   }
// });
// // Message listener for popup verification
// chrome.runtime.onMessage.addListener((
//   message: { action: string; url: string },
//   sender: chrome.runtime.MessageSender,
//   sendResponse: (response: { script?: string }) => void
// ) => {
//   console.log('[Background] Received message:', message);
//   if (message.action === 'getInjectedScript') {
//     const site = detectSite(message.url);
//     sendResponse({ script: site ? `content.js (running ${site})` : 'None' });
//   }
//   return true; // Asynchronous response
// });
// import { detectSite } from './config/siteDetector';
// // Type for site handler function
// type SiteHandler = (siteId: string) => void;
// // Maintain a cache of injected tabs to prevent duplicate injections
// const injectedTabs = new Set<number>();
// // Declare window type augmentation for our site logic
// declare global {
//   interface Window {
//     runSiteLogic: SiteHandler;
//   }
// }
// async function injectContentScript(tabId: number, site: string): Promise<void> {
//   try {
//     // Check if tab still exists before injecting
//     const tab = await chrome.tabs.get(tabId);
//     if (!tab.url) return;
//     // Inject main content script
//     await chrome.scripting.executeScript({
//       target: { tabId },
//       files: ['content.js'],
//     });
//     console.log(`[Background][Tab ${tabId}] Injected content.js`);
//     // Pass site identifier to content script
//     await chrome.scripting.executeScript({
//       target: { tabId },
//       func: (siteId: string) => window.runSiteLogic(siteId),
//       args: [site],
//     });
//     injectedTabs.add(tabId);
//   } catch (error) {
//     console.error(`[Background][Tab ${tabId}] Injection failed:`, error);
//     injectedTabs.delete(tabId);
//   }
// }
// function handleTabUpdate(tabId: number, url: string): void {
//   if (injectedTabs.has(tabId)) {
//     console.log(`[Background][Tab ${tabId}] Already injected, skipping`);
//     return;
//   }
//   const site = detectSite(url);
//   if (!site) {
//     console.log(`[Background][Tab ${tabId}] No supported site detected`);
//     return;
//   }
//   console.log(`[Background][Tab ${tabId}] Detected ${site}`);
//   injectContentScript(tabId, site);
// }
// // Tab update listener
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
//   if (changeInfo.status === 'complete' && tab.url) {
//     handleTabUpdate(tabId, tab.url);
//   }
// });
// // Message listener with proper type safety
// chrome.runtime.onMessage.addListener((
//   message: { action: string; url?: string },
//   sender: chrome.runtime.MessageSender,
//   sendResponse: (response: { script?: string }) => void
// ) => {
//   if (message.action === 'getInjectedScript' && message.url) {
//     const site = detectSite(message.url);
//     sendResponse({ script: site ? `content.js (running ${site})` : 'None' });
//   }
//   return true; // Keep channel open for async response
// });

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && tab.url) {
        const site = (0,_config_siteDetector__WEBPACK_IMPORTED_MODULE_0__.detectSite)(tab.url);
        console.log(`[Background] Detected site: ${site || 'none'} for URL: ${tab.url}`);
        if (site) {
            console.log(`[Background] Injecting content script for site: ${site}`);
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                files: ['content.js'],
            }, () => {
                if (chrome.runtime.lastError) {
                    console.error('[Background] Injection failed:', chrome.runtime.lastError.message);
                }
                else {
                    console.log('[Background] Successfully injected content.js');
                    chrome.scripting.executeScript({
                        target: { tabId: tabId },
                        func: (siteId) => {
                            window.runSiteLogic(siteId);
                        },
                        args: [site],
                    });
                }
            });
        }
        else {
            console.log('[Background] No supported site detected');
        }
    }
});
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('[Background] Received message:', message);
    if (message.action === 'getInjectedScript') {
        const site = (0,_config_siteDetector__WEBPACK_IMPORTED_MODULE_0__.detectSite)(message.url);
        sendResponse({ script: site ? `content.js (running ${site})` : 'None' });
    }
    return true;
});

})();

/******/ })()
;
//# sourceMappingURL=background.js.map