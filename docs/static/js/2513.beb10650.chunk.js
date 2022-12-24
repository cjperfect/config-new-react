"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[2513],{

/***/ 72513:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "conf": function() { return /* binding */ conf; },
/* harmony export */   "language": function() { return /* binding */ language; }
/* harmony export */ });
/* harmony import */ var C_cxkyyds_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37762);
/* harmony import */ var _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3337);

/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.34.1(547870b6881302c5b4ff32173c16d06009e3588f)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = function __copyProps(to, from, except, desc) {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = (0,C_cxkyyds_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(__getOwnPropNames(from)),
      _step;
    try {
      var _loop = function _loop() {
        var key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: function get() {
            return from[key];
          },
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      };
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __reExport = function __reExport(target, mod, secondTarget) {
  return __copyProps(target, mod, "default"), secondTarget && __copyProps(secondTarget, mod, "default");
};

// src/fillers/monaco-editor-core.ts
var monaco_editor_core_exports = {};
__reExport(monaco_editor_core_exports, _editor_editor_api_js__WEBPACK_IMPORTED_MODULE_1__);


// src/basic-languages/xml/xml.ts
var conf = {
  comments: {
    blockComment: ["<!--", "-->"]
  },
  brackets: [["<", ">"]],
  autoClosingPairs: [{
    open: "<",
    close: ">"
  }, {
    open: "'",
    close: "'"
  }, {
    open: '"',
    close: '"'
  }],
  surroundingPairs: [{
    open: "<",
    close: ">"
  }, {
    open: "'",
    close: "'"
  }, {
    open: '"',
    close: '"'
  }],
  onEnterRules: [{
    beforeText: new RegExp("<([_:\\w][_:\\w-.\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
    afterText: /^<\/([_:\w][_:\w-.\d]*)\s*>$/i,
    action: {
      indentAction: monaco_editor_core_exports.languages.IndentAction.IndentOutdent
    }
  }, {
    beforeText: new RegExp("<(\\w[\\w\\d]*)([^/>]*(?!/)>)[^<]*$", "i"),
    action: {
      indentAction: monaco_editor_core_exports.languages.IndentAction.Indent
    }
  }]
};
var language = {
  defaultToken: "",
  tokenPostfix: ".xml",
  ignoreCase: true,
  qualifiedName: /(?:[\w\.\-]+:)?[\w\.\-]+/,
  tokenizer: {
    root: [[/[^<&]+/, ""], {
      include: "@whitespace"
    }, [/(<)(@qualifiedName)/, [{
      token: "delimiter"
    }, {
      token: "tag",
      next: "@tag"
    }]], [/(<\/)(@qualifiedName)(\s*)(>)/, [{
      token: "delimiter"
    }, {
      token: "tag"
    }, "", {
      token: "delimiter"
    }]], [/(<\?)(@qualifiedName)/, [{
      token: "delimiter"
    }, {
      token: "metatag",
      next: "@tag"
    }]], [/(<\!)(@qualifiedName)/, [{
      token: "delimiter"
    }, {
      token: "metatag",
      next: "@tag"
    }]], [/<\!\[CDATA\[/, {
      token: "delimiter.cdata",
      next: "@cdata"
    }], [/&\w+;/, "string.escape"]],
    cdata: [[/[^\]]+/, ""], [/\]\]>/, {
      token: "delimiter.cdata",
      next: "@pop"
    }], [/\]/, ""]],
    tag: [[/[ \t\r\n]+/, ""], [/(@qualifiedName)(\s*=\s*)("[^"]*"|'[^']*')/, ["attribute.name", "", "attribute.value"]], [/(@qualifiedName)(\s*=\s*)("[^">?\/]*|'[^'>?\/]*)(?=[\?\/]\>)/, ["attribute.name", "", "attribute.value"]], [/(@qualifiedName)(\s*=\s*)("[^">]*|'[^'>]*)/, ["attribute.name", "", "attribute.value"]], [/@qualifiedName/, "attribute.name"], [/\?>/, {
      token: "delimiter",
      next: "@pop"
    }], [/(\/)(>)/, [{
      token: "tag"
    }, {
      token: "delimiter",
      next: "@pop"
    }]], [/>/, {
      token: "delimiter",
      next: "@pop"
    }]],
    whitespace: [[/[ \t\r\n]+/, ""], [/<!--/, {
      token: "comment",
      next: "@comment"
    }]],
    comment: [[/[^<\-]+/, "comment.content"], [/-->/, {
      token: "comment",
      next: "@pop"
    }], [/<!--/, "comment.content.invalid"], [/[<\-]/, "comment.content"]]
  }
};


/***/ })

}]);