const {HTMLElement} = window

module.exports = class MnList extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setCollapse()
  }

  setStyle() {
    this.classList.add('mn-list')
  }

  setCollapse() {
    document.addEventListener('click', event => {
      const isItemCollapse = event.target.matches(`.mn-item[collapse]`)
      const nestedList = event.target.parentNode !== this

      if (isItemCollapse && !nestedList) {
        event.target.classList.contains('detail-visible')
          ? event.target.classList.remove('detail-visible')
          : event.target.classList.add('detail-visible')
        event.stopPropagation()
      }
    })
  }
}
