_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"/0+H":function(r,e,n){"use strict";e.__esModule=!0,e.isInAmpMode=i,e.useAmp=function(){return i(a.default.useContext(o.AmpStateContext))};var t,a=(t=n("q1tI"))&&t.__esModule?t:{default:t},o=n("lwAK");function i(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=r.ampFirst,n=void 0!==e&&e,t=r.hybrid,a=void 0!==t&&t,o=r.hasQuery,i=void 0!==o&&o;return n||a&&i}},"/mkQ":function(r,e,n){var t=n("fL/t"),a=(n("3KVt"),n("YZT1"));r.exports=function(r,e){return arguments.length>2?t(r,17,a(arguments,2),null,e):t(r,1,null,null,e)}},"1C7C":function(r,e){var n;n={VA:{name:{singular:"Volt-Ampere",plural:"Volt-Amperes"},to_anchor:1},mVA:{name:{singular:"Millivolt-Ampere",plural:"Millivolt-Amperes"},to_anchor:.001},kVA:{name:{singular:"Kilovolt-Ampere",plural:"Kilovolt-Amperes"},to_anchor:1e3},MVA:{name:{singular:"Megavolt-Ampere",plural:"Megavolt-Amperes"},to_anchor:1e6},GVA:{name:{singular:"Gigavolt-Ampere",plural:"Gigavolt-Amperes"},to_anchor:1e9}},r.exports={metric:n,_anchors:{metric:{unit:"VA",ratio:1}}}},"1Kn6":function(r,e,n){var t=n("/mkQ"),a=n("PzR9"),o=n("OW9J"),i=n("C35W"),l=/^\s*function[ \n\r\t]+\w/,u=/\bthis\b/,s=Function.prototype.toString;r.exports=function(r,e,n){if("function"!=typeof r)return a;if("undefined"==typeof e||!("prototype"in r))return r;var c=r.__bindData__;if("undefined"==typeof c&&(i.funcNames&&(c=!r.name),!(c=c||!i.funcDecomp))){var p=s.call(r);i.funcNames||(c=!l.test(p)),c||(c=u.test(p),o(r,c))}if(!1===c||!0!==c&&1&c[1])return r;switch(n){case 1:return function(n){return r.call(e,n)};case 2:return function(n,t){return r.call(e,n,t)};case 3:return function(n,t,a){return r.call(e,n,t,a)};case 4:return function(n,t,a,o){return r.call(e,n,t,a,o)}}return t(r,e)}},"3KVt":function(r,e){var n=Object.prototype.toString,t=RegExp("^"+String(n).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");r.exports=t},"4CAg":function(r,e){var n,t;n={mm3:{name:{singular:"Cubic Millimeter",plural:"Cubic Millimeters"},to_anchor:1e-6},cm3:{name:{singular:"Cubic Centimeter",plural:"Cubic Centimeters"},to_anchor:.001},ml:{name:{singular:"Millilitre",plural:"Millilitres"},to_anchor:.001},cl:{name:{singular:"Centilitre",plural:"Centilitres"},to_anchor:.01},dl:{name:{singular:"Decilitre",plural:"Decilitres"},to_anchor:.1},l:{name:{singular:"Litre",plural:"Litres"},to_anchor:1},kl:{name:{singular:"Kilolitre",plural:"Kilolitres"},to_anchor:1e3},m3:{name:{singular:"Cubic meter",plural:"Cubic meters"},to_anchor:1e3},km3:{name:{singular:"Cubic kilometer",plural:"Cubic kilometers"},to_anchor:1e12},krm:{name:{singular:"Matsked",plural:"Matskedar"},to_anchor:.001},tsk:{name:{singular:"Tesked",plural:"Teskedar"},to_anchor:.005},msk:{name:{singular:"Matsked",plural:"Matskedar"},to_anchor:.015},kkp:{name:{singular:"Kaffekopp",plural:"Kaffekoppar"},to_anchor:.15},glas:{name:{singular:"Glas",plural:"Glas"},to_anchor:.2},kanna:{name:{singular:"Kanna",plural:"Kannor"},to_anchor:2.617}},t={tsp:{name:{singular:"Teaspoon",plural:"Teaspoons"},to_anchor:1/6},Tbs:{name:{singular:"Tablespoon",plural:"Tablespoons"},to_anchor:.5},in3:{name:{singular:"Cubic inch",plural:"Cubic inches"},to_anchor:.55411},"fl-oz":{name:{singular:"Fluid Ounce",plural:"Fluid Ounces"},to_anchor:1},cup:{name:{singular:"Cup",plural:"Cups"},to_anchor:8},pnt:{name:{singular:"Pint",plural:"Pints"},to_anchor:16},qt:{name:{singular:"Quart",plural:"Quarts"},to_anchor:32},gal:{name:{singular:"Gallon",plural:"Gallons"},to_anchor:128},ft3:{name:{singular:"Cubic foot",plural:"Cubic feet"},to_anchor:957.506},yd3:{name:{singular:"Cubic yard",plural:"Cubic yards"},to_anchor:25852.7}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"l",ratio:33.8140226},imperial:{unit:"fl-oz",ratio:1/33.8140226}}}},"6+oW":function(r,e){r.exports={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1}},"7W2i":function(r,e,n){var t=n("SksO");r.exports=function(r,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,writable:!0,configurable:!0}}),e&&t(r,e)}},"8Kt/":function(r,e,n){"use strict";n("lSNA");e.__esModule=!0,e.defaultHead=c,e.default=void 0;var t,a=function(r){if(r&&r.__esModule)return r;if(null===r||"object"!==typeof r&&"function"!==typeof r)return{default:r};var e=s();if(e&&e.has(r))return e.get(r);var n={},t=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in r)if(Object.prototype.hasOwnProperty.call(r,a)){var o=t?Object.getOwnPropertyDescriptor(r,a):null;o&&(o.get||o.set)?Object.defineProperty(n,a,o):n[a]=r[a]}n.default=r,e&&e.set(r,n);return n}(n("q1tI")),o=(t=n("Xuae"))&&t.__esModule?t:{default:t},i=n("lwAK"),l=n("FYa8"),u=n("/0+H");function s(){if("function"!==typeof WeakMap)return null;var r=new WeakMap;return s=function(){return r},r}function c(){var r=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=[a.default.createElement("meta",{charSet:"utf-8"})];return r||e.push(a.default.createElement("meta",{name:"viewport",content:"width=device-width"})),e}function p(r,e){return"string"===typeof e||"number"===typeof e?r:e.type===a.default.Fragment?r.concat(a.default.Children.toArray(e.props.children).reduce((function(r,e){return"string"===typeof e||"number"===typeof e?r:r.concat(e)}),[])):r.concat(e)}var m=["name","httpEquiv","charSet","itemProp"];function h(r,e){return r.reduce((function(r,e){var n=a.default.Children.toArray(e.props.children);return r.concat(n)}),[]).reduce(p,[]).reverse().concat(c(e.inAmpMode)).filter(function(){var r=new Set,e=new Set,n=new Set,t={};return function(a){var o=!0,i=!1;if(a.key&&"number"!==typeof a.key&&a.key.indexOf("$")>0){i=!0;var l=a.key.slice(a.key.indexOf("$")+1);r.has(l)?o=!1:r.add(l)}switch(a.type){case"title":case"base":e.has(a.type)?o=!1:e.add(a.type);break;case"meta":for(var u=0,s=m.length;u<s;u++){var c=m[u];if(a.props.hasOwnProperty(c))if("charSet"===c)n.has(c)?o=!1:n.add(c);else{var p=a.props[c],h=t[c]||new Set;"name"===c&&i||!h.has(p)?(h.add(p),t[c]=h):o=!1}}}return o}}()).reverse().map((function(r,e){var n=r.key||e;return a.default.cloneElement(r,{key:n})}))}function f(r){var e=r.children,n=(0,a.useContext)(i.AmpStateContext),t=(0,a.useContext)(l.HeadManagerContext);return a.default.createElement(o.default,{reduceComponentsToState:h,headManager:t,inAmpMode:(0,u.isInAmpMode)(n)},e)}f.rewind=function(){};var g=f;e.default=g},"9N93":function(r,e,n){var t=n("X1gz"),a=n("xQ8M"),o=n("OW9J"),i=n("YZT1"),l=[].push;r.exports=function r(e){var n=e[0],u=e[1],s=e[2],c=e[3],p=e[4],m=e[5],h=1&u,f=2&u,g=4&u,d=8&u,_=n;function b(){var e=h?p:this;if(s){var o=s.slice();l.apply(o,arguments)}if((c||g)&&(o||(o=i(arguments)),c&&l.apply(o,c),g&&o.length<m))return u|=16,r([n,d?u:-4&u,o,null,p,m]);if(o||(o=arguments),f&&(n=e[_]),this instanceof b){e=t(n.prototype);var v=n.apply(e,o);return a(v)?v:e}return n.apply(e,o)}return o(b,e),b}},Bnag:function(r,e){r.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},C35W:function(r,e,n){(function(e){var t=n("3KVt"),a={};a.funcDecomp=!t.test(e.WinRTError)&&/\bthis\b/.test((function(){return this})),a.funcNames="string"==typeof Function.name,r.exports=a}).call(this,n("ntbh"))},"D3n+":function(r,e){var n;n={Wh:{name:{singular:"Watt-hour",plural:"Watt-hours"},to_anchor:3600},mWh:{name:{singular:"Milliwatt-hour",plural:"Milliwatt-hours"},to_anchor:3.6},kWh:{name:{singular:"Kilowatt-hour",plural:"Kilowatt-hours"},to_anchor:36e5},MWh:{name:{singular:"Megawatt-hour",plural:"Megawatt-hours"},to_anchor:36e8},GWh:{name:{singular:"Gigawatt-hour",plural:"Gigawatt-hours"},to_anchor:36e11},J:{name:{singular:"Joule",plural:"Joules"},to_anchor:1},kJ:{name:{singular:"Kilojoule",plural:"Kilojoules"},to_anchor:1e3}},r.exports={metric:n,_anchors:{metric:{unit:"J",ratio:1}}}},DGMt:function(r,e){var n;n={V:{name:{singular:"Volt",plural:"Volts"},to_anchor:1},mV:{name:{singular:"Millivolt",plural:"Millivolts"},to_anchor:.001},kV:{name:{singular:"Kilovolt",plural:"Kilovolts"},to_anchor:1e3}},r.exports={metric:n,_anchors:{metric:{unit:"V",ratio:1}}}},E9IT:function(r,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/brew-ratio",function(){return n("SQlf")}])},EbDI:function(r,e){r.exports=function(r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r))return Array.from(r)}},FYa8:function(r,e,n){"use strict";var t;e.__esModule=!0,e.HeadManagerContext=void 0;var a=((t=n("q1tI"))&&t.__esModule?t:{default:t}).default.createContext({});e.HeadManagerContext=a},"Gl+c":function(r,e){var n;n={VARh:{name:{singular:"Volt-Ampere Reactive Hour",plural:"Volt-Amperes Reactive Hour"},to_anchor:1},mVARh:{name:{singular:"Millivolt-Ampere Reactive Hour",plural:"Millivolt-Amperes Reactive Hour"},to_anchor:.001},kVARh:{name:{singular:"Kilovolt-Ampere Reactive Hour",plural:"Kilovolt-Amperes Reactive Hour"},to_anchor:1e3},MVARh:{name:{singular:"Megavolt-Ampere Reactive Hour",plural:"Megavolt-Amperes Reactive Hour"},to_anchor:1e6},GVARh:{name:{singular:"Gigavolt-Ampere Reactive Hour",plural:"Gigavolt-Amperes Reactive Hour"},to_anchor:1e9}},r.exports={metric:n,_anchors:{metric:{unit:"VARh",ratio:1}}}},HIRa:function(r,e){var n,t;n={"mm3/s":{name:{singular:"Cubic Millimeter per second",plural:"Cubic Millimeters per second"},to_anchor:1e-6},"cm3/s":{name:{singular:"Cubic Centimeter per second",plural:"Cubic Centimeters per second"},to_anchor:.001},"ml/s":{name:{singular:"Millilitre per second",plural:"Millilitres per second"},to_anchor:.001},"cl/s":{name:{singular:"Centilitre per second",plural:"Centilitres per second"},to_anchor:.01},"dl/s":{name:{singular:"Decilitre per second",plural:"Decilitres per second"},to_anchor:.1},"l/s":{name:{singular:"Litre per second",plural:"Litres per second"},to_anchor:1},"l/min":{name:{singular:"Litre per minute",plural:"Litres per minute"},to_anchor:1/60},"l/h":{name:{singular:"Litre per hour",plural:"Litres per hour"},to_anchor:1/3600},"kl/s":{name:{singular:"Kilolitre per second",plural:"Kilolitres per second"},to_anchor:1e3},"kl/min":{name:{singular:"Kilolitre per minute",plural:"Kilolitres per minute"},to_anchor:50/3},"kl/h":{name:{singular:"Kilolitre per hour",plural:"Kilolitres per hour"},to_anchor:5/18},"m3/s":{name:{singular:"Cubic meter per second",plural:"Cubic meters per second"},to_anchor:1e3},"m3/min":{name:{singular:"Cubic meter per minute",plural:"Cubic meters per minute"},to_anchor:50/3},"m3/h":{name:{singular:"Cubic meter per hour",plural:"Cubic meters per hour"},to_anchor:5/18},"km3/s":{name:{singular:"Cubic kilometer per second",plural:"Cubic kilometers per second"},to_anchor:1e12}},t={"tsp/s":{name:{singular:"Teaspoon per second",plural:"Teaspoons per second"},to_anchor:1/6},"Tbs/s":{name:{singular:"Tablespoon per second",plural:"Tablespoons per second"},to_anchor:.5},"in3/s":{name:{singular:"Cubic inch per second",plural:"Cubic inches per second"},to_anchor:.55411},"in3/min":{name:{singular:"Cubic inch per minute",plural:"Cubic inches per minute"},to_anchor:.55411/60},"in3/h":{name:{singular:"Cubic inch per hour",plural:"Cubic inches per hour"},to_anchor:.55411/3600},"fl-oz/s":{name:{singular:"Fluid Ounce per second",plural:"Fluid Ounces per second"},to_anchor:1},"fl-oz/min":{name:{singular:"Fluid Ounce per minute",plural:"Fluid Ounces per minute"},to_anchor:1/60},"fl-oz/h":{name:{singular:"Fluid Ounce per hour",plural:"Fluid Ounces per hour"},to_anchor:1/3600},"cup/s":{name:{singular:"Cup per second",plural:"Cups per second"},to_anchor:8},"pnt/s":{name:{singular:"Pint per second",plural:"Pints per second"},to_anchor:16},"pnt/min":{name:{singular:"Pint per minute",plural:"Pints per minute"},to_anchor:4/15},"pnt/h":{name:{singular:"Pint per hour",plural:"Pints per hour"},to_anchor:1/225},"qt/s":{name:{singular:"Quart per second",plural:"Quarts per second"},to_anchor:32},"gal/s":{name:{singular:"Gallon per second",plural:"Gallons per second"},to_anchor:128},"gal/min":{name:{singular:"Gallon per minute",plural:"Gallons per minute"},to_anchor:32/15},"gal/h":{name:{singular:"Gallon per hour",plural:"Gallons per hour"},to_anchor:8/225},"ft3/s":{name:{singular:"Cubic foot per second",plural:"Cubic feet per second"},to_anchor:957.506},"ft3/min":{name:{singular:"Cubic foot per minute",plural:"Cubic feet per minute"},to_anchor:957.506/60},"ft3/h":{name:{singular:"Cubic foot per hour",plural:"Cubic feet per hour"},to_anchor:957.506/3600},"yd3/s":{name:{singular:"Cubic yard per second",plural:"Cubic yards per second"},to_anchor:25852.7},"yd3/min":{name:{singular:"Cubic yard per minute",plural:"Cubic yards per minute"},to_anchor:25852.7/60},"yd3/h":{name:{singular:"Cubic yard per hour",plural:"Cubic yards per hour"},to_anchor:25852.7/3600}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"l/s",ratio:33.8140227},imperial:{unit:"fl-oz/s",ratio:1/33.8140227}}}},I7wR:function(r,e){r.exports=function(r){return"function"==typeof r}},Ijbi:function(r,e,n){var t=n("WkPL");r.exports=function(r){if(Array.isArray(r))return t(r)}},KjoV:function(r,e,n){var t=n("X1gz"),a=n("xQ8M"),o=n("OW9J"),i=[].push;r.exports=function(r){var e=r[0],n=r[2],l=r[4];function u(){if(n){var r=n.slice();i.apply(r,arguments)}if(this instanceof u){var o=t(e.prototype),s=e.apply(o,r||arguments);return a(s)?s:o}return e.apply(l,r||arguments)}return o(u,r),u}},"LV+z":function(r,e){var n;n={A:{name:{singular:"Ampere",plural:"Amperes"},to_anchor:1},mA:{name:{singular:"Milliampere",plural:"Milliamperes"},to_anchor:.001},kA:{name:{singular:"Kiloampere",plural:"Kiloamperes"},to_anchor:1e3}},r.exports={metric:n,_anchors:{metric:{unit:"A",ratio:1}}}},NTw3:function(r,e){var n;n={rad:{name:{singular:"radian",plural:"radians"},to_anchor:180/Math.PI},deg:{name:{singular:"degree",plural:"degrees"},to_anchor:1},grad:{name:{singular:"gradian",plural:"gradians"},to_anchor:.9},arcmin:{name:{singular:"arcminute",plural:"arcminutes"},to_anchor:1/60},arcsec:{name:{singular:"arcsecond",plural:"arcseconds"},to_anchor:1/3600}},r.exports={metric:n,_anchors:{metric:{unit:"deg",ratio:1}}}},Nsbk:function(r,e){function n(e){return r.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(r){return r.__proto__||Object.getPrototypeOf(r)},n(e)}r.exports=n},OMCP:function(r,e){var n,t;n={b:{name:{singular:"Bit",plural:"Bits"},to_anchor:1},Kb:{name:{singular:"Kilobit",plural:"Kilobits"},to_anchor:1024},Mb:{name:{singular:"Megabit",plural:"Megabits"},to_anchor:1048576},Gb:{name:{singular:"Gigabit",plural:"Gigabits"},to_anchor:1073741824},Tb:{name:{singular:"Terabit",plural:"Terabits"},to_anchor:1099511627776}},t={B:{name:{singular:"Byte",plural:"Bytes"},to_anchor:1},KB:{name:{singular:"Kilobyte",plural:"Kilobytes"},to_anchor:1024},MB:{name:{singular:"Megabyte",plural:"Megabytes"},to_anchor:1048576},GB:{name:{singular:"Gigabyte",plural:"Gigabytes"},to_anchor:1073741824},TB:{name:{singular:"Terabyte",plural:"Terabytes"},to_anchor:1099511627776}},r.exports={bits:n,bytes:t,_anchors:{bits:{unit:"b",ratio:1/8},bytes:{unit:"B",ratio:8}}}},OW9J:function(r,e,n){var t=n("uSk6"),a=n("3KVt"),o={configurable:!1,enumerable:!1,value:null,writable:!1},i=function(){try{var r={},e=a.test(e=Object.defineProperty)&&e,n=e(r,r,r)&&e}catch(t){}return n}(),l=i?function(r,e){o.value=e,i(r,"__bindData__",o)}:t;r.exports=l},PJYZ:function(r,e){r.exports=function(r){if(void 0===r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}},PzR9:function(r,e){r.exports=function(r){return r}},QIaD:function(r,e){var n;n={W:{name:{singular:"Watt",plural:"Watts"},to_anchor:1},mW:{name:{singular:"Milliwatt",plural:"Milliwatts"},to_anchor:.001},kW:{name:{singular:"Kilowatt",plural:"Kilowatts"},to_anchor:1e3},MW:{name:{singular:"Megawatt",plural:"Megawatts"},to_anchor:1e6},GW:{name:{singular:"Gigawatt",plural:"Gigawatts"},to_anchor:1e9}},r.exports={metric:n,_anchors:{metric:{unit:"W",ratio:1}}}},Qetd:function(r,e,n){"use strict";var t=Object.assign.bind(Object);r.exports=t,r.exports.default=r.exports},RIqP:function(r,e,n){var t=n("Ijbi"),a=n("EbDI"),o=n("ZhPi"),i=n("Bnag");r.exports=function(r){return t(r)||a(r)||o(r)||i()}},RP9p:function(r,e,n){var t=n("6+oW"),a=Object.prototype.hasOwnProperty;r.exports=function(r){var e,n=r,o=[];if(!n)return o;if(!t[typeof r])return o;for(e in n)a.call(n,e)&&o.push(e);return o}},SQlf:function(r,e,n){"use strict";n.r(e);var t=n("nKUr");function a(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}function o(r,e){return function(r){if(Array.isArray(r))return r}(r)||function(r,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(r)){var n=[],t=!0,a=!1,o=void 0;try{for(var i,l=r[Symbol.iterator]();!(t=(i=l.next()).done)&&(n.push(i.value),!e||n.length!==e);t=!0);}catch(u){a=!0,o=u}finally{try{t||null==l.return||l.return()}finally{if(a)throw o}}return n}}(r,e)||function(r,e){if(r){if("string"===typeof r)return a(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?a(r,e):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var i=n("q1tI"),l=n.n(i),u=n("g4pe"),s=n.n(u),c=n("qpxp"),p=n.n(c),m=n("cKqk"),h=n.n(m),f=["g","Tbs","oz"],g=["g","fl-oz","cup"],d={g:"g",Tbs:"tbsp",oz:"oz",cup:"cups","fl-oz":"fl oz"};function _(r,e){var n=r.findIndex((function(r){return r===e}))+1;return r[n>r.length-1?0:n]}var b=p()().possibilities("mass");function v(r,e,n,t){var a=p()(r).from(e);if(a.possibilities().includes(n))return a.to(n);var o,i,l=b.includes(e);return"water"===t?(i=a.to(l?"g":"ml"),o=l?"ml":"g"):(i=a.to(l?"g":"Tbs"),i=l?i/5:5*i,o=l?"Tbs":"g"),p()(i).from(o).to(n)}e.default=function(){var r=o(l.a.useState("g"),2),e=r[0],n=r[1],a=o(l.a.useState("g"),2),i=a[0],u=a[1],c=o(l.a.useState(30),2),p=c[0],m=c[1],b=o(l.a.useState(500),2),y=b[0],x=b[1],M=l.a.useCallback((function(r){var n=Number(r.target.value),t=v(n,i,"g","water"),a=v(Math.round(t/17),"g",e,"beans");x(n),m(a)}),[e,i]),w=l.a.useCallback((function(r){var n=Number(r.target.value),t=v(n,e,"g","beans"),a=v(Math.round(17*t),"g",i,"water");m(n),x(a)}),[e,i]),C=l.a.useCallback((function(){var r=_(f,e),t=v(p,e,r,"beans");n(r),m(t)}),[p,e]),k=l.a.useCallback((function(){var r=_(g,i),e=v(y,i,r,"water");u(r),x(e)}),[y,i]);return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)(s.a,{children:[Object(t.jsx)("title",{children:"Brew Ratio"}),Object(t.jsx)("link",{rel:"icon",href:"/brew-ratio/favicon.ico"},"favicon.ico"),Object(t.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/brew-ratio/apple-touch-icon.png"}),Object(t.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/brew-ratio/favicon-32x32.png"}),Object(t.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/brew-ratio/favicon-16x16.png"}),Object(t.jsx)("link",{rel:"manifest",href:"/brew-ratio/site.webmanifest"}),Object(t.jsx)("link",{rel:"mask-icon",href:"/brew-ratio/safari-pinned-tab.svg",color:"#5bbad5"}),Object(t.jsx)("meta",{name:"msapplication-TileColor",content:"#00aba9"}),Object(t.jsx)("meta",{name:"theme-color",content:"#ffffff"})]}),Object(t.jsxs)("main",{className:h.a.page,children:[Object(t.jsxs)("div",{className:h.a.pageIntro,children:[Object(t.jsx)("h1",{className:h.a.pageTitle,children:"Brew Ratio"}),Object(t.jsx)("p",{className:h.a.description,children:"Calculate the beans or water you need to make a good cup of coffee."})]}),Object(t.jsxs)("div",{className:h.a.calculator,children:[Object(t.jsxs)("div",{className:h.a.unit,children:[Object(t.jsx)("label",{className:h.a.label,children:"Beans"}),Object(t.jsxs)("div",{className:h.a.inputContainer,children:[Object(t.jsx)("input",{className:h.a.numberInput,type:"number",min:1,value:Number(p.toFixed(2)),onChange:w}),Object(t.jsx)("button",{type:"button",className:h.a.unitSpinner,onClick:C,children:d[e]})]})]}),Object(t.jsxs)("div",{className:h.a.unit,children:[Object(t.jsx)("label",{className:h.a.label,children:"Water"}),Object(t.jsxs)("div",{className:h.a.inputContainer,children:[Object(t.jsx)("input",{className:h.a.numberInput,type:"number",min:1,value:Number(y.toFixed(2)),onChange:M}),Object(t.jsx)("button",{type:"button",className:h.a.unitSpinner,onClick:k,children:d[i]})]})]})]})]})]})}},SksO:function(r,e){function n(e,t){return r.exports=n=Object.setPrototypeOf||function(r,e){return r.__proto__=e,r},n(e,t)}r.exports=n},Vffc:function(r,e){var n,t;n={"m/s":{name:{singular:"Metre per second",plural:"Metres per second"},to_anchor:3.6},"km/h":{name:{singular:"Kilometre per hour",plural:"Kilometres per hour"},to_anchor:1}},t={"m/h":{name:{singular:"Mile per hour",plural:"Miles per hour"},to_anchor:1},knot:{name:{singular:"Knot",plural:"Knots"},to_anchor:1.150779},"ft/s":{name:{singular:"Foot per second",plural:"Feet per second"},to_anchor:.681818}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"km/h",ratio:1/1.609344},imperial:{unit:"m/h",ratio:1.609344}}}},W8MJ:function(r,e){function n(r,e){for(var n=0;n<e.length;n++){var t=e[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}r.exports=function(r,e,t){return e&&n(r.prototype,e),t&&n(r,t),r}},WYGQ:function(r,e){var n;n={ns:{name:{singular:"Nanosecond",plural:"Nanoseconds"},to_anchor:1e-9},mu:{name:{singular:"Microsecond",plural:"Microseconds"},to_anchor:1e-6},ms:{name:{singular:"Millisecond",plural:"Milliseconds"},to_anchor:.001},s:{name:{singular:"Second",plural:"Seconds"},to_anchor:1},min:{name:{singular:"Minute",plural:"Minutes"},to_anchor:60},h:{name:{singular:"Hour",plural:"Hours"},to_anchor:3600},d:{name:{singular:"Day",plural:"Days"},to_anchor:86400},week:{name:{singular:"Week",plural:"Weeks"},to_anchor:604800},month:{name:{singular:"Month",plural:"Months"},to_anchor:2629800},year:{name:{singular:"Year",plural:"Years"},to_anchor:31557600}},r.exports={metric:n,_anchors:{metric:{unit:"s",ratio:1}}}},WkPL:function(r,e){r.exports=function(r,e){(null==e||e>r.length)&&(e=r.length);for(var n=0,t=new Array(e);n<e;n++)t[n]=r[n];return t}},X1gz:function(r,e,n){(function(e){var t=n("xQ8M"),a=(n("uSk6"),n("3KVt").test(a=Object.create)&&a);function o(r,e){return t(r)?a(r):{}}a||(o=function(){function r(){}return function(n){if(t(n)){r.prototype=n;var a=new r;r.prototype=null}return a||e.Object()}}()),r.exports=o}).call(this,n("ntbh"))},XX6O:function(r,e){var n;n={ppm:{name:{singular:"Part-per Million",plural:"Parts-per Million"},to_anchor:1},ppb:{name:{singular:"Part-per Billion",plural:"Parts-per Billion"},to_anchor:.001},ppt:{name:{singular:"Part-per Trillion",plural:"Parts-per Trillion"},to_anchor:1e-6},ppq:{name:{singular:"Part-per Quadrillion",plural:"Parts-per Quadrillion"},to_anchor:1e-9}},r.exports={metric:n,imperial:{},_anchors:{metric:{unit:"ppm",ratio:1e-6}}}},Xuae:function(r,e,n){"use strict";var t=n("RIqP"),a=n("lwsE"),o=n("W8MJ"),i=(n("PJYZ"),n("7W2i")),l=n("a1gu"),u=n("Nsbk");function s(r){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(r){return!1}}();return function(){var n,t=u(r);if(e){var a=u(this).constructor;n=Reflect.construct(t,arguments,a)}else n=t.apply(this,arguments);return l(this,n)}}e.__esModule=!0,e.default=void 0;var c=n("q1tI"),p=function(r){i(n,r);var e=s(n);function n(r){var o;return a(this,n),(o=e.call(this,r))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(t(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(c.Component);e.default=p},YZT1:function(r,e){r.exports=function(r,e,n){e||(e=0),"undefined"==typeof n&&(n=r?r.length:0);for(var t=-1,a=n-e||0,o=Array(a<0?0:a);++t<a;)o[t]=r[e+t];return o}},ZhPi:function(r,e,n){var t=n("WkPL");r.exports=function(r,e){if(r){if("string"===typeof r)return t(r,e);var n=Object.prototype.toString.call(r).slice(8,-1);return"Object"===n&&r.constructor&&(n=r.constructor.name),"Map"===n||"Set"===n?Array.from(r):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?t(r,e):void 0}}},a1gu:function(r,e,n){var t=n("cDf5"),a=n("PJYZ");r.exports=function(r,e){return!e||"object"!==t(e)&&"function"!==typeof e?a(r):e}},aO6L:function(r,e){var n,t;n={Pa:{name:{singular:"pascal",plural:"pascals"},to_anchor:.001},kPa:{name:{singular:"kilopascal",plural:"kilopascals"},to_anchor:1},MPa:{name:{singular:"megapascal",plural:"megapascals"},to_anchor:1e3},hPa:{name:{singular:"hectopascal",plural:"hectopascals"},to_anchor:.1},bar:{name:{singular:"bar",plural:"bar"},to_anchor:100},torr:{name:{singular:"torr",plural:"torr"},to_anchor:101325/76e4}},t={psi:{name:{singular:"pound per square inch",plural:"pounds per square inch"},to_anchor:.001},ksi:{name:{singular:"kilopound per square inch",plural:"kilopound per square inch"},to_anchor:1}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"kPa",ratio:.00014503768078},imperial:{unit:"psi",ratio:6894.76000045014}}}},"bv+k":function(r,e){var n,t;n={C:{name:{singular:"degree Celsius",plural:"degrees Celsius"},to_anchor:1,anchor_shift:0},K:{name:{singular:"degree Kelvin",plural:"degrees Kelvin"},to_anchor:1,anchor_shift:273.15}},t={F:{name:{singular:"degree Fahrenheit",plural:"degrees Fahrenheit"},to_anchor:1},R:{name:{singular:"degree Rankine",plural:"degrees Rankine"},to_anchor:1,anchor_shift:459.67}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"C",transform:function(r){return r/(5/9)+32}},imperial:{unit:"F",transform:function(r){return 5/9*(r-32)}}}}},cDf5:function(r,e){function n(e){return"function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?r.exports=n=function(r){return typeof r}:r.exports=n=function(r){return r&&"function"===typeof Symbol&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},n(e)}r.exports=n},"cH/A":function(r,e){var n,t;n={lx:{name:{singular:"Lux",plural:"Lux"},to_anchor:1}},t={"ft-cd":{name:{singular:"Foot-candle",plural:"Foot-candles"},to_anchor:1}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"lx",ratio:1/10.76391},imperial:{unit:"ft-cd",ratio:10.76391}}}},cKqk:function(r,e,n){r.exports={page:"BrewRatio_page__1Mjwx",pageIntro:"BrewRatio_pageIntro__39tiG",pageTitle:"BrewRatio_pageTitle__1qv7_",description:"BrewRatio_description__1Mwym",calculator:"BrewRatio_calculator__2TyIP",unit:"BrewRatio_unit__3pGx2",inputContainer:"BrewRatio_inputContainer__3cb7D",numberInput:"BrewRatio_numberInput__3oi0P",label:"BrewRatio_label__1FjXK",unitSpinner:"BrewRatio_unitSpinner__35PaB"}},e8j1:function(r,e){var n,t;n={mm:{name:{singular:"Millimeter",plural:"Millimeters"},to_anchor:.001},cm:{name:{singular:"Centimeter",plural:"Centimeters"},to_anchor:.01},m:{name:{singular:"Meter",plural:"Meters"},to_anchor:1},km:{name:{singular:"Kilometer",plural:"Kilometers"},to_anchor:1e3}},t={in:{name:{singular:"Inch",plural:"Inches"},to_anchor:1/12},yd:{name:{singular:"Yard",plural:"Yards"},to_anchor:3},"ft-us":{name:{singular:"US Survey Foot",plural:"US Survey Feet"},to_anchor:1.000002},ft:{name:{singular:"Foot",plural:"Feet"},to_anchor:1},mi:{name:{singular:"Mile",plural:"Miles"},to_anchor:5280}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"m",ratio:3.28084},imperial:{unit:"ft",ratio:1/3.28084}}}},"fL/t":function(r,e,n){var t=n("KjoV"),a=n("9N93"),o=n("I7wR"),i=[].push;r.exports=function r(e,n,l,u,s,c){var p=1&n,m=4&n,h=16&n,f=32&n;if(!(2&n)&&!o(e))throw new TypeError;h&&!l.length&&(n&=-17,h=l=!1),f&&!u.length&&(n&=-33,f=u=!1);var g=e&&e.__bindData__;return g&&!0!==g?(g=g.slice(),!p||1&g[1]||(g[4]=s),!p&&1&g[1]&&(n|=8),!m||4&g[1]||(g[5]=c),h&&i.apply(g[2]||(g[2]=[]),l),f&&i.apply(g[3]||(g[3]=[]),u),g[1]|=n,r.apply(null,g)):(1==n||17===n?t:a)([e,n,l,u,s,c])}},g3rt:function(r,e){var n,t;n={"min/km":{name:{singular:"Minute per kilometre",plural:"Minutes per kilometre"},to_anchor:.06},"s/m":{name:{singular:"Second per metre",plural:"Seconds per metre"},to_anchor:1}},t={"min/mi":{name:{singular:"Minute per mile",plural:"Minutes per mile"},to_anchor:.0113636},"s/ft":{name:{singular:"Second per foot",plural:"Seconds per foot"},to_anchor:1}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"s/m",ratio:.3048},imperial:{unit:"s/ft",ratio:1/.3048}}}},g4pe:function(r,e,n){r.exports=n("8Kt/")},gKgP:function(r,e){var n;n={ea:{name:{singular:"Each",plural:"Each"},to_anchor:1},dz:{name:{singular:"Dozen",plural:"Dozens"},to_anchor:12}},r.exports={metric:n,imperial:{},_anchors:{metric:{unit:"ea",ratio:1}}}},lSNA:function(r,e){r.exports=function(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}},lwAK:function(r,e,n){"use strict";var t;e.__esModule=!0,e.AmpStateContext=void 0;var a=((t=n("q1tI"))&&t.__esModule?t:{default:t}).default.createContext({});e.AmpStateContext=a},lwsE:function(r,e){r.exports=function(r,e){if(!(r instanceof e))throw new TypeError("Cannot call a class as a function")}},nOnp:function(r,e){var n,t;n={mm2:{name:{singular:"Square Millimeter",plural:"Square Millimeters"},to_anchor:1e-6},cm2:{name:{singular:"Centimeter",plural:"Centimeters"},to_anchor:1e-4},m2:{name:{singular:"Square Meter",plural:"Square Meters"},to_anchor:1},ha:{name:{singular:"Hectare",plural:"Hectares"},to_anchor:1e4},km2:{name:{singular:"Square Kilometer",plural:"Square Kilometers"},to_anchor:1e6}},t={in2:{name:{singular:"Square Inch",plural:"Square Inches"},to_anchor:1/144},yd2:{name:{singular:"Square Yard",plural:"Square Yards"},to_anchor:9},ft2:{name:{singular:"Square Foot",plural:"Square Feet"},to_anchor:1},ac:{name:{singular:"Acre",plural:"Acres"},to_anchor:43560},mi2:{name:{singular:"Square Mile",plural:"Square Miles"},to_anchor:27878400}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"m2",ratio:10.7639},imperial:{unit:"ft2",ratio:1/10.7639}}}},ntbh:function(r,e){(function(e){r.exports=function(){var r={149:function(r){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(n){"object"===typeof window&&(e=window)}r.exports=e}},n={};function t(e){if(n[e])return n[e].exports;var a=n[e]={exports:{}},o=!0;try{r[e](a,a.exports,t),o=!1}finally{o&&delete n[e]}return a.exports}return t.ab=e+"/",t(149)}()}).call(this,"/")},qm8e:function(r,e,n){var t=n("1Kn6"),a=n("w/2C");r.exports=function(r,e,n){var o=-1,i=r?r.length:0;if(e=e&&"undefined"==typeof n?e:t(e,n,3),"number"==typeof i)for(;++o<i&&!1!==e(r[o],o,r););else a(r,e);return r}},qpxp:function(r,e,n){var t,a,o=n("vBWn"),i=n("qm8e"),l={length:n("e8j1"),area:n("nOnp"),mass:n("zL29"),volume:n("4CAg"),each:n("gKgP"),temperature:n("bv+k"),time:n("WYGQ"),digital:n("OMCP"),partsPer:n("XX6O"),speed:n("Vffc"),pace:n("g3rt"),pressure:n("aO6L"),current:n("LV+z"),voltage:n("DGMt"),power:n("QIaD"),reactivePower:n("t3v8"),apparentPower:n("1C7C"),energy:n("D3n+"),reactiveEnergy:n("Gl+c"),volumeFlowRate:n("HIRa"),illuminance:n("cH/A"),frequency:n("tV9T"),angle:n("NTw3")};(a=function(r,e){this.val=e?r/e:r}).prototype.from=function(r){if(this.destination)throw new Error(".from must be called before .to");return this.origin=this.getUnit(r),this.origin||this.throwUnsupportedUnitError(r),this},a.prototype.to=function(r){if(!this.origin)throw new Error(".to must be called after .from");var e,n;if(this.destination=this.getUnit(r),this.destination||this.throwUnsupportedUnitError(r),this.origin.abbr===this.destination.abbr)return this.val;if(this.destination.measure!=this.origin.measure)throw new Error("Cannot convert incompatible measures of "+this.destination.measure+" and "+this.origin.measure);return e=this.val*this.origin.unit.to_anchor,this.origin.unit.anchor_shift&&(e-=this.origin.unit.anchor_shift),this.origin.system!=this.destination.system&&("function"===typeof(n=l[this.origin.measure]._anchors[this.origin.system].transform)?e=n(e):e*=l[this.origin.measure]._anchors[this.origin.system].ratio),this.destination.unit.anchor_shift&&(e+=this.destination.unit.anchor_shift),e/this.destination.unit.to_anchor},a.prototype.toBest=function(r){if(!this.origin)throw new Error(".toBest must be called after .from");var e;r=Object.assign({exclude:[],cutOffNumber:1},r);return i(this.possibilities(),function(n){var t=this.describe(n);if(-1===r.exclude.indexOf(n)&&t.system===this.origin.system){var a=this.to(n);(!e||a>=r.cutOffNumber&&a<e.val)&&(e={val:a,unit:n,singular:t.singular,plural:t.plural})}}.bind(this)),e},a.prototype.getUnit=function(r){var e;return i(l,(function(n,t){if(i(n,(function(n,a){return"_anchors"!=a&&(i(n,(function(n,o){if(o==r)return e={abbr:r,measure:t,system:a,unit:n},!1})),!e&&void 0)})),e)return!1})),e};var u=function(r){return{abbr:r.abbr,measure:r.measure,system:r.system,singular:r.unit.name.singular,plural:r.unit.name.plural}};a.prototype.describe=function(r){var e=a.prototype.getUnit(r),n=null;try{n=u(e)}catch(t){this.throwUnsupportedUnitError(r)}return n},a.prototype.list=function(r){var e=[];return i(l,(function(n,t){r&&r!==t||i(n,(function(r,n){if("_anchors"==n)return!1;i(r,(function(r,a){e=e.concat(u({abbr:a,measure:t,system:n,unit:r}))}))}))})),e},a.prototype.throwUnsupportedUnitError=function(r){var e=[];throw i(l,(function(r,n){i(r,(function(r,n){if("_anchors"==n)return!1;e=e.concat(o(r))}))})),new Error("Unsupported unit "+r+", use one of: "+e.join(", "))},a.prototype.possibilities=function(r){var e=[];return this.origin||r?(r=r||this.origin.measure,i(l[r],(function(r,n){if("_anchors"==n)return!1;e=e.concat(o(r))}))):i(o(l),(function(r){i(l[r],(function(r,n){if("_anchors"==n)return!1;e=e.concat(o(r))}))})),e},a.prototype.measures=function(){return o(l)},t=function(r){return new a(r)},r.exports=t},t3v8:function(r,e){var n;n={VAR:{name:{singular:"Volt-Ampere Reactive",plural:"Volt-Amperes Reactive"},to_anchor:1},mVAR:{name:{singular:"Millivolt-Ampere Reactive",plural:"Millivolt-Amperes Reactive"},to_anchor:.001},kVAR:{name:{singular:"Kilovolt-Ampere Reactive",plural:"Kilovolt-Amperes Reactive"},to_anchor:1e3},MVAR:{name:{singular:"Megavolt-Ampere Reactive",plural:"Megavolt-Amperes Reactive"},to_anchor:1e6},GVAR:{name:{singular:"Gigavolt-Ampere Reactive",plural:"Gigavolt-Amperes Reactive"},to_anchor:1e9}},r.exports={metric:n,_anchors:{metric:{unit:"VAR",ratio:1}}}},tV9T:function(r,e){var n;n={mHz:{name:{singular:"millihertz",plural:"millihertz"},to_anchor:.001},Hz:{name:{singular:"hertz",plural:"hertz"},to_anchor:1},kHz:{name:{singular:"kilohertz",plural:"kilohertz"},to_anchor:1e3},MHz:{name:{singular:"megahertz",plural:"megahertz"},to_anchor:1e6},GHz:{name:{singular:"gigahertz",plural:"gigahertz"},to_anchor:1e9},THz:{name:{singular:"terahertz",plural:"terahertz"},to_anchor:1e12},rpm:{name:{singular:"rotation per minute",plural:"rotations per minute"},to_anchor:1/60},"deg/s":{name:{singular:"degree per second",plural:"degrees per second"},to_anchor:1/360},"rad/s":{name:{singular:"radian per second",plural:"radians per second"},to_anchor:1/(2*Math.PI)}},r.exports={metric:n,_anchors:{frequency:{unit:"hz",ratio:1}}}},uSk6:function(r,e){r.exports=function(){}},vBWn:function(r,e,n){var t=n("xQ8M"),a=n("3KVt"),o=n("RP9p"),i=a.test(i=Object.keys)&&i,l=i?function(r){return t(r)?i(r):[]}:o;r.exports=l},"w/2C":function(r,e,n){var t=n("1Kn6"),a=n("vBWn"),o=n("6+oW");r.exports=function(r,e,n){var i,l=r,u=l;if(!l)return u;if(!o[typeof l])return u;e=e&&"undefined"==typeof n?e:t(e,n,3);for(var s=-1,c=o[typeof l]&&a(l),p=c?c.length:0;++s<p;)if(!1===e(l[i=c[s]],i,r))return u;return u}},xQ8M:function(r,e,n){var t=n("6+oW");r.exports=function(r){return!(!r||!t[typeof r])}},zL29:function(r,e){var n,t;n={mcg:{name:{singular:"Microgram",plural:"Micrograms"},to_anchor:1e-6},mg:{name:{singular:"Milligram",plural:"Milligrams"},to_anchor:.001},g:{name:{singular:"Gram",plural:"Grams"},to_anchor:1},kg:{name:{singular:"Kilogram",plural:"Kilograms"},to_anchor:1e3},mt:{name:{singular:"Metric Tonne",plural:"Metric Tonnes"},to_anchor:1e6}},t={oz:{name:{singular:"Ounce",plural:"Ounces"},to_anchor:1/16},lb:{name:{singular:"Pound",plural:"Pounds"},to_anchor:1},t:{name:{singular:"Ton",plural:"Tons"},to_anchor:2e3}},r.exports={metric:n,imperial:t,_anchors:{metric:{unit:"g",ratio:1/453.592},imperial:{unit:"lb",ratio:453.592}}}}},[["E9IT",0,1]]]);