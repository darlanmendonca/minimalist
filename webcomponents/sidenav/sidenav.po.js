module.exports = class SidenavPageObject {
  constructor(component) {
    this.component = component
    this.buttonOpen = document.createElement('button')
    this.buttonToggle = document.createElement('button')
    this.buttonClose = document.createElement('button')

    this.buttonOpen.setAttribute('open-sidenav', component.id)
    this.buttonToggle.setAttribute('toggle-sidenav', component.id)
    this.buttonClose.setAttribute('close-sidenav', '')

    if (component.parentNode) {
      component.parentNode.appendChild(this.buttonOpen)
      component.parentNode.appendChild(this.buttonToggle)
      component.parentNode.appendChild(this.buttonClose)
    }
  }

  scroll(value){
    this.component.scrollTop = value
  }

  getElementByIndex(index) {
    return this.component.querySelector(`div:nth-child(${index})`)
  }

  getPositionTop(element) {
    const fontSizeHTML = parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'))
    const positionTop = element.offsetTop - fontSizeHTML * 1.5
    return positionTop
  }

  pressEsc() {
    const esc = new Event('keyup')
    esc.key = 'Escape'
    document.dispatchEvent(esc)
  }
}
