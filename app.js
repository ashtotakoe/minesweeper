(()=>{"use strict";var e={418:(e,n,t)=>{t.d(n,{Z:()=>s});var i=t(537),o=t.n(i),a=t(645),r=t.n(a)()(o());r.push([e.id,"/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}main{display:block}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:rgba(0,0,0,0)}abbr[title]{border-bottom:none;text-decoration:underline;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-0.25em}sup{top:-0.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template{display:none}[hidden]{display:none}","",{version:3,sources:["webpack://./src/assets/styles/normalize.scss"],names:[],mappings:"AAAA,2EAAA,CAUA,KACE,gBAAA,CACA,6BAAA,CAUF,KACE,QAAA,CAOF,KACE,aAAA,CAQF,GACE,aAAA,CACA,cAAA,CAWF,GACE,sBAAA,CACA,QAAA,CACA,gBAAA,CAQF,IACE,+BAAA,CACA,aAAA,CAUF,EACE,8BAAA,CAQF,YACE,kBAAA,CACA,yBAAA,CACA,gCAAA,CAOF,SAEE,kBAAA,CAQF,cAGE,+BAAA,CACA,aAAA,CAOF,MACE,aAAA,CAQF,QAEE,aAAA,CACA,aAAA,CACA,iBAAA,CACA,uBAAA,CAGF,IACE,cAAA,CAGF,IACE,UAAA,CAUF,IACE,iBAAA,CAWF,sCAKE,mBAAA,CACA,cAAA,CACA,gBAAA,CACA,QAAA,CAQF,aAGE,gBAAA,CAQF,cAGE,mBAAA,CAOF,gDAIE,yBAAA,CAOF,wHAIE,iBAAA,CACA,SAAA,CAOF,4GAIE,6BAAA,CAOF,SACE,0BAAA,CAUF,OACE,qBAAA,CACA,aAAA,CACA,aAAA,CACA,cAAA,CACA,SAAA,CACA,kBAAA,CAOF,SACE,uBAAA,CAOF,SACE,aAAA,CAQF,6BAEE,qBAAA,CACA,SAAA,CAOF,kFAEE,WAAA,CAQF,cACE,4BAAA,CACA,mBAAA,CAOF,yCACE,uBAAA,CAQF,6BACE,yBAAA,CACA,YAAA,CAUF,QACE,aAAA,CAOF,QACE,iBAAA,CAUF,SACE,YAAA,CAOF,SACE,YAAA",sourcesContent:["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n\n/* Document\n   ========================================================================== */\n\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\n\nhtml {\n  line-height: 1.15; /* 1 */\n  -webkit-text-size-adjust: 100%; /* 2 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers.\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Render the `main` element consistently in IE.\n */\n\nmain {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * Remove the gray background on active links in IE 10.\n */\n\na {\n  background-color: transparent;\n}\n\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Remove the border on images inside links in IE 10.\n */\n\nimg {\n  border-style: none;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\n[type='button'],\n[type='reset'],\n[type='submit'] {\n  -webkit-appearance: button;\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type='button']::-moz-focus-inner,\n[type='reset']::-moz-focus-inner,\n[type='submit']::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type='button']:-moz-focusring,\n[type='reset']:-moz-focusring,\n[type='submit']:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Correct the padding in Firefox.\n */\n\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  vertical-align: baseline;\n}\n\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n\n[type='checkbox'],\n[type='radio'] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type='number']::-webkit-inner-spin-button,\n[type='number']::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type='search'] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n\n[type='search']::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\n\ndetails {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Misc\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10+.\n */\n\ntemplate {\n  display: none;\n}\n\n/**\n * Add the correct display in IE 10.\n */\n\n[hidden] {\n  display: none;\n}\n"],sourceRoot:""}]);const s=r},750:(e,n,t)=>{t.d(n,{Z:()=>h});var i=t(537),o=t.n(i),a=t(645),r=t.n(a),s=t(667),A=t.n(s),c=new URL(t(622),t.b),d=new URL(t(640),t.b),l=r()(o()),u=A()(c),p=A()(d);l.push([e.id,".popup{position:absolute;top:0;left:0;width:100vw;height:100vh;background-color:rgba(35,37,37,.489);z-index:1;visibility:hidden;display:flex;justify-content:center}.popup.opened{visibility:visible}.popup__block{margin-top:100px;height:31vh;width:50vw;background-color:rgba(255,255,255,.731);position:relative}.popup__heading{text-align:center;font-size:2rem;margin:20px}.popup__controls{height:100px;width:31vw;margin:auto;display:flex;justify-content:space-between}.popup__controls_replay,.popup__controls_theme,.popup__controls_difficulty{height:100%;width:8vw}.popup__controls_difficulty{display:flex;flex-direction:column;justify-content:space-between}.difficulty__item{width:100%;height:33%}.popup__close{position:absolute;top:0;right:0}.controls{position:absolute;top:4px;right:4px;max-width:300px}.controls__item{display:inline-block;margin:0 5px;font-size:1.2rem;background:#fff;border-radius:5%}.header{text-align:center}.header__heading{font-size:2rem;margin:15px}.header__data{font-size:1.1rem}.header__data_item{color:#000;display:inline-block;margin:0 10px;max-width:110px}.template{max-width:330px;border:solid #000 2px;margin:20px auto;padding:5px;gap:2px;display:flex;justify-content:space-between;flex-wrap:wrap}.template.medium{max-width:395px}.template.hard{max-width:475px}.template__item{box-sizing:border-box;width:30px;height:30px;border:#4b4b4b solid 3px;font-weight:600;border-radius:5%;background-color:#adabab;display:inline-block}.template__item.medium{width:23px;height:23px}.template__item.hard{width:17px;height:17px}.bomb{background-image:url("+u+");background-size:cover}.opened{visibility:hidden}.flaged{background-image:url("+p+");background-size:cover}.body.dark{background-color:#2f2f2f}.body.dark .header__heading{color:#fff}.body.dark .header__data_counter,.body.dark .header__data_difficulty{color:#fff}.template.dark{background-color:#000}.dark{background-color:#615d5d;color:#fff}.green{color:#00ab00}.yellow{color:#ff0}.red{color:red}","",{version:3,sources:["webpack://./src/assets/styles/_popup.scss","webpack://./src/assets/styles/style.scss","webpack://./src/assets/styles/_vars.scss"],names:[],mappings:"AAAA,OACE,iBAAA,CACA,KAAA,CACA,MAAA,CACA,WAAA,CACA,YAAA,CACA,oCAAA,CACA,SAAA,CACA,iBAAA,CACA,YAAA,CACA,sBAAA,CAGF,cACE,kBAAA,CAGF,cACE,gBAAA,CACA,WAAA,CACA,UAAA,CACA,uCAAA,CACA,iBAAA,CAGF,gBACE,iBAAA,CACA,cAAA,CACA,WAAA,CAGF,iBACE,YAAA,CACA,UAAA,CACA,WAAA,CACA,YAAA,CACA,6BAAA,CAGF,2EAGE,WAAA,CACA,SAAA,CAGF,4BACE,YAAA,CACA,qBAAA,CACA,6BAAA,CAGF,kBACE,UAAA,CACA,UAAA,CAGF,cACE,iBAAA,CACA,KAAA,CACA,OAAA,CCzDF,UACE,iBAAA,CACA,OAAA,CACA,SAAA,CACA,eAAA,CAEF,gBACE,oBAAA,CACA,YAAA,CACA,gBAAA,CACA,eAAA,CACA,gBAAA,CAEF,QACE,iBAAA,CAGF,iBACE,cAAA,CACA,WAAA,CAGF,cACE,gBAAA,CAGF,mBACE,UAAA,CACA,oBAAA,CACA,aAAA,CACA,eAAA,CAGF,UACE,eAAA,CACA,qBAAA,CACA,gBAAA,CACA,WAAA,CACA,OAAA,CACA,YAAA,CACA,6BAAA,CACA,cAAA,CAGF,iBACE,eAAA,CAGF,eACE,eAAA,CAGF,gBACE,qBAAA,CACA,UCzDiB,CD0DjB,WC1DiB,CD2DjB,wBAAA,CACA,eAAA,CAEA,gBAAA,CACA,wBAAA,CACA,oBAAA,CAGF,uBACE,UCnEmB,CDoEnB,WCpEmB,CDuErB,qBACE,UCvEiB,CDwEjB,WCxEiB,CD2EnB,MACE,wDAAA,CACA,qBAAA,CAGF,QACE,iBAAA,CAGF,QACE,wDAAA,CACA,qBAAA,CAGF,WACE,wBAAA,CACA,4BACE,UAAA,CAEF,qEAEE,UAAA,CAIJ,eACE,qBAAA,CAGF,MACE,wBAAA,CACA,UAAA,CAGF,OACE,aAAA,CAEF,QACE,UAAA,CAEF,KACE,SAAA",sourcesContent:[".popup {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(35, 37, 37, 0.489);\n  z-index: 1;\n  visibility: hidden;\n  display: flex;\n  justify-content: center;\n}\n\n.popup.opened {\n  visibility: visible;\n}\n\n.popup__block {\n  margin-top: 100px;\n  height: 31vh;\n  width: 50vw;\n  background-color: rgba(255, 255, 255, 0.731);\n  position: relative;\n}\n\n.popup__heading {\n  text-align: center;\n  font-size: 2rem;\n  margin: 20px;\n}\n\n.popup__controls {\n  height: 100px;\n  width: 31vw;\n  margin: auto;\n  display: flex;\n  justify-content: space-between;\n}\n\n.popup__controls_replay,\n.popup__controls_theme,\n.popup__controls_difficulty {\n  height: 100%;\n  width: 8vw;\n}\n\n.popup__controls_difficulty {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.difficulty__item {\n  width: 100%;\n  height: 33%;\n}\n\n.popup__close {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n","@import './vars.scss';\n@import './popup';\n\n.controls {\n  position: absolute;\n  top: 4px;\n  right: 4px;\n  max-width: 300px;\n}\n.controls__item {\n  display: inline-block;\n  margin: 0 5px;\n  font-size: 1.2rem;\n  background: #ffffff;\n  border-radius: 5%;\n}\n.header {\n  text-align: center;\n}\n\n.header__heading {\n  font-size: 2rem;\n  margin: 15px;\n}\n\n.header__data {\n  font-size: 1.1rem;\n}\n\n.header__data_item {\n  color: black;\n  display: inline-block;\n  margin: 0 10px;\n  max-width: 110px;\n}\n\n.template {\n  max-width: $square-side-easy * 11;\n  border: solid black 2px;\n  margin: 20px auto;\n  padding: 5px;\n  gap: 2px;\n  display: flex;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.template.medium {\n  max-width: 395px;\n}\n\n.template.hard {\n  max-width: 475px;\n}\n\n.template__item {\n  box-sizing: border-box;\n  width: $square-side-easy;\n  height: $square-side-easy;\n  border: rgb(75, 75, 75) solid 3px;\n  font-weight: 600;\n\n  border-radius: 5%;\n  background-color: rgb(173, 171, 171);\n  display: inline-block;\n}\n\n.template__item.medium {\n  width: $square-side-medium;\n  height: $square-side-medium;\n}\n\n.template__item.hard {\n  width: $square-side-hard;\n  height: $square-side-hard;\n}\n\n.bomb {\n  background-image: url('../images/bomb.webp');\n  background-size: cover;\n}\n\n.opened {\n  visibility: hidden;\n}\n\n.flaged {\n  background-image: url('../images/flag.webp');\n  background-size: cover;\n}\n\n.body.dark {\n  background-color: rgb(47, 47, 47);\n  .header__heading {\n    color: white;\n  }\n  .header__data_counter,\n  .header__data_difficulty {\n    color: white;\n  }\n}\n\n.template.dark {\n  background-color: black;\n}\n\n.dark {\n  background-color: rgb(97, 93, 93);\n  color: white;\n}\n\n.green {\n  color: rgb(0, 171, 0);\n}\n.yellow {\n  color: yellow;\n}\n.red {\n  color: red;\n}\n","$square-side-easy: 30px;\n$square-side-medium: 23px;\n$square-side-hard: 17px;\n"],sourceRoot:""}]);const h=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",i=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),i&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),i&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,i,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var r={};if(i)for(var s=0;s<this.length;s++){var A=this[s][0];null!=A&&(r[A]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);i&&r[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),n.push(d))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},537:e=>{e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),a="/*# ".concat(o," */");return[n].concat([a]).join("\n")}return[n].join("\n")}},379:e=>{var n=[];function t(e){for(var t=-1,i=0;i<n.length;i++)if(n[i].identifier===e){t=i;break}return t}function i(e,i){for(var a={},r=[],s=0;s<e.length;s++){var A=e[s],c=i.base?A[0]+i.base:A[0],d=a[c]||0,l="".concat(c," ").concat(d);a[c]=d+1;var u=t(l),p={css:A[1],media:A[2],sourceMap:A[3],supports:A[4],layer:A[5]};if(-1!==u)n[u].references++,n[u].updater(p);else{var h=o(p,i);i.byIndex=s,n.splice(s,0,{identifier:l,updater:h,references:1})}r.push(l)}return r}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=i(e=e||[],o=o||{});return function(e){e=e||[];for(var r=0;r<a.length;r++){var s=t(a[r]);n[s].references--}for(var A=i(e,o),c=0;c<a.length;c++){var d=t(a[c]);0===n[d].references&&(n[d].updater(),n.splice(d,1))}a=A}}},569:e=>{var n={};e.exports=function(e,t){var i=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var i="";t.supports&&(i+="@supports (".concat(t.supports,") {")),t.media&&(i+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(i+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),i+=t.css,o&&(i+="}"),t.media&&(i+="}"),t.supports&&(i+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(i+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(i,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},622:e=>{e.exports="data:image/webp;base64,UklGRl4IAABXRUJQVlA4TFIIAAAv4AA4AIfBoJEkRXcP/r0e38CuDYUBgDI2/78a2qWwkZTowP6rReWH+Y9SMHNtNOOKjQoSBrhIJyalJwvLXEoFXIwPuKip9AQJYUd4W1/Ji0KFsogVMeztP7BRhZPzTbYiA8hHWTJnA6hZXyjg0icrG9XlAHHzPQ2ErcDbtW1Zm23bpo1JLTZN2kTDCqmpb/Et21b//99jXV0R83IcWzvGHtH/CfBv5sHjHvyH87eo4+Ny9AbTe/efTP+DGL4H0zs+Avi7j1P0fy04EG/EO+twf315A5cYaNbA9b7uobn/2lZ27fhLwPrs2vH968LV5Wtk+aNvx3efrODSju/K+XUel5d73Gff1SASFkMhwg+Pm/M8bje/9qaIWbQ/0xaTvTgXsfeTLa5H16PdQLwE6OJ86cf/eQuYyydW8Lwyw4WtaPnEDdbr9et65Ov+0o+/nBcB+kIMXY927nnswMc7j/viT72MhBBRFAXWAp+7iMLRItx43M7HA2Kke8N1EWKCpQUxPnx3ZvgZtiBa54IQtxc41xKL69Ph7UC8BvgTsVzZ3sZo8kwEKxITmxjfrsjJhrbDrw9/6XOXUSQim2KnlVJKpy9UJCJT4OFG43sR4WIq+zdB2A0xpZ/HjA83Wpl6Hwq7P0xe7g9vBlwR4rtUm6k1sU01GlMh6Zzn3hIPetbrEn8ilis8eOKukxjdrnGxIlnRmhT4JonRXYiI6G1jvu2s9cESd49uWYHPXUX4wue+aWXqTSjwCBdThxutTL0nRIhvrLX+7F0Qpguu2sB/OojHJ0LXFlJtptsZkbfj7fkFfWI9kcsVN1rjkZiJkjG+C29G4E+9jLhiriNIHd8T4jry1G8HIddCyB2hAL9dS+uhYIbbfbwfG8ebkBFu4ng/Nt5vQ2zbNWZbwc1aRbYFa6+5W9ZWc/fEh4e3t0y4Ge61Gm9FjX/I5OMD/1D0xJIVkryQtMG1gVMdtQrN1dv1+SJfn9GXJ0643e/M/ZoTbnZ4orjxjhsrbrLjxgrXeWbmXxlesP5+ke555MLnUrHGeTuNK77mKr7GdyG+0QicPLxPAE1ZI90bplOoFTVvvQuFaaGTypxg+GmGiiTVZkqF5E5zFVifAKcyor9+wRIPFvjyGQ+J7R7fbrifjdW6aTKwpJLdHifSIkczuHphhD/53FWEhHuNb0Ju6tk+W1MaVVqRYEoJ6uo9C3QSZepNKMZPIa1N/Y/f6vrAzftmPTvEXJ3sSQAACTAdkJN9T3fkHgbiOViaQcgSb3gkGGq/w2WKng7v3GNZoNXZrOsMJoK0PqMlTDUcjlyeZz2iWXuNpmuWxqH18Hef+6JBSgmy9PBaTnXy8F5OZZE32BPMUcrUPFLWEygTqDO40jk3/KyQN8Ozx12PwdchvpsR4ATQrD4BU2pnPOqAH9+5bwOxXATjF9H6db1er1+37ETNpT/jOSBwOuMFICqt8PKM19aGomIWB9IjfTa18LmxRtN1iMcaV7OhGyL38JYAXKbe1N8xMBOP/eSQMvVaoGGsLF+BhiDBBcWU90/LOt1/9fyS/4P5DqHpCI27BKa0IMGUGSUBdycGZsL74L5TywB/Ip4jYUaC2Gzx2NrxhRufq7Kqqqpl9WVVlVVVlVVVlWVZlRVeSFeGoqqqshrLsx/ha4peYSIk99pWqblnb+pGgikzD+8TV2YcCTSyR05QgBoP1XSgTKA6+fgk/3JEtya9PxpKAtO9PgFTzuhADs4sAnQxGeRnvCqZRetMesarsirLsqyKM147MxxIn/x2ZhXhgstTgMuz5zqhFJgSTh7eJ4Cmznz77MEhYdcCCTPCR3RSmQ4NPwnkHeFZFyE6RYhbg9o9CTgvAZBSSnc83pF7GIhDjB6WCzxkbchY2crqM9o70+cFmgHnT4FX1obDkcvjfxP0WkS4YIaxxpV1ACmlBHl2hm5Z03/7zg+8UNgNY+UoXL/hZ9hriNsDmgB6PlKCeUO2GzyyBVmOFikgcCpyNAXX/tR1U9d1UxW5WRQ13l6/VKPp2lrr4QXReHjhXJNIAACZeXifAABImd4AUKa21xDZ/ECZI7pEmfB4AO/0QMj/YamHw2NrQPU65FItJcGUY1DpkgRzDACAlOlknntf5F8ix4vtBn//+Pj42H18SKJs8Jw8N3iZ42XDrHvWn7pByyzL8jzPzsQly82stPb3i3SPbgk61ShcPPwEiAIpAQBk4+G5BDM5e3gppYSxsmDVCaC553rrz94CKFN2LHIMKBOoCtR4KHmgTMjuHqitlRx5xzWugL38nxAJZtKPYMoREkxJVRJQQlqQgGa3L8/Mr9O5xYuMeTq3TWuWpww9t3iZ4SkgkLVocyHaU4YWLd7fLjoFAJCQ9B43l2DKxsMLCaY8e3iFKUClLAi6kSABQGb3gDJlx8pAmWNAmcAjwYYy4Q44TQW1K9IC3E2NK/D4yPtN1q7AHdBZSwFNbKCysSeBaUGCKd3p5veZo19/WfkJTS/EpUP74oS31uoT98zqTng52fdXjn7Oj+5Y/FOCNx6Xdz07/+r2k2WgTLgd/c8K+UCABABZWwD0AShTvGWdU7y+/27vr2MBvqgv+HDzhgveLAJ8fhcP1wkaX27eJU5Q7eGX+bUUKDO5AxJlAtVej1TdGeoawT9QGtD7AMwrlGqt0zSVf27en6PWaZrq0/W5X39L6e6ebn5l16IDq29t/53d39Z2zxpatCvnR3eswLf9ObtP33bA6vyr27OW1r5m92Vtyep/aem8YfwkA5c1fOMDMXAnGcZ73fWZ74FVxEkSx3GcEwf/7j+yKlAmlMTxPxcM5vdAlEkipUySwhvMR4A+EPTBfzh/fQM="},640:e=>{e.exports="data:image/webp;base64,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"}},n={};function t(i){var o=n[i];if(void 0!==o)return o.exports;var a=n[i]={id:i,exports:{}};return e[i](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var i in n)t.o(n,i)&&!t.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:n[i]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var i=n.getElementsByTagName("script");if(i.length)for(var o=i.length-1;o>-1&&!e;)e=i[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),i=t(795),o=t.n(i),a=t(569),r=t.n(a),s=t(565),A=t.n(s),c=t(216),d=t.n(c),l=t(589),u=t.n(l),p=t(418),h={};h.styleTagTransform=u(),h.setAttributes=A(),h.insert=r().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=d(),n()(p.Z,h),p.Z&&p.Z.locals&&p.Z.locals;var m=t(750),C={};C.styleTagTransform=u(),C.setAttributes=A(),C.insert=r().bind(null,"head"),C.domAPI=o(),C.insertStyleElement=d(),n()(m.Z,C),m.Z&&m.Z.locals&&m.Z.locals;const f={clickCounter:0,bombIndexes:[],squaresMatrix:[],customSquareCount:0,squareCount:10,difficulty:"easy",isGameOver:!1,openedSquareCount:0,isDarkTheme:!1,isSoundOn:!0};class b{constructor(e,n){this.extraprops=n,this.node=document.createElement(e.tag?e.tag:"div"),Object.assign(this.node,e),e.parent&&e.parent.append(this.node),n&&(n.events&&n.events.forEach((e=>{this.node.addEventListener(e.name,e.callback)})),n.attrs&&Object.keys(n.attrs).forEach((e=>{this.node.setAttribute(e,n.attrs[e])})))}}const g={easy:"template__item",medium:"template__item medium",hard:"template__item hard"},y={easy:"template",medium:"template medium",hard:"template hard"};function x(e){return Math.floor(Math.random()*e**2)}const v={},w={easy:10,medium:15,hard:25},k={seconds:0,tenseconds:0,minutes:0};function E(e,n,t){return e&&Object.assign(k,{seconds:0,tenseconds:0,minutes:0}),t.isGameOver||(k.seconds++,10===k.seconds&&(k.seconds=0,k.tenseconds++),6===k.tenseconds&&(k.minutes++,k.tenseconds=0),Object.assign(n.timer.node,{textContent:`${k.minutes}:${k.tenseconds}${k.seconds}`}),setTimeout((()=>{E(!1,n,t)}),1e3)),null}const B={click:t.p+"assets/button-click1.mp3",start:t.p+"assets/game-start.mp3",defeat:t.p+"assets/mine-explosion.mp3",flag:t.p+"assets/button-click2.mp3"};function F(e,n){if(n.isSoundOn){const n=new Audio;n.src=B[e],n.play()}}function z(e,n){e.classList.toggle(n)}class O extends b{createTemplate(){const{difficulty:e}=f;let n=0;const t=w[e];this.setDefaultValues(t),f.squaresMatrix=Array.from({length:t},((e,i)=>Array.from({length:t},((e,t)=>new b({parent:this.node,className:g[f.difficulty]},{attrs:{"data-id":n++,"data-indexes":`${i}.${t}`},events:[{name:"click",callback:e=>this.clickHandler(e)},{name:"contextmenu",callback:e=>{e.preventDefault(),F("flag",f),z(e.target,"flaged")}}]})))))}setDefaultValues(e){F("start",f),f.clickCounter=0,v.counter.node.textContent="Click count: 0",f.openedSquareCount=0,v.heading.node.textContent="Minesweeper",f.squareCount=e,v.timer.node.textContent="0:00"}addBombs(e){const{customSquareCount:n,squareCount:t,bombIndexes:i}=f,o=n||t**2/10;for(;i.length<o;){const n=x(t);i.includes(n)||Number(e.getAttribute("data-id"))===n||i.push(n)}}clickHandler(e){if(e.target.classList.contains("flaged"))return null;const{bombIndexes:n}=f,[t,i]=e.target.getAttribute("data-indexes").split(".").map((e=>Number(e)));if(0===f.clickCounter&&(this.addBombs(e.target),f.isGameOver=!1,E(!0,v,f)),function(e,n,t){Object.assign(t,{clickCounter:t.clickCounter+1}),""!==e.target.textContent||e.target.classList.contains("flaged")||Object.assign(n.node,{textContent:`Click count: ${t.clickCounter}`})}(e,v.counter,f),n.includes(Number(e.target.getAttribute("data-id"))))return this.displayDefeat(v.heading),null;""===e.target.textContent&&f.openedSquareCount++;const o=[],a=this.surroundingCheck(t,i);return 0===a&&(this.recursiveOpen(t,i,o),f.openedSquareCount+=o.length-1),F("click",f),Object.assign(e.target,{textContent:a}),this.addColor(e.target),this.checkIfWin(),null}addColor(e){const n=Number(e.textContent);return n<2?(e.classList.add("green"),null):n<4?(e.classList.add("yellow"),null):n>6&&n<9?(e.classList.add("red"),null):null}checkIfWin(){f.squareCount**2-f.bombIndexes.length===f.openedSquareCount&&this.displayVictory()}surroundingCheck(e,n){let t=0;return t+=this.squareCheck(e-1,n-1),t+=this.squareCheck(e,n-1),t+=this.squareCheck(e+1,n-1),t+=this.squareCheck(e+1,n),t+=this.squareCheck(e+1,n+1),t+=this.squareCheck(e,n+1),t+=this.squareCheck(e-1,n+1),t+=this.squareCheck(e-1,n),t}squareCheck(e,n){if(this.isIndexesBroken(e,n))return 0;const t=Number(this.getElem(e,n).getAttribute("data-id"));return f.bombIndexes.includes(t)?1:0}recursiveOpen(e,n,t){if(this.isIndexesBroken(e,n))return 0;const i=this.getElem(e,n);return t.includes(i)?null:0===this.surroundingCheck(e,n)?(i.classList.add("opened"),t.push(i),this.recursiveOpen(e-1,n-1,t),this.recursiveOpen(e,n-1,t),this.recursiveOpen(e+1,n-1,t),this.recursiveOpen(e+1,n,t),this.recursiveOpen(e+1,n+1,t),this.recursiveOpen(e,n+1,t),this.recursiveOpen(e-1,n+1,t),this.recursiveOpen(e-1,n,t),null):(t.push(i),Object.assign(i,{textContent:this.surroundingCheck(e,n)}),this.addColor(i),null)}getElem(e,n){return f.squaresMatrix[e][n].node}displayVictory(){F("start",f),Object.assign(v.heading.node,{textContent:"You win!"}),f.isGameOver=!0}displayDefeat(e){const{bombIndexes:n,squaresMatrix:t}=f;return F("defeat",f),f.isGameOver=!0,n.forEach((e=>{t.flat()[e].node.classList.add("bomb")})),Object.assign(e.node,{textContent:"You lost, try again!"}),null}isIndexesBroken(e,n){return e<0||n<0||e>f.squareCount-1||n>f.squareCount-1}}class D extends b{constructor(e,n){super(e,n),this.heading=new b({textContent:"Minesweeper",parent:this.node,className:"header__heading",tag:"h3"}),this.headerData=new b({parent:this.node,className:"header__data"}),this.createHeaderData(),this.setValues()}setCustomMineCount(e){return Number(e.target.value)>9&&Number(e.target.value)<100?(f.customSquareCount=Number(e.target.value),null):(Object.assign(e.target,{value:0}),null)}createHeaderData(){this.setMineCount=new b({parent:this.headerData.node,className:"header__data_item header__data_mines-count",tag:"input"},{events:[{name:"change",callback:this.setCustomMineCount}],attrs:{type:"number",min:10,max:99,value:50}}),this.counter=new b({textContent:"Click count: 0",parent:this.headerData.node,className:"header__data_item header__data_counter",tag:"span"}),this.difficulty=new b({parent:this.headerData.node,className:"header__data_item header__data_difficulty",textContent:`Difficulty: ${f.difficulty}`,tag:"span"})}setValues(){Object.assign(v,{heading:this.heading,setMineCount:this.setMineCount,difficulty:this.difficulty,counter:this.counter})}}function I(e,n,t){let{squaresMatrix:i}=t;const{template:o}=n;return i=i.map((e=>e.map((e=>(e.node.classList.toggle("dark"),e))))),document.body.classList.toggle("dark"),o.node.classList.toggle("dark"),"☼"===e.innerText?(Object.assign(e,{innerText:"☾"}),null):(Object.assign(e,{innerText:"☼"}),null)}function G(){const e=y[f.difficulty];f.bombIndexes=[],f.isGameOver=!0,Object.assign(v.difficulty.node,{textContent:`Difficulty: ${f.difficulty}`});const n=new O({className:e,parent:v.main.node});return n.createTemplate(),v.template.node.replaceWith(n.node),v.template=n,f.isDarkTheme&&(document.body.classList.remove("dark"),I(v.themeBtn,v,f)),n}class H extends b{constructor(e,n){super(e,n),this.popUpBlock=new b({className:"popup__block",parent:this.node}),this.closeBtn=new b({className:"popup__close",parent:this.popUpBlock.node,innerText:"x",tag:"button"},{events:[{name:"click",callback:e=>z(v.popup.node,"opened")}]}),this.createPopupItems(),this.createDifficulty(),this.saveValues()}createPopupItems(){this.heading=new b({className:"popup__heading",parent:this.popUpBlock.node,textContent:"Settings"}),this.controls=new b({className:"popup__controls",parent:this.popUpBlock.node}),this.replayBtn=new b({className:"popup__controls_replay",parent:this.controls.node,innerText:"↻",tag:"button"},{events:[{name:"click",callback:this.replayGame}]}),this.themeBtn=new b({className:"popup__controls_theme",parent:this.controls.node,innerText:"☼",tag:"button"},{events:[{name:"click",callback:()=>{I(this.themeBtn,v,f),f.isDarkTheme=!f.isDarkTheme}}]}),this.difficulty=new b({className:"popup__controls_difficulty",parent:this.controls.node})}saveValues(){Object.assign(v,{themeBtn:this.themeBtn})}changeDifficulty(e){f.difficulty=e.target.textContent,G(),z(v.popup.node,"opened")}createDifficulty(){this.easy=new b({className:"difficulty__item",parent:this.difficulty.node,tag:"button",textContent:"easy"},{events:[{name:"click",callback:this.changeDifficulty}]}),this.medium=new b({className:"difficulty__item",parent:this.difficulty.node,tag:"button",textContent:"medium"},{events:[{name:"click",callback:this.changeDifficulty}]}),this.hard=new b({className:"difficulty__item",parent:this.difficulty.node,tag:"button",textContent:"hard"},{events:[{name:"click",callback:this.changeDifficulty}]})}replayGame(){G(),z(v.popup.node,"opened")}}class T extends b{constructor(e,n){super(e,n),this.timer=new b({parent:this.node,className:"controls__item",tag:"p",textContent:"0:00"}),this.popupButton=new b({parent:this.node,className:"controls__item",tag:"button",innerText:"⚙"},{events:[{name:"click",callback:e=>z(v.popup.node,"opened")}]}),this.volumeButton=new b({parent:this.node,className:"controls__item",tag:"button",textContent:"M"},{events:[{name:"click",callback:this.toggleVolume}]}),Object.assign(v,{timer:this.timer})}toggleVolume(e){f.isSoundOn=!f.isSoundOn,Object.assign(e.target,{textContent:"U"===e.target.textContent?"M":"U"})}}new class{constructor(e){this.popUp=new H({className:"popup",parent:e}),this.controls=new T({className:"controls",parent:e}),this.header=new D({className:"header",parent:e,tag:"header"}),this.main=new b({className:"main",tag:"main",parent:e}),this.template=new O({className:y[f.difficulty],parent:this.main.node}),Object.assign(v,{header:this.header,main:this.main,template:this.template,popup:this.popUp})}init(){this.template.createTemplate()}}(document.body).init()})()})();
//# sourceMappingURL=app.js.map