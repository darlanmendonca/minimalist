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
      const item = event.target.closest('.mn-item[collapse]')
      const isItemCollapse = event.target.matches('.mn-item[collapse]')
        || item
            && event.target.tagName !== 'A'
            && event.target.tagName !== 'BUTTON'
            && event.target.tagName !== 'MN-BUTTON'
      const isListOwnerOfItem = event.target.closest('.mn-list') === this

      if (isItemCollapse && isListOwnerOfItem) {
        item.classList.contains('detail-visible')
          ? item.classList.remove('detail-visible')
          : item.classList.add('detail-visible')
        event.stopPropagation()
      }
    })
  }

  setDraggable() {
    const dragula = require('dragula')
    let originIndex

    const options = {
      containers: [this],
      moves(element) {
        originIndex = Array.prototype.indexOf.call(this.containers[0].querySelectorAll('.mn-item'), element)
        return element.matches('.mn-item[draggable]')
      },
      direction: 'vertical',
      mirrorContainer: this,
    }

    dragula(options)
    .on('drop', (element) => {
      const targetIndex = Array.prototype.indexOf.call(this.querySelectorAll('.mn-item'), element)

      if (originIndex !== targetIndex) {
        const moveItemEvent = new Event('moveItem')
        moveItemEvent.originIndex = originIndex
        moveItemEvent.targetIndex = targetIndex
        this.dispatchEvent(moveItemEvent)
      }
    })
  }
}
