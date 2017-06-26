module.exports = class ActionSheetPageObject {
  constructor(component) {
    this.component = component
  }

  clickOn(value) {
    const option = Array
      .from(this.component.querySelectorAll('.option'))
      .filter(option => option.textContent === value)[0]

    console.log('click on option', option)
    if (option) {
      option.click()
    }
  }
}
