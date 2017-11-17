const {HTMLElement} = window

const dragula = require('dragula')
let drake
let dragulaContainers = []

module.exports = class MnList extends HTMLElement {
  constructor(self) {
    self = super(self)
    dragulaContainers.push(this)
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
    let originIndex

    const options = {
      containers: dragulaContainers,
      moves(element) {
        originIndex = Array.prototype.indexOf.call(element.closest('.mn-list').querySelectorAll('.mn-item'), element)
        return element.matches('.mn-item[draggable]')
      },
      accepts(element, target) {
        const parent = element.closest('.mn-list')
        const parentName = parent.getAttribute('name')
        const targetName = target.getAttribute('name')

        const move = parent === target
          || (parent.hasAttribute('name')
            && target.hasAttribute('name')
            && parentName === targetName
          )
        return move
      },
      direction: 'vertical',
      mirrorContainer: this,
    }

    if (drake) {
      drake = drake.destroy()
    }

    drake = dragula(options)

    drake
    .on('drop', (element) => {
      const parentList = element.closest('.mn-list')
      const targetIndex = Array.prototype.indexOf.call(parentList.querySelectorAll('.mn-item'), element)

      if (originIndex !== targetIndex) {
        const moveItemEvent = new Event('moveItem')
        moveItemEvent.originIndex = originIndex
        moveItemEvent.targetIndex = targetIndex
        moveItemEvent.targetElement = element
        parentList.dispatchEvent(moveItemEvent)
      }
    })
  }
}
