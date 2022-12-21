"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[5268],{

/***/ 93887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var react_monaco_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85526);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46417);
var CodeEditor=function CodeEditor(props){var value=props.value,_props$height=props.height,height=_props$height===void 0?460:_props$height,_props$language=props.language,language=_props$language===void 0?"javascript":_props$language,onChange=props.onChange;var editorRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var options={selectOnLineNumbers:true,fontSize:14,formatOnPaste:true,automaticLayout:true,formatOnType:true,minimap:{enabled:false}};(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){if(editorRef.current){editorRef.current.setValue(value);editorRef.current.getAction("editor.action.formatDocument").run();//自动格式化代码
editorRef.current.setValue(editorRef.current.getValue());//再次设置
}},[value]);var editorDidMountHandle=function editorDidMountHandle(editor){editorRef.current=editor;};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_monaco_editor__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .ZP,{height:height,language:language,theme:"vs-dark"// value={value}
,options:options,onChange:onChange,editorDidMount:editorDidMountHandle});};/* harmony default export */ __webpack_exports__["Z"] = (CodeEditor);

/***/ }),

/***/ 54246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kt": function() { return /* binding */ RANDOM_TYPE_ARR; },
/* harmony export */   "UE": function() { return /* binding */ CONFIG_EXAMPLE; },
/* harmony export */   "f4": function() { return /* binding */ REQUIRED_RULES; },
/* harmony export */   "lu": function() { return /* binding */ DEFAULT_ADD_FIELD; }
/* harmony export */ });
var REQUIRED_RULES=[{required:true,message:"请输入"}];var CONFIG_EXAMPLE=[{dataIndex:"name",title:"姓名",ellipsis:true,width:150,align:"left"},{dataIndex:"age",title:"年龄",ellipsis:true,width:150,align:"left"}];/**
 * 默认添加的字段信息
 */var DEFAULT_ADD_FIELD={dataIndex:"fundCode",title:"产品名称",width:150,fixed:false,align:"left",ellipsis:true,className:undefined,randomType:"cname"};/* 随机类型 */var RANDOM_TYPE_ARR=[{key:"integer",value:"integer",label:"整数"},{key:"cname",value:"cname",label:"名字"},{key:"datetime",value:"datetime",label:"日期时间"},{key:"date",value:"date",label:"日期"},{key:"csentence",value:"csentence",label:"一段话"},{key:"cparagraph",value:"cparagraph",label:"长文本"},{key:"sex",value:"sex",label:"性别"},{value:"province",label:"城市"}];

/***/ }),

/***/ 41488:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1413);
/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29439);
/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93433);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17786);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(33364);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(76063);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94401);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(45705);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(59491);
/* harmony import */ var config_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54246);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46417);
/* 导入配置，模态框 */var TextArea=antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"].TextArea */ .Z.TextArea;var saveConfig=function saveConfig(val){var data=[];if(!localStorage.myConfig){data=[{config:val}];}else{data=[].concat((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z)(JSON.parse(localStorage.myConfig)),[{config:val}]);}localStorage.myConfig=JSON.stringify(data);};var ImportConfigModal=function ImportConfigModal(props){var visible=props.visible,onSubmit=props.onSubmit,onCancel=props.onCancel,footer=props.footer;var _Form$useForm=antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"].useForm */ .Z.useForm(),_Form$useForm2=(0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_Form$useForm,1),form=_Form$useForm2[0];var onFinish=function onFinish(values){try{// eslint-disable-next-line
var columns=eval(values.content).map(function(v){return (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)({},v),{},{align:v.align||"left"});});saveConfig(JSON.stringify(columns,null,2));onSubmit===null||onSubmit===void 0?void 0:onSubmit(columns);}catch(e){return antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"].error */ .ZP.error("配置格式有误，请检查");}};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z,{title:"\u5BFC\u5165\u914D\u7F6E",open:visible,onCancel:onCancel,footer:footer||null,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z,{form:form,onFinish:onFinish,layout:"vertical",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Item */ .Z.Item,{name:"content",label:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["\u8BF7\u8F93\u5165\u914D\u7F6E\uFF1A",/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{size:"middle",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{onClick:function onClick(){form.setFieldValue("content",JSON.stringify(config_constant__WEBPACK_IMPORTED_MODULE_1__/* .CONFIG_EXAMPLE */ .UE,null,2));},children:"\u5BFC\u5165\u793A\u4F8B"})})]}),rules:config_constant__WEBPACK_IMPORTED_MODULE_1__/* .REQUIRED_RULES */ .f4,children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextArea,{placeholder:"\u8BF7\u8F93\u5165\u914D\u7F6E",autoSize:{minRows:15,maxRows:15}})}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_5__/* ["default"].Item */ .Z.Item,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z,{size:"large",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{type:"primary",htmlType:"submit",style:{width:120},children:"\u5BFC\u5165"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{htmlType:"reset",children:"\u91CD\u7F6E"})]})})]})});};/* harmony default export */ __webpack_exports__["Z"] = (ImportConfigModal);

/***/ }),

/***/ 39158:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(93433);
/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(29439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(17786);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33364);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(97258);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(45705);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(59491);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(94401);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(98276);
/* harmony import */ var config_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54246);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(46417);
/* 查看已导入配置的抽屉 */var TextArea=antd__WEBPACK_IMPORTED_MODULE_3__/* ["default"].TextArea */ .Z.TextArea;var getConfigList=function getConfigList(){return JSON.parse(localStorage.myConfig||"[]");};var ConfigDrawer=function ConfigDrawer(props){var visible=props.visible,onClose=props.onClose,setContent=props.setContent;var _Form$useForm=antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"].useForm */ .Z.useForm(),_Form$useForm2=(0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(_Form$useForm,1),form=_Form$useForm2[0];var dispatch=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0)[1];var configListRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(getConfigList());(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function(){configListRef.current=getConfigList();},[visible]);var configList=JSON.parse(localStorage.myConfig||"[]");return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{title:"\u67E5\u770B\u5DF2\u5BFC\u5165\u7684\u914D\u7F6E",placement:"right",open:visible,size:"large",onClose:onClose,children:configList!==null&&configList!==void 0&&configList.length?/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,{form:form,layout:"vertical",initialValues:{configList:configList},children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"].List */ .Z.List,{name:"configList",children:function children(fields,_ref){var add=_ref.add,remove=_ref.remove,move=_ref.move;return fields.map(function(field,index){return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_4__/* ["default"].Item */ .Z.Item,{name:[field.name,"config"],rules:config_constant__WEBPACK_IMPORTED_MODULE_1__/* .REQUIRED_RULES */ .f4,label:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{children:["\u7F16\u53F7",index+1,/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{danger:true,onClick:function onClick(){antd__WEBPACK_IMPORTED_MODULE_9__/* ["default"].confirm */ .Z.confirm({content:"确定要删除吗？",okText:"确认",cancelText:"取消",onOk:function onOk(){var data=(0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)(configListRef.current);data.splice(field.key,1);localStorage.myConfig=JSON.stringify(data);remove(field.name);dispatch(Math.random());}});},children:"\u5220\u9664"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z,{onClick:function onClick(){setContent(configListRef.current[field.name].config);onClose();},children:"\u9009\u62E9"})]})}),children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(TextArea,{placeholder:"\u8BF7\u8F93\u5165\u914D\u7F6E",autoSize:{minRows:10,maxRows:10}})},field.key);});}})}):/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{description:"\u6682\u65E0\u6570\u636E"})},"right");};/* harmony default export */ __webpack_exports__["Z"] = (ConfigDrawer);

/***/ }),

/***/ 76962:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ formInput; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(29439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(47313);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 6 modules
var collapse = __webpack_require__(35432);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 21 modules
var es_form = __webpack_require__(33364);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 17 modules
var modal = __webpack_require__(94401);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(76063);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 19 modules
var input = __webpack_require__(17786);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 8 modules
var input_number = __webpack_require__(7127);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(59491);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(45705);
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(86345);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 5 modules
var es_radio = __webpack_require__(79157);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 32 modules
var es_select = __webpack_require__(25332);
// EXTERNAL MODULE: ./src/config/constant.ts
var constant = __webpack_require__(54246);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/components/formInput/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UpOutlined.js + 1 modules
var UpOutlined = __webpack_require__(18578);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js + 1 modules
var DownOutlined = __webpack_require__(67440);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(46417);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/components/formInput/index.tsx
var Panel=collapse/* default.Panel */.Z.Panel;var FormInput=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var onSubmit=props.onSubmit;var _Form$useForm=es_form/* default.useForm */.Z.useForm(),_Form$useForm2=(0,slicedToArray/* default */.Z)(_Form$useForm,1),form=_Form$useForm2[0];var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),activeKey=_useState2[0],setActiveKey=_useState2[1];var handleReset=function handleReset(){modal/* default.confirm */.Z.confirm({content:"确定要重置吗？",okText:"确认",cancelText:"取消",onOk:function onOk(){form.resetFields();}});};var onFinish=function onFinish(values){if(!values.columns||!values.columns.length){return message/* default.error */.ZP.error("至少需要一个字段");}onSubmit===null||onSubmit===void 0?void 0:onSubmit(values);};var onFinishFailed=function onFinishFailed(){return message/* default.warn */.ZP.warn("有必填项没填");};// 供父组件调用
(0,react.useImperativeHandle)(ref,function(){return{setColumnsValue:function setColumnsValue(field,values){form.setFieldValue(field,values);}};});return/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z,{form:form,layout:"horizontal",className:"form-input-component",scrollToFirstError:true,onFinish:onFinish,onFinishFailed:onFinishFailed,initialValues:{variable:"fundCodeList",num:10,columns:[constant/* DEFAULT_ADD_FIELD */.lu]},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{name:"variable",label:"\u53D8\u91CF\u540D",rules:constant/* REQUIRED_RULES */.f4,children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{placeholder:"\u751F\u6210\u7684\u914D\u7F6E\u7528\u4EC0\u4E48\u53D8\u91CF\u5B58\u653E",maxLength:100})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{name:"num",label:"\u751F\u6210\u591A\u5C11\u6761\u6D4B\u8BD5\u6570\u636E",rules:[{required:true,message:"请输入"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z,{min:0,max:1000,placeholder:"\u8BF7\u8F93\u5165"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.List */.Z.List,{name:"columns",children:function children(fields,_ref){var add=_ref.add,remove=_ref.remove,move=_ref.move;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",style:{marginBottom:10},onClick:function onClick(){add(constant/* DEFAULT_ADD_FIELD */.lu);},children:"\u65B0\u589E"}),/*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z,{activeKey:activeKey,onChange:function onChange(key){setActiveKey(key);},children:fields.map(function(field,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)(Panel,{header:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5B57\u6BB5\u540D",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"dataIndex"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{placeholder:"fundCode",onClick:function onClick(e){e.stopPropagation();}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5B57\u6BB5\u4E2D\u6587",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"title"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{placeholder:"\u4EA7\u54C1\u540D\u79F0",onClick:function onClick(e){e.stopPropagation();}})})]}),extra:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{children:[index>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"text",onClick:function onClick(e){e.stopPropagation();move(index,index-1);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(UpOutlined/* default */.Z,{})}),index<fields.length-1&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"text",onClick:function onClick(e){move(index,index+1);e.stopPropagation();},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"link",danger:true,onClick:function onClick(e){e.stopPropagation();remove(field.name);},children:"\u5220\u9664"})]}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5BBD\u5EA6",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"width"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z,{placeholder:"\u8BF7\u8F93\u5165",min:50,max:1000})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u662F\u5426\u56FA\u5B9A",name:[field.name,"fixed"],valuePropName:"checked",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z,{checkedChildren:"\u662F",unCheckedChildren:"\u5426"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5BF9\u9F50\u65B9\u5F0F",name:[field.name,"align"],rules:constant/* REQUIRED_RULES */.f4,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_radio/* default.Group */.ZP.Group,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.ZP.Button,{value:"left",children:"left"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.ZP.Button,{value:"center",children:"center"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.ZP.Button,{value:"right",children:"right"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5355\u5143\u683C\u662F\u5426\u81EA\u52A8\u7701\u7565",name:[field.name,"ellipsis"],valuePropName:"checked",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z,{checkedChildren:"\u662F",unCheckedChildren:"\u5426"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5217\u7684\u7C7B\u540D",name:[field.name,"className"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{placeholder:"className",maxLength:100,style:{width:150}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"随机值类型",name:[field.name,"randomType"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z,{style:{width:150},options:constant/* RANDOM_TYPE_ARR */.Kt})})]},field.key);})})]});}}),/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default.Item */.Z.Item,{className:"submit-wrap",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",htmlType:"submit",children:"\u4E00\u952E\u751F\u6210"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:handleReset,children:"\u91CD\u7F6E"})]})]});});/* harmony default export */ var formInput = (FormInput);

/***/ }),

/***/ 56769:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1413);
/* harmony import */ var C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(29439);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(47313);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(45705);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(59491);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6466);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(76063);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(72338);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1011);
/* harmony import */ var _components_formInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76962);
/* harmony import */ var components_CodeEditor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93887);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(92229);
/* harmony import */ var copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(66407);
/* harmony import */ var utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(21114);
/* harmony import */ var _components_ImportConfigModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41488);
/* harmony import */ var _components_configDrawer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39158);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(46417);
var GenerateColumns=function GenerateColumns(props){var formInputRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({dataText:"",columnsText:"",data:[],columns:[]}),_useState2=(0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState,2),result=_useState2[0],setResult=_useState2[1];var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),_useState4=(0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState3,2),visible=_useState4[0],setVisible=_useState4[1];var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false),_useState6=(0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z)(_useState5,2),configVisible=_useState6[0],setConfigVisible=_useState6[1];var onCancel=function onCancel(){setVisible(false);};/* 导入配置 */var importSubmit=function importSubmit(values){formInputRef.current.setColumnsValue("columns",values.map(function(v){return (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({},v),{},{randomType:"csentence",defaultValue:"- -"});}));setVisible(false);};/* 创建columns，根据表单数据 */var createColumns=function createColumns(values){var result=(0,utils__WEBPACK_IMPORTED_MODULE_5__/* .generateColumns */ .Z)(values);setResult(result);};/* 抽屉关闭事件 */var drawerClose=function drawerClose(){setConfigVisible(false);};return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"generate-columns",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"condition",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2",{className:"title",children:"\u8F93\u5165\u914D\u7F6E"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(antd__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z,{style:{marginBottom:10},children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{onClick:function onClick(){setVisible(true);},children:"\u5BFC\u5165\u914D\u7F6E"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{onClick:function onClick(){setConfigVisible(true);},children:"\u67E5\u770B\u5DF2\u5BFC\u5165\u7684\u914D\u7F6E"})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_formInput__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{ref:formInputRef,onSubmit:createColumns})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"code",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2",{className:"title",children:"\u6D4B\u8BD5\u4EE3\u7801"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z,{defaultActiveKey:"1",items:[{key:"column",label:"生成配置columns",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,{}),onClick:function onClick(){if(!result.columnsText)return antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"].info */ .ZP.info("没有啥要复制的");copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default()(result.columnsText);antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"].success */ .ZP.success("已复制到剪切板");},children:"\u590D\u5236"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(components_CodeEditor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:result.columnsText,language:"javascript"})]})},{key:"data",label:"生成测试数据",children:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment,{children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z,{icon:/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z,{}),onClick:function onClick(){if(!result.dataText)return antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"].info */ .ZP.info("没有啥要复制的");copy_to_clipboard__WEBPACK_IMPORTED_MODULE_4___default()(result.dataText);antd__WEBPACK_IMPORTED_MODULE_15__/* ["default"].success */ .ZP.success("已复制到剪切板");},children:"\u590D\u5236"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(components_CodeEditor__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{value:result.dataText,language:"javascript"})]})}]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div",{className:"preview",children:[/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h2",{className:"title",children:"\u6548\u679C\u5C55\u793A"}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(antd__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z,{columns:result.columns,dataSource:result.data,rowKey:"id"})]})]}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ImportConfigModal__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,{visible:visible,onCancel:onCancel,onSubmit:importSubmit}),/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_configDrawer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z,{visible:configVisible,onClose:drawerClose,setContent:function setContent(columnsText){formInputRef.current.setColumnsValue("columns",// eslint-disable-next-line
eval(columnsText).map(function(v){return (0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)((0,C_Users_Administrator_Desktop_study_generate_columns_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z)({},v),{},{randomType:"csentence",defaultValue:"- -"});}));}})]});};/* harmony default export */ __webpack_exports__["default"] = (GenerateColumns);

/***/ }),

/***/ 21114:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": function() { return /* binding */ generateColumns; }
/* harmony export */ });
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31325);
/* harmony import */ var mockjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mockjs__WEBPACK_IMPORTED_MODULE_0__);
var generateColumns=function generateColumns(values){var variable=values.variable,num=values.num,_values$columns=values.columns,columns=_values$columns===void 0?[]:_values$columns;var newColumns=columns.map(function(curr,index){var align=curr.align,className=curr.className,dataIndex=curr.dataIndex,ellipsis=curr.ellipsis,fixed=curr.fixed,title=curr.title,width=curr.width;var obj={};if(className)obj.className=className;if(fixed)obj.fixed=fixed;return Object.assign(obj,{dataIndex:dataIndex,title:title,ellipsis:ellipsis,width:width,align:align});});var random=(mockjs__WEBPACK_IMPORTED_MODULE_0___default().Random);var data=[];var _loop=function _loop(i){var temp={id:i};columns.forEach(function(column){var randomType=column.randomType,dataIndex=column.dataIndex;if(randomType==="sex"){// 性别
temp[dataIndex]=random.pick(["男","女"]);}else{temp[dataIndex]=random[randomType]();}});data.push(temp);};for(var i=1;i<=num;i++){_loop(i);}return{data:data,columns:columns,dataText:"const ".concat(variable," = ").concat(JSON.stringify(data,null,2)),columnsText:"const ".concat(variable," = ").concat(JSON.stringify(newColumns,null,2))};};

/***/ }),

/***/ 1011:
/***/ (function() {

// extracted by mini-css-extract-plugin


/***/ })

}]);