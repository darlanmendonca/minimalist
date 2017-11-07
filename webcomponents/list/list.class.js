const {HTMLElement} = window

module.exports = class MnList extends HTMLElement {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    this.setStyle()
    this.setCollapse()
    this.setDraggable()
  }

  setStyle() {
    this.classList.add('mn-list')
  }

  setCollapse() {
    document.addEventListener('click', event => {
      const isItemCollapse = event.target.matches('.mn-item[collapse]')
      const nestedList = event.target.parentNode !== this

      if (isItemCollapse && !nestedList) {
        event.target.classList.contains('detail-visible')
          ? event.target.classList.remove('detail-visible')
          : event.target.classList.add('detail-visible')
        event.stopPropagation()
      }
    })
  }

  setDraggable() {
    const items = this.querySelectorAll('.mn-item')
    const dragula = require('dragula')
    const options = {
      containers: [this],
      moves(element, source, handle, sibling) {
        return element.matches('.mn-item[draggable]')
      },
      direction: 'vertical',
      mirrorContainer: this,
    }

    dragula(options)
      // .on('drop', () => {
      //   console.log('wow')
      // })
  }
}
