/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function(){
'use strict';var g=new function(){};var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function k(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function l(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
function m(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
function n(b,a,e){e=e?e:new Set;for(var c=b;c;){if(c.nodeType===Node.ELEMENT_NODE){var d=c;a(d);var h=d.localName;if("link"===h&&"import"===d.getAttribute("rel")){c=d.import;if(c instanceof Node&&!e.has(c))for(e.add(c),c=c.firstChild;c;c=c.nextSibling)n(c,a,e);c=m(b,d);continue}else if("template"===h){c=m(b,d);continue}if(d=d.__CE_shadowRoot)for(d=d.firstChild;d;d=d.nextSibling)n(d,a,e)}c=c.firstChild?c.firstChild:m(b,c)}}function q(b,a,e){b[a]=e};function r(){this.a=new Map;this.m=new Map;this.f=[];this.b=!1}function ba(b,a,e){b.a.set(a,e);b.m.set(e.constructor,e)}function t(b,a){b.b=!0;b.f.push(a)}function v(b,a){b.b&&n(a,function(a){return w(b,a)})}function w(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var e=0;e<b.f.length;e++)b.f[e](a)}}function x(b,a){var e=[];n(a,function(b){return e.push(b)});for(a=0;a<e.length;a++){var c=e[a];1===c.__CE_state?b.connectedCallback(c):y(b,c)}}
function z(b,a){var e=[];n(a,function(b){return e.push(b)});for(a=0;a<e.length;a++){var c=e[a];1===c.__CE_state&&b.disconnectedCallback(c)}}
function A(b,a,e){e=e?e:new Set;var c=[];n(a,function(d){if("link"===d.localName&&"import"===d.getAttribute("rel")){var a=d.import;a instanceof Node&&"complete"===a.readyState?(a.__CE_isImportDocument=!0,a.__CE_hasRegistry=!0):d.addEventListener("load",function(){var a=d.import;a.__CE_documentLoadHandled||(a.__CE_documentLoadHandled=!0,a.__CE_isImportDocument=!0,a.__CE_hasRegistry=!0,e.delete(a),A(b,a,e))})}else c.push(d)},e);if(b.b)for(a=0;a<c.length;a++)w(b,c[a]);for(a=0;a<c.length;a++)y(b,c[a])}
function y(b,a){if(void 0===a.__CE_state){var e=b.a.get(a.localName);if(e){e.constructionStack.push(a);var c=e.constructor;try{try{if(new c!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{e.constructionStack.pop()}}catch(f){throw a.__CE_state=2,f;}a.__CE_state=1;a.__CE_definition=e;if(e.attributeChangedCallback)for(e=e.observedAttributes,c=0;c<e.length;c++){var d=e[c],h=a.getAttribute(d);null!==h&&b.attributeChangedCallback(a,d,null,h,null)}l(a)&&
b.connectedCallback(a)}}}r.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};r.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};r.prototype.attributeChangedCallback=function(b,a,e,c,d){var h=b.__CE_definition;h.attributeChangedCallback&&-1<h.observedAttributes.indexOf(a)&&h.attributeChangedCallback.call(b,a,e,c,d)};function B(b,a){this.c=b;this.a=a;this.b=void 0;A(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function C(b){b.b&&b.b.disconnect()}B.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||C(this);for(a=0;a<b.length;a++)for(var e=b[a].addedNodes,c=0;c<e.length;c++)A(this.c,e[c])};function ca(){var b=this;this.b=this.a=void 0;this.f=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function D(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function E(b){this.i=!1;this.c=b;this.l=new Map;this.j=function(b){return b()};this.g=!1;this.h=[];this.s=new B(b,document)}
E.prototype.define=function(b,a){var e=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!k(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.c.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.i)throw Error("A custom element is already being defined.");this.i=!0;var c,d,h,f,u;try{var p=function(b){var a=P[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
return a},P=a.prototype;if(!(P instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");c=p("connectedCallback");d=p("disconnectedCallback");h=p("adoptedCallback");f=p("attributeChangedCallback");u=a.observedAttributes||[]}catch(ua){return}finally{this.i=!1}ba(this.c,b,{localName:b,constructor:a,connectedCallback:c,disconnectedCallback:d,adoptedCallback:h,attributeChangedCallback:f,observedAttributes:u,constructionStack:[]});this.h.push(b);this.g||(this.g=
!0,this.j(function(){if(!1!==e.g)for(e.g=!1,A(e.c,document);0<e.h.length;){var b=e.h.shift();(b=e.l.get(b))&&D(b)}}))};E.prototype.get=function(b){if(b=this.c.a.get(b))return b.constructor};E.prototype.whenDefined=function(b){if(!k(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.l.get(b);if(a)return a.f;a=new ca;this.l.set(b,a);this.c.a.get(b)&&-1===this.h.indexOf(b)&&D(a);return a.f};E.prototype.u=function(b){C(this.s);var a=this.j;this.j=function(e){return b(function(){return a(e)})}};
window.CustomElementRegistry=E;E.prototype.define=E.prototype.define;E.prototype.get=E.prototype.get;E.prototype.whenDefined=E.prototype.whenDefined;E.prototype.polyfillWrapFlushCallback=E.prototype.u;var F=window.Document.prototype.createElement,da=window.Document.prototype.createElementNS,ea=window.Document.prototype.importNode,fa=window.Document.prototype.prepend,ga=window.Document.prototype.append,G=window.Node.prototype.cloneNode,H=window.Node.prototype.appendChild,I=window.Node.prototype.insertBefore,J=window.Node.prototype.removeChild,K=window.Node.prototype.replaceChild,L=Object.getOwnPropertyDescriptor(window.Node.prototype,"textContent"),M=window.Element.prototype.attachShadow,N=Object.getOwnPropertyDescriptor(window.Element.prototype,
"innerHTML"),O=window.Element.prototype.getAttribute,Q=window.Element.prototype.setAttribute,R=window.Element.prototype.removeAttribute,S=window.Element.prototype.getAttributeNS,T=window.Element.prototype.setAttributeNS,U=window.Element.prototype.removeAttributeNS,V=window.Element.prototype.insertAdjacentElement,ha=window.Element.prototype.prepend,ia=window.Element.prototype.append,ja=window.Element.prototype.before,ka=window.Element.prototype.after,la=window.Element.prototype.replaceWith,ma=window.Element.prototype.remove,
na=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),X=window.HTMLElement.prototype.insertAdjacentElement;function oa(){var b=Y;window.HTMLElement=function(){function a(){var a=this.constructor,c=b.m.get(a);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var d=c.constructionStack;if(!d.length)return d=F.call(document,c.localName),Object.setPrototypeOf(d,a.prototype),d.__CE_state=1,d.__CE_definition=c,w(b,d),d;var c=d.length-1,h=d[c];if(h===g)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
d[c]=g;Object.setPrototypeOf(h,a.prototype);w(b,h);return h}a.prototype=na.prototype;return a}()};function pa(b,a,e){a.prepend=function(a){for(var d=[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];c=d.filter(function(b){return b instanceof Node&&l(b)});e.o.apply(this,d);for(var f=0;f<c.length;f++)z(b,c[f]);if(l(this))for(c=0;c<d.length;c++)f=d[c],f instanceof Element&&x(b,f)};a.append=function(a){for(var d=[],c=0;c<arguments.length;++c)d[c-0]=arguments[c];c=d.filter(function(b){return b instanceof Node&&l(b)});e.append.apply(this,d);for(var f=0;f<c.length;f++)z(b,c[f]);if(l(this))for(c=0;c<
d.length;c++)f=d[c],f instanceof Element&&x(b,f)}};function qa(){var b=Y;q(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var e=b.a.get(a);if(e)return new e.constructor}a=F.call(this,a);w(b,a);return a});q(Document.prototype,"importNode",function(a,e){a=ea.call(this,a,e);this.__CE_hasRegistry?A(b,a):v(b,a);return a});q(Document.prototype,"createElementNS",function(a,e){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var c=b.a.get(e);if(c)return new c.constructor}a=da.call(this,a,e);w(b,a);return a});
pa(b,Document.prototype,{o:fa,append:ga})};function ra(){var b=Y;function a(a,c){Object.defineProperty(a,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,a);else{var d=void 0;if(this.firstChild){var e=this.childNodes,u=e.length;if(0<u&&l(this))for(var d=Array(u),p=0;p<u;p++)d[p]=e[p]}c.set.call(this,a);if(d)for(a=0;a<d.length;a++)z(b,d[a])}}})}q(Node.prototype,"insertBefore",function(a,c){if(a instanceof DocumentFragment){var d=Array.prototype.slice.apply(a.childNodes);
a=I.call(this,a,c);if(l(this))for(c=0;c<d.length;c++)x(b,d[c]);return a}d=l(a);c=I.call(this,a,c);d&&z(b,a);l(this)&&x(b,a);return c});q(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=H.call(this,a);if(l(this))for(var d=0;d<c.length;d++)x(b,c[d]);return a}c=l(a);d=H.call(this,a);c&&z(b,a);l(this)&&x(b,a);return d});q(Node.prototype,"cloneNode",function(a){a=G.call(this,a);this.ownerDocument.__CE_hasRegistry?A(b,a):v(b,a);
return a});q(Node.prototype,"removeChild",function(a){var c=l(a),d=J.call(this,a);c&&z(b,a);return d});q(Node.prototype,"replaceChild",function(a,c){if(a instanceof DocumentFragment){var d=Array.prototype.slice.apply(a.childNodes);a=K.call(this,a,c);if(l(this))for(z(b,c),c=0;c<d.length;c++)x(b,d[c]);return a}var d=l(a),e=K.call(this,a,c),f=l(this);f&&z(b,c);d&&z(b,a);f&&x(b,a);return e});L&&L.get?a(Node.prototype,L):t(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=
0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)J.call(this,this.firstChild);H.call(this,document.createTextNode(a))}})})};function sa(b){var a=Element.prototype;a.before=function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=c.filter(function(a){return a instanceof Node&&l(a)});ja.apply(this,c);for(var e=0;e<d.length;e++)z(b,d[e]);if(l(this))for(d=0;d<c.length;d++)e=c[d],e instanceof Element&&x(b,e)};a.after=function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];d=c.filter(function(a){return a instanceof Node&&l(a)});ka.apply(this,c);for(var e=0;e<d.length;e++)z(b,d[e]);if(l(this))for(d=
0;d<c.length;d++)e=c[d],e instanceof Element&&x(b,e)};a.replaceWith=function(a){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];var d=c.filter(function(a){return a instanceof Node&&l(a)}),e=l(this);la.apply(this,c);for(var f=0;f<d.length;f++)z(b,d[f]);if(e)for(z(b,this),d=0;d<c.length;d++)e=c[d],e instanceof Element&&x(b,e)};a.remove=function(){var a=l(this);ma.call(this);a&&z(b,this)}};function ta(){var b=Y;function a(a,c){Object.defineProperty(a,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){var d=this,e=void 0;l(this)&&(e=[],n(this,function(a){a!==d&&e.push(a)}));c.set.call(this,a);if(e)for(var f=0;f<e.length;f++){var h=e[f];1===h.__CE_state&&b.disconnectedCallback(h)}this.ownerDocument.__CE_hasRegistry?A(b,this):v(b,this);return a}})}function e(a,c){q(a,"insertAdjacentElement",function(a,d){var e=l(d);a=c.call(this,a,d);e&&z(b,d);l(a)&&x(b,d);
return a})}M?q(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=M.call(this,a)}):console.warn("Custom Elements: `Element#attachShadow` was not patched.");if(N&&N.get)a(Element.prototype,N);else if(W&&W.get)a(HTMLElement.prototype,W);else{var c=F.call(document,"div");t(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return G.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName?this.content:this;for(c.innerHTML=a;0<b.childNodes.length;)J.call(b,
b.childNodes[0]);for(;0<c.childNodes.length;)H.call(b,c.childNodes[0])}})})}q(Element.prototype,"setAttribute",function(a,c){if(1!==this.__CE_state)return Q.call(this,a,c);var d=O.call(this,a);Q.call(this,a,c);c=O.call(this,a);b.attributeChangedCallback(this,a,d,c,null)});q(Element.prototype,"setAttributeNS",function(a,c,e){if(1!==this.__CE_state)return T.call(this,a,c,e);var d=S.call(this,a,c);T.call(this,a,c,e);e=S.call(this,a,c);b.attributeChangedCallback(this,c,d,e,a)});q(Element.prototype,"removeAttribute",
function(a){if(1!==this.__CE_state)return R.call(this,a);var c=O.call(this,a);R.call(this,a);null!==c&&b.attributeChangedCallback(this,a,c,null,null)});q(Element.prototype,"removeAttributeNS",function(a,c){if(1!==this.__CE_state)return U.call(this,a,c);var d=S.call(this,a,c);U.call(this,a,c);var e=S.call(this,a,c);d!==e&&b.attributeChangedCallback(this,c,d,e,a)});X?e(HTMLElement.prototype,X):V?e(Element.prototype,V):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");
pa(b,Element.prototype,{o:ha,append:ia});sa(b)};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var Y=new r;oa();qa();ra();ta();document.__CE_hasRegistry=!0;var customElements=new E(Y);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),
/* 1 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.trimValue = true
    this._setStyle()
    this._setInput()
    this._setPlaceholder()
    this._setAttributeValue()
    this._setAttributeDisabled()
    this._setAttributeReadonly()
    this._setAttributeMaxlength()
    this._setAttributeAutocapitalize()
    this._setAttributeAutocomplete()
    this._setAttributeSpellcheck()
    this._setAttributeAutofocus()
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'maxlength',
      'autocapitalize',
      'autofocus',
    ]
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode && this.label && this.input) {
      this[name] = value
    }
  }

  _setStyle() {
    this.classList.add('mn-input')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.classList.add('input')

    this.appendChild(this.input)

    this.input.addEventListener('change', () => { // set class .has-value
      if (this.trimValue) {
        this.input.value = this.input.value.replace(/\s{2,}/g, ' ').trim()
      }

      this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    this.input.addEventListener('blur', () => {
      this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    const validate = () => { // validate
      const closestForm = this.closest('form')
      closestForm && closestForm.classList.contains('submitted')
        ? this.validate()
        : null
    }

    this.input.addEventListener('keyup', validate)
    this.input.addEventListener('change', validate)

    this.input.addEventListener('focus', () => {
      if (!this.hasAttribute('readonly') && !this.hasAttribute('disabled')) {
        this.classList.add('focus')
      }
    })

    this.input.addEventListener('blur', () => this.classList.remove('focus'))
  }

  _setPlaceholder() {
    this.label = document.createElement('label')
    this.label.classList.add('placeholder')
    this.appendChild(this.label)
    this.placeholder = this.getAttribute('placeholder')
  }

  _setAttributeValue() {
    this.value = this.getAttribute('value') || ''
  }

  _setAttributeDisabled() {
    this.disabled = this.hasAttribute('disabled')
  }

  _setAttributeReadonly() {
    this.readonly = this.hasAttribute('readonly')
  }

  _setAttributeMaxlength() {
    this.maxlength = this.getAttribute('maxlength')
  }

  _setAttributeAutocapitalize() {
    this.autocapitalize = this.getAttribute('autocapitalize') || 'off'
  }

  _setAttributeAutocomplete() {
    this.input.setAttribute('autocomplete', 'off')
  }

  _setAttributeSpellcheck() {
    this.input.setAttribute('spellcheck', 'off')
  }

  _setAttributeAutofocus() {
    this.autofocus = this.hasAttribute('autofocus')
  }

  _setValidations() {
    this.validations = {
      required: () => this.value === '',
      pattern: () => {
        const reg = new RegExp(this.getAttribute('pattern'))

        return this.value
          ? !reg.test(this.value)
          : false
      },
    }
  }

  get value() {
    return this.input.value
  }

  set value(value = '') {
    const differentValue = this.input.value !== value

    if (differentValue) {
      this.input.value = this.trimValue && value
        ? value.replace(/\s{2,}/g, ' ').trim()
        : value
      this.input.dispatchEvent(new Event('change'))
    }
  }

  set name(value) {
    const form = this.closest('form')
    const name = this.getAttribute('name')
    const element = this

    if (form) {
      Object.defineProperty(form, name, {
        get: () => {
          return element.getAttribute('name')
            ? element
            : undefined
        },
      })
    }
  }

  set placeholder(value) {
    this.label.textContent = value
  }

  set disabled(value) {
    this.input.disabled = value || this.hasAttribute('disabled')
  }

  set readonly(value) {
    this.input.readOnly = value || this.hasAttribute('readonly')
  }

  set maxlength(value) {
    value
      ? this.input.setAttribute('maxlength', value)
      : this.input.removeAttribute('maxlength')
  }

  set autocapitalize(value) {
    value
      ? this.input.setAttribute('autocapitalize', value)
      : this.input.removeAttribute('autocapitalize')
  }

  set autofocus(value) {
    this.input.autofocus = value || this.hasAttribute('autofocus')
  }

  validate() {
    const validations = {}

    for (const attribute of Object.keys(this.validations || {})) {
      const hasAttribute = this.hasAttribute(attribute)
      const attributeIsInvalid = this.validations[attribute]()

      if (hasAttribute && attributeIsInvalid) {
        this.classList.add(attribute)
        validations[attribute] = true
      } else {
        this.classList.remove(attribute)
      }
    }

    const isInvalid = Object.values(validations).some(item => item === true)

    isInvalid
      ? this.classList.add('invalid')
      : this.classList.remove('invalid')
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnActionSheetCustomElement()

function MnActionSheetCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  const MnActionSheet = __webpack_require__(6)
  window.customElements.define('mn-action-sheet', MnActionSheet)
  return window.customElements.get('mn-action-sheet')
}


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const {input, password, number, backdrop, actionSheet} = __webpack_require__(3)

const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()
  form.classList.add('submitted')
  Array
    .from(form.querySelectorAll('.mn-input'))
    // :not([disabled]):not([readonly]'
    .filter(input => !input.disabled && !input.readOnly)
    .forEach(input => input.validate())

  const isInvalid = form.querySelectorAll('.mn-input.invalid').length > 0
  console.log(`form ${isInvalid ? 'invalid' : 'valid'}`)
})


// const layer = document.querySelector('mn-backdrop')

// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//   layer.show()
// })



/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  input: __webpack_require__(11),
  password: __webpack_require__(15),
  number: __webpack_require__(13),
  date: __webpack_require__(8),
  select: __webpack_require__(17),
  actionSheet: __webpack_require__(2),
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnActionSheet extends HTMLElement {
  constructor() {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
    this._setMenu()
    this._setCancel()
  }

  static get observedAttributes() {
    return []
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode) {
      this[name] = value
    }
  }

  _setStyle() {
    this.classList.add('mn-action-sheet')
    document.body.classList.add('mn-backdrop')
  }

  _setMenu() {
    const menu = document.createElement('menu')
    menu.classList.add('mn-card')

    Array
      .from(this.querySelectorAll('option'))
      .forEach((child, index) => {
        const option = document.createElement('div')
        option.classList.add('option')
        option.innerHTML = child.textContent

        option.addEventListener('click', () => {
          const changeEvent = new Event('change')
          changeEvent.data = {index}
          this.dispatchEvent(changeEvent)
        })

        Array
          .from(child.attributes)
          .forEach(attr => option.setAttribute(attr.name, attr.value))

        child.parentNode.removeChild(child)
        menu.appendChild(option)
      })

    this.appendChild(menu)
    this.menu = menu
  }

  _setCancel() {
    const button = document.createElement('button')

    button.addEventListener('click', () => {
      this.hide()
    })

    document.addEventListener('touchmove', () => {
      const clickOutside = event.target === this
      this.touchmove = true
      if (clickOutside) {
        event.preventDefault()
      }
    })

    document.addEventListener('touchend', (event) => {
      const clickOutside = event.target === this && !this.touchmove
      if (clickOutside) {
        this.hide()
      }
      delete this.touchmove
    })

    this.button = button
    this.appendChild(this.button)
  }

  show() {
    this.menu.scrollTop = 0
    this.classList.add('visible')
    document.body.classList.add('mn-backdrop-visible')
    document.body.classList.add('mn-action-sheet-visible')
  }

  hide() {
    this.classList.remove('visible')
    document.body.classList.remove('mn-backdrop-visible')
    document.body.classList.remove('mn-action-sheet-visible')
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)

module.exports = class MnDate extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    super._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
      'max',
      'min',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-date')
  }

  _setInput() {
    super._setInput()
    this.input.setAttribute('type', 'date')
    const supportsInputDate = this.input.type === 'date'

    if (!supportsInputDate) {
      this.input.setAttribute('type', 'text')
      this.input.setAttribute('maxlength', 10)
      this._setMask()
    }
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    this.validations.min = () => newDate(this.value) < newDate(this.getAttribute('min'))
    this.validations.max = () => newDate(this.value) > newDate(this.getAttribute('max'))
    delete this.validations.pattern
  }

  _setMask() {
    this.input.addEventListener('keydown', (event) => {
      const isInputEditing = event.key === 'Backspace'
        || this.input.selectionStart !== this.input.value.length

      this.inputEditing = isInputEditing
    })

    this.input.addEventListener('input', () => {
      if (!this.inputEditing) {
        this.updateMask()
      }

      this.inputEditing = undefined
    })

    this.input.addEventListener('blur', () => {
      this.updateMask()
      const dateString = this.input.value
        .split('/')
        .reverse()
        .join('-')

      isValidDate(dateString)
        ? this.updateMask()
        : this.value = ''
    })
  }

  updateMask() {
    this.input.value = this.input.value
      .replace(/[^\d\/]/, '') // disallow invalid chars
      .replace(/[a-z]/ig, '') // disallow letters
      .replace(/(?:^00|^(\d{2})\/00)/g, '$101') // disallow repeated 0
      .replace(/000(\d)$/g, '190$1') // disallow year 0
      .replace(/00(\d{2})$/g, '19$1') // disallow year 0
      .replace(/\/{2}/g, '/') // disallow repeated /
      .replace(/(^\/)/, '') // disallow / as first char
      .replace(/(\d+\/\d+\/)\//, '$1') // disallow third /
      .replace(/^(\d)\//, '0$1/') // leading 0 day
      .replace(/^(\d{2})(\d{1})/, '$1/$2') // add first /
      .replace(/^(\d{2}\/)(\d{1})\//, '$10$2/') // leading 0 month
      .replace(/^(\d{2}\/\d{2})(\d{1})/, '$1/$2') // add second /
  }

  get value() {
    let date
    try {
      const isDateString = this.input.type === 'date'
      const value = isDateString
        ? this.input.value
        : this.input.value
          .split('/')
          .reverse()
          .join('-')

      date = isValidDate(value)
        ? newDate(value).toISOString()
        : undefined
    } catch (e) {}

    return date
      ? date
      : undefined
  }

  set value(value = '') {
    const validDate = typeof value === 'string'
      && isValidDate(value)

    value = value instanceof Date
      ? value.toISOString().substring(0, 10)
      : validDate
        ? newDate(value)
          .toISOString()
          .substring(0, 10)
        : ''

    const supportsInputDate = this.input.type === 'date'

    if (!supportsInputDate && validDate) {
      const dateString = value.split('-')
      value = new Date(dateString[0], dateString[1] - 1, dateString[2], 0, 0)
        .toLocaleString('pt-BR')
        .substring(0, 10)
    }

    this.input.value = value
    this.input.dispatchEvent(new Event('change'))
  }
}

function isValidDate(dateString) {
  const year = +dateString.split('-')[0]
  const month = +dateString.split('-')[1]
  const date = newDate(dateString)

  return date.getFullYear() >= 1900
    && date.getFullYear() === year
    && date.getMonth() + 1 === month
}

function newDate(dateString) {
  dateString = dateString || ''
  const isString = typeof dateString === 'string'
  dateString = dateString.replace(/T.+/, '')
  dateString = isString && dateString.includes('/')
    ? dateString
      .split('/')
      .reverse()
      .join('-')
    : dateString

  dateString = dateString.split('-')

  const date = new Date(dateString[0], dateString[1] - 1, dateString[2])
  return date
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnDateCustomElement()

function MnDateCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  const MnDate = __webpack_require__(7)
  window.customElements.define('mn-date', MnDate)
  return window.customElements.get('mn-date')
}


/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnInputCustomElement()

function MnInputCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  const MnInput = __webpack_require__(1)
  window.customElements.define('mn-input', MnInput)
  return window.customElements.get('mn-input')
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)

module.exports = class MnNumber extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    super._setInput()
    this._setMask()
    this._setMobileKeyboard()
    this._setInputTransforms()
    this._setInputKeys()
    super._setPlaceholder()
    super._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    this._setAttributeMax()
    this._setAttributeMin()
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
      'max',
      'min',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-number')
  }

  _setMask() {
    this.mask = document.createElement('div')
    this.mask.classList.add('mask')
    this.appendChild(this.mask)

    this.input.addEventListener('input', () => {
      this.updateMask()
    })
  }

  _setMobileKeyboard() {
    this.input.setAttribute('pattern', '\\d*')
  }

  _setInputTransforms() {
    this.input.addEventListener('change', () => {
      try {
        const value = eval(this.input.value.replace(/,/g, '.'))
        value !== undefined
          ? this.input.value = String(value).replace(/\./g, ',')
          : null
        const valueIsDefined = value !== undefined

        if (valueIsDefined) {
          const isCurrency = this.hasAttribute('currency')
          const precision = this.getAttribute('precision') || 0

          switch (true) {
            case isCurrency:
              this.input.value = value.toFixed(precision || 2).replace(/\./g, ',')
              break

            default:
              this.input.value = precision
                ? value.toFixed(precision).replace(/\./g, ',')
                : String(value).replace(/\./g, ',')
              break
          }
        }
      } catch (e) {
        this.value = undefined
      }

      this.hasAttribute('percentage')
        ? this.updateMask()
        : null
    })
  }

  _setInputKeys() {
    this.input.addEventListener('keydown', (event) => {
      if (!this.hasAttribute('readonly')) {
        const step = this.hasAttribute('percentage')
          ? ((+this.getAttribute('step') * 100) / 10000) || 0.01
          : +this.getAttribute('step') || 1
        const value = this.value || 0

        switch (event.key) {
          case 'ArrowUp':
            this.value = value + step
            break
          case 'ArrowDown':
            this.value = value - step
            break
        }

        event.key === 'ArrowUp' || event.key === 'ArrowDown'
          ? event.preventDefault()
          : null
      }
    })
  }

  _setAttributeMax() {
    this.max = this.getAttribute('max')
  }

  _setAttributeMin() {
    this.min = this.getAttribute('min')
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    this.validations.min = () => this.value < this.getAttribute('min')
    this.validations.max = () => this.value > this.getAttribute('max')
    delete this.validations.pattern
  }

  get value() {
    const isUndefined = this.input.value === ''
    const numberString = this.input.value.replace(/,/g, '.')

    const val = isUndefined
      ? undefined
      : this.hasAttribute('percentage')
        ? (numberString * 100) / 10000
        : parseFloat(numberString)

    return val
  }

  set value(value = '') {
    if (this.input) {
      try {
        value = eval(String(value).replace(/,/g, '.'))
        const differentValue = this.input.value !== value

        if (value !== undefined && differentValue) {
          value = this.hasAttribute('percentage')
            ? +(value * 100).toFixed(this.getAttribute('precision') || 2)//value * 100
            : value
          this.input.value = value
        } else {
          this.input.value = ''
        }

      } catch (e) {
        this.input.value = ''
      }

      this.input.dispatchEvent(new Event('change'))
      this.input.dispatchEvent(new Event('input'))
    }
  }

  set max(value) {
    this.hasAttribute('max')
      ? this.label.setAttribute('max', value)
      : this.label.removeAttribute('max')
  }

  set min(value) {
    this.hasAttribute('min')
      ? this.label.setAttribute('min', value)
      : this.label.removeAttribute('min')
  }

  updateMask() {
    const hasValue = this.input.value !== '' && !/^\s+$/.test(this.input.value)

    if (this.mask && this.hasAttribute('percentage')) {
      const text = hasValue
        ? `${this.input.value} %`
        : ''

      this.mask.textContent = text
    }

    if (this.mask && this.hasAttribute('percentage')) {
      const text = hasValue
        ? `${this.input.value} %`
        : ''

      this.mask.textContent = text
    }
  }
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnNumberCustomElement()

function MnNumberCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  const MnNumber = __webpack_require__(12)
  window.customElements.define('mn-number', MnNumber)
  return window.customElements.get('mn-number')
}


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)

module.exports = class MnPassword extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    this._setVisibilityButton()
    super._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    super._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-password')
  }

  _setInput() {
    super._setInput()
    this.input.setAttribute('type', 'password')
  }

  _setVisibilityButton() {
    const button = document.createElement('button')
    button.setAttribute('type', 'button')
    button.setAttribute('tabindex', '-1')

    this.appendChild(button)
    this.button = button
    this.input.addEventListener('blur', () => {
      this.input.setAttribute('type', 'password')
      this.classList.remove('show-password')
      this.input.dispatchEvent(new Event('change'))
    })

    button.addEventListener('mousedown', event => {
      event.preventDefault()
    })

    button.addEventListener('click', () => {
      const toggledType = this.input.getAttribute('type') === 'password'
        ? 'text'
        : 'password'
      this.input.setAttribute('type', toggledType)
      this.classList.toggle('show-password')
      this.input.focus()
    })
  }
}


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnPasswordCustomElement()

function MnPasswordCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  const MnPassword = __webpack_require__(14)
  window.customElements.define('mn-password', MnPassword)
  return window.customElements.get('mn-password')
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)
const MnActionSheet = __webpack_require__(2)

module.exports = class MnSelect extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    this._setMenu()
    this._setActionSheet()
    this._setOptions()
    this._setAttributeValue()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    super._setAttributeAutocomplete()
    super._setAttributeSpellcheck()
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'placeholder',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-select')
  }

  _setInput() {
    super._setInput()

    this.input.addEventListener('focus', () => {
      this.input.select()
      !this.input.hasAttribute('readonly')
        ? this.show()
        : undefined
      this.filter = undefined
    })

    this.input.addEventListener('blur', () => {
      const option = Array
        .from(this.menu.querySelectorAll('.option'))
        .filter(option => {
          const optionValue = option.getAttribute('value') || option.textContent
          return optionValue === this.getAttribute('value')
        })[0]

      if (this.input.value && option) {
        this.input.value = option.textContent
      } else {
        this.value = undefined
      }
      this.hide()
    })

    this.input.addEventListener('input', () => {
      this.filter = this.input.value
      this.focusOption(this.menu.querySelector('.option:not(.hidden)'))
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.closest('mn-select') && event.target !== this

      if (this.visible && clickOutside) {
        this.hide()
      }
    })
  }

  _setAttributeValue() {
    const selectedOption = this.querySelector('.option[selected]')
    const selectedValue = selectedOption
      ? selectedOption.getAttribute('value') || selectedOption.textContent
      : ''

    const value = this.getAttribute('value') || selectedValue
    this.value = value
  }

  _setMenu() {
    const menu = document.createElement('menu')
    menu.classList.add('mn-card')

    Array
      .from(this.querySelectorAll('option'))
      .forEach(child => {
        const option = document.createElement('div')
        option.classList.add('option')
        option.innerHTML = child
          .textContent
          .split('')
          .map(char => `<span class="char" data-char="${char.toLowerCase()}">${char}</span>`)
          .join('')

        Array
          .from(child.attributes)
          .forEach(attr => option.setAttribute(attr.name, attr.value))

        child.parentNode.removeChild(child)
        menu.appendChild(option)
      })

    this.appendChild(menu)
    this.menu = menu
  }

  _setActionSheet() {
    const viewportWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
    if (viewportWidth < 768) {
      const actionSheet = new MnActionSheet()
      Array
        .from(this.querySelectorAll('.option'))
        .forEach(option => {
          const actionSheetOption = document.createElement('option')
          actionSheetOption.textContent = option.textContent
          actionSheet.appendChild(actionSheetOption)
        })
      this.actionSheet = actionSheet
      this.actionSheet.addEventListener('change', (event) => {
        const {index} = event.data
        const option = this.menu.querySelector(`.option:nth-child(${index + 1})`)
        this.value = option.textContent
        this.actionSheet.hide()
      })
      document.body.appendChild(this.actionSheet)
    }
  }

  _setOptions() {
    const options = Array.from(this.querySelectorAll('.option'))

    options.forEach(option => option.addEventListener('mousedown', () => {
      const value = event.target.getAttribute('value') || event.target.textContent
      this.value = value
      this.hide()
    }))

    options.forEach(option => option.addEventListener('mousemove', () => {
      if (!this.keyboardNavigation) {
        this.focusOption(option)
      }
    }))

    this.input.addEventListener('keydown', (event) => { // arrow navigate
      const arrowDown = event.key === 'ArrowDown'
      const arrowUp = event.key === 'ArrowUp'
      let nextOption

      const options = Array.from(this.menu.querySelectorAll('.option:not(.hidden)'))
      const currentOption = this.menu.querySelector('.option.focus')

      const currentIndex = Array.prototype.indexOf.call(options, currentOption)

      if (arrowDown) {
        event.preventDefault()
        nextOption = options[currentIndex + 1]
      } else if (arrowUp) {
        event.preventDefault()
        nextOption = options[currentIndex - 1]
      }

      if (nextOption) {
        const top = nextOption.offsetTop
        const bottom = top + nextOption.clientHeight
        const scrollToTop = top < this.menu.scrollTop
        const scrollToBottom = bottom > this.menu.scrollTop + this.menu.clientHeight

        this.keyboardNavigation = true
        if (scrollToTop) {
          this.menu.scrollTop = top
        } else if (scrollToBottom) {
          this.menu.scrollTop = bottom - this.menu.clientHeight
        }

        this.focusOption(nextOption)
        setTimeout(() => {
          delete this.keyboardNavigation
        }, 100)
      }
    })

    this.input.addEventListener('keydown', event => {
      const esc = event.key === 'Escape'

      if (esc) {
        this.value = this.value
        this.input.select()
        this.filter = undefined
      }
    })

    this.input.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'

      if (enter) {
        const option = this.menu.querySelector('.option.focus')
        event.preventDefault()

        option
          ? this.value = option.getAttribute('value') || option.textContent
          : this.value = this.value

        this.hide()
        this.input.blur()
      }
    })
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => this.value === undefined,
    delete this.validations.pattern
  }

  show() {
    this.classList.add('visible')
    this.menu.scrollTop = 0
    this.focusOption(this.querySelector('.option:first-child'))

    if (this.actionSheet) {
      this.input.blur()
      this.actionSheet.show()
    }
  }

  hide() {
    this.classList.remove('visible')
    this.removeOptionFocus()
  }

  get visible() {
    return this.classList.contains('visible')
  }

  removeOptionFocus() {
    const latest = this.menu.querySelector('.focus')
    latest
      ? latest.classList.remove('focus')
      : undefined
  }

  focusOption(option) {
    this.removeOptionFocus()
    option
      ? option.classList.add('focus')
      : null
  }

  get value() {
    return this.getAttribute('value')
      ? evaluate(this.getAttribute('value'))
      : undefined
  }

  set value(value) {
    const differentValue = this.getAttribute('value') !== value
    const option = Array
      .from(this.menu.querySelectorAll('.option'))
      .filter(option => {
        return option.getAttribute('value') == String(value) // eslint-disable-line eqeqeq
          || option.textContent == String(value) // eslint-disable-line eqeqeq
      })[0]

    const textNotApplied = option && this.input.value !== option.textContent

    if (differentValue || textNotApplied) {
      this.input.value = option
        ? option.textContent
        : ''

      const hasValue = value !== undefined && value !== null

      hasValue && option
        ? this.setAttribute('value', option.getAttribute('value') || option.textContent)
        :  this.removeAttribute('value')

      this.input.dispatchEvent(new Event('change'))
    }

    if (!this.hasAttribute('value')) {
      this.input.value = ''
      this.input.dispatchEvent(new Event('change'))
    }
  }

  set filter(value) {
    if (value) {
      this.classList.add('filtered')

      Array
        .from(this.menu.querySelectorAll('.option'))
        .forEach(option => {
          const matchOption = RegExp(value.split('').join('.*'), 'i').test(option.textContent)

          Array
            .from(option.querySelectorAll('.match'))
            .forEach(char => char.classList.remove('match'))

          if (matchOption) {
            option.classList.remove('hidden')

            value
              .split('')
              .forEach(char => {
                const selector = `span[data-char="${char.toLowerCase()}"]:not(.match)`
                const letter = option.querySelector(`.match ~ ${selector}`) || option.querySelector(selector)
                letter
                  ? letter.classList.add('match')
                  : null
              })

          } else {
            option.classList.add('hidden')
          }
        })
    } else {
      this.classList.remove('filtered')
      Array
        .from(this.querySelectorAll('.option.hidden'))
        .forEach(option => option.classList.remove('hidden'))
    }
  }
}

function evaluate(value) {
  try {
    value = value.trim()
    const isVariable = !value.startsWith('[')
      && !value.startsWith('{')
      && !value.startsWith('\'')
      && !value.startsWith('"')
      && !value.startsWith('`')
      && value !== 'true'
      && value !== 'false'
      && isNaN(value)

    return isVariable
        ? eval(`'${value}'`) // convert to string
        : eval(`(${value})`) // evaluate
  } catch (e) {
    return value
  }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnSelectCustomElement()

function MnSelectCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  const MnSelect = __webpack_require__(16)
  window.customElements.define('mn-select', MnSelect)
  return window.customElements.get('mn-select')
}


/***/ })
/******/ ]);
//# sourceMappingURL=vendor.js.map