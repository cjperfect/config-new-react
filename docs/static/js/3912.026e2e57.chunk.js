"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[3912],{

/***/ 13912:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TagAngleInterpolationBracket": function() { return /* binding */ TagAngleInterpolationBracket; },
/* harmony export */   "TagAngleInterpolationDollar": function() { return /* binding */ TagAngleInterpolationDollar; },
/* harmony export */   "TagAutoInterpolationBracket": function() { return /* binding */ TagAutoInterpolationBracket; },
/* harmony export */   "TagAutoInterpolationDollar": function() { return /* binding */ TagAutoInterpolationDollar; },
/* harmony export */   "TagBracketInterpolationBracket": function() { return /* binding */ TagBracketInterpolationBracket; },
/* harmony export */   "TagBracketInterpolationDollar": function() { return /* binding */ TagBracketInterpolationDollar; }
/* harmony export */ });
/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4942);
/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1413);
/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37762);
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
    var _iterator = (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_createForOfIteratorHelper_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)(__getOwnPropNames(from)),
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


// src/basic-languages/freemarker2/freemarker2.ts
var EMPTY_ELEMENTS = ["assign", "flush", "ftl", "return", "global", "import", "include", "break", "continue", "local", "nested", "nt", "setting", "stop", "t", "lt", "rt", "fallback"];
var BLOCK_ELEMENTS = ["attempt", "autoesc", "autoEsc", "compress", "comment", "escape", "noescape", "function", "if", "list", "items", "sep", "macro", "noparse", "noParse", "noautoesc", "noAutoEsc", "outputformat", "switch", "visit", "recurse"];
var TagSyntaxAngle = {
  close: ">",
  id: "angle",
  open: "<"
};
var TagSyntaxBracket = {
  close: "\\]",
  id: "bracket",
  open: "\\["
};
var TagSyntaxAuto = {
  close: "[>\\]]",
  id: "auto",
  open: "[<\\[]"
};
var InterpolationSyntaxDollar = {
  close: "\\}",
  id: "dollar",
  open1: "\\$",
  open2: "\\{"
};
var InterpolationSyntaxBracket = {
  close: "\\]",
  id: "bracket",
  open1: "\\[",
  open2: "="
};
function createLangConfiguration(ts) {
  return {
    brackets: [["<", ">"], ["[", "]"], ["(", ")"], ["{", "}"]],
    comments: {
      blockComment: ["".concat(ts.open, "--"), "--".concat(ts.close)]
    },
    autoCloseBefore: "\n\r	 }]),.:;=",
    autoClosingPairs: [{
      open: "{",
      close: "}"
    }, {
      open: "[",
      close: "]"
    }, {
      open: "(",
      close: ")"
    }, {
      open: '"',
      close: '"',
      notIn: ["string"]
    }, {
      open: "'",
      close: "'",
      notIn: ["string"]
    }],
    surroundingPairs: [{
      open: '"',
      close: '"'
    }, {
      open: "'",
      close: "'"
    }, {
      open: "{",
      close: "}"
    }, {
      open: "[",
      close: "]"
    }, {
      open: "(",
      close: ")"
    }, {
      open: "<",
      close: ">"
    }],
    folding: {
      markers: {
        start: new RegExp("".concat(ts.open, "#(?:").concat(BLOCK_ELEMENTS.join("|"), ")([^/").concat(ts.close, "]*(?!/)").concat(ts.close, ")[^").concat(ts.open, "]*$")),
        end: new RegExp("".concat(ts.open, "/#(?:").concat(BLOCK_ELEMENTS.join("|"), ")[\\r\\n\\t ]*>"))
      }
    },
    onEnterRules: [{
      beforeText: new RegExp("".concat(ts.open, "#(?!(?:").concat(EMPTY_ELEMENTS.join("|"), "))([a-zA-Z_]+)([^/").concat(ts.close, "]*(?!/)").concat(ts.close, ")[^").concat(ts.open, "]*$")),
      afterText: new RegExp("^".concat(ts.open, "/#([a-zA-Z_]+)[\\r\\n\\t ]*").concat(ts.close, "$")),
      action: {
        indentAction: monaco_editor_core_exports.languages.IndentAction.IndentOutdent
      }
    }, {
      beforeText: new RegExp("".concat(ts.open, "#(?!(?:").concat(EMPTY_ELEMENTS.join("|"), "))([a-zA-Z_]+)([^/").concat(ts.close, "]*(?!/)").concat(ts.close, ")[^").concat(ts.open, "]*$")),
      action: {
        indentAction: monaco_editor_core_exports.languages.IndentAction.Indent
      }
    }]
  };
}
function createLangConfigurationAuto() {
  return {
    brackets: [["<", ">"], ["[", "]"], ["(", ")"], ["{", "}"]],
    autoCloseBefore: "\n\r	 }]),.:;=",
    autoClosingPairs: [{
      open: "{",
      close: "}"
    }, {
      open: "[",
      close: "]"
    }, {
      open: "(",
      close: ")"
    }, {
      open: '"',
      close: '"',
      notIn: ["string"]
    }, {
      open: "'",
      close: "'",
      notIn: ["string"]
    }],
    surroundingPairs: [{
      open: '"',
      close: '"'
    }, {
      open: "'",
      close: "'"
    }, {
      open: "{",
      close: "}"
    }, {
      open: "[",
      close: "]"
    }, {
      open: "(",
      close: ")"
    }, {
      open: "<",
      close: ">"
    }],
    folding: {
      markers: {
        start: new RegExp("[<\\[]#(?:".concat(BLOCK_ELEMENTS.join("|"), ")([^/>\\]]*(?!/)[>\\]])[^<\\[]*$")),
        end: new RegExp("[<\\[]/#(?:".concat(BLOCK_ELEMENTS.join("|"), ")[\\r\\n\\t ]*>"))
      }
    },
    onEnterRules: [{
      beforeText: new RegExp("[<\\[]#(?!(?:".concat(EMPTY_ELEMENTS.join("|"), "))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$")),
      afterText: new RegExp("^[<\\[]/#([a-zA-Z_]+)[\\r\\n\\t ]*[>\\]]$"),
      action: {
        indentAction: monaco_editor_core_exports.languages.IndentAction.IndentOutdent
      }
    }, {
      beforeText: new RegExp("[<\\[]#(?!(?:".concat(EMPTY_ELEMENTS.join("|"), "))([a-zA-Z_]+)([^/>\\]]*(?!/)[>\\]])[^[<\\[]]*$")),
      action: {
        indentAction: monaco_editor_core_exports.languages.IndentAction.Indent
      }
    }]
  };
}
function createMonarchLanguage(ts, is) {
  var _objectSpread2, _cases, _objectSpread3, _tokenizer, _ref;
  var id = "_".concat(ts.id, "_").concat(is.id);
  var s = function s(name) {
    return name.replace(/__id__/g, id);
  };
  var r = function r(regexp) {
    var source = regexp.source.replace(/__id__/g, id);
    return new RegExp(source, regexp.flags);
  };
  return _ref = {
    unicode: true,
    includeLF: false,
    start: s("default__id__"),
    ignoreCase: false,
    defaultToken: "invalid",
    tokenPostfix: ".freemarker2",
    brackets: [{
      open: "{",
      close: "}",
      token: "delimiter.curly"
    }, {
      open: "[",
      close: "]",
      token: "delimiter.square"
    }, {
      open: "(",
      close: ")",
      token: "delimiter.parenthesis"
    }, {
      open: "<",
      close: ">",
      token: "delimiter.angle"
    }]
  }, (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("open__id__"), new RegExp(ts.open)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("close__id__"), new RegExp(ts.close)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("iOpen1__id__"), new RegExp(is.open1)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("iOpen2__id__"), new RegExp(is.open2)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("iClose__id__"), new RegExp(is.close)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("startTag__id__"), r(/(@open__id__)(#)/)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("endTag__id__"), r(/(@open__id__)(\/#)/)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("startOrEndTag__id__"), r(/(@open__id__)(\/?#)/)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("closeTag1__id__"), r(/((?:@blank)*)(@close__id__)/)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, s("closeTag2__id__"), r(/((?:@blank)*\/?)(@close__id__)/)), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "blank", /[ \t\n\r]/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "keywords", ["false", "true", "in", "as", "using"]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "directiveStartCloseTag1", /attempt|recover|sep|auto[eE]sc|no(?:autoe|AutoE)sc|compress|default|no[eE]scape|comment|no[pP]arse/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "directiveStartCloseTag2", /else|break|continue|return|stop|flush|t|lt|rt|nt|nested|recurse|fallback|ftl/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "directiveStartBlank", /if|else[iI]f|list|for[eE]ach|switch|case|assign|global|local|include|import|function|macro|transform|visit|stop|return|call|setting|output[fF]ormat|nested|recurse|escape|ftl|items/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "directiveEndCloseTag1", /if|list|items|sep|recover|attempt|for[eE]ach|local|global|assign|function|macro|output[fF]ormat|auto[eE]sc|no(?:autoe|AutoE)sc|compress|transform|switch|escape|no[eE]scape/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "escapedChar", /\\(?:[ntrfbgla\\'"\{=]|(?:x[0-9A-Fa-f]{1,4}))/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "asciiDigit", /[0-9]/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "integer", /[0-9]+/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "nonEscapedIdStartChar", /[\$@-Z_a-z\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u1FFF\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183-\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3006\u3031-\u3035\u303B-\u303C\u3040-\u318F\u31A0-\u31BA\u31F0-\u31FF\u3300-\u337F\u3400-\u4DB5\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5-\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40-\uFB41\uFB43-\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "escapedIdChar", /\\[\-\.:#]/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "idStartChar", /(?:@nonEscapedIdStartChar)|(?:@escapedIdChar)/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "id", /(?:@idStartChar)(?:(?:@idStartChar)|(?:@asciiDigit))*/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "specialHashKeys", /\*\*|\*|false|true|in|as|using/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "namedSymbols", /&lt;=|&gt;=|\\lte|\\lt|&lt;|\\gte|\\gt|&gt;|&amp;&amp;|\\and|-&gt;|->|==|!=|\+=|-=|\*=|\/=|%=|\+\+|--|<=|&&|\|\||:|\.\.\.|\.\.\*|\.\.<|\.\.!|\?\?|=|<|\+|-|\*|\/|%|\||\.\.|\?|!|&|\.|,|;/), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "arrows", ["->", "-&gt;"]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "delimiters", [";", ":", ",", "."]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "stringOperators", ["lte", "lt", "gte", "gt"]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "noParseTags", ["noparse", "noParse", "comment"]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_ref, "tokenizer", (_tokenizer = {}, (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("default__id__"), [{
    include: s("@directive_token__id__")
  }, {
    include: s("@interpolation_and_text_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("fmExpression__id__.directive"), [{
    include: s("@blank_and_expression_comment_token__id__")
  }, {
    include: s("@directive_end_token__id__")
  }, {
    include: s("@expression_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("fmExpression__id__.interpolation"), [{
    include: s("@blank_and_expression_comment_token__id__")
  }, {
    include: s("@expression_token__id__")
  }, {
    include: s("@greater_operators_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("inParen__id__.plain"), [{
    include: s("@blank_and_expression_comment_token__id__")
  }, {
    include: s("@directive_end_token__id__")
  }, {
    include: s("@expression_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("inParen__id__.gt"), [{
    include: s("@blank_and_expression_comment_token__id__")
  }, {
    include: s("@expression_token__id__")
  }, {
    include: s("@greater_operators_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("noSpaceExpression__id__"), [{
    include: s("@no_space_expression_end_token__id__")
  }, {
    include: s("@directive_end_token__id__")
  }, {
    include: s("@expression_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("unifiedCall__id__"), [{
    include: s("@unified_call_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("singleString__id__"), [{
    include: s("@string_single_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("doubleString__id__"), [{
    include: s("@string_double_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("rawSingleString__id__"), [{
    include: s("@string_single_raw_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("rawDoubleString__id__"), [{
    include: s("@string_double_raw_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("expressionComment__id__"), [{
    include: s("@expression_comment_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("noParse__id__"), [{
    include: s("@no_parse_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("terseComment__id__"), [{
    include: s("@terse_comment_token__id__")
  }]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("directive_token__id__"), [[r(/(?:@startTag__id__)(@directiveStartCloseTag1)(?:@closeTag1__id__)/), ts.id === "auto" ? {
    cases: {
      "$1==<": {
        token: "@rematch",
        switchTo: "@default_angle_".concat(is.id)
      },
      "$1==[": {
        token: "@rematch",
        switchTo: "@default_bracket_".concat(is.id)
      }
    }
  } : [{
    token: "@brackets.directive"
  }, {
    token: "delimiter.directive"
  }, {
    cases: {
      "@noParseTags": {
        token: "tag",
        next: s("@noParse__id__.$3")
      },
      "@default": {
        token: "tag"
      }
    }
  }, {
    token: "delimiter.directive"
  }, {
    token: "@brackets.directive"
  }]], [r(/(?:@startTag__id__)(@directiveStartCloseTag2)(?:@closeTag2__id__)/), ts.id === "auto" ? {
    cases: {
      "$1==<": {
        token: "@rematch",
        switchTo: "@default_angle_".concat(is.id)
      },
      "$1==[": {
        token: "@rematch",
        switchTo: "@default_bracket_".concat(is.id)
      }
    }
  } : [{
    token: "@brackets.directive"
  }, {
    token: "delimiter.directive"
  }, {
    token: "tag"
  }, {
    token: "delimiter.directive"
  }, {
    token: "@brackets.directive"
  }]], [r(/(?:@startTag__id__)(@directiveStartBlank)(@blank)/), ts.id === "auto" ? {
    cases: {
      "$1==<": {
        token: "@rematch",
        switchTo: "@default_angle_".concat(is.id)
      },
      "$1==[": {
        token: "@rematch",
        switchTo: "@default_bracket_".concat(is.id)
      }
    }
  } : [{
    token: "@brackets.directive"
  }, {
    token: "delimiter.directive"
  }, {
    token: "tag"
  }, {
    token: "",
    next: s("@fmExpression__id__.directive")
  }]], [r(/(?:@endTag__id__)(@directiveEndCloseTag1)(?:@closeTag1__id__)/), ts.id === "auto" ? {
    cases: {
      "$1==<": {
        token: "@rematch",
        switchTo: "@default_angle_".concat(is.id)
      },
      "$1==[": {
        token: "@rematch",
        switchTo: "@default_bracket_".concat(is.id)
      }
    }
  } : [{
    token: "@brackets.directive"
  }, {
    token: "delimiter.directive"
  }, {
    token: "tag"
  }, {
    token: "delimiter.directive"
  }, {
    token: "@brackets.directive"
  }]], [r(/(@open__id__)(@)/), ts.id === "auto" ? {
    cases: {
      "$1==<": {
        token: "@rematch",
        switchTo: "@default_angle_".concat(is.id)
      },
      "$1==[": {
        token: "@rematch",
        switchTo: "@default_bracket_".concat(is.id)
      }
    }
  } : [{
    token: "@brackets.directive"
  }, {
    token: "delimiter.directive",
    next: s("@unifiedCall__id__")
  }]], [r(/(@open__id__)(\/@)((?:(?:@id)(?:\.(?:@id))*)?)(?:@closeTag1__id__)/), [{
    token: "@brackets.directive"
  }, {
    token: "delimiter.directive"
  }, {
    token: "tag"
  }, {
    token: "delimiter.directive"
  }, {
    token: "@brackets.directive"
  }]], [r(/(@open__id__)#--/), ts.id === "auto" ? {
    cases: {
      "$1==<": {
        token: "@rematch",
        switchTo: "@default_angle_".concat(is.id)
      },
      "$1==[": {
        token: "@rematch",
        switchTo: "@default_bracket_".concat(is.id)
      }
    }
  } : {
    token: "comment",
    next: s("@terseComment__id__")
  }], [r(/(?:@startOrEndTag__id__)([a-zA-Z_]+)/), ts.id === "auto" ? {
    cases: {
      "$1==<": {
        token: "@rematch",
        switchTo: "@default_angle_".concat(is.id)
      },
      "$1==[": {
        token: "@rematch",
        switchTo: "@default_bracket_".concat(is.id)
      }
    }
  } : [{
    token: "@brackets.directive"
  }, {
    token: "delimiter.directive"
  }, {
    token: "tag.invalid",
    next: s("@fmExpression__id__.directive")
  }]]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("interpolation_and_text_token__id__"), [[r(/(@iOpen1__id__)(@iOpen2__id__)/), [{
    token: is.id === "bracket" ? "@brackets.interpolation" : "delimiter.interpolation"
  }, {
    token: is.id === "bracket" ? "delimiter.interpolation" : "@brackets.interpolation",
    next: s("@fmExpression__id__.interpolation")
  }]], [/[\$#<\[\{]|(?:@blank)+|[^\$<#\[\{\n\r\t ]+/, {
    token: "source"
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("string_single_token__id__"), [[/[^'\\]/, {
    token: "string"
  }], [/@escapedChar/, {
    token: "string.escape"
  }], [/'/, {
    token: "string",
    next: "@pop"
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("string_double_token__id__"), [[/[^"\\]/, {
    token: "string"
  }], [/@escapedChar/, {
    token: "string.escape"
  }], [/"/, {
    token: "string",
    next: "@pop"
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("string_single_raw_token__id__"), [[/[^']+/, {
    token: "string.raw"
  }], [/'/, {
    token: "string.raw",
    next: "@pop"
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("string_double_raw_token__id__"), [[/[^"]+/, {
    token: "string.raw"
  }], [/"/, {
    token: "string.raw",
    next: "@pop"
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("expression_token__id__"), [[/(r?)(['"])/, {
    cases: {
      "r'": [{
        token: "keyword"
      }, {
        token: "string.raw",
        next: s("@rawSingleString__id__")
      }],
      'r"': [{
        token: "keyword"
      }, {
        token: "string.raw",
        next: s("@rawDoubleString__id__")
      }],
      "'": [{
        token: "source"
      }, {
        token: "string",
        next: s("@singleString__id__")
      }],
      '"': [{
        token: "source"
      }, {
        token: "string",
        next: s("@doubleString__id__")
      }]
    }
  }], [/(?:@integer)(?:\.(?:@integer))?/, {
    cases: {
      "(?:@integer)": {
        token: "number"
      },
      "@default": {
        token: "number.float"
      }
    }
  }], [/(\.)(@blank*)(@specialHashKeys)/, [{
    token: "delimiter"
  }, {
    token: ""
  }, {
    token: "identifier"
  }]], [/(?:@namedSymbols)/, {
    cases: {
      "@arrows": {
        token: "meta.arrow"
      },
      "@delimiters": {
        token: "delimiter"
      },
      "@default": {
        token: "operators"
      }
    }
  }], [/@id/, {
    cases: {
      "@keywords": {
        token: "keyword.$0"
      },
      "@stringOperators": {
        token: "operators"
      },
      "@default": {
        token: "identifier"
      }
    }
  }], [/[\[\]\(\)\{\}]/, {
    cases: {
      "\\[": {
        cases: {
          "$S2==gt": {
            token: "@brackets",
            next: s("@inParen__id__.gt")
          },
          "@default": {
            token: "@brackets",
            next: s("@inParen__id__.plain")
          }
        }
      },
      "\\]": {
        cases: (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, is.id === "bracket" ? {
          "$S2==interpolation": {
            token: "@brackets.interpolation",
            next: "@popall"
          }
        } : {}), ts.id === "bracket" ? {
          "$S2==directive": {
            token: "@brackets.directive",
            next: "@popall"
          }
        } : {}), {}, (_objectSpread2 = {}, (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_objectSpread2, s("$S1==inParen__id__"), {
          token: "@brackets",
          next: "@pop"
        }), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_objectSpread2, "@default", {
          token: "@brackets"
        }), _objectSpread2))
      },
      "\\(": {
        token: "@brackets",
        next: s("@inParen__id__.gt")
      },
      "\\)": {
        cases: (_cases = {}, (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_cases, s("$S1==inParen__id__"), {
          token: "@brackets",
          next: "@pop"
        }), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_cases, "@default", {
          token: "@brackets"
        }), _cases)
      },
      "\\{": {
        cases: {
          "$S2==gt": {
            token: "@brackets",
            next: s("@inParen__id__.gt")
          },
          "@default": {
            token: "@brackets",
            next: s("@inParen__id__.plain")
          }
        }
      },
      "\\}": {
        cases: (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, is.id === "bracket" ? {} : {
          "$S2==interpolation": {
            token: "@brackets.interpolation",
            next: "@popall"
          }
        }), {}, (_objectSpread3 = {}, (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_objectSpread3, s("$S1==inParen__id__"), {
          token: "@brackets",
          next: "@pop"
        }), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_objectSpread3, "@default", {
          token: "@brackets"
        }), _objectSpread3))
      }
    }
  }], [/\$\{/, {
    token: "delimiter.invalid"
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("blank_and_expression_comment_token__id__"), [[/(?:@blank)+/, {
    token: ""
  }], [/[<\[][#!]--/, {
    token: "comment",
    next: s("@expressionComment__id__")
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("directive_end_token__id__"), [[/>/, ts.id === "bracket" ? {
    token: "operators"
  } : {
    token: "@brackets.directive",
    next: "@popall"
  }], [r(/(\/)(@close__id__)/), [{
    token: "delimiter.directive"
  }, {
    token: "@brackets.directive",
    next: "@popall"
  }]]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("greater_operators_token__id__"), [[/>/, {
    token: "operators"
  }], [/>=/, {
    token: "operators"
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("no_space_expression_end_token__id__"), [[/(?:@blank)+/, {
    token: "",
    switchTo: s("@fmExpression__id__.directive")
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("unified_call_token__id__"), [[/(@id)((?:@blank)+)/, [{
    token: "tag"
  }, {
    token: "",
    next: s("@fmExpression__id__.directive")
  }]], [r(/(@id)(\/?)(@close__id__)/), [{
    token: "tag"
  }, {
    token: "delimiter.directive"
  }, {
    token: "@brackets.directive",
    next: "@popall"
  }]], [/./, {
    token: "@rematch",
    next: s("@noSpaceExpression__id__")
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("no_parse_token__id__"), [[r(/(@open__id__)(\/#?)([a-zA-Z]+)((?:@blank)*)(@close__id__)/), {
    cases: {
      "$S2==$3": [{
        token: "@brackets.directive"
      }, {
        token: "delimiter.directive"
      }, {
        token: "tag"
      }, {
        token: ""
      }, {
        token: "@brackets.directive",
        next: "@popall"
      }],
      "$S2==comment": [{
        token: "comment"
      }, {
        token: "comment"
      }, {
        token: "comment"
      }, {
        token: "comment"
      }, {
        token: "comment"
      }],
      "@default": [{
        token: "source"
      }, {
        token: "source"
      }, {
        token: "source"
      }, {
        token: "source"
      }, {
        token: "source"
      }]
    }
  }], [/[^<\[\-]+|[<\[\-]/, {
    cases: {
      "$S2==comment": {
        token: "comment"
      },
      "@default": {
        token: "source"
      }
    }
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("expression_comment_token__id__"), [[/--[>\]]/, {
    token: "comment",
    next: "@pop"
  }], [/[^\->\]]+|[>\]\-]/, {
    token: "comment"
  }]]), (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z)(_tokenizer, s("terse_comment_token__id__"), [[r(/--(?:@close__id__)/), {
    token: "comment",
    next: "@popall"
  }], [/[^<\[\-]+|[<\[\-]/, {
    token: "comment"
  }]]), _tokenizer)), _ref;
}
function createMonarchLanguageAuto(is) {
  var angle = createMonarchLanguage(TagSyntaxAngle, is);
  var bracket = createMonarchLanguage(TagSyntaxBracket, is);
  var auto = createMonarchLanguage(TagSyntaxAuto, is);
  return (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, angle), bracket), auto), {}, {
    unicode: true,
    includeLF: false,
    start: "default_auto_".concat(is.id),
    ignoreCase: false,
    defaultToken: "invalid",
    tokenPostfix: ".freemarker2",
    brackets: [{
      open: "{",
      close: "}",
      token: "delimiter.curly"
    }, {
      open: "[",
      close: "]",
      token: "delimiter.square"
    }, {
      open: "(",
      close: ")",
      token: "delimiter.parenthesis"
    }, {
      open: "<",
      close: ">",
      token: "delimiter.angle"
    }],
    tokenizer: (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)({}, angle.tokenizer), bracket.tokenizer), auto.tokenizer)
  });
}
var TagAngleInterpolationDollar = {
  conf: createLangConfiguration(TagSyntaxAngle),
  language: createMonarchLanguage(TagSyntaxAngle, InterpolationSyntaxDollar)
};
var TagBracketInterpolationDollar = {
  conf: createLangConfiguration(TagSyntaxBracket),
  language: createMonarchLanguage(TagSyntaxBracket, InterpolationSyntaxDollar)
};
var TagAngleInterpolationBracket = {
  conf: createLangConfiguration(TagSyntaxAngle),
  language: createMonarchLanguage(TagSyntaxAngle, InterpolationSyntaxBracket)
};
var TagBracketInterpolationBracket = {
  conf: createLangConfiguration(TagSyntaxBracket),
  language: createMonarchLanguage(TagSyntaxBracket, InterpolationSyntaxBracket)
};
var TagAutoInterpolationDollar = {
  conf: createLangConfigurationAuto(),
  language: createMonarchLanguageAuto(InterpolationSyntaxDollar)
};
var TagAutoInterpolationBracket = {
  conf: createLangConfigurationAuto(),
  language: createMonarchLanguageAuto(InterpolationSyntaxBracket)
};


/***/ })

}]);