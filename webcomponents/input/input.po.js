class InputPageObject {
  constructor(component) {
    this.component = component
  }

  setValue(value) {
    this.component.value = value
  }

  type(string) {
    this.component.input = string
  }
}

module.exports = (component) => new InputPageObject(component)
