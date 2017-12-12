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
    // let hoverTime

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
      mirrorContainer: document.body,
    }

    if (drake) {
      drake = drake.destroy()
    }

    drake = dragula(options)

    drake
    // .on('drag', (element) => {
    //   const parentName = element.closest('.mn-list').getAttribute('name')
    //   const list = document.querySelectorAll('.mn-list[name="'+ parentName +'"].mn-item-detail')

    //   for (let listItem of list) {
    //     listItem.classList.add('half-open');
    //   }
    // })
    // .on('dragend', (element) => {
    //   const parentName = element.closest('.mn-list').getAttribute('name')
    //   const list = document.querySelectorAll('.mn-list[name="'+ parentName +'"].mn-item-detail')

    //   for (let listItem of list) {
    //     listItem.classList.remove('half-open');
    //   }
    // })
    .on('drop', (element, target, source) => {
      const targetIndex = Array.prototype.indexOf.call(source.querySelectorAll('.mn-item'), element)

      const reorder = source === target
      const rearrange = source !== target

      if (reorder) { // reorder inside same list
        if (originIndex !== targetIndex) {
          const event = new Event('reorder')
          event.originIndex = originIndex
          event.targetIndex = targetIndex
          source.dispatchEvent(event)
        }
      } else if (rearrange) { // rearrange between other list
        const event = new Event('rearrange')
        event.origin = source
        event.element = element
        event.targetList = target
        event.originIndex = originIndex
        event.targetIndex = targetIndex
        source.dispatchEvent(event)
      }
    })
    // .on('over', function (el, container) {
    //   container.classList.add('mn-list-hover')
    //   hoverTime = setTimeout(() => {
    //     if (container.classList.contains('mn-item-detail')) {
    //       container.parentElement.classList.add('detail-visible')
    //     }
    //   }, 1000);
    // })
    // .on('out', function (el, container) {
    //   container.classList.remove('mn-list-hover')
    //   clearInterval(hoverTime)
    // })
  }
}
