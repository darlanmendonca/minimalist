module.exports = class InputPageObject {
  constructor(component) {
    this.component = component
  }

  typeValue(value) {
    this.component.input.value = String(value)
    this.component.input.dispatchEvent(new Event('change'))
  }

  setAttribute(name, value = '') {
    this.component.setAttribute(name, value)
  }

  removeAttribute(name) {
    this.component.removeAttribute(name)
  }

  setProperty(property, value) {
    this.component[property] = value
  }
}
