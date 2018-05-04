class MnComponent extends window.HTMLElement {
  constructor(self) {
    super(self)
  }

  attributeChangedCallback(name, old, value) {
    if(this.parentNode) {
      this[name] = value
    }

    if (this.inputChild) {
      this.inputChild.dispatchEvent(new Event('change'))
    }
  }

  setAttributes() {
    Array
      .from(this.attributes)
      .forEach(attr => {
        const observedAttr = this.constructor
          .observedAttributes
          .find(observed => observed === attr.name)

        if (observedAttr) {
          this[attr.name] = attr.value
        }
      })
  }

  empty() {
    this.innerHTML = ''
  }

  setChildren(name) {
    const children = document.createElement(name)
    this[`${name}Child`] = children
    this.appendChild(children)
  }
}

export default MnComponent
