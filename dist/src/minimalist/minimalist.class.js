'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _class, _temp;

exports.setAttribute = setAttribute;
exports.listen = listen;
let Minimalist = (_temp = _class = class Minimalist extends window.HTMLElement {

  constructor(self) {
    super(self);
    this.connected = false;
  }

  connectedCallback() {
    this.connected = true;
    this.beforeRender ? this.beforeRender() : null;
    this.innerHTML = this.render(this.props);
    this.setEvents();
    this.afterRender ? this.afterRender() : null;
  }

  attributeChangedCallback() {
    if (!this.connected) {
      return;
    }

    this.updateRender();
  }

  get props() {
    const attributes = {};

    this.constructor.observedAttributes.forEach(name => {
      attributes[name] = this.getAttribute(name) || undefined;
    });

    // const proxy = {
    //   get: (target, name) => this.getAttribute(name) || '',
    //   set: (target, name, value) => {
    //     return value
    //       ? this.setAttribute(name, String(value))
    //       : this.removeAttribute(name)
    //   }
    // }

    return attributes; //new Proxy(attributes, proxy)
  }

  updateRender() {
    const markup = document.createElement('div');
    markup.innerHTML = this.render(this.props);

    Array.from(this.children).forEach((current, index) => {
      const newElement = markup.children[index];
      this.updateNode(current, newElement);
    });
  }

  updateNode(current, newElement) {
    const isAttributeChange = attribute => attribute.value !== current.getAttribute(attribute.name);

    const isTextChange = current.innerHTML === current.textContent && current.textContent !== newElement.textContent;

    if (isTextChange) {
      current.textContent = newElement.textContent;
    }

    Array.from(newElement.attributes).filter(isAttributeChange).forEach(attribute => {
      current.setAttribute(attribute.name, attribute.value);
    });

    Array.from(current.children).forEach((current, index) => this.updateNode(current, newElement.children[index]));
  }

  setEvents() {
    this.events = this.events || [];

    this.events.forEach(statement => {
      const { event, element } = statement;
      const method = this[statement.method];

      this.querySelector(element).addEventListener(event, method.bind(this));
    });
  }
}, _class.observedAttributes = [], _temp);
exports.default = Minimalist;
function setAttribute(name, value) {
  return value ? `${name}="${value}"` : '';
}

function listen(event, element) {
  return (target, method, descriptor) => {
    target.events = target.events || [];

    target.events.push({
      event,
      element,
      method
    });

    return descriptor;
  };
}