module.exports = class SidenavPageObject {
  constructor(component) {
    this.component = component
  }

  scroll(value){
    this.component.scrollTop = value
  }
}
