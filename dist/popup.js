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


/***/ }),

/***/ "./src/popup/components/Bet9jaPopup.tsx":
/*!**********************************************!*\
  !*** ./src/popup/components/Bet9jaPopup.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const Bet9jaPopup = ({ url }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Bet9ja Tool"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            "Current URL: ",
            url || 'Not available')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Bet9jaPopup);


/***/ }),

/***/ "./src/popup/components/BetWayPopup.tsx":
/*!**********************************************!*\
  !*** ./src/popup/components/BetWayPopup.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BetWayPopup = ({ url }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Betway Tools"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            "Current URL: ",
            url || 'Not available')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BetWayPopup);


/***/ }),

/***/ "./src/popup/components/SportyBetPopup.tsx":
/*!*************************************************!*\
  !*** ./src/popup/components/SportyBetPopup.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const SportyBetPopup = ({ url }) => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", { className: 'text-green' }, "Sportybet Tools"),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null,
            "Current URL: ",
            url || 'Not available')));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SportyBetPopup);


/***/ }),

/***/ "./src/popup/components/UnsupportedPopup.tsx":
/*!***************************************************!*\
  !*** ./src/popup/components/UnsupportedPopup.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UnsupportedPopup = () => {
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null, "UnsupportedPopup"));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UnsupportedPopup);


/***/ }),

/***/ "./src/popup/index.tsx":
/*!*****************************!*\
  !*** ./src/popup/index.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom/client */ "./node_modules/react-dom/client.js");
/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ "./src/popup/popup.tsx");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");




function init() {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const root = (0,react_dom_client__WEBPACK_IMPORTED_MODULE_1__.createRoot)(container);
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        var _a;
        const currentUrl = ((_a = tabs[0]) === null || _a === void 0 ? void 0 : _a.url) || '';
        root.render(react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_popup__WEBPACK_IMPORTED_MODULE_2__["default"], { url: currentUrl }));
    });
}
init();


/***/ }),

/***/ "./src/popup/popup.tsx":
/*!*****************************!*\
  !*** ./src/popup/popup.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_SportyBetPopup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/SportyBetPopup */ "./src/popup/components/SportyBetPopup.tsx");
/* harmony import */ var _components_Bet9jaPopup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Bet9jaPopup */ "./src/popup/components/Bet9jaPopup.tsx");
/* harmony import */ var _components_BetWayPopup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/BetWayPopup */ "./src/popup/components/BetWayPopup.tsx");
/* harmony import */ var _components_UnsupportedPopup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/UnsupportedPopup */ "./src/popup/components/UnsupportedPopup.tsx");
/* harmony import */ var _config_siteDetector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/siteDetector */ "./src/config/siteDetector.ts");
/* harmony import */ var _assets_tailwind_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/tailwind.css */ "./src/assets/tailwind.css");







const siteComponents = {
    'sportybet': _components_SportyBetPopup__WEBPACK_IMPORTED_MODULE_1__["default"],
    'betway': _components_BetWayPopup__WEBPACK_IMPORTED_MODULE_3__["default"],
    'bet9ja': _components_Bet9jaPopup__WEBPACK_IMPORTED_MODULE_2__["default"]
};
function Popup({ url }) {
    const site = (0,_config_siteDetector__WEBPACK_IMPORTED_MODULE_5__.detectSite)(url) || 'unsupported';
    const SiteComponent = siteComponents[site] || _components_UnsupportedPopup__WEBPACK_IMPORTED_MODULE_4__["default"];
    const [injectedScript, setInjectedScript] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('Loading...');
    // useEffect(() => {
    //   console.log('[Popup] Sending message for URL:', url);
    //   chrome.runtime.sendMessage({ action: 'getInjectedScript', url }, (response) => {
    //     if (chrome.runtime.lastError) {
    //       console.error('[Popup] Message error:', chrome.runtime.lastError.message);
    //       setInjectedScript('Error: Background not responding');
    //     } else {
    //       console.log('[Popup] Received response:', response);
    //       setInjectedScript(response?.script || 'None');
    //     }
    //   });
    // }, [url]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", { src: "buddy.png", alt: "" }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SiteComponent, { url: url }),
        react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", { className: "text-green-500" },
            "Injected Script: ",
            injectedScript)));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


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
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkbetbuddy"] = self["webpackChunkbetbuddy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-b53f7e","src_assets_tailwind_css"], () => (__webpack_require__("./src/popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.js.map