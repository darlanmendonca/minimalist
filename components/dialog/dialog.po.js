module.exports = class DialogPageObject {
  constructor(component) {
    this.component = component
    this.buttonOpen = document.createElement('button')
    this.buttonToggle = document.createElement('button')
    this.buttonClose = document.createElement('button')

    this.buttonOpen.setAttribute('open-dialog', component.id)
    this.buttonToggle.setAttribute('toggle-dialog', component.id)
    this.buttonClose.setAttribute('close-dialog', '')

    if (component.parentNode) {
      component.parentNode.appendChild(this.buttonOpen)
      component.parentNode.appendChild(this.buttonToggle)
      component.parentNode.appendChild(this.buttonClose)
    }
  }

  scroll(value){
    this.component.scrollTop = value
  }

  pressEsc() {
    const esc = new Event('keyup')
    esc.key = 'Escape'
    document.dispatchEvent(esc)
  }
}
