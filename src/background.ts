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

import { detectSite } from './config/siteDetector';

chrome.tabs.onUpdated.addListener((
  tabId: number,
  changeInfo: chrome.tabs.TabChangeInfo,
  tab: chrome.tabs.Tab
) => {
  if (changeInfo.status === 'complete' && tab.url) {
    const site = detectSite(tab.url);
    console.log(`[Background] Detected site: ${site || 'none'} for URL: ${tab.url}`);
    if (site) {
      console.log(`[Background] Injecting content script for site: ${site}`);
      chrome.scripting.executeScript({
        target: { tabId: tabId },
        files: ['content.js'],
      }, () => {
        if (chrome.runtime.lastError) {
          console.error('[Background] Injection failed:', chrome.runtime.lastError.message);
        } else {
          console.log('[Background] Successfully injected content.js');
          chrome.scripting.executeScript({
            target: { tabId: tabId },
            func: (siteId: string) => {
              (window as any).runSiteLogic(siteId);
            },
            args: [site],
          });
        }
      });
    } else {
      console.log('[Background] No supported site detected');
    }
  }
});

chrome.runtime.onMessage.addListener((
  message: { action: string; url: string },
  sender: chrome.runtime.MessageSender,
  sendResponse: (response: { script?: string }) => void
) => {
  console.log('[Background] Received message:', message);
  if (message.action === 'getInjectedScript') {
    const site = detectSite(message.url);
    sendResponse({ script: site ? `content.js (running ${site})` : 'None' });
  }
  return true;
});