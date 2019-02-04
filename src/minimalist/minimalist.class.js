export default class Minimalist extends window.HTMLElement {
  connected = false
  // events = []

  static observedAttributes = []

  constructor(self) {
    super(self)
  }

  connectedCallback() {
    this.connected = true
    this.beforeRender ? this.beforeRender() : null
    this.innerHTML = this.render(this.props)
    this.afterRender ? this.afterRender() : null
    this.setEvents()
  }

  attributeChangedCallback() {
    if (!this.connected) {
      return
    }

    this.updateRender()
  }

  get props() {
    const attributes = {}

    this.constructor.observedAttributes.forEach(name => {
      attributes[name] = this.getAttribute(name) || undefined
    })

    // const proxy = {
    //   get: (target, name) => this.getAttribute(name) || '',
    //   set: (target, name, value) => {
    //     return value
    //       ? this.setAttribute(name, String(value))
    //       : this.removeAttribute(name)
    //   }
    // }

    return attributes//new Proxy(attributes, proxy)
  }

  updateRender() {
    const markup = new DOMParser().parseFromString(this.render(this.props), 'text/xml')

    Array
      .from(this.children)
      .forEach((target, index) => {
        const source = markup.children[index]
        this.updateNode(target, source)
      })
  }

  updateNode(target, source) {
    const isAttributeChange = attribute => attribute.value !== target.getAttribute(attribute.name)
    const isTextChange = target.innerHTML === target.textContent
      && target.textContent !== source.textContent

      if (isTextChange) {
         target.textContent = source.textContent
      }

      Array
        .from(source.attributes)
        .filter(isAttributeChange)
        .forEach(attribute => {
          target.setAttribute(attribute.name, attribute.value)
        })

      Array
        .from(target.children)
        .forEach((target, index) => this.updateNode(target, source.children[index]))
  }

  setEvents() {
    this.events.forEach(statement => {
      const {event, element} = statement
      const method = this[statement.method]

      this
        .querySelector(element)
        .addEventListener(event, method.bind(this))
    })
  }

  setChildrenEvents(root) {
    const children = Array.from(root.children)
    const isEventAttribute = attribute => attribute.name.startsWith('on')
    const hasEvent = child => [...child.attributes].some(isEventAttribute)

    children.forEach(child => this.setChildrenEvents(child))

    children
      .filter(hasEvent)
      .forEach(child => {
        [...child.attributes]
          .filter(isEventAttribute)
          .forEach(attribute => {
            const eventName = attribute.name.replace('on', '')
            const callbackName = attribute.value.match(/(\w+)\(/)[1]
            const instanceMethod = this[callbackName]
            const callback = !instanceMethod
              ? eval(attribute.value)
              : null

            child.removeAttribute(attribute.name)

            child.addEventListener(eventName, (event) => {
              !instanceMethod
                ? callback(event)
                : this[callbackName](event)
            })
          })
      })
  }
}

export function setAttribute(name, value) {
  return value
    ? `${name}="${value}"`
    : ''
}
