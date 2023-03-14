"use strict";
(self["webpackChunkgenerate_columns"] = self["webpackChunkgenerate_columns"] || []).push([[268],{

/***/ 3887:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7313);
/* harmony import */ var react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9362);
/* harmony import */ var react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6017);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6417);
var CodeEditor=function CodeEditor(props){var value=props.value,_props$language=props.language,language=_props$language===void 0?"javascript":_props$language;return/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(react_syntax_highlighter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{showLineNumbers:true,startingLineNumber:1,language:language,style:react_syntax_highlighter_dist_esm_styles_prism__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,wrapLines:true,customStyle:{fontSize:16},children:value});};/* harmony default export */ __webpack_exports__["Z"] = (CodeEditor);

/***/ }),

/***/ 4246:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kt": function() { return /* binding */ RANDOM_TYPE_ARR; },
/* harmony export */   "RK": function() { return /* binding */ CONFIG_EXAMPLE2; },
/* harmony export */   "UE": function() { return /* binding */ CONFIG_EXAMPLE; },
/* harmony export */   "f4": function() { return /* binding */ REQUIRED_RULES; },
/* harmony export */   "lu": function() { return /* binding */ DEFAULT_ADD_FIELD; },
/* harmony export */   "vj": function() { return /* binding */ DEFAULT_SELECT_TEST_DATA; }
/* harmony export */ });
/* 存放一些常量 */var REQUIRED_RULES=[{required:true,message:"请输入"}];var CONFIG_EXAMPLE="name-姓名&age-年龄&sex-性别";var CONFIG_EXAMPLE2="name&age&sex";var DEFAULT_SELECT_TEST_DATA="0-女&1-男&2-保密";/**
 * 默认添加的字段信息
 */var DEFAULT_ADD_FIELD={dataIndex:"username",title:"用户名",width:150,fixed:false,align:"left",ellipsis:true,className:undefined,randomType:"cname"};/* 随机类型 */var RANDOM_TYPE_ARR=[{label:"内置随机类型",options:[{key:"ctitle",value:"ctitle",label:"标题"},{key:"natural",value:"natural",label:"自然数(正数: 0,10000)"},{key:"integer",value:"integer",label:"整数(正负: -100,100)"},{key:"float",value:"float",label:"浮点数（两位小数）"},{key:"cname",value:"cname",label:"名字"},{key:"date",value:"date",label:"日期"},{key:"time",value:"time",label:"时间"},{key:"datetime",value:"datetime",label:"日期时间"},{key:"cparagraph",value:"cparagraph",label:"长文本"},{key:"sex",value:"sex",label:"性别"},{key:"city",value:"city",label:"城市"},{key:"province",value:"province",label:"省份"},{key:"zip",value:"zip",label:"邮政编码"},{key:"email",value:"email",label:"邮箱"},{key:"string",value:"string",label:"字符串"},{key:"url",value:"url",label:"URL"},{key:"ip",value:"ip",label:"IP"},{key:"",value:"",label:"空数据"}]}];

/***/ }),

/***/ 310:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ page_GenerateColumns; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js
var objectSpread2 = __webpack_require__(1413);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(5705);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(9491);
// EXTERNAL MODULE: ./node_modules/antd/es/tabs/index.js + 27 modules
var tabs = __webpack_require__(4393);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(7919);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(8276);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js + 2 modules
var toConsumableArray = __webpack_require__(3433);
// EXTERNAL MODULE: ./node_modules/antd/es/collapse/index.js + 6 modules
var collapse = __webpack_require__(5432);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 22 modules
var es_form = __webpack_require__(2465);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 17 modules
var modal = __webpack_require__(4401);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 19 modules
var input = __webpack_require__(8482);
// EXTERNAL MODULE: ./node_modules/antd/es/input-number/index.js + 9 modules
var input_number = __webpack_require__(8935);
// EXTERNAL MODULE: ./node_modules/antd/es/select/index.js + 48 modules
var es_select = __webpack_require__(9740);
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(6345);
// EXTERNAL MODULE: ./node_modules/antd/es/radio/index.js + 6 modules
var es_radio = __webpack_require__(2214);
// EXTERNAL MODULE: ./src/config/constant.ts
var constant = __webpack_require__(4246);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/UpOutlined.js
var UpOutlined = __webpack_require__(9356);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/DownOutlined.js
var DownOutlined = __webpack_require__(2344);
// EXTERNAL MODULE: ./node_modules/mockjs/dist/mock.js
var mock = __webpack_require__(1325);
var mock_default = /*#__PURE__*/__webpack_require__.n(mock);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/utils/index.ts
var generateColumns=function generateColumns(values){var variable=values.variable,num=values.num,_values$columns=values.columns,columns=_values$columns===void 0?[]:_values$columns;var newColumns=columns.map(function(curr){var align=curr.align,className=curr.className,dataIndex=curr.dataIndex,ellipsis=curr.ellipsis,fixed=curr.fixed,title=curr.title,width=curr.width;var obj={};if(className)obj.className=className;if(fixed)obj.fixed=fixed;return Object.assign(obj,{dataIndex:dataIndex,title:title,ellipsis:ellipsis,width:width,align:align});});var random=(mock_default()).Random;var diyRandomTypeByStorage=operateRandomType.get();var data=[];var _loop=function _loop(){var temp={id:random.id()};columns.forEach(function(column){var randomType=column.randomType,dataIndex=column.dataIndex;if(diyRandomTypeByStorage[randomType]){/* 处理自定义类型 */temp[dataIndex]=random.pick(diyRandomTypeByStorage[randomType]);}else{/* 处理mockjs自带的类型 */if(randomType==="sex"){// 性别
temp[dataIndex]=random.pick(["男","女"]);}else if(randomType==="natural"){// 自然数, 正整数
temp[dataIndex]=random[randomType](0,10000);}else if(randomType==="integer"){// 整数, 正负整数
temp[dataIndex]=random[randomType](-100,100);}else if(randomType==="float"){// 两位小数的浮点数
temp[dataIndex]=random[randomType](0,100,2,2);}else if(randomType===""){// 空字符串
temp[dataIndex]="";}else if(randomType==="url"){// url
temp[dataIndex]=random[randomType]("http");}else if(randomType==="ctitle"){temp[dataIndex]=random[randomType](8,15);}else{temp[dataIndex]=random[randomType]();}}});data.push(temp);};for(var i=1;i<=num;i++){_loop();}return{data:data,columns:columns,dataText:"const ".concat(variable," = ").concat(JSON.stringify(data,null,2)),columnsText:"const columns = ".concat(JSON.stringify(newColumns,null,2))};};// 保存配置到localstorage
var saveConfigToStorage=function saveConfigToStorage(val){var data=[];var obj={config:val};if(!localStorage.myConfig){data=[obj];}else{data=[].concat((0,toConsumableArray/* default */.Z)(JSON.parse(localStorage.myConfig)),[obj]);}localStorage.myConfig=JSON.stringify(data);};/* 从storage获取用户自定义类型 */var operateRandomType={get:function get(){return localStorage.diyTypeArr?JSON.parse(localStorage.diyTypeArr||"{}"):{};},set:function set(val){localStorage.diyTypeArr=val;},/* 改变成下拉框option形式 */changeOption:function changeOption(){var data=[];var current=this.get();for(var key in current){data.push({key:key,value:key,label:key});}return data;}};
// EXTERNAL MODULE: ./node_modules/antd/es/drawer/index.js + 6 modules
var drawer = __webpack_require__(7258);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/components/diyRandomTypeDrawer/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6417);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/components/diyRandomTypeDrawer/index.tsx
/* 增加自定义类型 */var TextArea=input/* default.TextArea */.Z.TextArea;var Panel=collapse/* default.Panel */.Z.Panel;var DiyRandomTypeModal=function DiyRandomTypeModal(props){var visible=props.visible,onSubmit=props.onSubmit,onClose=props.onClose;var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),activeKey=_useState2[0],setActiveKey=_useState2[1];var _useState3=(0,react.useState)([{}]),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),randomState=_useState4[0],setRadomState=_useState4[1];var _Form$useForm=es_form/* default.useForm */.Z.useForm(),_Form$useForm2=(0,slicedToArray/* default */.Z)(_Form$useForm,1),form=_Form$useForm2[0];var init=function init(){var typeMap=operateRandomType.get();var state=[];for(var k in typeMap){state.push({randomName:k,randomValue:typeMap[k].join("&")});}setRadomState(state);form.setFieldValue("typeList",state.length?state:[{}]);};(0,react.useEffect)(function(){if(visible){init();}// eslint-disable-next-line
},[visible]);var onFinish=function onFinish(values){var typeList=values.typeList;var newTypes=typeList.reduce(function(prev,_ref){var randomName=_ref.randomName,randomValue=_ref.randomValue;prev[randomName]=randomValue===null||randomValue===void 0?void 0:randomValue.split("&");return prev;},{});operateRandomType.set(JSON.stringify(newTypes));onSubmit===null||onSubmit===void 0?void 0:onSubmit(newTypes);};var onFinishFailed=function onFinishFailed(){return message/* default.warn */.ZP.warn("有必填项没填");};return/*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z,{title:"\u65B0\u589E\u968F\u673A\u7C7B\u578B",placement:"right",open:visible,size:"large",onClose:onClose,className:"diy-random-type-drawer",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z,{form:form,onFinish:onFinish,layout:"horizontal",onFinishFailed:onFinishFailed,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.List */.Z.List,{name:"typeList",children:function children(fields,_ref2){var add=_ref2.add,remove=_ref2.remove;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",onClick:function onClick(){add({});},style:{marginBottom:10},children:"\u65B0\u589E"}),/*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z,{activeKey:activeKey,onChange:function onChange(key){setActiveKey(key);},children:fields.map(function(field){return/*#__PURE__*/(0,jsx_runtime.jsx)(Panel,{forceRender:true,header:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u968F\u673A\u7C7B\u578B\u540D\u79F0",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"randomName"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{placeholder:"fundCode",onClick:function onClick(e){e.stopPropagation();}})}),extra:/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"link",danger:true,onClick:function onClick(e){e.stopPropagation();var newState=(0,toConsumableArray/* default */.Z)(randomState);newState.splice(field.name,1);remove(field.name);},children:"\u5220\u9664"}),children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"随机值：",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"randomValue"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{placeholder:"\u4EE5&\u5206\u9694 \u5982\uFF1Achenjiang&aoteman&huluwa",autoSize:{minRows:5,maxRows:5}})})},field.key);})})]});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{size:"large",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",htmlType:"submit",style:{width:120},children:"\u63D0\u4EA4"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:function onClick(){modal/* default.confirm */.Z.confirm({content:"确定要重置吗？",okText:"确认",cancelText:"取消",onOk:function onOk(){init();}});},children:"\u91CD\u7F6E"})]})})]})},"right");};/* harmony default export */ var diyRandomTypeDrawer = (DiyRandomTypeModal);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/components/formInput/index.less
// extracted by mini-css-extract-plugin

;// CONCATENATED MODULE: ./src/page/GenerateColumns/components/formInput/index.tsx
var formInput_Panel=collapse/* default.Panel */.Z.Panel;var FormInput=/*#__PURE__*/(0,react.forwardRef)(function(props,ref){var onSubmit=props.onSubmit;var _Form$useForm=es_form/* default.useForm */.Z.useForm(),_Form$useForm2=(0,slicedToArray/* default */.Z)(_Form$useForm,1),form=_Form$useForm2[0];var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),activeKey=_useState2[0],setActiveKey=_useState2[1];// 折叠的key
var _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),visible=_useState4[0],setVisible=_useState4[1];// 控制随机类型的抽屉显示与隐藏
var _useState5=(0,react.useState)([]),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),options=_useState6[0],setOptions=_useState6[1];// 设置随机类型下拉框数据
(0,react.useEffect)(function(){// 设置随机类型下拉框数据
setOptions([{label:"自定义随机类型",options:operateRandomType.changeOption()}].concat((0,toConsumableArray/* default */.Z)(constant/* RANDOM_TYPE_ARR */.Kt)));},[visible]);var handleReset=function handleReset(){modal/* default.confirm */.Z.confirm({content:"确定要重置吗？",okText:"确认",cancelText:"取消",onOk:function onOk(){form.resetFields();}});};/* 一键生成 */var onFinish=function onFinish(values){if(!values.columns||!values.columns.length){return message/* default.error */.ZP.error("至少需要一个字段");}onSubmit===null||onSubmit===void 0?void 0:onSubmit(values);};var onFinishFailed=function onFinishFailed(){return message/* default.warn */.ZP.warn("有必填项没填");};// 供父组件调用
(0,react.useImperativeHandle)(ref,function(){return{setColumnsValue:function setColumnsValue(field,values){form.setFieldValue(field,values);}};});return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z,{form:form,layout:"horizontal",className:"form-input-component",scrollToFirstError:true,onFinish:onFinish,onFinishFailed:onFinishFailed,initialValues:{variable:"dataSource",num:10,columns:[constant/* DEFAULT_ADD_FIELD */.lu]},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{name:"variable",label:"\u53D8\u91CF\u540D",rules:constant/* REQUIRED_RULES */.f4,children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{placeholder:"\u751F\u6210\u7684\u914D\u7F6E\u7528\u4EC0\u4E48\u53D8\u91CF\u5B58\u653E",maxLength:100})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{name:"num",label:"\u751F\u6210\u591A\u5C11\u6761\u6D4B\u8BD5\u6570\u636E",rules:[{required:true,message:"请输入"}],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z,{min:0,max:1000,placeholder:"\u8BF7\u8F93\u5165"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.List */.Z.List,{name:"columns",children:function children(fields,_ref){var add=_ref.add,remove=_ref.remove,move=_ref.move;return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{size:"large",style:{marginBottom:10},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",onClick:function onClick(){add(constant/* DEFAULT_ADD_FIELD */.lu);},children:"\u65B0\u589E"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",onClick:function onClick(){setVisible(true);},children:"\u65B0\u589E\u968F\u673A\u7C7B\u578B"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(collapse/* default */.Z,{activeKey:activeKey,onChange:function onChange(key){setActiveKey(key);},children:fields.map(function(field,index){return/*#__PURE__*/(0,jsx_runtime.jsxs)(formInput_Panel,{forceRender:true,header:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5B57\u6BB5\u540D",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"dataIndex"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{style:{width:120},placeholder:"fundCode",onClick:function onClick(e){e.stopPropagation();}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{className:"random-type",label:"随机值类型",name:[field.name,"randomType"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_select/* default */.Z,{style:{width:180},options:options,onClick:function onClick(e){e.stopPropagation();},showSearch:true,filterOption:function filterOption(input,option){var _option$label;return((_option$label=option===null||option===void 0?void 0:option.label)!==null&&_option$label!==void 0?_option$label:"").toLowerCase().includes(input.toLowerCase());}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{name:[field.name,"title"],className:"only-show-field",children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{style:{width:150},placeholder:"\u4EA7\u54C1\u540D\u79F0",disabled:true})})]}),extra:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{children:[index>0&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"text",onClick:function onClick(e){e.stopPropagation();move(index,index-1);},children:/*#__PURE__*/(0,jsx_runtime.jsx)(UpOutlined/* default */.Z,{})}),index<fields.length-1&&/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"text",onClick:function onClick(e){move(index,index+1);e.stopPropagation();},children:/*#__PURE__*/(0,jsx_runtime.jsx)(DownOutlined/* default */.Z,{})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"link",danger:true,onClick:function onClick(e){e.stopPropagation();remove(field.name);},children:"\u5220\u9664"})]}),children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5B57\u6BB5\u4E2D\u6587",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"title"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{style:{width:150},placeholder:"\u4EA7\u54C1\u540D\u79F0"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5BBD\u5EA6",rules:constant/* REQUIRED_RULES */.f4,name:[field.name,"width"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input_number/* default */.Z,{placeholder:"\u8BF7\u8F93\u5165",min:50,max:1000})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u8868\u683C\u5217\u662F\u5426\u56FA\u5B9A",name:[field.name,"fixed"],valuePropName:"checked",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z,{checkedChildren:"\u662F",unCheckedChildren:"\u5426"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5BF9\u9F50\u65B9\u5F0F",name:[field.name,"align"],rules:constant/* REQUIRED_RULES */.f4,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_radio/* default.Group */.ZP.Group,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.ZP.Button,{value:"left",children:"left"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.ZP.Button,{value:"center",children:"center"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_radio/* default.Button */.ZP.Button,{value:"right",children:"right"})]})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5355\u5143\u683C\u662F\u5426\u81EA\u52A8\u7701\u7565",name:[field.name,"ellipsis"],valuePropName:"checked",children:/*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z,{checkedChildren:"\u662F",unCheckedChildren:"\u5426"})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{label:"\u5217\u7684\u7C7B\u540D",name:[field.name,"className"],children:/*#__PURE__*/(0,jsx_runtime.jsx)(input/* default */.Z,{placeholder:"className",maxLength:100,style:{width:150}})})]},field.key);})})]});}}),/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default.Item */.Z.Item,{className:"submit-wrap",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",htmlType:"submit",children:"\u4E00\u952E\u751F\u6210"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:handleReset,children:"\u91CD\u7F6E"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(diyRandomTypeDrawer,{visible:visible,onClose:function onClose(){setVisible(false);},onSubmit:function onSubmit(){setVisible(false);}})]});});/* harmony default export */ var formInput = (FormInput);
// EXTERNAL MODULE: ./src/components/CodeEditor/index.tsx
var CodeEditor = __webpack_require__(3887);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(2229);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CopyOutlined.js + 1 modules
var CopyOutlined = __webpack_require__(6407);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/components/ImportConfigModal/index.tsx
/* 导入配置，模态框 */var ImportConfigModal_TextArea=input/* default.TextArea */.Z.TextArea;var ImportConfigModal=function ImportConfigModal(props){var visible=props.visible,onSubmit=props.onSubmit,onCancel=props.onCancel,footer=props.footer;var _Form$useForm=es_form/* default.useForm */.Z.useForm(),_Form$useForm2=(0,slicedToArray/* default */.Z)(_Form$useForm,1),form=_Form$useForm2[0];var onFinish=function onFinish(values){try{var allField=values.content.split("&");saveConfigToStorage(JSON.stringify(allField));onSubmit(allField);}catch(e){return message/* default.error */.ZP.error("配置格式有误，请检查");}};return/*#__PURE__*/(0,jsx_runtime.jsx)(modal/* default */.Z,{title:"\u6279\u91CF\u6DFB\u52A0\u914D\u7F6E",open:visible,onCancel:onCancel,footer:footer||null,children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z,{form:form,onFinish:onFinish,layout:"vertical",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{name:"content",label:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\u8BF7\u8F93\u5165\u914D\u7F6E\uFF1A",/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{size:"middle",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:function onClick(){form.setFieldValue("content",constant/* CONFIG_EXAMPLE2 */.RK);},children:"\u793A\u4F8B (\u7B2C\u4E00\u79CD)"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:function onClick(){form.setFieldValue("content",constant/* CONFIG_EXAMPLE */.UE);},children:"\u793A\u4F8B (\u7B2C\u4E8C\u79CD)"})]})]}),rules:constant/* REQUIRED_RULES */.f4,children:/*#__PURE__*/(0,jsx_runtime.jsx)(ImportConfigModal_TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5: \r\r\u7B2C\u4E00\u79CD: name&age&sex (\u4EC5\u5173\u5FC3\u6D4B\u8BD5\u6570\u636E) \r\r\u7B2C\u4E8C\u79CD: name-\u59D3\u540D&age-\u5E74\u9F84&sex-\u6027\u522B (\u540C\u65F6\u5173\u5FC3table\u7EC4\u4EF6\u7684columns)",autoSize:{minRows:15,maxRows:15}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{size:"large",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",htmlType:"submit",style:{width:120},children:"\u5BFC\u5165"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{htmlType:"reset",children:"\u91CD\u7F6E"})]})})]})});};/* harmony default export */ var components_ImportConfigModal = (ImportConfigModal);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/components/configDrawer/index.tsx
/* 查看已导入配置的抽屉 */var configDrawer_TextArea=input/* default.TextArea */.Z.TextArea;var ConfigDrawer=function ConfigDrawer(props){var visible=props.visible,onClose=props.onClose,onSubmit=props.onSubmit,setContent=props.setContent;var _useState=(0,react.useState)([]),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),configListState=_useState2[0],setConfigListState=_useState2[1];var _Form$useForm=es_form/* default.useForm */.Z.useForm(),_Form$useForm2=(0,slicedToArray/* default */.Z)(_Form$useForm,1),form=_Form$useForm2[0];var init=function init(){var data=JSON.parse(localStorage.myConfig||"[]").reverse();form.setFieldValue("configList",data);setConfigListState(data);};(0,react.useEffect)(function(){if(visible){init();}// eslint-disable-next-line
},[visible]);var onFinish=function onFinish(values){localStorage.myConfig=values.configList?JSON.stringify(values.configList):"[]";// 保存历史配置
onSubmit===null||onSubmit===void 0?void 0:onSubmit(values);};var onFinishFailed=function onFinishFailed(){return message/* default.warn */.ZP.warn("有必填项没填");};return/*#__PURE__*/(0,jsx_runtime.jsx)(drawer/* default */.Z,{title:"\u67E5\u770B\u5386\u53F2\u5B57\u6BB5",placement:"right",open:visible,size:"large",onClose:onClose,children:configListState.length?/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z,{form:form,onFinish:onFinish,layout:"vertical",onFinishFailed:onFinishFailed,children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.List */.Z.List,{name:"configList",children:function children(fields,_ref){var remove=_ref.remove;return fields.map(function(field){return/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"config",style:{marginBottom:20},children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{style:{marginBottom:10},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{danger:true,onClick:function onClick(){remove(field.name);},children:"\u5220\u9664"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:function onClick(){setContent(configListState[field.name].config);// 选择历史配置中的一个
onClose();},children:"\u9009\u62E9"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{name:[field.name,"config"],label:"\u914D\u7F6E",rules:constant/* REQUIRED_RULES */.f4,children:/*#__PURE__*/(0,jsx_runtime.jsx)(configDrawer_TextArea,{placeholder:"\u8BF7\u8F93\u5165\u914D\u7F6E",autoSize:{minRows:2,maxRows:3},readOnly:true})})]},field.key);});}}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{size:"large",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",htmlType:"submit",style:{width:120},children:"\u63D0\u4EA4"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:function onClick(){modal/* default.confirm */.Z.confirm({content:"确定要重置吗？",okText:"确认",cancelText:"取消",onOk:function onOk(){init();}});},children:"\u91CD\u7F6E"})]})})]}):/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z,{description:"\u6682\u65E0\u6570\u636E"})},"right");};/* harmony default export */ var configDrawer = (ConfigDrawer);
;// CONCATENATED MODULE: ./src/page/GenerateColumns/index.tsx
var GenerateColumns=function GenerateColumns(props){var formInputRef=(0,react.useRef)();var _useState=(0,react.useState)({dataText:"",columnsText:"",data:[],columns:[]}),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),result=_useState2[0],setResult=_useState2[1];var _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),visible=_useState4[0],setVisible=_useState4[1];var _useState5=(0,react.useState)(false),_useState6=(0,slicedToArray/* default */.Z)(_useState5,2),configVisible=_useState6[0],setConfigVisible=_useState6[1];var onCancel=function onCancel(){setVisible(false);};/* 
    根据导入的导入配置生成折叠面板(也就是表格的columns)
  */var importSubmit=function importSubmit(values){formInputRef.current.setColumnsValue("columns",values.map(function(v){var _v$split=v.split("-"),_v$split2=(0,slicedToArray/* default */.Z)(_v$split,2),field=_v$split2[0],name=_v$split2[1];return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},constant/* DEFAULT_ADD_FIELD */.lu),{},{dataIndex:field,title:name||"占位符"});}));setVisible(false);};/* 创建columns，根据表单数据 */var createColumns=function createColumns(values){var result=generateColumns(values);setResult(result);};/* 抽屉关闭事件 */var drawerClose=function drawerClose(){setConfigVisible(false);};/* 查看已导入的配置---提交事件 */var onSubmit=function onSubmit(values){setConfigVisible(false);};return/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"generate-columns",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"condition",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"title",children:"\u8F93\u5165\u914D\u7F6E"}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"container",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{style:{marginBottom:10},children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:function onClick(){setVisible(true);},children:"\u6279\u91CF\u6DFB\u52A0\u5B57\u6BB5"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:function onClick(){setConfigVisible(true);},children:"\u67E5\u770B\u5386\u53F2\u5B57\u6BB5"})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(formInput,{ref:formInputRef,onSubmit:createColumns})]})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"code",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"title",children:"\u6D4B\u8BD5\u4EE3\u7801"}),result.dataText?/*#__PURE__*/(0,jsx_runtime.jsx)(tabs/* default */.Z,{defaultActiveKey:"1",items:[{key:"data",label:"测试数据",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.Z,{}),onClick:function onClick(){if(!result.dataText)return message/* default.info */.ZP.info("没有啥要复制的");copy_to_clipboard_default()(result.dataText);message/* default.success */.ZP.success("已复制到剪切板");},children:"\u590D\u5236"}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeEditor/* default */.Z,{value:result.dataText,language:"javascript"})]})},{key:"column",label:"Ant design table组件的columns配置",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.Z,{}),onClick:function onClick(){if(!result.columnsText)return message/* default.info */.ZP.info("没有啥要复制的");copy_to_clipboard_default()(result.columnsText);message/* default.success */.ZP.success("已复制到剪切板");},children:"\u590D\u5236"}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeEditor/* default */.Z,{value:result.columnsText,language:"javascript"})]})}]}):/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z,{description:"\u6682\u65E0\u6570\u636E, \u8BF7\u70B9\u51FB\u4E00\u952E\u751F\u6210"})]})]}),/*#__PURE__*/(0,jsx_runtime.jsx)(components_ImportConfigModal,{visible:visible,onCancel:onCancel,onSubmit:importSubmit}),/*#__PURE__*/(0,jsx_runtime.jsx)(configDrawer,{visible:configVisible,onClose:drawerClose,onSubmit:onSubmit,setContent:function setContent(historyConfig){// 选择历史配置
formInputRef.current.setColumnsValue("columns",JSON.parse(historyConfig).map(function(v){var _v$split3=v.split("-"),_v$split4=(0,slicedToArray/* default */.Z)(_v$split3,2),field=_v$split4[0],name=_v$split4[1];return (0,objectSpread2/* default */.Z)((0,objectSpread2/* default */.Z)({},constant/* DEFAULT_ADD_FIELD */.lu),{},{dataIndex:field,title:name||"占位符"});}));}})]});};/* harmony default export */ var page_GenerateColumns = (GenerateColumns);

/***/ }),

/***/ 2428:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ page_SelectTestData; }
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 1 modules
var slicedToArray = __webpack_require__(9439);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7313);
// EXTERNAL MODULE: ./node_modules/antd/es/input/index.js + 19 modules
var input = __webpack_require__(8482);
// EXTERNAL MODULE: ./node_modules/antd/es/form/index.js + 22 modules
var es_form = __webpack_require__(2465);
// EXTERNAL MODULE: ./node_modules/antd/es/message/index.js + 3 modules
var message = __webpack_require__(7919);
// EXTERNAL MODULE: ./node_modules/antd/es/modal/index.js + 17 modules
var modal = __webpack_require__(4401);
// EXTERNAL MODULE: ./node_modules/antd/es/space/index.js + 1 modules
var space = __webpack_require__(5705);
// EXTERNAL MODULE: ./node_modules/antd/es/button/index.js
var es_button = __webpack_require__(9491);
// EXTERNAL MODULE: ./node_modules/antd/es/switch/index.js + 1 modules
var es_switch = __webpack_require__(6345);
// EXTERNAL MODULE: ./node_modules/antd/es/empty/index.js + 2 modules
var empty = __webpack_require__(8276);
;// CONCATENATED MODULE: ./src/page/SelectTestData/index.less
// extracted by mini-css-extract-plugin

// EXTERNAL MODULE: ./src/components/CodeEditor/index.tsx
var CodeEditor = __webpack_require__(3887);
// EXTERNAL MODULE: ./node_modules/copy-to-clipboard/index.js
var copy_to_clipboard = __webpack_require__(2229);
var copy_to_clipboard_default = /*#__PURE__*/__webpack_require__.n(copy_to_clipboard);
// EXTERNAL MODULE: ./src/config/constant.ts
var constant = __webpack_require__(4246);
// EXTERNAL MODULE: ./node_modules/@ant-design/icons/es/icons/CopyOutlined.js + 1 modules
var CopyOutlined = __webpack_require__(6407);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(6417);
;// CONCATENATED MODULE: ./src/page/SelectTestData/index.tsx
var TextArea=input/* default.TextArea */.Z.TextArea;var SelectTestData=function SelectTestData(props){var _useState=(0,react.useState)(""),_useState2=(0,slicedToArray/* default */.Z)(_useState,2),code=_useState2[0],setCode=_useState2[1];// 生成的代码
var _useState3=(0,react.useState)(false),_useState4=(0,slicedToArray/* default */.Z)(_useState3,2),isConcat=_useState4[0],setIsConcat=_useState4[1];// 是否拼接key-value
var _Form$useForm=es_form/* default.useForm */.Z.useForm(),_Form$useForm2=(0,slicedToArray/* default */.Z)(_Form$useForm,1),form=_Form$useForm2[0];/**
   * 表单提交事件
   * @param values 表单值
   * @returns
   */var onFinish=function onFinish(values){try{var _values$content;var fieldArr=(_values$content=values.content)===null||_values$content===void 0?void 0:_values$content.split("&");var allField=fieldArr.map(function(v){var _v$split=v.split("-"),_v$split2=(0,slicedToArray/* default */.Z)(_v$split,2),field=_v$split2[0],name=_v$split2[1];return{key:field,value:field,label:isConcat?field+"-"+name:name,title:isConcat?field+"-"+name:name};});setCode(JSON.stringify(allField,null,2));}catch(err){return message/* default.warn */.ZP.warn("请检查配置格式是否正确");}};/**
   * 表单重置事件
   */var handleReset=function handleReset(){modal/* default.confirm */.Z.confirm({content:"确定要重置吗？",okText:"确认",cancelText:"取消",onOk:function onOk(){form.resetFields();setCode("");}});};return/*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"select-test-data",children:[/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"condition",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"title",children:"\u8F93\u5165\u914D\u7F6E"}),/*#__PURE__*/(0,jsx_runtime.jsx)("div",{className:"container",children:/*#__PURE__*/(0,jsx_runtime.jsxs)(es_form/* default */.Z,{form:form,onFinish:onFinish,layout:"vertical",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{name:"content",label:/*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:["\u8BF7\u8F93\u5165\u914D\u7F6E\uFF1A",/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{size:"large",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:function onClick(){form.setFieldValue("content",constant/* DEFAULT_SELECT_TEST_DATA */.vj);},children:"\u793A\u4F8B"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_switch/* default */.Z,{checkedChildren:"\u62FC\u63A5",unCheckedChildren:"\u4E0D\u62FC\u63A5",onChange:function onChange(v){setIsConcat(v);}})]})]}),rules:constant/* REQUIRED_RULES */.f4,children:/*#__PURE__*/(0,jsx_runtime.jsx)(TextArea,{placeholder:"\u8BF7\u8F93\u5165\u5B57\u6BB5: \r\r0-\u5973&1-\u7537&2-\u4FDD\u5BC6",autoSize:{minRows:15,maxRows:15}})}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_form/* default.Item */.Z.Item,{children:/*#__PURE__*/(0,jsx_runtime.jsxs)(space/* default */.Z,{size:"large",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{type:"primary",htmlType:"submit",style:{width:120},children:"\u751F\u6210"}),/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{onClick:handleReset,children:"\u91CD\u7F6E"})]})})]})})]}),/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"code",children:[/*#__PURE__*/(0,jsx_runtime.jsx)("h2",{className:"title",children:"\u6D4B\u8BD5\u6570\u636E"}),code?/*#__PURE__*/(0,jsx_runtime.jsxs)("div",{className:"code-content",children:[/*#__PURE__*/(0,jsx_runtime.jsx)(es_button/* default */.Z,{icon:/*#__PURE__*/(0,jsx_runtime.jsx)(CopyOutlined/* default */.Z,{}),onClick:function onClick(){if(!code)return message/* default.info */.ZP.info("没有啥要复制的");copy_to_clipboard_default()(code);message/* default.success */.ZP.success("已复制到剪切板");},children:"\u590D\u5236"}),/*#__PURE__*/(0,jsx_runtime.jsx)(CodeEditor/* default */.Z,{value:code,language:"javascript"})]}):/*#__PURE__*/(0,jsx_runtime.jsx)(empty/* default */.Z,{description:"\u6682\u65E0\u6570\u636E"})]})]})});};/* harmony default export */ var page_SelectTestData = (SelectTestData);

/***/ })

}]);