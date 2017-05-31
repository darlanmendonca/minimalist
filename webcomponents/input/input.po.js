module.exports = class InputPageObject {
  constructor(component) {
    this.component = component
  }

  setValue(value) {
    this.component.value = value
  }

  typeValue(value) {
    this.component.input.value = value
    this.component.input.dispatchEvent(new Event('change'))
  }

  setAttribute(name, value = '') {
    this.component.setAttribute(name, value)
  }

  removeAttribute(name) {
    this.component.removeAttribute(name)
  }
}
