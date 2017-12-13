const {HTMLElement} = window
const dragula = require('dragula')

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
    if (!MnList.draggableSettings) {
      let originIndex
      const options = {
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
        mirrorContainer: document.body,
      }

      MnList.draggableSettings = dragula(options)

      MnList.draggableSettings.on('drop', (element, target, source) => {
        const targetIndex = Array.prototype.indexOf.call(target.querySelectorAll('.mn-item'), element)

        const reorder = source === target
        const rearrange = source !== target

        if (reorder) { // reorder inside same list
          if (originIndex !== targetIndex) {
            const event = new Event('reorder')
            event.originIndex = originIndex
            event.targetIndex = targetIndex
            source.dispatchEvent(event)
          }
        } else if (rearrange) { // rearrange to another list
          const event = new Event('rearrange')
          event.origin = source
          event.element = element
          event.targetList = target
          event.originIndex = originIndex
          event.targetIndex = targetIndex
          source.dispatchEvent(event)
        }
      })
    }

    MnList.draggableSettings.containers.push(this)
  }
}
