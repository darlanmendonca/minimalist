module.exports = class InputPageObject {
  constructor(component) {
    this.component = component
  }

  setValue(value) {
    this.component.value = value
  }

  setAttribute(name, value = '') {
    this.component.setAttribute(name, value)
  }

  removeAttribute(name) {
    this.component.removeAttribute(name)
  }
}
