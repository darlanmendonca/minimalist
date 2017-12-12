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
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function(){
'use strict';var h=new function(){};var aa=new Set("annotation-xml color-profile font-face font-face-src font-face-uri font-face-format font-face-name missing-glyph".split(" "));function m(b){var a=aa.has(b);b=/^[a-z][.0-9_a-z]*-[\-.0-9_a-z]*$/.test(b);return!a&&b}function n(b){var a=b.isConnected;if(void 0!==a)return a;for(;b&&!(b.__CE_isImportDocument||b instanceof Document);)b=b.parentNode||(window.ShadowRoot&&b instanceof ShadowRoot?b.host:void 0);return!(!b||!(b.__CE_isImportDocument||b instanceof Document))}
function p(b,a){for(;a&&a!==b&&!a.nextSibling;)a=a.parentNode;return a&&a!==b?a.nextSibling:null}
function t(b,a,d){d=d?d:new Set;for(var c=b;c;){if(c.nodeType===Node.ELEMENT_NODE){var e=c;a(e);var f=e.localName;if("link"===f&&"import"===e.getAttribute("rel")){c=e.import;if(c instanceof Node&&!d.has(c))for(d.add(c),c=c.firstChild;c;c=c.nextSibling)t(c,a,d);c=p(b,e);continue}else if("template"===f){c=p(b,e);continue}if(e=e.__CE_shadowRoot)for(e=e.firstChild;e;e=e.nextSibling)t(e,a,d)}c=c.firstChild?c.firstChild:p(b,c)}}function u(b,a,d){b[a]=d};function v(){this.a=new Map;this.o=new Map;this.f=[];this.b=!1}function ba(b,a,d){b.a.set(a,d);b.o.set(d.constructor,d)}function w(b,a){b.b=!0;b.f.push(a)}function x(b,a){b.b&&t(a,function(a){return y(b,a)})}function y(b,a){if(b.b&&!a.__CE_patched){a.__CE_patched=!0;for(var d=0;d<b.f.length;d++)b.f[d](a)}}function z(b,a){var d=[];t(a,function(b){return d.push(b)});for(a=0;a<d.length;a++){var c=d[a];1===c.__CE_state?b.connectedCallback(c):A(b,c)}}
function B(b,a){var d=[];t(a,function(b){return d.push(b)});for(a=0;a<d.length;a++){var c=d[a];1===c.__CE_state&&b.disconnectedCallback(c)}}
function C(b,a,d){d=d?d:{};var c=d.w||new Set,e=d.s||function(a){return A(b,a)},f=[];t(a,function(a){if("link"===a.localName&&"import"===a.getAttribute("rel")){var d=a.import;d instanceof Node&&"complete"===d.readyState?(d.__CE_isImportDocument=!0,d.__CE_hasRegistry=!0):a.addEventListener("load",function(){var d=a.import;if(!d.__CE_documentLoadHandled){d.__CE_documentLoadHandled=!0;d.__CE_isImportDocument=!0;d.__CE_hasRegistry=!0;var f=new Set(c);f.delete(d);C(b,d,{w:f,s:e})}})}else f.push(a)},c);
if(b.b)for(a=0;a<f.length;a++)y(b,f[a]);for(a=0;a<f.length;a++)e(f[a])}
function A(b,a){if(void 0===a.__CE_state){var d=b.a.get(a.localName);if(d){d.constructionStack.push(a);var c=d.constructor;try{try{if(new c!==a)throw Error("The custom element constructor did not produce the element being upgraded.");}finally{d.constructionStack.pop()}}catch(r){throw a.__CE_state=2,r;}a.__CE_state=1;a.__CE_definition=d;if(d.attributeChangedCallback)for(d=d.observedAttributes,c=0;c<d.length;c++){var e=d[c],f=a.getAttribute(e);null!==f&&b.attributeChangedCallback(a,e,null,f,null)}n(a)&&
b.connectedCallback(a)}}}v.prototype.connectedCallback=function(b){var a=b.__CE_definition;a.connectedCallback&&a.connectedCallback.call(b)};v.prototype.disconnectedCallback=function(b){var a=b.__CE_definition;a.disconnectedCallback&&a.disconnectedCallback.call(b)};v.prototype.attributeChangedCallback=function(b,a,d,c,e){var f=b.__CE_definition;f.attributeChangedCallback&&-1<f.observedAttributes.indexOf(a)&&f.attributeChangedCallback.call(b,a,d,c,e)};function D(b,a){this.c=b;this.a=a;this.b=void 0;C(this.c,this.a);"loading"===this.a.readyState&&(this.b=new MutationObserver(this.f.bind(this)),this.b.observe(this.a,{childList:!0,subtree:!0}))}function E(b){b.b&&b.b.disconnect()}D.prototype.f=function(b){var a=this.a.readyState;"interactive"!==a&&"complete"!==a||E(this);for(a=0;a<b.length;a++)for(var d=b[a].addedNodes,c=0;c<d.length;c++)C(this.c,d[c])};function ca(){var b=this;this.b=this.a=void 0;this.f=new Promise(function(a){b.b=a;b.a&&a(b.a)})}function F(b){if(b.a)throw Error("Already resolved.");b.a=void 0;b.b&&b.b(void 0)};function G(b){this.i=!1;this.c=b;this.m=new Map;this.j=function(b){return b()};this.g=!1;this.l=[];this.u=new D(b,document)}
G.prototype.define=function(b,a){var d=this;if(!(a instanceof Function))throw new TypeError("Custom element constructors must be functions.");if(!m(b))throw new SyntaxError("The element name '"+b+"' is not valid.");if(this.c.a.get(b))throw Error("A custom element with name '"+b+"' has already been defined.");if(this.i)throw Error("A custom element is already being defined.");this.i=!0;var c,e,f,r,k;try{var g=function(b){var a=l[b];if(void 0!==a&&!(a instanceof Function))throw Error("The '"+b+"' callback must be a function.");
return a},l=a.prototype;if(!(l instanceof Object))throw new TypeError("The custom element constructor's prototype is not an object.");c=g("connectedCallback");e=g("disconnectedCallback");f=g("adoptedCallback");r=g("attributeChangedCallback");k=a.observedAttributes||[]}catch(q){return}finally{this.i=!1}a={localName:b,constructor:a,connectedCallback:c,disconnectedCallback:e,adoptedCallback:f,attributeChangedCallback:r,observedAttributes:k,constructionStack:[]};ba(this.c,b,a);this.l.push(a);this.g||
(this.g=!0,this.j(function(){return da(d)}))};function da(b){if(!1!==b.g){b.g=!1;for(var a=b.l,d=[],c=new Map,e=0;e<a.length;e++)c.set(a[e].localName,[]);C(b.c,document,{s:function(a){if(void 0===a.__CE_state){var e=a.localName,f=c.get(e);f?f.push(a):b.c.a.get(e)&&d.push(a)}}});for(e=0;e<d.length;e++)A(b.c,d[e]);for(;0<a.length;){for(var f=a.shift(),e=f.localName,f=c.get(f.localName),r=0;r<f.length;r++)A(b.c,f[r]);(e=b.m.get(e))&&F(e)}}}G.prototype.get=function(b){if(b=this.c.a.get(b))return b.constructor};
G.prototype.whenDefined=function(b){if(!m(b))return Promise.reject(new SyntaxError("'"+b+"' is not a valid custom element name."));var a=this.m.get(b);if(a)return a.f;a=new ca;this.m.set(b,a);this.c.a.get(b)&&!this.l.some(function(a){return a.localName===b})&&F(a);return a.f};G.prototype.v=function(b){E(this.u);var a=this.j;this.j=function(d){return b(function(){return a(d)})}};window.CustomElementRegistry=G;G.prototype.define=G.prototype.define;G.prototype.get=G.prototype.get;
G.prototype.whenDefined=G.prototype.whenDefined;G.prototype.polyfillWrapFlushCallback=G.prototype.v;var H=window.Document.prototype.createElement,ea=window.Document.prototype.createElementNS,fa=window.Document.prototype.importNode,ga=window.Document.prototype.prepend,ha=window.Document.prototype.append,ia=window.DocumentFragment.prototype.prepend,ja=window.DocumentFragment.prototype.append,I=window.Node.prototype.cloneNode,J=window.Node.prototype.appendChild,K=window.Node.prototype.insertBefore,L=window.Node.prototype.removeChild,M=window.Node.prototype.replaceChild,N=Object.getOwnPropertyDescriptor(window.Node.prototype,
"textContent"),O=window.Element.prototype.attachShadow,P=Object.getOwnPropertyDescriptor(window.Element.prototype,"innerHTML"),Q=window.Element.prototype.getAttribute,R=window.Element.prototype.setAttribute,S=window.Element.prototype.removeAttribute,T=window.Element.prototype.getAttributeNS,U=window.Element.prototype.setAttributeNS,ka=window.Element.prototype.removeAttributeNS,la=window.Element.prototype.insertAdjacentElement,ma=window.Element.prototype.prepend,na=window.Element.prototype.append,
V=window.Element.prototype.before,oa=window.Element.prototype.after,pa=window.Element.prototype.replaceWith,qa=window.Element.prototype.remove,ra=window.HTMLElement,W=Object.getOwnPropertyDescriptor(window.HTMLElement.prototype,"innerHTML"),sa=window.HTMLElement.prototype.insertAdjacentElement;function ta(){var b=X;window.HTMLElement=function(){function a(){var a=this.constructor,c=b.o.get(a);if(!c)throw Error("The custom element being constructed was not registered with `customElements`.");var e=c.constructionStack;if(!e.length)return e=H.call(document,c.localName),Object.setPrototypeOf(e,a.prototype),e.__CE_state=1,e.__CE_definition=c,y(b,e),e;var c=e.length-1,f=e[c];if(f===h)throw Error("The HTMLElement constructor was either called reentrantly for this constructor or called multiple times.");
e[c]=h;Object.setPrototypeOf(f,a.prototype);y(b,f);return f}a.prototype=ra.prototype;return a}()};function Y(b,a,d){function c(a){return function(d){for(var e=[],c=0;c<arguments.length;++c)e[c-0]=arguments[c];for(var c=[],f=[],l=0;l<e.length;l++){var q=e[l];q instanceof Element&&n(q)&&f.push(q);if(q instanceof DocumentFragment)for(q=q.firstChild;q;q=q.nextSibling)c.push(q);else c.push(q)}a.apply(this,e);for(e=0;e<f.length;e++)B(b,f[e]);if(n(this))for(e=0;e<c.length;e++)f=c[e],f instanceof Element&&z(b,f)}}d.h&&(a.prepend=c(d.h));d.append&&(a.append=c(d.append))};function ua(){var b=X;u(Document.prototype,"createElement",function(a){if(this.__CE_hasRegistry){var d=b.a.get(a);if(d)return new d.constructor}a=H.call(this,a);y(b,a);return a});u(Document.prototype,"importNode",function(a,d){a=fa.call(this,a,d);this.__CE_hasRegistry?C(b,a):x(b,a);return a});u(Document.prototype,"createElementNS",function(a,d){if(this.__CE_hasRegistry&&(null===a||"http://www.w3.org/1999/xhtml"===a)){var c=b.a.get(d);if(c)return new c.constructor}a=ea.call(this,a,d);y(b,a);return a});
Y(b,Document.prototype,{h:ga,append:ha})};function va(){var b=X;function a(a,c){Object.defineProperty(a,"textContent",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){if(this.nodeType===Node.TEXT_NODE)c.set.call(this,a);else{var e=void 0;if(this.firstChild){var d=this.childNodes,k=d.length;if(0<k&&n(this))for(var e=Array(k),g=0;g<k;g++)e[g]=d[g]}c.set.call(this,a);if(e)for(a=0;a<e.length;a++)B(b,e[a])}}})}u(Node.prototype,"insertBefore",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);
a=K.call(this,a,c);if(n(this))for(c=0;c<e.length;c++)z(b,e[c]);return a}e=n(a);c=K.call(this,a,c);e&&B(b,a);n(this)&&z(b,a);return c});u(Node.prototype,"appendChild",function(a){if(a instanceof DocumentFragment){var c=Array.prototype.slice.apply(a.childNodes);a=J.call(this,a);if(n(this))for(var e=0;e<c.length;e++)z(b,c[e]);return a}c=n(a);e=J.call(this,a);c&&B(b,a);n(this)&&z(b,a);return e});u(Node.prototype,"cloneNode",function(a){a=I.call(this,a);this.ownerDocument.__CE_hasRegistry?C(b,a):x(b,a);
return a});u(Node.prototype,"removeChild",function(a){var c=n(a),e=L.call(this,a);c&&B(b,a);return e});u(Node.prototype,"replaceChild",function(a,c){if(a instanceof DocumentFragment){var e=Array.prototype.slice.apply(a.childNodes);a=M.call(this,a,c);if(n(this))for(B(b,c),c=0;c<e.length;c++)z(b,e[c]);return a}var e=n(a),f=M.call(this,a,c),d=n(this);d&&B(b,c);e&&B(b,a);d&&z(b,a);return f});N&&N.get?a(Node.prototype,N):w(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){for(var a=[],b=
0;b<this.childNodes.length;b++)a.push(this.childNodes[b].textContent);return a.join("")},set:function(a){for(;this.firstChild;)L.call(this,this.firstChild);J.call(this,document.createTextNode(a))}})})};function wa(b){var a=Element.prototype;function d(a){return function(e){for(var c=[],d=0;d<arguments.length;++d)c[d-0]=arguments[d];for(var d=[],k=[],g=0;g<c.length;g++){var l=c[g];l instanceof Element&&n(l)&&k.push(l);if(l instanceof DocumentFragment)for(l=l.firstChild;l;l=l.nextSibling)d.push(l);else d.push(l)}a.apply(this,c);for(c=0;c<k.length;c++)B(b,k[c]);if(n(this))for(c=0;c<d.length;c++)k=d[c],k instanceof Element&&z(b,k)}}V&&(a.before=d(V));V&&(a.after=d(oa));pa&&u(a,"replaceWith",function(a){for(var e=
[],c=0;c<arguments.length;++c)e[c-0]=arguments[c];for(var c=[],d=[],k=0;k<e.length;k++){var g=e[k];g instanceof Element&&n(g)&&d.push(g);if(g instanceof DocumentFragment)for(g=g.firstChild;g;g=g.nextSibling)c.push(g);else c.push(g)}k=n(this);pa.apply(this,e);for(e=0;e<d.length;e++)B(b,d[e]);if(k)for(B(b,this),e=0;e<c.length;e++)d=c[e],d instanceof Element&&z(b,d)});qa&&u(a,"remove",function(){var a=n(this);qa.call(this);a&&B(b,this)})};function xa(){var b=X;function a(a,c){Object.defineProperty(a,"innerHTML",{enumerable:c.enumerable,configurable:!0,get:c.get,set:function(a){var e=this,d=void 0;n(this)&&(d=[],t(this,function(a){a!==e&&d.push(a)}));c.set.call(this,a);if(d)for(var f=0;f<d.length;f++){var r=d[f];1===r.__CE_state&&b.disconnectedCallback(r)}this.ownerDocument.__CE_hasRegistry?C(b,this):x(b,this);return a}})}function d(a,c){u(a,"insertAdjacentElement",function(a,e){var d=n(e);a=c.call(this,a,e);d&&B(b,e);n(a)&&z(b,e);
return a})}O&&u(Element.prototype,"attachShadow",function(a){return this.__CE_shadowRoot=a=O.call(this,a)});if(P&&P.get)a(Element.prototype,P);else if(W&&W.get)a(HTMLElement.prototype,W);else{var c=H.call(document,"div");w(b,function(b){a(b,{enumerable:!0,configurable:!0,get:function(){return I.call(this,!0).innerHTML},set:function(a){var b="template"===this.localName?this.content:this;for(c.innerHTML=a;0<b.childNodes.length;)L.call(b,b.childNodes[0]);for(;0<c.childNodes.length;)J.call(b,c.childNodes[0])}})})}u(Element.prototype,
"setAttribute",function(a,c){if(1!==this.__CE_state)return R.call(this,a,c);var e=Q.call(this,a);R.call(this,a,c);c=Q.call(this,a);b.attributeChangedCallback(this,a,e,c,null)});u(Element.prototype,"setAttributeNS",function(a,c,d){if(1!==this.__CE_state)return U.call(this,a,c,d);var e=T.call(this,a,c);U.call(this,a,c,d);d=T.call(this,a,c);b.attributeChangedCallback(this,c,e,d,a)});u(Element.prototype,"removeAttribute",function(a){if(1!==this.__CE_state)return S.call(this,a);var c=Q.call(this,a);S.call(this,
a);null!==c&&b.attributeChangedCallback(this,a,c,null,null)});u(Element.prototype,"removeAttributeNS",function(a,c){if(1!==this.__CE_state)return ka.call(this,a,c);var d=T.call(this,a,c);ka.call(this,a,c);var e=T.call(this,a,c);d!==e&&b.attributeChangedCallback(this,c,d,e,a)});sa?d(HTMLElement.prototype,sa):la?d(Element.prototype,la):console.warn("Custom Elements: `Element#insertAdjacentElement` was not patched.");Y(b,Element.prototype,{h:ma,append:na});wa(b)};/*

 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var Z=window.customElements;if(!Z||Z.forcePolyfill||"function"!=typeof Z.define||"function"!=typeof Z.get){var X=new v;ta();ua();Y(X,DocumentFragment.prototype,{h:ia,append:ja});va();xa();document.__CE_hasRegistry=!0;var customElements=new G(X);Object.defineProperty(window,"customElements",{configurable:!0,enumerable:!0,value:customElements})};
}).call(self);

//# sourceMappingURL=custom-elements.min.js.map


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const {HTMLElement} = window
const evaluate = __webpack_require__(2)

module.exports = class MnInput extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.delimeterKeys = ['Comma', 'Enter', 'Space']
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this.trimValue = true
    this._setStyle()
    this._setInput()
    this.setChangeEvents()
    this._setPlaceholder()
    this._setAttributeValue()
    this._setAttributeName()
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
      // 'readonly',
      'maxlength',
      'autocapitalize',
      'autofocus',
    ]
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  _setStyle() {
    this.classList.add('mn-input')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.classList.add('input')

    this.appendChild(this.input)

    this.input.addEventListener('input', () => {
      this.hasAttribute('value') || this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    this.input.addEventListener('change', () => { // set class .has-value
      if (this.trimValue && document.activeElement !== this.input) {
        this.input.value = this.input.value.replace(/\s{2,}/g, ' ').trim()
      }

      this.dispatchChangeEvent()

      this.hasAttribute('value') || this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    this.input.addEventListener('keydown', (event) => {
      const isDelimeterKey = this.delimeterKeys.find(key => key === event.code)
      if (this.hasAttribute('multiple') && isDelimeterKey) {
        this.input.dispatchEvent(new Event('blur'))
        event.preventDefault()
      }
    })

    this.input.addEventListener('blur', () => {
      if (this.input.value && this.hasAttribute('multiple')) {
        if (this.delimeterKeys.length) {
          this.push(this.input.value)
        }
        this.input.value = ''
      }

      this.hasAttribute('value') || this.input.value
        ? this.classList.add('has-value')
        : this.classList.remove('has-value')
    })

    const validate = () => { // validate
      const closestForm = this.closest('form') || this.closest('mn-form')
      closestForm && closestForm.classList.contains('submitted')
        ? this.validate()
        : null
    }

    this.input.addEventListener('keyup', validate)
    this.input.addEventListener('change', validate)
    this.input.addEventListener('input', validate)

    this.input.addEventListener('focus', () => {
      if (!this.hasAttribute('readonly') && !this.hasAttribute('disabled')) {
        this.classList.add('focus')
      }
    })

    this.input.addEventListener('blur', () => this.classList.remove('focus'))
  }

  setChangeEvents() {
    this.input.addEventListener('input', this.dispatchChangeEvent)
    this.input.addEventListener('blur', this.dispatchChangeEvent)
  }

  dispatchChangeEvent() {
    this.dispatchEvent(new Event('change'))
  }

  _setPlaceholder() {
    this.label = document.createElement('label')
    this.label.classList.add('placeholder')
    this.appendChild(this.label)
    this.placeholder = this.getAttribute('placeholder')
  }

  _setAttributeValue() {
    this.value = evaluate(this.getAttribute('value') || '')
    this.default = this.value
  }

  _setAttributeName() {
    const name = this.getAttribute('name')
    if (name) {
      this.name = name
    }
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
      required: () => this.hasAttribute('multiple')
        ? this.value.length === 0
        : this.value === undefined,
      pattern: () => {
        const reg = new RegExp(this.getAttribute('pattern'))

        return this.value
          ? !reg.test(this.value)
          : false
      },
    }
  }

  get value() {
    return this.hasAttribute('multiple')
      ? evaluate(this.getAttribute('value'))
        ? evaluate(this.getAttribute('value')).map(item => String(item))
        : []
      : this.input.value || undefined
  }

  set value(value = '') {
    if (this.input) {
      const differentValue = this.getAttribute('value') !== value
      const valueIsMultiple = this.hasAttribute('multiple')

      if (!valueIsMultiple) {
        this.input.value = value
      }

      if (differentValue) {
        if (valueIsMultiple) {
          Array
            .from(this.querySelectorAll('.value'))
            .forEach(item => item.parentNode.removeChild(item))

          const values = Array.isArray(value)
            ? value.map(item => String(item))
            : [value]

          values
            .filter(item => item)
            .forEach(val => this.push(val))
        } else {
          this.input.value = value

          if (document.activeElement !== this.input) {
            this.input.value = this.trimValue && value
              ? value.replace(/\s{2,}/g, ' ').trim()
              : value
          }
        }

        this.input.dispatchEvent(new Event('change'))
      }
    }
  }

  set name(value) {
    const form = this.closest('form') || this.closest('mn-form')
    const name = this.getAttribute('name')
    const element = this

    if (form && !form[name]) {
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
    if (this.label) {
      this.label.textContent = value
    }
  }

  set disabled(value) {
    if (this.input) {
      this.input.disabled = value || this.hasAttribute('disabled')
    }
  }

  set readonly(value) {
    this.input.readOnly = value || this.hasAttribute('readonly')
  }

  set maxlength(value) {
    if (this.input) {
      value
        ? this.input.setAttribute('maxlength', value)
        : this.input.removeAttribute('maxlength')
    }
  }

  set autocapitalize(value) {
    if (this.input) {
      value
        ? this.input.setAttribute('autocapitalize', value)
        : this.input.removeAttribute('autocapitalize')
    }
  }

  set autofocus(value) {
    if (this.input) {
      this.input.autofocus = value || this.hasAttribute('autofocus')
    }
  }

  blur() {
    this.input.blur()
  }

  focus() {
    // this.input.dispatchEvent(new Event('touchstart'))
    // this.input.dispatchEvent(new Event('touchsend'))
    this.input.focus()
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

  push(value, text) {
    const values = Array
      .from(this.querySelectorAll('.value'))
      .map(item =>
        item.hasAttribute('value')
          ? item.getAttribute('value')
          : item.textContent
      )

    const attributeValue = this.getAttribute('value')

    const itemUsed = values.find(item => item === value)
    this.classList.add('has-value')

    if (!itemUsed) {
      const item = document.createElement('div')
      const buttonClose = document.createElement('button')
      buttonClose.addEventListener('click', event => this.remove(event.target.parentNode))
      item.classList.add('value')
      item.textContent = text || value[this.keyValue] || value
      item.appendChild(buttonClose)
      value = typeof value === 'string'
        ? evaluate(value)
        : value

      item.setAttribute('value', typeof value === 'object' ? JSON.stringify(value) : value)
      this.insertBefore(item, this.input)

      const values = Array
        .from(this.querySelectorAll('.value'))
        .map(item => evaluate(item.getAttribute('value')) || item.textContent)

      if (this.hasAttribute('multiple')) {
        this.setAttribute('value', JSON.stringify(values))
      }
    }

    const changeAttributeValue = attributeValue !== this.getAttribute('value')

    if (changeAttributeValue) {
      this.dispatchEvent(new Event('change'))
    }
  }

  remove(item) {
    item.parentNode.removeChild(item)

    const values = Array
      .from(this.querySelectorAll('.value'))
      .map(item => {
        return item.hasAttribute('value')
          ? evaluate(item.getAttribute('value'))
          : item.textContent
      })

    values.length
        ? this.setAttribute('value', JSON.stringify(values))
        : this.removeAttribute('value')

    this.input.dispatchEvent(new Event('change'))
    this.dispatchEvent(new Event('change'))
    this.input.value = ''
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// const string = evaluateString('string')
// const number = evaluateString('5')
// const booleanFalse = evaluateString('false')
// const booleanTrue = evaluateString('true')
// const array = evaluateString('[1, 2]')
// const object = evaluateString(`{id: 1, name: 'snow'}`)
// const json = evaluateString('{"id": 1, "name": "snow"}')

module.exports = evaluateString

function evaluateString(value) {
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnActionSheetCustomElement()

function MnActionSheetCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-action-sheet')) {
    window.customElements.define('mn-action-sheet', __webpack_require__(10))
  }

  return window.customElements.get('mn-action-sheet')
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const {HTMLElement} = window
const evaluate = __webpack_require__(2)

module.exports = class MnCheckbox extends HTMLElement {
  constructor(self) {
    self = super(self)
    this.ready = false
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    this._setLabel()
    this._setInput()
    this._setCustomInput()
    this._setForm()
    this.checked = this.hasAttribute('checked')
    this.disabled = this.hasAttribute('disabled')
    this.readonly = this.hasAttribute('readonly')
    this.name = this.hasAttribute('name')
    this._setValidations()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'disabled',
      'readonly',
      'autofocus',
    ]
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode && this.input && this.ready) {
      this[name] = value || this.hasAttribute(name)
    }
  }

  _setStyle() {
    this.classList.add('mn-checkbox')
    this.classList.add('mn-option')
  }

  _setLabel() {
    this.label = document.createElement('label')
    this.appendChild(this.label)

    this.label.addEventListener('mouseleave', () => {
      this.input.blur()
    })

    document.addEventListener('click', event => {
      const isLabel = event.target.tagName === 'LABEL'
        && event.target.getAttribute('for') === this.id

      if (isLabel && this.id) {
        this.input.checked = !this.input.checked
        this.input.dispatchEvent(new Event('change'))
      }
    })
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.setAttribute('type', 'checkbox')
    this.label.appendChild(this.input)

    this.addEventListener('click', () => {
      setTimeout(() => {
        this.input.blur()
      }, 0)
    })

    this.input.addEventListener('change', () => {
      this.checked
        ? this.setAttribute('checked', '')
        : this.removeAttribute('checked')

      this.form && this.form.classList && this.form.classList.contains('submitted')
        ? this.validate()
        : null
    })
  }

  _setCustomInput() {
    const input = document.createElement('div')
    input.classList.add('input')

    const vector = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
    vector.innerHTML = `
      <g
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
        stroke-linecap="round"
        stroke-linejoin="round">
          <g
            x="50%" y="50%"
            transform="translate(5, 5)"
            stroke-width="2">
              <polyline
                points="12.3825 0.581533333 3.653 10.3935333 0.273722222 6.7386"></polyline>
          </g>
      </g>
    `
    input.appendChild(vector)
    this.label.appendChild(input)
  }

  _setForm() {
    this.form = this.closest('form') || this.closest('mn-form') || document
  }

  _setValidations() {
    this.validations = {
      required: () => {
        return Array.isArray(this.value)
          ? !this.value.some(value =>
            value === evaluate(this.getAttribute('value')) || value === this.getAttribute('placeholder')
          )
          : !this.value
      },
    }
  }

  get checked() {
    return this.input.checked
  }

  set checked(value) {
    this.input.checked = value
    this.input.dispatchEvent(new Event('change'))
  }

  set disabled(value) {
    this.input.disabled = value
  }

  set readonly(value) {
    this.input.readOnly = value
  }

  set name(value) {
    const name = this.getAttribute('name')

    if (name) {
      const element = this
      this.input.setAttribute('name', name)

      if (this.form && !this.form[name]) {
        Object.defineProperty(this.form, name, {
          get: () => {
            return element.getAttribute('name')
              ? element
              : undefined
          },
        })
      }
    }
  }

  get value() {
    const values = this
      .options
      .filter(option => option.checked)
      .map(option => !option.hasAttribute('value') && !option.hasAttribute('placeholder')
        ? this.checked
        : option.hasAttribute('value')
          ? evaluate(option.getAttribute('value'))
          : option.getAttribute('placeholder')
      )

    const isSingleOption = this.options.length === 1
    const isBoolean = typeof evaluate(this.options[0].getAttribute('value')) === 'boolean'
      || !this.options[0].hasAttribute('value') && !this.options[0].hasAttribute('placeholder')

    return isSingleOption && isBoolean
      ? Boolean(values[0])
      : values
  }

  set value(value) {
    const values = Array.isArray(value)
      ? value
      : [value]

    this
      .options
      .forEach(option => {
        const check = values.some(value =>
          value === option.getAttribute('value') || value === evaluate(option.getAttribute('value'))
        )
        // console.log(value === true, check)
        check
          ? option.setAttribute('checked', '')
          : option.removeAttribute('checked')
        option.checked = check
      })
  }

  get options() {
    const name = this.getAttribute('name')
      ? `[name="${this.getAttribute('name')}"]`
      : ':not([name])'

    return Array.from(this.form.querySelectorAll(`.mn-checkbox${name}`))
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
/* 5 */
/***/ (function(module, exports) {

/* global angular */

angular
  .module('minimalist')
  .directive('mnCheckbox', MnCheckboxDirective)

module.exports = MnCheckboxDirective

function MnCheckboxDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes, ngModel) {
      const component = element[0]

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}

      element.ready(() => {
        component.ready = true
        scope.$watch(attributes.ngModel, setComponentValue)
        component.value = ngModel.$modelValue
        component.input.addEventListener('change', setModelValue)
        ngModel.$setViewValue(component.value)
      })

      scope.$on('$destroy', () => {
        element.remove()
      })

      function setComponentValue(value, oldValue) {
        if (!angular.equals(value, oldValue)) {
          component.value = value
        }
      }

      function setModelValue() {
        const modelApplied = angular.equals(ngModel.$modelValue, component.value)
        if (!modelApplied) {
          ngModel.$setViewValue(component.value)
        }
      }
    }
  }
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)
const MnActionSheet = __webpack_require__(3)
const evaluate = __webpack_require__(2)

module.exports = class MnSelect extends MnInput {
  constructor(self) {
    self = super(self)
    this.delimeterKeys = []
    return self
  }

  connectedCallback() {
    this.empty()
    this._setStyle()
    this._setInput()
    super._setPlaceholder()
    this._setMenu()
    this._setActionSheet()
    this._setOptions()
    this._setKeyboardNavigation()
    this._setAttributeValue()
    super._setAttributeName()
    super._setAttributeDisabled()
    super._setAttributeReadonly()
    super._setAttributeAutofocus()
    super._setAttributeAutocomplete()
    super._setAttributeSpellcheck()
    this._setValidations()
  }

  disconnectedCallback() {
    if (this.actionSheet) {
      this.actionSheet.parentNode.removeChild(this.actionSheet)
    }
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

  empty() {
    Array
      .from(this.children)
      .forEach(children => {
        if (children.tagName !== 'OPTION') {
          this.removeChild(children)
        }
      })
  }

  cleanOptions() {
    const options = this.querySelectorAll('option')
    Array
      .from(options)
      .forEach(option => this.removeChild(option))
  }

  _setOptions() {
    Array
      .from(this.querySelectorAll('option'))
      .forEach(option => {
        const hasAngularAttribute = Array
          .from(option.attributes)
          .some(attribute => attribute.name.startsWith('ng-'))

        if (!hasAngularAttribute) {
          this.addOption(option)
        }
      })

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const addedNode = mutation.addedNodes[0]
        const removedNode = mutation.removedNodes[0]
        const addOption = addedNode && addedNode.tagName === 'OPTION'
        const removeOption = removedNode && removedNode.tagName === 'OPTION'
        if (addOption) {
          this.addOption(addedNode)

          const isObjectValue = typeof this.value === 'object'
            && typeof evaluate(this.getAttribute('value')) === 'object'

          const isOptionSelected = addedNode.getAttribute('value') === this.getAttribute('value')
            || addedNode.textContent === this.getAttribute('value')
            || isObjectValue && this.value.id
              ? this.value.id === evaluate(addedNode.getAttribute('value')).id
              : false

          if (isOptionSelected && !this.classList.contains('focus')) {
            this.input.value = addedNode.textContent
            this.classList.add('has-value')
          }
        }

        if (removeOption) {
          this.removeOption(removedNode)
        }
      })
    })

    observer.observe(this, {
      attributes: false,
      childList: true,
      characterData: false,
    })

    document.addEventListener('mousedown', (event) => {
      const isOption = event.target.classList.contains('option')
        && event.target.closest('.mn-select') === this

      if (isOption) {
        event.stopPropagation()
        event.preventDefault()

        const value = event.target.getAttribute('value') || event.target.textContent
        const text = event.target.textContent

        if (this.hasAttribute('multiple')) {
          this.push(value, text)
        } else {
          this.value = value
          this.input.blur()
        }
      }
    })

    document.addEventListener('mousemove', (event) => {
      const isOption = event.target.classList && event.target.classList.contains('option')
        && event.target.closest('.mn-select') === this

      if (isOption) {
        if (!this.keyboardNavigation) {
          this.focusOption(event.target)
        }
      }
    })
  }

  addOption(value) {
    const option = document.createElement('div')
    option.classList.add('option')
    option.innerHTML = value.textContent
    const focusedOption = this.menu.querySelector('.option.focus')

    if (!focusedOption) {
      option.classList.add('focus')
    }

    if (value.hasAttribute('selected')) {
      option.setAttribute('selected', '')
    }

    option.innerHTML = value.textContent
      .split('')
      .map(char => `<span class="char" data-char="${char.toLowerCase()}">${char}</span>`)
      .join('')

    if (value.hasAttribute('value')) {
      option.setAttribute('value', value.getAttribute('value'))
    }

    this.menu.appendChild(option)

    if (this.actionSheet) {
      const actionSheetOption = document.createElement('div')
      actionSheetOption.classList.add('option')
      actionSheetOption.textContent = option.textContent
      this.actionSheet.menu.appendChild(actionSheetOption)
    }

    this.filter = this.filter
  }

  removeOption(value) {
    const option = Array
      .from(this.menu.querySelectorAll('.option'))
      .find(option => option.textContent === value.textContent)

    if (option) {
      this.menu.removeChild(option)
    }

    if (this.actionSheet) {
      const actionSheetOption = Array
        .from(this.actionSheet.menu.querySelectorAll('.option'))
        .find(option => option.textContent === value.textContent)

      if (actionSheetOption) {
        this.actionSheet.menu.removeChild(actionSheetOption)
      }
    }
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
          const optionValue = option.hasAttribute('value')
            ? option.getAttribute('value')
            : option.textContent
          return optionValue === this.getAttribute('value')
        })[0]

      if (this.input.value && option) {
        this.input.value = option.textContent
      } else if (this.hasAttribute('multiple')) {
        this.input.value = ''
        this.filter = ''
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
      const clickOutside = !event.target.closest('.mn-select') && event.target !== this

      if (this.visible && clickOutside) {
        this.hide()
      }
    })
  }

  _setAttributeValue() {
    Array
      .from(this.querySelectorAll('.option[selected]'))
      .forEach(option => {
        const value = option.getAttribute('value') || option.textContent
        this.hasAttribute('multiple')
          ? this.push(value, option.textContent)
          : this.value = value
      })
  }

  _setMenu() {
    const menu = document.createElement('menu')
    menu.classList.add('mn-card')

    this.appendChild(menu)
    this.menu = menu
  }

  _setActionSheet() {
    if (screen.width < 768) {
      const actionSheet = new MnActionSheet()
      this.actionSheet = actionSheet
      this.actionSheet.addEventListener('change', (event) => {
        const {index} = event.data
        const option = this.menu.querySelector(`.option:nth-child(${index + 1})`)
        const value = option.getAttribute('value') || option.textContent

        this.hasAttribute('multiple')
          ? this.push(value, option.textContent)
          : this.value = value
        this.actionSheet.hide()
      })
      document.body.appendChild(this.actionSheet)
    }
  }

  _setKeyboardNavigation() {
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

    this.input.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'
      const option = this.menu.querySelector('.option.focus')

      if (enter) {
        event.preventDefault()
        event.stopPropagation()
      }

      if (enter && option) {
        const value = option
          ? option.getAttribute('value') || option.textContent
          : this.value

        this.hasAttribute('multiple')
          ? this.push(value, option.textContent)
          : this.value = value

        if (this.hasAttribute('multiple')) {
          this.input.value = ''
        } else {
          this.hide()
          this.input.blur()
        }
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
  }

  _setValidations() {
    super._setValidations()
    this.validations.required = () => {
      return this.hasAttribute('multiple')
        ? this.value.length === 0
        : this.value === undefined
    }
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
    const value = this.getAttribute('value')
      ? evaluate(this.getAttribute('value'))
      : undefined

    return this.hasAttribute('multiple') && !value
      ? []
      : value
  }

  set value(value) {
    const valueIsMultiple = this.hasAttribute('multiple')
    const differentValue = typeof value === 'object'
      ? this.getAttribute('value') !== JSON.stringify(value)
      : this.getAttribute('value') !== value
    const option = Array
      .from(this.querySelectorAll('option'))
      .filter(option => {
        return option.getAttribute('value') === String(value)
          || option.getAttribute('value') === JSON.stringify(value)
          || option.textContent === String(value)
      })[0]

    const textNotApplied = option && this.input.value !== option.textContent

    if (textNotApplied) {
      this.input.value = option && !this.hasAttribute('multiple')
        ? option.textContent
        : ''

      this.input.dispatchEvent(new Event('change'))
    }

    if (differentValue) {
      const search = new Event('search')
      search.query = typeof value === 'string'
        ? evaluate(value)
        : ''

      this.dispatchEvent(search)

      const hasValue = value !== undefined && value !== null && value !== '' && value.length !== 0

      const optionValue = option
        ? option.hasAttribute('value')
          ? evaluate(option.getAttribute('value'))
          : option.textContent
        : evaluate(JSON.stringify(value))

      hasValue
        ? this.setAttribute('value', typeof optionValue === 'object'
          ? JSON.stringify(optionValue)
          : optionValue)
        : this.removeAttribute('value')

      if (valueIsMultiple) {
        Array
          .from(this.querySelectorAll('.value'))
          .forEach(item => item.parentNode.removeChild(item))

        const values = Array.isArray(evaluate(value))
          ? evaluate(value)
          : [value].filter(item => item)

        values.forEach(val => {
          const option = Array
            .from(this.querySelectorAll('option'))
            .filter(option => {
              return option.getAttribute('value') === String(val)
                || option.getAttribute('value') === JSON.stringify(val)
                || option.textContent === String(val)
            })[0]

          const text = option
            ? option.textContent
            : undefined
          this.push(val, text)
        })
      }

      this.input.dispatchEvent(new Event('change'))
    }

    if (!this.hasAttribute('value')) {
      this.input.value = ''
      this.input.dispatchEvent(new Event('change'))
    }
  }

  get filter() {
    return this.input.value
  }

  set filter(value) {
    if (value) {
      this.classList.add('filtered')

      try {
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
              option.classList.remove('focus')
              option.classList.add('hidden')
            }
          })
      } catch (error) {
        console.log(error)
      }
    } else {
      this.classList.remove('filtered')
      Array
        .from(this.querySelectorAll('.option.hidden'))
        .forEach(option => option.classList.remove('hidden'))
    }
  }
}


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

/* global angular */

angular.module('minimalist', [])

module.exports = {
  input: __webpack_require__(25),
  form: __webpack_require__(21),
  checkbox: __webpack_require__(5),
  radio: __webpack_require__(34),
}


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  input: __webpack_require__(26),
  email: __webpack_require__(19),
  password: __webpack_require__(32),
  hidden: __webpack_require__(24),
  number: __webpack_require__(30),
  date: __webpack_require__(15),
  select: __webpack_require__(38),
  actionSheet: __webpack_require__(3),
  form: __webpack_require__(22),
  sidenav: __webpack_require__(40),
  checkbox: __webpack_require__(13),
  radio: __webpack_require__(35),
  dialog: __webpack_require__(17),
  button: __webpack_require__(12),
  search: __webpack_require__(37),
  list: __webpack_require__(28),
}


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(8) // main file of minimalist
__webpack_require__(7) // directives

angular.module('app', [
  'minimalist',
])

angular
  .module('app')
  .controller('HomeController', HomeController)

function HomeController() {
  this.name = 'darlan'
  // this.houses = ['stark', 'lannister', 'targaryen']
  this.houses = 'stark'
  this.number = 10
  this.numbers = [10, 20, 30, .5]
}

angular
  .module('app')
  .directive('houses', HousesSearchDirective)

function HousesSearchDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes) {

      element.bind('search', search)

      function search(event) {
        const params = new URLSearchParams()
        params.append('query', event.query)
        const houses = new Request(`http://localhost:4000/houses`)

        event.target
          .fetch(houses)
          .then(response => response.json())
          .then(setOptions)

        function setOptions(response) {
          const houses = response

          houses.forEach(house => {
            const option = document.createElement('option')
            option.textContent = house
            option.setAttribute('value', house.toLowerCase())

            event.target.appendChild(option)
          })
        }
      }
    }
  }
}


/***/ }),
/* 10 */
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
      .forEach(child => {
        const option = document.createElement('div')
        option.classList.add('option')
        option.innerHTML = child.textContent

        Array
          .from(child.attributes)
          .forEach(attr => option.setAttribute(attr.name, attr.value))

        child.parentNode.removeChild(child)
        menu.appendChild(option)
      })

    document.addEventListener('click', event => {
      const isOption = event.target.classList.contains('option') && event.target.closest('.mn-action-sheet')
      const index = Array.prototype.indexOf.call(this.menu.querySelectorAll('.option'), event.target)

      if (isOption && index >= 0) {
        const changeEvent = new Event('change')
        changeEvent.data = {index}
        this.dispatchEvent(changeEvent)
      }
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
/* 11 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnButton extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setButton()
  }

  setStyle() {
    this.classList.add('mn-button')
  }

  setButton() {
    this.setAttribute('tabindex', '0')
    this.addEventListener('click', () => this.blur())

    document.addEventListener('keyup', (event) => {
      if (event.target === this && event.key === 'Enter') {
        this.click()
      }
    })
  }
}


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnSidenavCustomElement()

function MnSidenavCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-button')) {
    window.customElements.define('mn-button', __webpack_require__(11))
  }

  return window.customElements.get('mn-button')
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnCheckboxCustomElement()

function MnCheckboxCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-checkbox')) {
    window.customElements.define('mn-checkbox', __webpack_require__(4))
  }

  return window.customElements.get('mn-checkbox')
}


/***/ }),
/* 14 */
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
    super.setChangeEvents()
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
    this.validations.required = () => this.value === undefined
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnDateCustomElement()

function MnDateCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-date')) {
    window.customElements.define('mn-date', __webpack_require__(14))
  }

  return window.customElements.get('mn-date')
}


/***/ }),
/* 16 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnDialog extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setCard()
    this.setButtonClose()
    this.setOpenEvents()
    this.setToggleEvents()
    this.setCloseEvents()
  }

  setStyle() {
    this.classList.add('mn-dialog')
    document.body.classList.add('mn-backdrop')
  }

  setCard() {
    const card = document.createElement('div')
    card.classList.add('mn-card')
    card.innerHTML = this.innerHTML
    this.innerHTML = ''
    this.appendChild(card)
    this.card = card
  }

  setButtonClose() {
    const button = document.createElement('button')
    button.classList.add('mn-button')
    button.classList.add('action')
    button.setAttribute('close-dialog', '')
    const dialog = this.querySelector('.mn-card')
    dialog.insertBefore(button, dialog.firstChild)
  }

  setOpenEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[open-dialog="${this.id}"]`)) {
        this.open()
        event.stopPropagation()
      }
    })
  }

  setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-dialog="${this.id}"]`)) {
        this.toggle()
        event.stopPropagation()
      }
    })
  }

  setCloseEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[close-dialog]')) {
        this.close()
        event.stopPropagation()
      }
    })

    document.addEventListener('mousedown', event => {
      const dialogVisible = this.classList.contains('visible')
      const clickOutside = event.target.matches('.mn-dialog')

      if (dialogVisible && clickOutside) {
        this.close()
      }
    })

    document.addEventListener('keyup', event => {
      const esc = event.key === 'Escape'
      const isOpened = this.classList.contains('visible')

      if (esc && isOpened) {
        this.close()
      }
    })
  }

  open() {
    const previousDialog = document.querySelector('.mn-dialog.visible')
    if (previousDialog) {
      previousDialog.classList.remove('visible')
    }

    this.classList.add('visible')
    this.scrollTop = 0
    document.body.classList.add('mn-dialog-visible')
    document.body.classList.add('mn-backdrop-visible')
    this.dispatchEvent(new Event('open'))
  }

  close() {
    document.body.classList.remove('mn-dialog-visible')
    this.classList.remove('visible')
    document.body.classList.remove('mn-backdrop-visible')
    this.dispatchEvent(new Event('close'))
  }

  toggle() {
    this.classList.toggle('visible')
      ? this.open()
      : this.close()
  }
}


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnDialogCustomElement()

function MnDialogCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-dialog')) {
    window.customElements.define('mn-dialog', __webpack_require__(16))
  }

  return window.customElements.get('mn-dialog')
}


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)

module.exports = class MnEmail extends MnInput {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    super.connectedCallback()
    this.classList.add('mn-email')
    this.input.setAttribute('type', 'email')
    const regex = '^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*'
    this.setAttribute('pattern', this.getAttribute('pattern') || regex)
  }
}


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnEmailCustomElement()

function MnEmailCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-email')) {
    window.customElements.define('mn-email', __webpack_require__(18))
  }

  return window.customElements.get('mn-email')
}


/***/ }),
/* 20 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnForm extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setSubmit()
    this.setReset()
    this.setEmpty()
    this.setAttributeDisabled()
    this.setAttributeReadonly()
  }

  static get observedAttributes() {
    return [
      'name',
      'disabled',
      'readonly',
    ]
  }

  attributeChangedCallback(name, old, value) {
    this[name] = value
  }

  setStyle() {
    this.classList.add('mn-form')
  }

  setSubmit() {
    document.addEventListener('keydown', (event) => {
      const enter = event.key === 'Enter'
      const srcElementInsideForm = event.target.closest('mn-form')
      if (enter && srcElementInsideForm) {
        this.submit()
      }
    })

    document.addEventListener('click', (event) => {
      const isButtonSubmit = (event.target.matches('button[type="submit"]')
        || event.target.matches('mn-button[submit]'))
        && event.target.closest('mn-form') === this

      if (isButtonSubmit) {
        this.submit()
      }
    })
  }

  setReset() {
    document.addEventListener('click', (event) => {
      const isButtonSubmit = (event.target.matches('button[type="reset"]')
        || event.target.matches('mn-button[reset]'))
        && event.target.closest('mn-form') === this

      if (isButtonSubmit) {
        this.reset()
      }
    })
  }

  setEmpty() {
    document.addEventListener('click', (event) => {
      const isButtonSubmit = (event.target.matches('button[type="empty"]')
        || event.target.matches('mn-button[empty]'))
        && event.target.closest('mn-form') === this

      if (isButtonSubmit) {
        this.empty()
      }
    })
  }

  setAttributeDisabled() {
    this.disabled = this.hasAttribute('disabled')
  }

  setAttributeReadonly() {
    this.readonly = this.hasAttribute('readonly')
  }

  validate() {
    this.dispatchEvent(new Event('validate'))
    this.inputs
      .filter(input => !input.hasAttribute('disabled') && !input.hasAttribute('readonly'))
      .forEach(input => input.validate())

    const isInvalid = !this.querySelector('.invalid')
    return isInvalid
  }

  reset() {
    this.classList.remove('submitted')
    Object
      .keys(this.data)
      .forEach(name => {
        if (this[name]) {
          this[name].value = this.defaults[name]

          const validations = Object.keys(this[name].validations)
          validations.push('invalid')
          validations.forEach(validationClass => this[name].classList.remove(validationClass))
        }
      })
  }

  empty() {
    this.classList.remove('submitted')
    Object
      .keys(this.data)
      .forEach(name => {
        this[name].value = undefined
      })
  }

  get inputs() {
    return Array.from(this.querySelectorAll('.mn-input, .mn-checkbox, .mn-radio'))
  }

  get defaults() {
    const defaults = {}

    this.inputs
      .forEach(input => {
        const name = input.getAttribute('name')

        if (name) {
          defaults[name] = input.default
        }
      })

    return defaults
  }

  get data() {
    const data = {}

    this.inputs
      .forEach(input => {
        const name = input.getAttribute('name')

        if (name) {
          data[name] = input.value
        }
      })

    return data
  }

  set name(name) {
    if (name && typeof name === 'string') {
      window[name] = this
    }
  }

  set disabled(value) {
    this.inputs
      .forEach(input => {
        this.hasAttribute('disabled')
          ? input.setAttribute('disabled', 'true')
          : input.removeAttribute('disabled')
      })
  }

  set readonly(value) {
    this.inputs
      .forEach(input => {
        this.hasAttribute('readonly')
          ? input.setAttribute('readonly', 'true')
          : input.removeAttribute('readonly')
      })
  }

  submit() {
    this.classList.add('submitted')
    const isValid = this.validate()
    const event = new Event('submit')
    event.data = this.data

    if (isValid) {
      this.dispatchEvent(event)
    }
  }
}


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/* global angular */

angular
  .module('minimalist')
  .directive('mnForm', MnFormDirective)

function MnFormDirective() {
  return {
    restrict: 'C',
    link(scope, element, attributes) {
      element.bind('submit', () => {
        scope.$eval(attributes.submit)
      })
    }
  }
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnFormCustomElement()

function MnFormCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-form')) {
    window.customElements.define('mn-form', __webpack_require__(20))
  }

  return window.customElements.get('mn-form')
}


/***/ }),
/* 23 */
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
    super.setChangeEvents()
    super._setAttributeValue()
    super._setAttributeName()
    super._setAttributeDisabled()
  }

  static get observedAttributes() {
    return [
      'value',
      'name',
      'disabled',
    ]
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-hidden')
  }

  _setInput() {
    super._setInput()
    this.input.setAttribute('type', 'hidden')
  }
}


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnHiddenCustomElement()

function MnHiddenCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-hidden')) {
    window.customElements.define('mn-hidden', __webpack_require__(23))
  }

  return window.customElements.get('mn-hidden')
}


/***/ }),
/* 25 */
/***/ (function(module, exports) {

/* global angular */

angular
  .module('minimalist')
  .directive('mnInput', MnInputDirective)

function MnInputDirective() {
  return {
    restrict: 'C',
    require: 'ngModel',
    link(scope, element, attributes, ngModel) {
      const component = element[0]

      if (!attributes.name) {
        const name = attributes.ngModel.split('.')[attributes.ngModel.split('.').length - 1]
        component.setAttribute('name', name)
      }

      ngModel.$validators = {}

      element.ready(() => {
        scope.$watch(attributes.ngModel, setComponentValue)
        component.value = component.hasAttribute('value')
          ? component.getAttribute('value')
          : ngModel.$modelValue
        component.default = component.value
        component.addEventListener('change', setModelValue)
        setModelValue()
      })

      scope.$on('$destroy', () => {
        const keys = attributes.ngModel.split('.')
        const prop = keys.pop()
        if (scope.$parent[keys[0]]) {
          const model = keys.reduce((obj, key) => obj[key], scope.$parent)
          delete model[prop]
        }
        element.remove()
      })

      function setComponentValue(value, oldValue) {
        if (component.hasAttribute('multiple')) {
          if (!angular.equals(value, oldValue) && !angular.isArray(value)) {
            component.value = value
          }
        } else if (angular.isDefined(value)) {
          component.value = value
        }
      }

      function setModelValue() {
        const componentExists = component.parentNode
        if (componentExists) {
          const modelApplied = angular.equals(ngModel.$modelValue, component.value)

          if (!modelApplied) {
            ngModel.$setViewValue(component.value)
          }
        }
      }
    }
  }
}


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnInputCustomElement()

function MnInputCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-input')) {
    window.customElements.define('mn-input', __webpack_require__(1))
  }

  return window.customElements.get('mn-input')
}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnList extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setCollapse()
  }

  setStyle() {
    this.classList.add('mn-list')
  }

  setCollapse() {
    document.addEventListener('click', event => {
      const item = event.target.closest('.mn-item[collapse]')
      const isItemCollapse = event.target.matches('.mn-item[collapse]')
        || item
            && event.target.tagName !== 'A'
            && event.target.tagName !== 'BUTTON'
            && event.target.tagName !== 'MN-BUTTON'
      const isListOwnerOfItem = event.target.closest('.mn-list') === this

      if (isItemCollapse && isListOwnerOfItem) {
        item.classList.contains('detail-visible')
          ? item.classList.remove('detail-visible')
          : item.classList.add('detail-visible')
        event.stopPropagation()
      }
    })
  }
}


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnDialogCustomElement()

function MnDialogCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-list')) {
    window.customElements.define('mn-list', __webpack_require__(27))
  }

  return window.customElements.get('mn-list')
}


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

const MnInput = __webpack_require__(1)
const evaluate = __webpack_require__(2)

module.exports = class MnNumber extends MnInput {
  constructor(self) {
    self = super(self)
    this.delimeterKeys = ['Enter', 'Space']
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    super._setInput()
    this.setChangeEvents()
    this._setMask()
    this._setMobileKeyboard()
    this._setInputTransforms()
    this._setInputKeys()
    super._setPlaceholder()
    super._setAttributeValue()
    super._setAttributeName()
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
      const commaOrDot = !this.input.value.endsWith(',')
        && !this.input.value.endsWith('.')

      if (commaOrDot) {
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
          this.input.value = ''
        }

        this.hasAttribute('percentage')
          ? this.updateMask()
          : null
      }
    })
  }

  setChangeEvents() {
    this.input.addEventListener('blur', this.dispatchChangeEvent)
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
    this.validations.required = () => this.hasAttribute('multiple')
      ? this.value.length === 0
      : this.value === undefined
    this.validations.min = () => this.value < this.getAttribute('min')
    this.validations.max = () => this.value > this.getAttribute('max')
    delete this.validations.pattern
  }

  get value() {
    const isUndefined = this.input.value === '' && !this.hasAttribute('value')
    const value = this.hasAttribute('value')
      ? this.getAttribute('value')
      : this.input.value
    const numberString = value.replace(/,/g, '.')

    const val = isUndefined
      ? undefined
      : this.hasAttribute('percentage')
        ? (numberString * 100) / 10000
        : parseFloat(numberString)

    if (isUndefined) {
      return undefined
    } else {
      if (this.hasAttribute('multiple')) {
        return evaluate(this.getAttribute('value'))
          ? evaluate(this.getAttribute('value')).map(item => +String(item).replace(',', '.'))
          : []
      } else {
        return this.hasAttribute('percentage')
          ? (numberString * 100) / 10000
          : parseFloat(numberString)
      }
    }

    return val
  }

  set value(value) {
    const valueIsMultiple = this.hasAttribute('multiple')
    const differentValue = this.getAttribute('value') !== value
    const hasValue = value !== ''

    if (this.input && hasValue && differentValue) {
      if (valueIsMultiple) {
        Array
          .from(this.querySelectorAll('.value'))
          .forEach(item => item.parentNode.removeChild(item))

        const values = Array.isArray(value)
          ? value.map(item => String(item))
          : [value].filter(item => item !== undefined)

        if (!values.length) {
          this.removeAttribute('value')
        }

        values
          .filter(item => item)
          .forEach(val => {
            // val = eval(String(val).replace(/,/g, '.'))

            // if (val !== undefined && differentValue) {
            //   val = this.hasAttribute('percentage')
            //     ? +(val * 100).toFixed(this.getAttribute('precision') || 2)
            //     : val
            // }
            this.push(val)
          })
      } else {
        try {
          value = eval(String(value).replace(/,/g, '.'))

          if (value !== undefined && differentValue) {
            value = this.hasAttribute('percentage')
              ? +(value * 100).toFixed(this.getAttribute('precision') || 2)
              : value
            this.input.value = value
          } else {
            this.input.value = ''
          }
        } catch (e) {
          this.input.value = ''
        }
      }

      this.input.dispatchEvent(new Event('change'))
      this.input.dispatchEvent(new Event('input'))
    }
  }

  set max(value) {
    if (this.label) {
      this.hasAttribute('max')
        ? this.label.setAttribute('max', value)
        : this.label.removeAttribute('max')
    }
  }

  set min(value) {
    if (this.label) {
      this.hasAttribute('min')
        ? this.label.setAttribute('min', value)
        : this.label.removeAttribute('min')
    }
  }

  updateMask() {
    const hasValue = this.input.value !== '' && !/^\s+$/.test(this.input.value)

    if (this.mask && this.hasAttribute('percentage')) {
      const text = hasValue
        ? `${this.input.value} %`
        : ''

      this.mask.textContent = text
    }
  }
}


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnNumberCustomElement()

function MnNumberCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-number')) {
    window.customElements.define('mn-number', __webpack_require__(29))
  }

  return window.customElements.get('mn-number')
}


/***/ }),
/* 31 */
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
    super.setChangeEvents()
    super._setPlaceholder()
    this._setVisibilityButton()
    super._setAttributeValue()
    super._setAttributeName()
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnPasswordCustomElement()

function MnPasswordCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-password')) {
    window.customElements.define('mn-password', __webpack_require__(31))
  }

  return window.customElements.get('mn-password')
}


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

const MnCheckbox = __webpack_require__(4)
const evaluate = __webpack_require__(2)

module.exports = class MnRadio extends MnCheckbox {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.innerHTML = ''
    this._setStyle()
    super._setLabel()
    this._setInput()
    this._setCustomInput()
    this._setForm()
    // this.checked = this.hasAttribute('checked')
    this.disabled = this.hasAttribute('disabled')
    this.readonly = this.hasAttribute('readonly')
    this.name = this.hasAttribute('name')
    this._setValidations()
  }

  _setStyle() {
    this.classList.add('mn-radio')
    this.classList.add('mn-option')
  }

  _setInput() {
    this.input = document.createElement('input')
    this.input.setAttribute('type', 'radio')
    this.label.appendChild(this.input)

    this.input.addEventListener('change', (event) => {
      this.checked
        ? this.setAttribute('checked', '')
        : this.removeAttribute('checked')

      this.options.forEach(option => {
        if (option !== event.target.closest('mn-radio')) {
          option.removeAttribute('checked')
          option.input.checked = false
        }

        option.form && option.form.classList && option.form.classList.contains('submitted')
          ? option.validate()
          : null
      })
    })
  }

  _setCustomInput() {
    const input = document.createElement('div')
    input.classList.add('input')

    this.label.appendChild(input)
  }

  _setValidations() {
    this.validations = {
      required: () => !this.value,
    }
  }

  get options() {
    const name = this.getAttribute('name')
      ? `[name="${this.getAttribute('name')}"]`
      : ':not([name])'

    return Array.from(this.form.querySelectorAll(`.mn-radio${name}`))
  }

  get value() {
    const value = this
      .options
      .filter(option => option.checked)
      .map(option => option.hasAttribute('value')
        ? evaluate(option.getAttribute('value'))
        : option.getAttribute('placeholder')
      )

    return value[0]
  }

  set value(value) {
    this.options.forEach(option => {
      option.checked = false
    })

    const option = this.options.find(option => evaluate(option.getAttribute('value')) === value)

    if (option) {
      option.checked = true
    }
  }
}


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

/* global angular */

angular
  .module('minimalist')
  .directive('mnRadio', MnRadioDirective)

module.exports = MnRadioDirective

function MnRadioDirective() {
  const MnCheckboxDirective = __webpack_require__(5)
  return MnCheckboxDirective()
}


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnRadioCustomElement()

function MnRadioCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-radio')) {
    window.customElements.define('mn-radio', __webpack_require__(33))
  }

  return window.customElements.get('mn-radio')
}


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

const MnSelect = __webpack_require__(6)

module.exports = class MnSearch extends MnSelect {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    super.connectedCallback()
    this.setLoading()
    this.setSearchSheet()
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-search')
  }

  setLoading() {
    const loading = document.createElement('div')
    loading.classList.add('loading')
    this.appendChild(loading)
  }

  setSearchSheet() {
    if (this.actionSheet) {
      this.actionSheet = undefined

      const dialog = document.createElement('mn-dialog')
      this.searchSheet = dialog
      this.searchSheet.classList.add('search-sheet')
      const input = document.createElement('mn-input')
      input.setAttribute('placeholder', 'Type to search')

      this.searchSheet.appendChild(input)
      document.body.appendChild(this.searchSheet)

      this.searchSheetInput = this.searchSheet.querySelector('mn-input')
      this.setSearchSheetList()

      this.searchSheetInput.addEventListener('input', () => {
        this.filter = event.target.value
        const search = new Event('search')
        search.query = event.target.value
        this.dispatchEvent(search)
      })

      this.input.addEventListener('focus', () => {
        this.blur()
        this.searchSheet.open()
        this.searchSheetInput.value = ''
        this.searchSheetInput.dispatchEvent(new Event('input'))
        setTimeout(() => {
          this.searchSheetInput.focus()
        }, 410)
      })

    }
  }

  setSearchSheetList() {
    this.searchSheetList = document.createElement('ul')
    this.searchSheetList.classList.add('mn-list')
    this.searchSheet.querySelector('.mn-card').appendChild(this.searchSheetList)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const addedNode = mutation.addedNodes[0]
        const removedNode = mutation.removedNodes[0]
        const addOption = addedNode && addedNode.tagName === 'OPTION'
        const removeOption = removedNode && removedNode.tagName === 'OPTION'

        if (addOption) {
          const item = document.createElement('div')
          item.classList.add('mn-item')
          item.textContent = addedNode.textContent
          item.setAttribute('value', addedNode.getAttribute('value') || addedNode.textContent)
          this.searchSheetList.appendChild(item)

          item.addEventListener('touchend', (event) => {
            this.searchSheet.close()
            this.value = event.target.getAttribute('value')
          })
        }

        if (removeOption) {
          const value = removedNode.getAttribute('value')
          const item = this.searchSheet.querySelector(`.mn-item[value="${value}"]`)
          item.parentNode.removeChild(item)
        }
      })
    })

    observer.observe(this, {
      attributes: false,
      childList: true,
      characterData: false,
    })
  }

  _setInput() {
    super._setInput()

    this.input.addEventListener('input', () => {
      const event = new Event('search')
      event.query = this.input.value
      this.dispatchEvent(event)
    })
  }

  fetch(request) {
    const requestType = typeof request
    const loader = requestType === 'function'
      ? request
      : () => fetch(request)

    this.classList.add('loading')

    return loader()
      .then(res => {
        this.cleanOptions()
        this.classList.remove('loading')
        this.dispatchEvent(new Event('loading'))

        return res
      })
  }
}


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnSelectCustomElement()

function MnSelectCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-search')) {
    window.customElements.define('mn-search', __webpack_require__(36))
  }

  return window.customElements.get('mn-search')
}


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnSelectCustomElement()

function MnSelectCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-select')) {
    window.customElements.define('mn-select', __webpack_require__(6))
  }

  return window.customElements.get('mn-select')
}


/***/ }),
/* 39 */
/***/ (function(module, exports) {

const {HTMLElement} = window

module.exports = class MnSidenav extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this._setStyle()
    this._setOpenEvents()
    this._setToggleEvents()
    this._setCloseEvents()
  }

  _setStyle() {
    this.classList.add('mn-sidenav')
    this.classList.add('mn-card')
    document.body.classList.add('mn-backdrop')
  }

  _setOpenEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[open-sidenav="${this.id}"]`)) {
        this.open()
        event.stopPropagation()
      }
    })
  }

  _setToggleEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches(`[toggle-sidenav="${this.id}"]`)) {
        this.toggle()
        event.stopPropagation()
      }
    })
  }

  _setCloseEvents() {
    document.addEventListener('click', event => {
      if (event.target.matches('[close-sidenav]')) {
        this.close()
        event.stopPropagation()
      }
    })

    document.addEventListener('click', event => {
      const clickOutside = !event.target.matches('[open-sidenav]')
        && !event.target.matches('[close-sidenav]')
        && !event.target.matches('[toggle-sidenav]')
        && !event.target.closest('mn-sidenav')
      const sidebarVisible = this.classList.contains('visible')

      if (clickOutside && sidebarVisible) {
        this.close()
      }
    })

    document.addEventListener('keyup', event => {
      const esc = event.key === 'Escape'
      const isOpened = this.classList.contains('visible')

      if (esc && isOpened) {
        this.close()
      }
    })
  }

  open() {
    const fontSizeHTML = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'))
    const activeElement = this.querySelector('.active')
    this.scrollTop = activeElement
      ? activeElement.offsetTop - fontSizeHTML * 1.5
      : 0
    this.classList.add('visible')
    document.body.classList.add('mn-sidenav-visible')
    document.body.classList.add('mn-backdrop-visible')
  }

  close() {
    document.body.classList.remove('mn-sidenav-visible')
    this.classList.remove('visible')
    document.body.classList.remove('mn-backdrop-visible')
  }

  toggle() {
    this.classList.toggle('visible')
      ? this.open()
      : this.close()
  }
}


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = MnSidenavCustomElement()

function MnSidenavCustomElement() {
  const supportsCustomElements = 'customElements' in window

  if (!supportsCustomElements) {
    __webpack_require__(0)
  }

  if (!window.customElements.get('mn-sidenav')) {
    window.customElements.define('mn-sidenav', __webpack_require__(39))
  }

  return window.customElements.get('mn-sidenav')
}


/***/ })
/******/ ]);
//# sourceMappingURL=vendor.js.map