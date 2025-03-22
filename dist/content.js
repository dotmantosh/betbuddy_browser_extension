/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content/bet9ja.ts":
/*!*******************************!*\
  !*** ./src/content/bet9ja.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   bet9ja: () => (/* binding */ bet9ja)
/* harmony export */ });
function bet9ja() {
    console.log('Bet9ja content script running!');
    document.body.style.backgroundColor = 'lightyellow';
}
// bet9ja();


/***/ }),

/***/ "./src/content/betway.ts":
/*!*******************************!*\
  !*** ./src/content/betway.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   betway: () => (/* binding */ betway)
/* harmony export */ });
function betway() {
    console.log('Betway content script running!');
    document.body.style.backgroundColor = 'lightgreen';
}
// betway();


/***/ }),

/***/ "./src/content/sportybet.ts":
/*!**********************************!*\
  !*** ./src/content/sportybet.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sportybet: () => (/* binding */ sportybet)
/* harmony export */ });
// Define a type for the script's functionality (optional)
function sportybet() {
    console.log('Sportybet content script running!');
    document.body.style.backgroundColor = 'lightblue'; // Example DOM manipulation
}
// Execute the script
// sportybet();


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
/*!************************!*\
  !*** ./src/content.ts ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _content_bet9ja__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content/bet9ja */ "./src/content/bet9ja.ts");
/* harmony import */ var _content_betway__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content/betway */ "./src/content/betway.ts");
/* harmony import */ var _content_sportybet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content/sportybet */ "./src/content/sportybet.ts");



const siteFunctions = {
    sportybet: _content_sportybet__WEBPACK_IMPORTED_MODULE_2__.sportybet,
    betway: _content_betway__WEBPACK_IMPORTED_MODULE_1__.betway,
    bet9ja: _content_bet9ja__WEBPACK_IMPORTED_MODULE_0__.bet9ja,
};
window.runSiteLogic = (site) => {
    console.log('[Content] Received site:', site);
    if (site && siteFunctions[site]) {
        siteFunctions[site]();
    }
    else {
        console.log('[Content] No specific logic for this site');
    }
};

})();

/******/ })()
;
//# sourceMappingURL=content.js.map