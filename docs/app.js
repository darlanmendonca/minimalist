!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(a,r,function(t){return e[t]}.bind(null,r));return a},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="./hotsite/app.js")}({"./hotsite/app.js":
/*!************************!*\
  !*** ./hotsite/app.js ***!
  \************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\n__webpack_require__(/*! @webcomponents/custom-elements */ \"./node_modules/@webcomponents/custom-elements/custom-elements.min.js\");\n\n__webpack_require__(/*! ../src/index.js */ \"./src/index.js\");\n\nvar _routerClass = __webpack_require__(/*! ./src/router/router.class.js */ \"./hotsite/src/router/router.class.js\");\n\nvar _routerClass2 = _interopRequireDefault(_routerClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = [{\n  name: 'home',\n  url: '/',\n  templateUrl: 'home.template.html'\n}, {\n  name: 'button',\n  url: '/button',\n  templateUrl: 'button.template.html'\n}, {\n  name: 'inputText',\n  url: '/input-text',\n  templateUrl: 'input-text.template.html'\n}, {\n  name: 'sidenav',\n  url: '/sidenav',\n  templateUrl: 'sidenav.template.html'\n}]; // minimalist-ui\n\nconst router = new _routerClass2.default(routes, window.router);\n\n//# sourceURL=webpack:///./hotsite/app.js?")},"./hotsite/src/router/router.class.js":
/*!********************************************!*\
  !*** ./hotsite/src/router/router.class.js ***!
  \********************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nlet Router = class Router {\n  constructor(routes, rootElement) {\n    this.routes = routes;\n    this.rootElement = rootElement;\n    this.change();\n    window.addEventListener('popstate', () => this.change());\n\n    const interceptLinks = event => {\n      if (event.target.matches('a[href]') && !event.metaKey) {\n        event.preventDefault();\n\n        if (window.location.href !== event.target.href) {\n          window.history.pushState(null, null, event.target.href);\n          this.change();\n        }\n      }\n    };\n\n    document.body.addEventListener('click', interceptLinks, true);\n  }\n\n  change() {\n    // parse window.location.hash\n    // call load(urlHTML)\n    const name = window.location.pathname;\n    this.load(name);\n  }\n\n  load(routeUrl) {\n    // load html\n    // append html to rootElement\n\n    const route = this.routes.find(item => item.url === routeUrl);\n\n    if (!route) return;\n\n    if (route.template) {\n      this.rootElement.innerHTML = route.template;\n      return;\n    }\n\n    fetch(route.templateUrl).then(response => response.text()).then(markup => {\n      route.template = markup;\n      this.rootElement.innerHTML = markup;\n    });\n  }\n};\nexports.default = Router;\n\n//# sourceURL=webpack:///./hotsite/src/router/router.class.js?")},"./node_modules/@webcomponents/custom-elements/custom-elements.min.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@webcomponents/custom-elements/custom-elements.min.js ***!
  \****************************************************************************/
/*! no static exports found */function(module,exports){eval('(function(){\n\'use strict\';var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function g(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\\-.0-9_a-z]*$/.test(b);return!a&&b}function l(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}\nfunction p(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}\nfunction q(b,a,d){d=void 0===d?new Set:d;for(var c=b;c;){if(c.nodeType===Node.ELEMENT_NODE){var e=c;a(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){c=e.import;if(c instanceof Node&&!d.has(c))for(d.add(c),c=c.firstChild;c;c=c.nextSibling)q(c,a,d);c=p(b,e);continue}else if("template"===f){c=p(b,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)q(e,a,d)}c=c.firstChild?c.firstChild:p(b,c)}}function t(b,a,d){b[a]=d};function u(){this.a=new Map;this.f=new Map;this.c=[];this.b=!1}function ba(b,a,d){b.a.set(a,d);b.f.set(d.constructorFunction,d)}function v(b,a){b.b=!0;b.c.push(a)}function w(b,a){b.b&&q(a,function(a){return x(b,a)})}function x(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var d=0;d<b.c.length;d++)b.c[d](a)}}function y(b,a){var d=[];q(a,function(a){return d.push(a)});for(a=0;a<d.length;a++){var c=d[a];1===c.__CE_state?b.connectedCallback(c):z(b,c)}}\nfunction A(b,a){var d=[];q(a,function(a){return d.push(a)});for(a=0;a<d.length;a++){var c=d[a];1===c.__CE_state&&b.disconnectedCallback(c)}}\nfunction B(b,a,d){d=void 0===d?{}:d;var c=d.u||new Set,e=d.h||function(a){return z(b,a)},f=[];q(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var d=a.import;d instanceof Node&&(d.__CE_isImportDocument=!0,d.__CE_hasRegistry=!0);d&&"complete"===d.readyState?d.__CE_documentLoadHandled=!0:a.addEventListener("load",function(){var d=a.import;if(!d.__CE_documentLoadHandled){d.__CE_documentLoadHandled=!0;var f=new Set(c);f.delete(d);B(b,d,{u:f,h:e})}})}else f.push(a)},c);if(b.b)for(a=\n0;a<f.length;a++)x(b,f[a]);for(a=0;a<f.length;a++)e(f[a])}\nfunction z(b,a){if(void 0===a.__CE_state){var d=a.ownerDocument;if(d.defaultView||d.__CE_isImportDocument&&d.__CE_hasRegistry)if(d=b.a.get(a.localName)){d.constructionStack.push(a);var c=d.constructorFunction;try{try{if(new c!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop()}}catch(m){throw a.__CE_state=2,m;}a.__CE_state=1;a.__CE_definition=d;if(d.attributeChangedCallback)for(d=d.observedAttributes,c=0;c<d.length;c++){var e=\nd[c],f=a.getAttribute(e);null!==f&&b.attributeChangedCallback(a,e,null,f,null)}l(a)&&b.connectedCallback(a)}}}u.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};u.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};\nu.prototype.attributeChangedCallback=function(b,a,d,c,e){var f=b.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(a)&&f.attributeChangedCallback.call(b,a,d,c,e)};function C(b){var a=document;this.c=b;this.a=a;this.b=void 0;B(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function D(b){b.b&&b.b.disconnect()}C.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||D(this);for(a=0;a<b.length;a++)for(var d=b[a].addedNodes,c=0;c<d.length;c++)B(this.c,d[c])};function ca(){var b=this;this.b=this.a=void 0;this.c=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function E(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function F(b){this.c=!1;this.a=b;this.j=new Map;this.f=function(a){return a()};this.b=!1;this.i=[];this.o=new C(b)}\nF.prototype.l=function(b,a){var d=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!g(b))throw new SyntaxError("The element name \'"+b+"\' is not valid.");if(this.a.a.get(b))throw Error("A custom element with name \'"+b+"\' has already been defined.");if(this.c)throw Error("A custom element is already being defined.");this.c=!0;try{var c=function(a){var b=e[a];if(void 0!==b&&!(b instanceof Function))throw Error("The \'"+a+"\' callback must be a function.");\nreturn b},e=a.prototype;if(!(e instanceof Object))throw new TypeError("The custom element constructor\'s prototype is not an object.");var f=c("connectedCallback");var m=c("disconnectedCallback");var k=c("adoptedCallback");var h=c("attributeChangedCallback");var n=a.observedAttributes||[]}catch(r){return}finally{this.c=!1}a={localName:b,constructorFunction:a,connectedCallback:f,disconnectedCallback:m,adoptedCallback:k,attributeChangedCallback:h,observedAttributes:n,constructionStack:[]};ba(this.a,\nb,a);this.i.push(a);this.b||(this.b=!0,this.f(function(){return da(d)}))};F.prototype.h=function(b){B(this.a,b)};\nfunction da(b){if(!1!==b.b){b.b=!1;for(var a=b.i,d=[],c=new Map,e=0;e<a.length;e++)c.set(a[e].localName,[]);B(b.a,document,{h:function(a){if(void 0===a.__CE_state){var e=a.localName,f=c.get(e);f?f.push(a):b.a.a.get(e)&&d.push(a)}}});for(e=0;e<d.length;e++)z(b.a,d[e]);for(;0<a.length;){var f=a.shift();e=f.localName;f=c.get(f.localName);for(var m=0;m<f.length;m++)z(b.a,f[m]);(e=b.j.get(e))&&E(e)}}}F.prototype.get=function(b){if(b=this.a.a.get(b))return b.constructorFunction};\nF.prototype.m=function(b){if(!g(b))return Promise.reject(new SyntaxError("\'"+b+"\' is not a valid custom element name."));var a=this.j.get(b);if(a)return a.c;a=new ca;this.j.set(b,a);this.a.a.get(b)&&!this.i.some(function(a){return a.localName===b})&&E(a);return a.c};F.prototype.s=function(b){D(this.o);var a=this.f;this.f=function(d){return b(function(){return a(d)})}};window.CustomElementRegistry=F;F.prototype.define=F.prototype.l;F.prototype.upgrade=F.prototype.h;F.prototype.get=F.prototype.get;\nF.prototype.whenDefined=F.prototype.m;F.prototype.polyfillWrapFlushCallback=F.prototype.s;var G=window.Document.prototype.createElement,H=window.Document.prototype.createElementNS,ea=window.Document.prototype.importNode,fa=window.Document.prototype.prepend,ha=window.Document.prototype.append,ia=window.DocumentFragment.prototype.prepend,ja=window.DocumentFragment.prototype.append,I=window.Node.prototype.cloneNode,J=window.Node.prototype.appendChild,K=window.Node.prototype.insertBefore,L=window.Node.prototype.removeChild,M=window.Node.prototype.replaceChild,N=Object.getOwnPropertyDescriptor(window.Node.prototype,\n"textContent"),O=window.Element.prototype.attachShadow,P=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Q=window.Element.prototype.getAttribute,R=window.Element.prototype.setAttribute,S=window.Element.prototype.removeAttribute,T=window.Element.prototype.getAttributeNS,U=window.Element.prototype.setAttributeNS,ka=window.Element.prototype.removeAttributeNS,la=window.Element.prototype.insertAdjacentElement,ma=window.Element.prototype.insertAdjacentHTML,na=window.Element.prototype.prepend,\noa=window.Element.prototype.append,V=window.Element.prototype.before,pa=window.Element.prototype.after,qa=window.Element.prototype.replaceWith,ra=window.Element.prototype.remove,sa=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),ta=window.HTMLElement.prototype.insertAdjacentElement,ua=window.HTMLElement.prototype.insertAdjacentHTML;var va=new function(){};function wa(){var b=X;window.HTMLElement=function(){function a(){var a=this.constructor,c=b.f.get(a);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var e=c.constructionStack;if(0===e.length)return e=G.call(document,c.localName),Object.setPrototypeOf(e,a.prototype),e.__CE_state=1,e.__CE_definition=c,x(b,e),e;c=e.length-1;var f=e[c];if(f===va)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");\ne[c]=va;Object.setPrototypeOf(f,a.prototype);x(b,f);return f}a.prototype=sa.prototype;Object.defineProperty(a.prototype,"constructor",{writable:!0,configurable:!0,enumerable:!1,value:a});return a}()};function Y(b,a,d){function c(a){return function(d){for(var e=[],c=0;c<arguments.length;++c)e[c]=arguments[c];c=[];for(var f=[],n=0;n<e.length;n++){var r=e[n];r instanceof Element&&l(r)&&f.push(r);if(r instanceof DocumentFragment)for(r=r.firstChild;r;r=r.nextSibling)c.push(r);else c.push(r)}a.apply(this,e);for(e=0;e<f.length;e++)A(b,f[e]);if(l(this))for(e=0;e<c.length;e++)f=c[e],f instanceof Element&&y(b,f)}}void 0!==d.g&&(a.prepend=c(d.g));void 0!==d.append&&(a.append=c(d.append))};function xa(){var b=X;t(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var d=b.a.get(a);if(d)return new d.constructorFunction}a=G.call(this,a);x(b,a);return a});t(Document.prototype,"importNode",function(a,d){a=ea.call(this,a,!!d);this.__CE_hasRegistry?B(b,a):w(b,a);return a});t(Document.prototype,"createElementNS",function(a,d){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var c=b.a.get(d);if(c)return new c.constructorFunction}a=H.call(this,a,\nd);x(b,a);return a});Y(b,Document.prototype,{g:fa,append:ha})};function ya(){function b(b,c){Object.defineProperty(b,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(b){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,b);else{var d=void 0;if(this.firstChild){var e=this.childNodes,k=e.length;if(0<k&&l(this)){d=Array(k);for(var h=0;h<k;h++)d[h]=e[h]}}c.set.call(this,b);if(d)for(b=0;b<d.length;b++)A(a,d[b])}}})}var a=X;t(Node.prototype,"insertBefore",function(b,c){if(b instanceof DocumentFragment){var e=Array.prototype.slice.apply(b.childNodes);\nb=K.call(this,b,c);if(l(this))for(c=0;c<e.length;c++)y(a,e[c]);return b}e=l(b);c=K.call(this,b,c);e&&A(a,b);l(this)&&y(a,b);return c});t(Node.prototype,"appendChild",function(b){if(b instanceof DocumentFragment){var c=Array.prototype.slice.apply(b.childNodes);b=J.call(this,b);if(l(this))for(var e=0;e<c.length;e++)y(a,c[e]);return b}c=l(b);e=J.call(this,b);c&&A(a,b);l(this)&&y(a,b);return e});t(Node.prototype,"cloneNode",function(b){b=I.call(this,!!b);this.ownerDocument.__CE_hasRegistry?B(a,b):w(a,\nb);return b});t(Node.prototype,"removeChild",function(b){var c=l(b),e=L.call(this,b);c&&A(a,b);return e});t(Node.prototype,"replaceChild",function(b,c){if(b instanceof DocumentFragment){var e=Array.prototype.slice.apply(b.childNodes);b=M.call(this,b,c);if(l(this))for(A(a,c),c=0;c<e.length;c++)y(a,e[c]);return b}e=l(b);var f=M.call(this,b,c),d=l(this);d&&A(a,c);e&&A(a,b);d&&y(a,b);return f});N&&N.get?b(Node.prototype,N):v(a,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){for(var b=[],\na=0;a<this.childNodes.length;a++)b.push(this.childNodes[a].textContent);return b.join("")},set:function(b){for(;this.firstChild;)L.call(this,this.firstChild);J.call(this,document.createTextNode(b))}})})};function za(b){function a(a){return function(e){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var k=[],h=0;h<c.length;h++){var n=c[h];n instanceof Element&&l(n)&&k.push(n);if(n instanceof DocumentFragment)for(n=n.firstChild;n;n=n.nextSibling)d.push(n);else d.push(n)}a.apply(this,c);for(c=0;c<k.length;c++)A(b,k[c]);if(l(this))for(c=0;c<d.length;c++)k=d[c],k instanceof Element&&y(b,k)}}var d=Element.prototype;void 0!==V&&(d.before=a(V));void 0!==V&&(d.after=a(pa));void 0!==qa&&\nt(d,"replaceWith",function(a){for(var c=[],d=0;d<arguments.length;++d)c[d]=arguments[d];d=[];for(var m=[],k=0;k<c.length;k++){var h=c[k];h instanceof Element&&l(h)&&m.push(h);if(h instanceof DocumentFragment)for(h=h.firstChild;h;h=h.nextSibling)d.push(h);else d.push(h)}k=l(this);qa.apply(this,c);for(c=0;c<m.length;c++)A(b,m[c]);if(k)for(A(b,this),c=0;c<d.length;c++)m=d[c],m instanceof Element&&y(b,m)});void 0!==ra&&t(d,"remove",function(){var a=l(this);ra.call(this);a&&A(b,this)})};function Aa(){function b(a,b){Object.defineProperty(a,"innerHTML",{enumerable:b.enumerable,configurable:!0,get:b.get,set:function(a){var d=this,e=void 0;l(this)&&(e=[],q(this,function(a){a!==d&&e.push(a)}));b.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var m=e[f];1===m.__CE_state&&c.disconnectedCallback(m)}this.ownerDocument.__CE_hasRegistry?B(c,this):w(c,this);return a}})}function a(a,b){t(a,"insertAdjacentElement",function(a,d){var e=l(d);a=b.call(this,a,d);e&&A(c,d);l(a)&&y(c,d);return a})}\nfunction d(a,b){function d(a,b){for(var d=[];a!==b;a=a.nextSibling)d.push(a);for(b=0;b<d.length;b++)B(c,d[b])}t(a,"insertAdjacentHTML",function(a,c){a=a.toLowerCase();if("beforebegin"===a){var e=this.previousSibling;b.call(this,a,c);d(e||this.parentNode.firstChild,this)}else if("afterbegin"===a)e=this.firstChild,b.call(this,a,c),d(this.firstChild,e);else if("beforeend"===a)e=this.lastChild,b.call(this,a,c),d(e||this.firstChild,null);else if("afterend"===a)e=this.nextSibling,b.call(this,a,c),d(this.nextSibling,\ne);else throw new SyntaxError("The value provided ("+String(a)+") is not one of \'beforebegin\', \'afterbegin\', \'beforeend\', or \'afterend\'.");})}var c=X;O&&t(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=O.call(this,a)});P&&P.get?b(Element.prototype,P):W&&W.get?b(HTMLElement.prototype,W):v(c,function(a){b(a,{enumerable:!0,configurable:!0,get:function(){return I.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName,c=b?this.content:this,d=H.call(document,\nthis.namespaceURI,this.localName);for(d.innerHTML=a;0<c.childNodes.length;)L.call(c,c.childNodes[0]);for(a=b?d.content:d;0<a.childNodes.length;)J.call(c,a.childNodes[0])}})});t(Element.prototype,"setAttribute",function(a,b){if(1!==this.__CE_state)return R.call(this,a,b);var d=Q.call(this,a);R.call(this,a,b);b=Q.call(this,a);c.attributeChangedCallback(this,a,d,b,null)});t(Element.prototype,"setAttributeNS",function(a,b,d){if(1!==this.__CE_state)return U.call(this,a,b,d);var e=T.call(this,a,b);U.call(this,\na,b,d);d=T.call(this,a,b);c.attributeChangedCallback(this,b,e,d,a)});t(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return S.call(this,a);var b=Q.call(this,a);S.call(this,a);null!==b&&c.attributeChangedCallback(this,a,b,null,null)});t(Element.prototype,"removeAttributeNS",function(a,b){if(1!==this.__CE_state)return ka.call(this,a,b);var d=T.call(this,a,b);ka.call(this,a,b);var e=T.call(this,a,b);d!==e&&c.attributeChangedCallback(this,b,d,e,a)});ta?a(HTMLElement.prototype,\nta):la?a(Element.prototype,la):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");ua?d(HTMLElement.prototype,ua):ma?d(Element.prototype,ma):console.warn("Custom Elements: `Element#insertAdjacentHTML` was not patched.");Y(c,Element.prototype,{g:na,append:oa});za(c)};/*\n\n Copyright (c) 2016 The Polymer Project Authors. All rights reserved.\n This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt\n The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt\n The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt\n Code distributed by Google as part of the polymer project is also\n subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt\n*/\nvar Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var X=new u;wa();xa();Y(X,DocumentFragment.prototype,{g:ia,append:ja});ya();Aa();document.__CE_hasRegistry=!0;var customElements=new F(X);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};\n}).call(self);\n\n//# sourceMappingURL=custom-elements.min.js.map\n\n\n//# sourceURL=webpack:///./node_modules/@webcomponents/custom-elements/custom-elements.min.js?')},"./src/_backdrop/backdrop.class.js":
/*!*****************************************!*\
  !*** ./src/_backdrop/backdrop.class.js ***!
  \*****************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nlet Backdrop = class Backdrop {\n  static create() {\n    document.body.classList.add('mn-backdrop');\n  }\n\n  static show() {\n    document.body.classList.add('mn-backdrop-visible');\n  }\n\n  static hide() {\n    document.body.classList.remove('mn-backdrop-visible');\n  }\n};\nexports.default = Backdrop;\n\n//# sourceURL=webpack:///./src/_backdrop/backdrop.class.js?")},"./src/_button/button.component.js":
/*!*****************************************!*\
  !*** ./src/_button/button.component.js ***!
  \*****************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _dec, _dec2, _class, _desc, _value, _class2;\n\nvar _minimalistClass = __webpack_require__(/*! ../minimalist/minimalist.class.js */ \"./src/minimalist/minimalist.class.js\");\n\nvar _minimalistClass2 = _interopRequireDefault(_minimalistClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nlet Button = (_dec = (0, _minimalistClass.component)('mn-button'), _dec2 = (0, _minimalistClass.listen)('click'), _dec(_class = (_class2 = class Button extends _minimalistClass2.default {\n  beforeRender() {\n    this.classList.add('mn-button');\n    this.setAttribute('tabindex', '0');\n  }\n\n  render() {\n    return this.textContent;\n  }\n\n  onClick() {\n    this.blur();\n  }\n}, (_applyDecoratedDescriptor(_class2.prototype, 'onClick', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'onClick'), _class2.prototype)), _class2)) || _class);\nexports.default = Button;\n\n//# sourceURL=webpack:///./src/_button/button.component.js?")},"./src/_input-text/input-text.component.js":
/*!*************************************************!*\
  !*** ./src/_input-text/input-text.component.js ***!
  \*************************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _dec, _dec2, _dec3, _dec4, _dec5, _class, _desc, _value, _class2, _class3, _temp2;\n\nvar _minimalistClass = __webpack_require__(/*! ../minimalist/minimalist.class.js */ \"./src/minimalist/minimalist.class.js\");\n\nvar _minimalistClass2 = _interopRequireDefault(_minimalistClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nlet InputText = (_dec = (0, _minimalistClass.component)('mn-input-text'), _dec2 = (0, _minimalistClass.listen)('focus', 'input'), _dec3 = (0, _minimalistClass.listen)('blur', 'input'), _dec4 = (0, _minimalistClass.listen)('change', 'input'), _dec5 = (0, _minimalistClass.listen)('input', 'input'), _dec(_class = (_class2 = (_temp2 = _class3 = class InputText extends _minimalistClass2.default {\n  constructor(...args) {\n    var _temp;\n\n    return _temp = super(...args), this.validations = {\n      required: () => !this.props.value,\n      pattern: () => {\n        const reg = new RegExp(this.getAttribute('pattern'));\n\n        return this.props.value ? !reg.test(this.props.value) : false;\n      }\n    }, _temp;\n  }\n\n  beforeRender() {\n    this.classList.add('mn-input-text');\n  }\n\n  render(props = {}) {\n    return `\n      <label>${props.label || ''}</label>\n      <input\n        ${(0, _minimalistClass.setAttribute)('placeholder', props.placeholder)}\n        ${(0, _minimalistClass.setAttribute)('value', props.value)}\n        ${(0, _minimalistClass.setAttribute)('name', props.name)}\n        ${(0, _minimalistClass.setAttribute)('disabled', props.disabled)}\n        ${(0, _minimalistClass.setAttribute)('readonly', props.readonly)}\n        ${(0, _minimalistClass.setAttribute)('maxlength', props.maxlength)}\n        ${(0, _minimalistClass.setAttribute)('autocapitalize', props.autocapitalize)}\n        ${(0, _minimalistClass.setAttribute)('autofocus', props.autofocus)}\n        ${(0, _minimalistClass.setAttribute)('pattern', props.pattern)}\n      />\n    `;\n  }\n\n  afterRender() {\n    this.classList.toggle('has-value', Boolean(this.props.value));\n  }\n\n  focus() {\n    this.querySelector('input').focus();\n  }\n\n  onFocus() {\n    this.classList.add('focus');\n  }\n\n  blur() {\n    this.querySelector('input').blur();\n  }\n\n  onBlur(event) {\n    this.classList.remove('focus');\n    this.classList.toggle('has-value', event.target.value);\n  }\n\n  onChange(event) {\n    this.setAttribute('value', event.target.value);\n  }\n\n  validate() {\n    const validations = {};\n\n    // const parentForm = this.closest('mn-form')\n    // const formSubmitted = parentForm && parentForm.classList.contains('submitted')\n\n    // if (!formSubmitted) {\n    //   return\n    // }\n\n    Object.keys(this.validations).forEach(attribute => {\n      const hasAttribute = this.hasAttribute(attribute);\n      const attributeIsInvalid = this.validations[attribute]();\n\n      if (hasAttribute && attributeIsInvalid) {\n        this.classList.add(attribute);\n        validations[attribute] = true;\n      } else {\n        this.classList.remove(attribute);\n      }\n    });\n\n    const isInvalid = Object.values(validations).some(item => item === true);\n\n    isInvalid ? this.classList.add('invalid') : this.classList.remove('invalid');\n\n    return !isInvalid;\n  }\n}, _class3.observedAttributes = ['label', 'placeholder', 'value', 'name', 'disabled', 'readonly', 'maxlength', 'autocapitalize', 'autofocus', 'pattern'], _temp2), (_applyDecoratedDescriptor(_class2.prototype, 'onFocus', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'onFocus'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'onBlur', [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'onBlur'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'onChange', [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'onChange'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'validate', [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'validate'), _class2.prototype)), _class2)) || _class);\nexports.default = InputText;\n\n//# sourceURL=webpack:///./src/_input-text/input-text.component.js?")},"./src/_sidenav/sidenav.component.js":
/*!*******************************************!*\
  !*** ./src/_sidenav/sidenav.component.js ***!
  \*******************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _dec, _dec2, _dec3, _dec4, _class, _desc, _value, _class2;\n\nvar _minimalistClass = __webpack_require__(/*! ../minimalist/minimalist.class.js */ \"./src/minimalist/minimalist.class.js\");\n\nvar _minimalistClass2 = _interopRequireDefault(_minimalistClass);\n\nvar _backdropClass = __webpack_require__(/*! ../_backdrop/backdrop.class.js */ \"./src/_backdrop/backdrop.class.js\");\n\nvar _backdropClass2 = _interopRequireDefault(_backdropClass);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {\n  var desc = {};\n  Object['ke' + 'ys'](descriptor).forEach(function (key) {\n    desc[key] = descriptor[key];\n  });\n  desc.enumerable = !!desc.enumerable;\n  desc.configurable = !!desc.configurable;\n\n  if ('value' in desc || desc.initializer) {\n    desc.writable = true;\n  }\n\n  desc = decorators.slice().reverse().reduce(function (desc, decorator) {\n    return decorator(target, property, desc) || desc;\n  }, desc);\n\n  if (context && desc.initializer !== void 0) {\n    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;\n    desc.initializer = undefined;\n  }\n\n  if (desc.initializer === void 0) {\n    Object['define' + 'Property'](target, property, desc);\n    desc = null;\n  }\n\n  return desc;\n}\n\nlet Sidenav = (_dec = (0, _minimalistClass.component)('mn-sidenav'), _dec2 = (0, _minimalistClass.listen)('click', '[show-sidenav]', false), _dec3 = (0, _minimalistClass.keydown)('Escape'), _dec4 = (0, _minimalistClass.listen)('click', '[hide-sidenav]', false), _dec(_class = (_class2 = class Sidenav extends _minimalistClass2.default {\n  beforeRender() {\n    this.classList.add('mn-sidenav');\n    this.classList.add('mn-section');\n    _backdropClass2.default.create();\n  }\n\n  render() {\n    return this.innerHTML;\n  }\n\n  show(event) {\n    let id;\n\n    if (event) {\n      event.stopPropagation();\n      id = event.target.getAttribute('show-sidenav');\n    }\n\n    if (!event || this.id === id && window[id]) {\n      this.classList.add('visible');\n      this.scrollTop = 0;\n      document.body.classList.add('mn-sidenav-visible');\n      _backdropClass2.default.show();\n      this.dispatchEvent(new Event('show'));\n    }\n  }\n\n  hide() {\n    document.body.classList.remove('mn-sidenav-visible');\n    this.classList.remove('visible');\n    _backdropClass2.default.hide();\n    this.dispatchEvent(new Event('hide'));\n  }\n}, (_applyDecoratedDescriptor(_class2.prototype, 'show', [_dec2], Object.getOwnPropertyDescriptor(_class2.prototype, 'show'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'hide', [_dec3, _dec4], Object.getOwnPropertyDescriptor(_class2.prototype, 'hide'), _class2.prototype)), _class2)) || _class);\nexports.default = Sidenav;\n\n//# sourceURL=webpack:///./src/_sidenav/sidenav.component.js?")},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _inputText = __webpack_require__(/*! ./_input-text/input-text.component */ \"./src/_input-text/input-text.component.js\");\n\nvar _inputText2 = _interopRequireDefault(_inputText);\n\nvar _button = __webpack_require__(/*! ./_button/button.component */ \"./src/_button/button.component.js\");\n\nvar _button2 = _interopRequireDefault(_button);\n\nvar _sidenav = __webpack_require__(/*! ./_sidenav/sidenav.component */ \"./src/_sidenav/sidenav.component.js\");\n\nvar _sidenav2 = _interopRequireDefault(_sidenav);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  InputText: _inputText2.default,\n  Button: _button2.default,\n  Sidenav: _sidenav2.default\n}; // import form from './form/form.class.js'\n// import inputText from './input-text/input-text.class.js'\n// import inputPassword from './input-password/input-password.class.js'\n// import inputEmail from './input-email/input-email.class.js'\n// import inputNumber from './input-number/input-number.class.js'\n// import button from './button/button.class.js'\n\n// import sidenav from './sidenav/sidenav.class.js'\n// import dialog from './dialog/dialog.class.js'\n// import image from './image/image.class.js'\n\n// export default {\n//   form,\n//   inputText,\n//   inputPassword,\n//   inputEmail,\n//   inputNumber,\n//   button,\n//   sidenav,\n//   dialog,\n//   image,\n// }\n\n//# sourceURL=webpack:///./src/index.js?")},"./src/minimalist/minimalist.class.js":
/*!********************************************!*\
  !*** ./src/minimalist/minimalist.class.js ***!
  \********************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _class, _temp;\n\nexports.component = component;\nexports.setAttribute = setAttribute;\nexports.listen = listen;\nexports.keydown = keydown;\nexports.keyup = keyup;\nlet Minimalist = (_temp = _class = class Minimalist extends window.HTMLElement {\n\n  constructor(self) {\n    super(self);\n    this.connected = false;\n  }\n\n  connectedCallback() {\n    this.connected = true;\n    this.beforeRender ? this.beforeRender() : null;\n    this.innerHTML = this.render(this.props);\n    this.setEvents();\n    this.afterRender ? this.afterRender() : null;\n  }\n\n  attributeChangedCallback() {\n    if (!this.connected) {\n      return;\n    }\n\n    this.updateRender();\n  }\n\n  get props() {\n    const attributes = {};\n\n    this.constructor.observedAttributes.forEach(name => {\n      attributes[name] = this.getAttribute(name) || undefined;\n    });\n\n    // const proxy = {\n    //   get: (target, name) => this.getAttribute(name) || '',\n    //   set: (target, name, value) => {\n    //     return value\n    //       ? this.setAttribute(name, String(value))\n    //       : this.removeAttribute(name)\n    //   }\n    // }\n\n    return attributes; //new Proxy(attributes, proxy)\n  }\n\n  updateRender() {\n    const markup = document.createElement('div');\n    markup.innerHTML = this.render(this.props);\n\n    Array.from(this.children).forEach((current, index) => {\n      const newElement = markup.children[index];\n      this.updateNode(current, newElement);\n    });\n  }\n\n  updateNode(current, newElement) {\n    const isAttributeChange = attribute => attribute.value !== current.getAttribute(attribute.name);\n\n    const isTextChange = current.innerHTML === current.textContent && current.textContent !== newElement.textContent;\n\n    if (isTextChange) {\n      current.textContent = newElement.textContent;\n    }\n\n    Array.from(newElement.attributes).filter(isAttributeChange).forEach(attribute => {\n      current.setAttribute(attribute.name, attribute.value);\n    });\n\n    Array.from(current.children).forEach((current, index) => this.updateNode(current, newElement.children[index]));\n  }\n\n  setEvents() {\n    this.events = this.events || [];\n\n    this.events.forEach(statement => {\n      const { event, element, scoped, key } = statement;\n      const method = this[statement.method];\n\n      const elements = element ? scoped ? this.querySelectorAll(element) : document.querySelectorAll(element) : this;\n\n      if (key && event.startsWith('key')) {\n        document.addEventListener(event, evt => {\n          if (evt.code === key) {\n            method.bind(this)(evt);\n          }\n        });\n        return;\n      }\n\n      if (elements.length) {\n        elements.forEach(element => element.addEventListener(event, method.bind(this)));\n      }\n    });\n  }\n}, _class.observedAttributes = [], _temp);\nexports.default = Minimalist;\nfunction component(name) {\n  return (target, method, descriptor) => {\n    window.customElements.define(name, target);\n    return descriptor;\n  };\n}\n\nfunction setAttribute(name, value) {\n  return value ? `${name}=\"${value}\"` : '';\n}\n\nfunction listen(event, element, scoped = true) {\n  return (target, method, descriptor) => {\n    target.events = target.events || [];\n\n    target.events.push({\n      event,\n      element,\n      method,\n      scoped\n    });\n\n    return descriptor;\n  };\n}\n\nfunction keydown(key) {\n  return (target, method, descriptor) => {\n    target.events = target.events || [];\n\n    target.events.push({\n      event: 'keydown',\n      element: undefined,\n      method,\n      scoped: false,\n      key\n    });\n\n    return descriptor;\n  };\n}\n\nfunction keyup(key) {\n  return (target, method, descriptor) => {\n    target.events = target.events || [];\n\n    target.events.push({\n      event: 'keyup',\n      element: undefined,\n      method,\n      scoped: false,\n      key\n    });\n\n    return descriptor;\n  };\n}\n\n//# sourceURL=webpack:///./src/minimalist/minimalist.class.js?")}});