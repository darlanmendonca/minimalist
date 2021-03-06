'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
class MnComponent extends window.HTMLElement {
  constructor(self) {
    super(self);
  }

  attributeChangedCallback(name, old, value) {
    if (this.parentNode) {
      this[name] = value;
    }

    if (this.inputChild) {
      this.inputChild.dispatchEvent(new Event('change'));
    }
  }

  setAttributes() {
    Array.from(this.attributes).forEach(attr => {
      const { observedAttributes } = this.constructor;
      const isObservedAttr = observedAttributes && observedAttributes.find(observed => observed === attr.name);

      if (isObservedAttr) {
        this[attr.name] = attr.value;
      }
    });
  }

  empty() {
    this.innerHTML = '';
  }

  setChildren(name, attributes = {}) {
    const children = document.createElement(name);
    this[`${name}Child`] = children;
    this.appendChild(children);

    Object.entries(attributes).forEach(([attribute, value]) => {
      children.setAttribute(attribute, value);
    });
  }

  is(attribute) {
    return this.hasAttribute(attribute) && this.getAttribute(attribute) !== 'false';
  }

  autofocus() {
    const inputAutofocus = this.querySelector('[autofocus]');

    if (inputAutofocus) {
      inputAutofocus.focus();
    }
  }
}

exports.default = MnComponent;