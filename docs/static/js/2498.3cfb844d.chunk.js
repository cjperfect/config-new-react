"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[2498],{

/***/ 32498:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conf": function() { return /* binding */ conf; },
/* harmony export */   "language": function() { return /* binding */ language; }
/* harmony export */ });
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

// src/basic-languages/csp/csp.ts
var conf = {
  brackets: [],
  autoClosingPairs: [],
  surroundingPairs: []
};
var language = {
  keywords: [],
  typeKeywords: [],
  tokenPostfix: ".csp",
  operators: [],
  symbols: /[=><!~?:&|+\-*\/\^%]+/,
  escapes: /\\(?:[abfnrtv\\"']|x[0-9A-Fa-f]{1,4}|u[0-9A-Fa-f]{4}|U[0-9A-Fa-f]{8})/,
  tokenizer: {
    root: [[/child-src/, "string.quote"], [/connect-src/, "string.quote"], [/default-src/, "string.quote"], [/font-src/, "string.quote"], [/frame-src/, "string.quote"], [/img-src/, "string.quote"], [/manifest-src/, "string.quote"], [/media-src/, "string.quote"], [/object-src/, "string.quote"], [/script-src/, "string.quote"], [/style-src/, "string.quote"], [/worker-src/, "string.quote"], [/base-uri/, "string.quote"], [/plugin-types/, "string.quote"], [/sandbox/, "string.quote"], [/disown-opener/, "string.quote"], [/form-action/, "string.quote"], [/frame-ancestors/, "string.quote"], [/report-uri/, "string.quote"], [/report-to/, "string.quote"], [/upgrade-insecure-requests/, "string.quote"], [/block-all-mixed-content/, "string.quote"], [/require-sri-for/, "string.quote"], [/reflected-xss/, "string.quote"], [/referrer/, "string.quote"], [/policy-uri/, "string.quote"], [/'self'/, "string.quote"], [/'unsafe-inline'/, "string.quote"], [/'unsafe-eval'/, "string.quote"], [/'strict-dynamic'/, "string.quote"], [/'unsafe-hashed-attributes'/, "string.quote"]]
  }
};


/***/ })

}]);