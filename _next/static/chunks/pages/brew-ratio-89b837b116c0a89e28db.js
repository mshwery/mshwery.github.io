_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(e,r,n){"use strict";r.__esModule=!0,r.isInAmpMode=i,r.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var t,a=(t=n("q1tI"))&&t.__esModule?t:{default:t},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=e.ampFirst,n=void 0!==r&&r,t=e.hybrid,a=void 0!==t&&t,o=e.hasQuery,i=void 0!==o&&o;return n||a&&i}},"/mkQ":function(e,r,n){var t=n("fL/t"),a=(n("3KVt"),n("YZT1"));e.exports=function(e,r){return arguments.length>2?t(e,17,a(arguments,2),null,r):t(e,1,null,null,r)}},"1C7C":function(e,r){var n;n={VA:{name:{singular:"Volt-Ampere",plural:"Volt-Amperes"},to_anchor:1},mVA:{name:{singular:"Millivolt-Ampere",plural:"Millivolt-Amperes"},to_anchor:.001},kVA:{name:{singular:"Kilovolt-Ampere",plural:"Kilovolt-Amperes"},to_anchor:1e3},MVA:{name:{singular:"Megavolt-Ampere",plural:"Megavolt-Amperes"},to_anchor:1e6},GVA:{name:{singular:"Gigavolt-Ampere",plural:"Gigavolt-Amperes"},to_anchor:1e9}},e.exports={metric:n,_anchors:{metric:{unit:"VA",ratio:1}}}},"1Kn6":function(e,r,n){var t=n("/mkQ"),a=n("PzR9"),o=n("OW9J"),i=n("C35W"),l=/^\s*function[ \n\r\t]+\w/,u=/\bthis\b/,s=Function.prototype.toString;e.exports=function(e,r,n){if("function"!=typeof e)return a;if("undefined"==typeof r||!("prototype"in e))return e;var c=e.__bindData__;if("undefined"==typeof c&&(i.funcNames&&(c=!e.name),!(c=c||!i.funcDecomp))){var p=s.call(e);i.funcNames||(c=!l.test(p)),c||(c=u.test(p),o(e,c))}if(!1===c||!0!==c&&1&c[1])return e;switch(n){case 1:return function(n){return e.call(r,n)};case 2:return function(n,t){return e.call(r,n,t)};case 3:return function(n,t,a){return e.call(r,n,t,a)};case 4:return function(n,t,a,o){return e.call(r,n,t,a,o)}}return t(e,r)}},"3KVt":function(e,r){var n=Object.prototype.toString,t=RegExp("^"+String(n).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");e.exports=t},"4CAg":function(e,r){var n,t;n={mm3:{name:{singular:"Cubic Millimeter",plural:"Cubic Millimeters"},to_anchor:1e-6},cm3:{name:{singular:"Cubic Centimeter",plural:"Cubic Centimeters"},to_anchor:.001},ml:{name:{singular:"Millilitre",plural:"Millilitres"},to_anchor:.001},cl:{name:{singular:"Centilitre",plural:"Centilitres"},to_anchor:.01},dl:{name:{singular:"Decilitre",plural:"Decilitres"},to_anchor:.1},l:{name:{singular:"Litre",plural:"Litres"},to_anchor:1},kl:{name:{singular:"Kilolitre",plural:"Kilolitres"},to_anchor:1e3},m3:{name:{singular:"Cubic meter",plural:"Cubic meters"},to_anchor:1e3},km3:{name:{singular:"Cubic kilometer",plural:"Cubic kilometers"},to_anchor:1e12},krm:{name:{singular:"Matsked",plural:"Matskedar"},to_anchor:.001},tsk:{name:{singular:"Tesked",plural:"Teskedar"},to_anchor:.005},msk:{name:{singular:"Matsked",plural:"Matskedar"},to_anchor:.015},kkp:{name:{singular:"Kaffekopp",plural:"Kaffekoppar"},to_anchor:.15},glas:{name:{singular:"Glas",plural:"Glas"},to_anchor:.2},kanna:{name:{singular:"Kanna",plural:"Kannor"},to_anchor:2.617}},t={tsp:{name:{singular:"Teaspoon",plural:"Teaspoons"},to_anchor:1/6},Tbs:{name:{singular:"Tablespoon",plural:"Tablespoons"},to_anchor:.5},in3:{name:{singular:"Cubic inch",plural:"Cubic inches"},to_anchor:.55411},"fl-oz":{name:{singular:"Fluid Ounce",plural:"Fluid Ounces"},to_anchor:1},cup:{name:{singular:"Cup",plural:"Cups"},to_anchor:8},pnt:{name:{singular:"Pint",plural:"Pints"},to_anchor:16},qt:{name:{singular:"Quart",plural:"Quarts"},to_anchor:32},gal:{name:{singular:"Gallon",plural:"Gallons"},to_anchor:128},ft3:{name:{singular:"Cubic foot",plural:"Cubic feet"},to_anchor:957.506},yd3:{name:{singular:"Cubic yard",plural:"Cubic yards"},to_anchor:25852.7}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"l",ratio:33.8140226},imperial:{unit:"fl-oz",ratio:1/33.8140226}}}},"6+oW":function(e,r){e.exports={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1}},"7W2i":function(e,r,n){var t=n("SksO");e.exports=function(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&t(e,r)}},"8Kt/":function(e,r,n){"use strict";n("lSNA");r.__esModule=!0,r.defaultHead=c,r.default=void 0;var t,a=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var r=s();if(r&&r.has(e))return r.get(e);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var o=t?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=e[a]}n.default=e,r&&r.set(e,n);return n}(n("q1tI")),o=(t=n("Xuae"))&&t.__esModule?t:{default:t},i=n("lwAK"),l=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return s=function(){return e},e}function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],r=[a.default.createElement("meta",{charSet:"utf-8"})];return e||r.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),r}function p(e,r){return"string"===typeof r||"number"===typeof r?e:r.type===a.default.Fragment?e.concat(a.default.Children.toArray(r.props.children).reduce((function(e,r){return"string"===typeof r||"number"===typeof r?e:e.concat(r)}),[])):e.concat(r)}var m=["name","httpEquiv","charSet","itemProp"];function h(e,r){return e.reduce((function(e,r){var n=a.default.Children.toArray(r.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(c(r.inAmpMode)).filter(function(){var e=new Set,r=new Set,n=new Set,t={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var l=a.key.slice(a.key.indexOf("$")+1);e.has(l)?o=!1:e.add(l)}switch(a.type){case"title":case"base":r.has(a.type)?o=!1:r.add(a.type);break;case"meta":for(var u=0,s=m.length;u<s;u++){var c=m[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var p=a.props[c],h=t[c]||new Set;"name"===c&&i||!h.has(p)?(h.add(p),t[c]=h):o=!1}}}return o}}()).reverse().map((function(e,r){var n=e.key||r;return a.default.cloneElement(e,{key:n})}))}function f(e){var r=e.children,n=(0,a.useContext)(i.AmpStateContext),t=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:h,headManager:t,inAmpMode:(0,u.isInAmpMode)(n)},r)}f.rewind=function(){};var g=f;r.default=g},"9N93":function(e,r,n){var t=n("X1gz"),a=n("xQ8M"),o=n("OW9J"),i=n("YZT1"),l=[].push;e.exports=function e(r){var n=r[0],u=r[1],s=r[2],c=r[3],p=r[4],m=r[5],h=1&u,f=2&u,g=4&u,d=8&u,_=n;function b(){var r=h?p:this;if(s){var o=s.slice();l.apply(o,arguments)}if((c||g)&&(o||(o=i(arguments)),c&&l.apply(o,c),g&&o.length<m))return u|=16,e([n,d?u:-4&u,o,null,p,m]);if(o||(o=arguments),f&&(n=r[_]),this instanceof b){r=t(n.prototype);var v=n.apply(r,o);return a(v)?v:r}return n.apply(r,o)}return o(b,r),b}},Bnag:function(e,r){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},C35W:function(e,r,n){(function(r){var t=n("3KVt"),a={};a.funcDecomp=!t.test(r.WinRTError)&&/\bthis\b/.test((function(){return this})),a.funcNames="string"==typeof Function.name,e.exports=a}).call(this,n("ntbh"))},"D3n+":function(e,r){var n;n={Wh:{name:{singular:"Watt-hour",plural:"Watt-hours"},to_anchor:3600},mWh:{name:{singular:"Milliwatt-hour",plural:"Milliwatt-hours"},to_anchor:3.6},kWh:{name:{singular:"Kilowatt-hour",plural:"Kilowatt-hours"},to_anchor:36e5},MWh:{name:{singular:"Megawatt-hour",plural:"Megawatt-hours"},to_anchor:36e8},GWh:{name:{singular:"Gigawatt-hour",plural:"Gigawatt-hours"},to_anchor:36e11},J:{name:{singular:"Joule",plural:"Joules"},to_anchor:1},kJ:{name:{singular:"Kilojoule",plural:"Kilojoules"},to_anchor:1e3}},e.exports={metric:n,_anchors:{metric:{unit:"J",ratio:1}}}},DGMt:function(e,r){var n;n={V:{name:{singular:"Volt",plural:"Volts"},to_anchor:1},mV:{name:{singular:"Millivolt",plural:"Millivolts"},to_anchor:.001},kV:{name:{singular:"Kilovolt",plural:"Kilovolts"},to_anchor:1e3}},e.exports={metric:n,_anchors:{metric:{unit:"V",ratio:1}}}},E9IT:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brew-ratio",function(){return n("SQlf")}])},EbDI:function(e,r){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,r,n){"use strict";var t;r.__esModule=!0,r.HeadManagerContext=void 0;var a=((t=n("q1tI"))&&t.__esModule?t:{default:t}).default.createContext({});r.HeadManagerContext=a},"Gl+c":function(e,r){var n;n={VARh:{name:{singular:"Volt-Ampere Reactive Hour",plural:"Volt-Amperes Reactive Hour"},to_anchor:1},mVARh:{name:{singular:"Millivolt-Ampere Reactive Hour",plural:"Millivolt-Amperes Reactive Hour"},to_anchor:.001},kVARh:{name:{singular:"Kilovolt-Ampere Reactive Hour",plural:"Kilovolt-Amperes Reactive Hour"},to_anchor:1e3},MVARh:{name:{singular:"Megavolt-Ampere Reactive Hour",plural:"Megavolt-Amperes Reactive Hour"},to_anchor:1e6},GVARh:{name:{singular:"Gigavolt-Ampere Reactive Hour",plural:"Gigavolt-Amperes Reactive Hour"},to_anchor:1e9}},e.exports={metric:n,_anchors:{metric:{unit:"VARh",ratio:1}}}},HIRa:function(e,r){var n,t;n={"mm3/s":{name:{singular:"Cubic Millimeter per second",plural:"Cubic Millimeters per second"},to_anchor:1e-6},"cm3/s":{name:{singular:"Cubic Centimeter per second",plural:"Cubic Centimeters per second"},to_anchor:.001},"ml/s":{name:{singular:"Millilitre per second",plural:"Millilitres per second"},to_anchor:.001},"cl/s":{name:{singular:"Centilitre per second",plural:"Centilitres per second"},to_anchor:.01},"dl/s":{name:{singular:"Decilitre per second",plural:"Decilitres per second"},to_anchor:.1},"l/s":{name:{singular:"Litre per second",plural:"Litres per second"},to_anchor:1},"l/min":{name:{singular:"Litre per minute",plural:"Litres per minute"},to_anchor:1/60},"l/h":{name:{singular:"Litre per hour",plural:"Litres per hour"},to_anchor:1/3600},"kl/s":{name:{singular:"Kilolitre per second",plural:"Kilolitres per second"},to_anchor:1e3},"kl/min":{name:{singular:"Kilolitre per minute",plural:"Kilolitres per minute"},to_anchor:50/3},"kl/h":{name:{singular:"Kilolitre per hour",plural:"Kilolitres per hour"},to_anchor:5/18},"m3/s":{name:{singular:"Cubic meter per second",plural:"Cubic meters per second"},to_anchor:1e3},"m3/min":{name:{singular:"Cubic meter per minute",plural:"Cubic meters per minute"},to_anchor:50/3},"m3/h":{name:{singular:"Cubic meter per hour",plural:"Cubic meters per hour"},to_anchor:5/18},"km3/s":{name:{singular:"Cubic kilometer per second",plural:"Cubic kilometers per second"},to_anchor:1e12}},t={"tsp/s":{name:{singular:"Teaspoon per second",plural:"Teaspoons per second"},to_anchor:1/6},"Tbs/s":{name:{singular:"Tablespoon per second",plural:"Tablespoons per second"},to_anchor:.5},"in3/s":{name:{singular:"Cubic inch per second",plural:"Cubic inches per second"},to_anchor:.55411},"in3/min":{name:{singular:"Cubic inch per minute",plural:"Cubic inches per minute"},to_anchor:.55411/60},"in3/h":{name:{singular:"Cubic inch per hour",plural:"Cubic inches per hour"},to_anchor:.55411/3600},"fl-oz/s":{name:{singular:"Fluid Ounce per second",plural:"Fluid Ounces per second"},to_anchor:1},"fl-oz/min":{name:{singular:"Fluid Ounce per minute",plural:"Fluid Ounces per minute"},to_anchor:1/60},"fl-oz/h":{name:{singular:"Fluid Ounce per hour",plural:"Fluid Ounces per hour"},to_anchor:1/3600},"cup/s":{name:{singular:"Cup per second",plural:"Cups per second"},to_anchor:8},"pnt/s":{name:{singular:"Pint per second",plural:"Pints per second"},to_anchor:16},"pnt/min":{name:{singular:"Pint per minute",plural:"Pints per minute"},to_anchor:4/15},"pnt/h":{name:{singular:"Pint per hour",plural:"Pints per hour"},to_anchor:1/225},"qt/s":{name:{singular:"Quart per second",plural:"Quarts per second"},to_anchor:32},"gal/s":{name:{singular:"Gallon per second",plural:"Gallons per second"},to_anchor:128},"gal/min":{name:{singular:"Gallon per minute",plural:"Gallons per minute"},to_anchor:32/15},"gal/h":{name:{singular:"Gallon per hour",plural:"Gallons per hour"},to_anchor:8/225},"ft3/s":{name:{singular:"Cubic foot per second",plural:"Cubic feet per second"},to_anchor:957.506},"ft3/min":{name:{singular:"Cubic foot per minute",plural:"Cubic feet per minute"},to_anchor:957.506/60},"ft3/h":{name:{singular:"Cubic foot per hour",plural:"Cubic feet per hour"},to_anchor:957.506/3600},"yd3/s":{name:{singular:"Cubic yard per second",plural:"Cubic yards per second"},to_anchor:25852.7},"yd3/min":{name:{singular:"Cubic yard per minute",plural:"Cubic yards per minute"},to_anchor:25852.7/60},"yd3/h":{name:{singular:"Cubic yard per hour",plural:"Cubic yards per hour"},to_anchor:25852.7/3600}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"l/s",ratio:33.8140227},imperial:{unit:"fl-oz/s",ratio:1/33.8140227}}}},I7wR:function(e,r){e.exports=function(e){return"function"==typeof e}},Ijbi:function(e,r,n){var t=n("WkPL");e.exports=function(e){if(Array.isArray(e))return t(e)}},KjoV:function(e,r,n){var t=n("X1gz"),a=n("xQ8M"),o=n("OW9J"),i=[].push;e.exports=function(e){var r=e[0],n=e[2],l=e[4];function u(){if(n){var e=n.slice();i.apply(e,arguments)}if(this instanceof u){var o=t(r.prototype),s=r.apply(o,e||arguments);return a(s)?s:o}return r.apply(l,e||arguments)}return o(u,e),u}},"LV+z":function(e,r){var n;n={A:{name:{singular:"Ampere",plural:"Amperes"},to_anchor:1},mA:{name:{singular:"Milliampere",plural:"Milliamperes"},to_anchor:.001},kA:{name:{singular:"Kiloampere",plural:"Kiloamperes"},to_anchor:1e3}},e.exports={metric:n,_anchors:{metric:{unit:"A",ratio:1}}}},NTw3:function(e,r){var n;n={rad:{name:{singular:"radian",plural:"radians"},to_anchor:180/Math.PI},deg:{name:{singular:"degree",plural:"degrees"},to_anchor:1},grad:{name:{singular:"gradian",plural:"gradians"},to_anchor:.9},arcmin:{name:{singular:"arcminute",plural:"arcminutes"},to_anchor:1/60},arcsec:{name:{singular:"arcsecond",plural:"arcseconds"},to_anchor:1/3600}},e.exports={metric:n,_anchors:{metric:{unit:"deg",ratio:1}}}},Nsbk:function(e,r){function n(r){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(r)}e.exports=n},OMCP:function(e,r){var n,t;n={b:{name:{singular:"Bit",plural:"Bits"},to_anchor:1},Kb:{name:{singular:"Kilobit",plural:"Kilobits"},to_anchor:1024},Mb:{name:{singular:"Megabit",plural:"Megabits"},to_anchor:1048576},Gb:{name:{singular:"Gigabit",plural:"Gigabits"},to_anchor:1073741824},Tb:{name:{singular:"Terabit",plural:"Terabits"},to_anchor:1099511627776}},t={B:{name:{singular:"Byte",plural:"Bytes"},to_anchor:1},KB:{name:{singular:"Kilobyte",plural:"Kilobytes"},to_anchor:1024},MB:{name:{singular:"Megabyte",plural:"Megabytes"},to_anchor:1048576},GB:{name:{singular:"Gigabyte",plural:"Gigabytes"},to_anchor:1073741824},TB:{name:{singular:"Terabyte",plural:"Terabytes"},to_anchor:1099511627776}},e.exports={bits:n,bytes:t,_anchors:{bits:{unit:"b",ratio:1/8},bytes:{unit:"B",ratio:8}}}},OW9J:function(e,r,n){var t=n("uSk6"),a=n("3KVt"),o={configurable:!1,enumerable:!1,value:null,writable:!1},i=function(){try{var e={},r=a.test(r=Object.defineProperty)&&r,n=r(e,e,e)&&r}catch(t){}return n}(),l=i?function(e,r){o.value=r,i(e,"__bindData__",o)}:t;e.exports=l},PJYZ:function(e,r){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},PzR9:function(e,r){e.exports=function(e){return e}},QIaD:function(e,r){var n;n={W:{name:{singular:"Watt",plural:"Watts"},to_anchor:1},mW:{name:{singular:"Milliwatt",plural:"Milliwatts"},to_anchor:.001},kW:{name:{singular:"Kilowatt",plural:"Kilowatts"},to_anchor:1e3},MW:{name:{singular:"Megawatt",plural:"Megawatts"},to_anchor:1e6},GW:{name:{singular:"Gigawatt",plural:"Gigawatts"},to_anchor:1e9}},e.exports={metric:n,_anchors:{metric:{unit:"W",ratio:1}}}},Qetd:function(e,r,n){"use strict";var t=Object.assign.bind(Object);e.exports=t,e.exports.default=e.exports},RIqP:function(e,r,n){var t=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return t(e)||a(e)||o(e)||i()}},RP9p:function(e,r,n){var t=n("6+oW"),a=Object.prototype.hasOwnProperty;e.exports=function(e){var r,n=e,o=[];if(!n)return o;if(!t[typeof e])return o;for(r in n)a.call(n,r)&&o.push(r);return o}},SQlf:function(e,r,n){"use strict";n.r(r);var t=n("nKUr");function a(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}function o(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(t=(i=l.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(u){a=!0,o=u}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return n}}(e,r)||function(e,r){if(e){if("string"===typeof e)return a(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(e,r):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("q1tI"),l=n.n(i),u=n("g4pe"),s=n.n(u),c=n("qpxp"),p=n.n(c),m=n("cKqk"),h=n.n(m),f=["g","Tbs","oz"],g=["g","fl-oz","cup"],d={g:"g",Tbs:"tbsp",oz:"oz",cup:"cups","fl-oz":"fl oz"};function _(e,r){var n=e.findIndex((function(e){return e===r}))+1;return e[n>e.length-1?0:n]}var b=p()().possibilities("mass");function v(e,r,n,t){var a=p()(e).from(r);if(a.possibilities().includes(n))return a.to(n);var o,i,l=b.includes(r);return"water"===t?(i=a.to(l?"g":"ml"),o=l?"ml":"g"):(i=a.to(l?"g":"Tbs"),i=l?i/5:5*i,o=l?"Tbs":"g"),p()(i).from(o).to(n)}r.default=function(){var e=o(l.a.useState("g"),2),r=e[0],n=e[1],a=o(l.a.useState("g"),2),i=a[0],u=a[1],c=o(l.a.useState(30),2),p=c[0],m=c[1],b=o(l.a.useState(500),2),y=b[0],x=b[1],M=l.a.useCallback((function(e){var n=Number(e.target.value),t=v(n,i,"g","water"),a=v(Math.round(t/17),"g",r,"beans");x(n),m(a)}),[r,i]),w=l.a.useCallback((function(e){var n=Number(e.target.value),t=v(n,r,"g","beans"),a=v(Math.round(17*t),"g",i,"water");m(n),x(a)}),[r,i]),C=l.a.useCallback((function(){var e=_(f,r),t=v(p,r,e,"beans");n(e),m(t)}),[p,r]),k=l.a.useCallback((function(){var e=_(g,i),r=v(y,i,e,"water");u(e),x(r)}),[y,i]);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(s.a,{children:[Object(t.jsx)("title",{children:"Brew Ratio"}),Object(t.jsx)("link",{rel:"icon",href:"/brew-ratio/favicon.ico"},"favicon.ico"),Object(t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/brew-ratio/apple-touch-icon.png"}),Object(t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/brew-ratio/favicon-32x32.png"}),Object(t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/brew-ratio/favicon-16x16.png"}),Object(t.jsx)("link",{rel:"manifest",href:"/brew-ratio/site.webmanifest"}),Object(t.jsx)("link",{rel:"mask-icon",href:"/brew-ratio/safari-pinned-tab.svg",color:"#5bbad5"}),Object(t.jsx)("meta",{name:"msapplication-TileColor",content:"#00aba9"}),Object(t.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),Object(t.jsx)("main",{className:h.a.page,children:Object(t.jsxs)("div",{className:h.a.pageInner,children:[Object(t.jsxs)("div",{className:h.a.pageIntro,children:[Object(t.jsx)("h1",{className:h.a.pageTitle,children:"Brew Ratio"}),Object(t.jsx)("p",{className:h.a.description,children:"Calculate the beans or water you need to make a good cup of coffee."})]}),Object(t.jsxs)("div",{className:h.a.calculator,children:[Object(t.jsxs)("div",{className:h.a.unit,children:[Object(t.jsx)("label",{className:h.a.label,children:"Beans"}),Object(t.jsxs)("div",{className:h.a.inputContainer,children:[Object(t.jsx)("input",{className:h.a.numberInput,type:"number",min:1,value:Number(p.toFixed(2)),onChange:w}),Object(t.jsx)("button",{type:"button",className:h.a.unitSpinner,onClick:C,children:d[r]})]})]}),Object(t.jsxs)("div",{className:h.a.unit,children:[Object(t.jsx)("label",{className:h.a.label,children:"Water"}),Object(t.jsxs)("div",{className:h.a.inputContainer,children:[Object(t.jsx)("input",{className:h.a.numberInput,type:"number",min:1,value:Number(y.toFixed(2)),onChange:M}),Object(t.jsx)("button",{type:"button",className:h.a.unitSpinner,onClick:k,children:d[i]})]})]})]})]})})]})}},SksO:function(e,r){function n(r,t){return e.exports=n=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},n(r,t)}e.exports=n},Vffc:function(e,r){var n,t;n={"m/s":{name:{singular:"Metre per second",plural:"Metres per second"},to_anchor:3.6},"km/h":{name:{singular:"Kilometre per hour",plural:"Kilometres per hour"},to_anchor:1}},t={"m/h":{name:{singular:"Mile per hour",plural:"Miles per hour"},to_anchor:1},knot:{name:{singular:"Knot",plural:"Knots"},to_anchor:1.150779},"ft/s":{name:{singular:"Foot per second",plural:"Feet per second"},to_anchor:.681818}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"km/h",ratio:1/1.609344},imperial:{unit:"m/h",ratio:1.609344}}}},W8MJ:function(e,r){function n(e,r){for(var n=0;n<r.length;n++){var t=r[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}e.exports=function(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}},WYGQ:function(e,r){var n;n={ns:{name:{singular:"Nanosecond",plural:"Nanoseconds"},to_anchor:1e-9},mu:{name:{singular:"Microsecond",plural:"Microseconds"},to_anchor:1e-6},ms:{name:{singular:"Millisecond",plural:"Milliseconds"},to_anchor:.001},s:{name:{singular:"Second",plural:"Seconds"},to_anchor:1},min:{name:{singular:"Minute",plural:"Minutes"},to_anchor:60},h:{name:{singular:"Hour",plural:"Hours"},to_anchor:3600},d:{name:{singular:"Day",plural:"Days"},to_anchor:86400},week:{name:{singular:"Week",plural:"Weeks"},to_anchor:604800},month:{name:{singular:"Month",plural:"Months"},to_anchor:2629800},year:{name:{singular:"Year",plural:"Years"},to_anchor:31557600}},e.exports={metric:n,_anchors:{metric:{unit:"s",ratio:1}}}},WkPL:function(e,r){e.exports=function(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}},X1gz:function(e,r,n){(function(r){var t=n("xQ8M"),a=(n("uSk6"),n("3KVt").test(a=Object.create)&&a);function o(e,r){return t(e)?a(e):{}}a||(o=function(){function e(){}return function(n){if(t(n)){e.prototype=n;var a=new e;e.prototype=null}return a||r.Object()}}()),e.exports=o}).call(this,n("ntbh"))},XX6O:function(e,r){var n;n={ppm:{name:{singular:"Part-per Million",plural:"Parts-per Million"},to_anchor:1},ppb:{name:{singular:"Part-per Billion",plural:"Parts-per Billion"},to_anchor:.001},ppt:{name:{singular:"Part-per Trillion",plural:"Parts-per Trillion"},to_anchor:1e-6},ppq:{name:{singular:"Part-per Quadrillion",plural:"Parts-per Quadrillion"},to_anchor:1e-9}},e.exports={metric:n,imperial:{},_anchors:{metric:{unit:"ppm",ratio:1e-6}}}},Xuae:function(e,r,n){"use strict";var t=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),l=n("a1gu"),u=n("Nsbk");function s(e){var r=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,t=u(e);if(r){var a=u(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return l(this,n)}}r.__esModule=!0,r.default=void 0;var c=n("q1tI"),p=function(e){i(n,e);var r=s(n);function n(e){var o;return a(this,n),(o=r.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(t(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(c.Component);r.default=p},YZT1:function(e,r){e.exports=function(e,r,n){r||(r=0),"undefined"==typeof n&&(n=e?e.length:0);for(var t=-1,a=n-r||0,o=Array(a<0?0:a);++t<a;)o[t]=e[r+t];return o}},ZhPi:function(e,r,n){var t=n("WkPL");e.exports=function(e,r){if(e){if("string"===typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(e,r):void 0}}},a1gu:function(e,r,n){var t=n("cDf5"),a=n("PJYZ");e.exports=function(e,r){return!r||"object"!==t(r)&&"function"!==typeof r?a(e):r}},aO6L:function(e,r){var n,t;n={Pa:{name:{singular:"pascal",plural:"pascals"},to_anchor:.001},kPa:{name:{singular:"kilopascal",plural:"kilopascals"},to_anchor:1},MPa:{name:{singular:"megapascal",plural:"megapascals"},to_anchor:1e3},hPa:{name:{singular:"hectopascal",plural:"hectopascals"},to_anchor:.1},bar:{name:{singular:"bar",plural:"bar"},to_anchor:100},torr:{name:{singular:"torr",plural:"torr"},to_anchor:101325/76e4}},t={psi:{name:{singular:"pound per square inch",plural:"pounds per square inch"},to_anchor:.001},ksi:{name:{singular:"kilopound per square inch",plural:"kilopound per square inch"},to_anchor:1}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"kPa",ratio:.00014503768078},imperial:{unit:"psi",ratio:6894.76000045014}}}},"bv+k":function(e,r){var n,t;n={C:{name:{singular:"degree Celsius",plural:"degrees Celsius"},to_anchor:1,anchor_shift:0},K:{name:{singular:"degree Kelvin",plural:"degrees Kelvin"},to_anchor:1,anchor_shift:273.15}},t={F:{name:{singular:"degree Fahrenheit",plural:"degrees Fahrenheit"},to_anchor:1},R:{name:{singular:"degree Rankine",plural:"degrees Rankine"},to_anchor:1,anchor_shift:459.67}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"C",transform:function(e){return e/(5/9)+32}},imperial:{unit:"F",transform:function(e){return 5/9*(e-32)}}}}},cDf5:function(e,r){function n(r){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(r)}e.exports=n},"cH/A":function(e,r){var n,t;n={lx:{name:{singular:"Lux",plural:"Lux"},to_anchor:1}},t={"ft-cd":{name:{singular:"Foot-candle",plural:"Foot-candles"},to_anchor:1}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"lx",ratio:1/10.76391},imperial:{unit:"ft-cd",ratio:10.76391}}}},cKqk:function(e,r,n){e.exports={page:"BrewRatio_page__1Mjwx",pageInner:"BrewRatio_pageInner__hLYMP",pageIntro:"BrewRatio_pageIntro__39tiG",pageTitle:"BrewRatio_pageTitle__1qv7_",description:"BrewRatio_description__1Mwym",calculator:"BrewRatio_calculator__2TyIP",unit:"BrewRatio_unit__3pGx2",inputContainer:"BrewRatio_inputContainer__3cb7D",numberInput:"BrewRatio_numberInput__3oi0P",label:"BrewRatio_label__1FjXK",unitSpinner:"BrewRatio_unitSpinner__35PaB"}},e8j1:function(e,r){var n,t;n={mm:{name:{singular:"Millimeter",plural:"Millimeters"},to_anchor:.001},cm:{name:{singular:"Centimeter",plural:"Centimeters"},to_anchor:.01},m:{name:{singular:"Meter",plural:"Meters"},to_anchor:1},km:{name:{singular:"Kilometer",plural:"Kilometers"},to_anchor:1e3}},t={in:{name:{singular:"Inch",plural:"Inches"},to_anchor:1/12},yd:{name:{singular:"Yard",plural:"Yards"},to_anchor:3},"ft-us":{name:{singular:"US Survey Foot",plural:"US Survey Feet"},to_anchor:1.000002},ft:{name:{singular:"Foot",plural:"Feet"},to_anchor:1},mi:{name:{singular:"Mile",plural:"Miles"},to_anchor:5280}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"m",ratio:3.28084},imperial:{unit:"ft",ratio:1/3.28084}}}},"fL/t":function(e,r,n){var t=n("KjoV"),a=n("9N93"),o=n("I7wR"),i=[].push;e.exports=function e(r,n,l,u,s,c){var p=1&n,m=4&n,h=16&n,f=32&n;if(!(2&n)&&!o(r))throw new TypeError;h&&!l.length&&(n&=-17,h=l=!1),f&&!u.length&&(n&=-33,f=u=!1);var g=r&&r.__bindData__;return g&&!0!==g?(g=g.slice(),!p||1&g[1]||(g[4]=s),!p&&1&g[1]&&(n|=8),!m||4&g[1]||(g[5]=c),h&&i.apply(g[2]||(g[2]=[]),l),f&&i.apply(g[3]||(g[3]=[]),u),g[1]|=n,e.apply(null,g)):(1==n||17===n?t:a)([r,n,l,u,s,c])}},g3rt:function(e,r){var n,t;n={"min/km":{name:{singular:"Minute per kilometre",plural:"Minutes per kilometre"},to_anchor:.06},"s/m":{name:{singular:"Second per metre",plural:"Seconds per metre"},to_anchor:1}},t={"min/mi":{name:{singular:"Minute per mile",plural:"Minutes per mile"},to_anchor:.0113636},"s/ft":{name:{singular:"Second per foot",plural:"Seconds per foot"},to_anchor:1}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"s/m",ratio:.3048},imperial:{unit:"s/ft",ratio:1/.3048}}}},g4pe:function(e,r,n){e.exports=n("8Kt/")},gKgP:function(e,r){var n;n={ea:{name:{singular:"Each",plural:"Each"},to_anchor:1},dz:{name:{singular:"Dozen",plural:"Dozens"},to_anchor:12}},e.exports={metric:n,imperial:{},_anchors:{metric:{unit:"ea",ratio:1}}}},lSNA:function(e,r){e.exports=function(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}},lwAK:function(e,r,n){"use strict";var t;r.__esModule=!0,r.AmpStateContext=void 0;var a=((t=n("q1tI"))&&t.__esModule?t:{default:t}).default.createContext({});r.AmpStateContext=a},lwsE:function(e,r){e.exports=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}},nOnp:function(e,r){var n,t;n={mm2:{name:{singular:"Square Millimeter",plural:"Square Millimeters"},to_anchor:1e-6},cm2:{name:{singular:"Centimeter",plural:"Centimeters"},to_anchor:1e-4},m2:{name:{singular:"Square Meter",plural:"Square Meters"},to_anchor:1},ha:{name:{singular:"Hectare",plural:"Hectares"},to_anchor:1e4},km2:{name:{singular:"Square Kilometer",plural:"Square Kilometers"},to_anchor:1e6}},t={in2:{name:{singular:"Square Inch",plural:"Square Inches"},to_anchor:1/144},yd2:{name:{singular:"Square Yard",plural:"Square Yards"},to_anchor:9},ft2:{name:{singular:"Square Foot",plural:"Square Feet"},to_anchor:1},ac:{name:{singular:"Acre",plural:"Acres"},to_anchor:43560},mi2:{name:{singular:"Square Mile",plural:"Square Miles"},to_anchor:27878400}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"m2",ratio:10.7639},imperial:{unit:"ft2",ratio:1/10.7639}}}},ntbh:function(e,r){(function(r){e.exports=function(){var e={149:function(e){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(n){"object"===typeof window&&(r=window)}e.exports=r}},n={};function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{}},o=!0;try{e[r](a,a.exports,t),o=!1}finally{o&&delete n[r]}return a.exports}return t.ab=r+"/",t(149)}()}).call(this,"/")},qm8e:function(e,r,n){var t=n("1Kn6"),a=n("w/2C");e.exports=function(e,r,n){var o=-1,i=e?e.length:0;if(r=r&&"undefined"==typeof n?r:t(r,n,3),"number"==typeof i)for(;++o<i&&!1!==r(e[o],o,e););else a(e,r);return e}},qpxp:function(e,r,n){var t,a,o=n("vBWn"),i=n("qm8e"),l={length:n("e8j1"),area:n("nOnp"),mass:n("zL29"),volume:n("4CAg"),each:n("gKgP"),temperature:n("bv+k"),time:n("WYGQ"),digital:n("OMCP"),partsPer:n("XX6O"),speed:n("Vffc"),pace:n("g3rt"),pressure:n("aO6L"),current:n("LV+z"),voltage:n("DGMt"),power:n("QIaD"),reactivePower:n("t3v8"),apparentPower:n("1C7C"),energy:n("D3n+"),reactiveEnergy:n("Gl+c"),volumeFlowRate:n("HIRa"),illuminance:n("cH/A"),frequency:n("tV9T"),angle:n("NTw3")};(a=function(e,r){this.val=r?e/r:e}).prototype.from=function(e){if(this.destination)throw new Error(".from must be called before .to");return this.origin=this.getUnit(e),this.origin||this.throwUnsupportedUnitError(e),this},a.prototype.to=function(e){if(!this.origin)throw new Error(".to must be called after .from");var r,n;if(this.destination=this.getUnit(e),this.destination||this.throwUnsupportedUnitError(e),this.origin.abbr===this.destination.abbr)return this.val;if(this.destination.measure!=this.origin.measure)throw new Error("Cannot convert incompatible measures of "+this.destination.measure+" and "+this.origin.measure);return r=this.val*this.origin.unit.to_anchor,this.origin.unit.anchor_shift&&(r-=this.origin.unit.anchor_shift),this.origin.system!=this.destination.system&&("function"===typeof(n=l[this.origin.measure]._anchors[this.origin.system].transform)?r=n(r):r*=l[this.origin.measure]._anchors[this.origin.system].ratio),this.destination.unit.anchor_shift&&(r+=this.destination.unit.anchor_shift),r/this.destination.unit.to_anchor},a.prototype.toBest=function(e){if(!this.origin)throw new Error(".toBest must be called after .from");var r;e=Object.assign({exclude:[],cutOffNumber:1},e);return i(this.possibilities(),function(n){var t=this.describe(n);if(-1===e.exclude.indexOf(n)&&t.system===this.origin.system){var a=this.to(n);(!r||a>=e.cutOffNumber&&a<r.val)&&(r={val:a,unit:n,singular:t.singular,plural:t.plural})}}.bind(this)),r},a.prototype.getUnit=function(e){var r;return i(l,(function(n,t){if(i(n,(function(n,a){return"_anchors"!=a&&(i(n,(function(n,o){if(o==e)return r={abbr:e,measure:t,system:a,unit:n},!1})),!r&&void 0)})),r)return!1})),r};var u=function(e){return{abbr:e.abbr,measure:e.measure,system:e.system,singular:e.unit.name.singular,plural:e.unit.name.plural}};a.prototype.describe=function(e){var r=a.prototype.getUnit(e),n=null;try{n=u(r)}catch(t){this.throwUnsupportedUnitError(e)}return n},a.prototype.list=function(e){var r=[];return i(l,(function(n,t){e&&e!==t||i(n,(function(e,n){if("_anchors"==n)return!1;i(e,(function(e,a){r=r.concat(u({abbr:a,measure:t,system:n,unit:e}))}))}))})),r},a.prototype.throwUnsupportedUnitError=function(e){var r=[];throw i(l,(function(e,n){i(e,(function(e,n){if("_anchors"==n)return!1;r=r.concat(o(e))}))})),new Error("Unsupported unit "+e+", use one of: "+r.join(", "))},a.prototype.possibilities=function(e){var r=[];return this.origin||e?(e=e||this.origin.measure,i(l[e],(function(e,n){if("_anchors"==n)return!1;r=r.concat(o(e))}))):i(o(l),(function(e){i(l[e],(function(e,n){if("_anchors"==n)return!1;r=r.concat(o(e))}))})),r},a.prototype.measures=function(){return o(l)},t=function(e){return new a(e)},e.exports=t},t3v8:function(e,r){var n;n={VAR:{name:{singular:"Volt-Ampere Reactive",plural:"Volt-Amperes Reactive"},to_anchor:1},mVAR:{name:{singular:"Millivolt-Ampere Reactive",plural:"Millivolt-Amperes Reactive"},to_anchor:.001},kVAR:{name:{singular:"Kilovolt-Ampere Reactive",plural:"Kilovolt-Amperes Reactive"},to_anchor:1e3},MVAR:{name:{singular:"Megavolt-Ampere Reactive",plural:"Megavolt-Amperes Reactive"},to_anchor:1e6},GVAR:{name:{singular:"Gigavolt-Ampere Reactive",plural:"Gigavolt-Amperes Reactive"},to_anchor:1e9}},e.exports={metric:n,_anchors:{metric:{unit:"VAR",ratio:1}}}},tV9T:function(e,r){var n;n={mHz:{name:{singular:"millihertz",plural:"millihertz"},to_anchor:.001},Hz:{name:{singular:"hertz",plural:"hertz"},to_anchor:1},kHz:{name:{singular:"kilohertz",plural:"kilohertz"},to_anchor:1e3},MHz:{name:{singular:"megahertz",plural:"megahertz"},to_anchor:1e6},GHz:{name:{singular:"gigahertz",plural:"gigahertz"},to_anchor:1e9},THz:{name:{singular:"terahertz",plural:"terahertz"},to_anchor:1e12},rpm:{name:{singular:"rotation per minute",plural:"rotations per minute"},to_anchor:1/60},"deg/s":{name:{singular:"degree per second",plural:"degrees per second"},to_anchor:1/360},"rad/s":{name:{singular:"radian per second",plural:"radians per second"},to_anchor:1/(2*Math.PI)}},e.exports={metric:n,_anchors:{frequency:{unit:"hz",ratio:1}}}},uSk6:function(e,r){e.exports=function(){}},vBWn:function(e,r,n){var t=n("xQ8M"),a=n("3KVt"),o=n("RP9p"),i=a.test(i=Object.keys)&&i,l=i?function(e){return t(e)?i(e):[]}:o;e.exports=l},"w/2C":function(e,r,n){var t=n("1Kn6"),a=n("vBWn"),o=n("6+oW");e.exports=function(e,r,n){var i,l=e,u=l;if(!l)return u;if(!o[typeof l])return u;r=r&&"undefined"==typeof n?r:t(r,n,3);for(var s=-1,c=o[typeof l]&&a(l),p=c?c.length:0;++s<p;)if(!1===r(l[i=c[s]],i,e))return u;return u}},xQ8M:function(e,r,n){var t=n("6+oW");e.exports=function(e){return!(!e||!t[typeof e])}},zL29:function(e,r){var n,t;n={mcg:{name:{singular:"Microgram",plural:"Micrograms"},to_anchor:1e-6},mg:{name:{singular:"Milligram",plural:"Milligrams"},to_anchor:.001},g:{name:{singular:"Gram",plural:"Grams"},to_anchor:1},kg:{name:{singular:"Kilogram",plural:"Kilograms"},to_anchor:1e3},mt:{name:{singular:"Metric Tonne",plural:"Metric Tonnes"},to_anchor:1e6}},t={oz:{name:{singular:"Ounce",plural:"Ounces"},to_anchor:1/16},lb:{name:{singular:"Pound",plural:"Pounds"},to_anchor:1},t:{name:{singular:"Ton",plural:"Tons"},to_anchor:2e3}},e.exports={metric:n,imperial:t,_anchors:{metric:{unit:"g",ratio:1/453.592},imperial:{unit:"lb",ratio:453.592}}}}},[["E9IT",0,1]]]);