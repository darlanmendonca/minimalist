export default class Minimalist extends window.HTMLElement {
  connected = false

  static observedAttributes = []

  constructor(self) {
    super(self)
  }

  connectedCallback() {
    this.connected = true
    this.beforeRender ? this.beforeRender() : null
    this.innerHTML = this.render(this.props)
    this.setEvents()
    this.afterRender ? this.afterRender() : null
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
    const markup = document.createElement('div')
    markup.innerHTML = this.render(this.props)

    Array
      .from(this.children)
      .forEach((current, index) => {
        const newElement = markup.children[index]
        this.updateNode(current, newElement)
      })
  }

  updateNode(current, newElement) {
    const isAttributeChange = attribute => attribute.value !== current.getAttribute(attribute.name)

    const isTextChange = current.innerHTML === current.textContent
      && current.textContent !== newElement.textContent

      if (isTextChange) {
        current.textContent = newElement.textContent
      }

      Array
        .from(newElement.attributes)
        .filter(isAttributeChange)
        .forEach(attribute => {
          current.setAttribute(attribute.name, attribute.value)
        })

      Array
        .from(current.children)
        .forEach((current, index) => this.updateNode(current, newElement.children[index]))
  }

  setEvents() {
    this.events = this.events || []

    this.events.forEach(statement => {
      const {event, element, scoped, key} = statement
      const method = this[statement.method]

      const elements = element
        ? scoped
          ? this.querySelectorAll(element)
          : document.querySelectorAll(element)
        : this

      if (key && event.startsWith('key')) {
        if (element) {
          this.querySelector(element).addEventListener(event, (evt) => {
            if (evt.code === key) {
              method.bind(this)(evt)
            }
          })
        } else {
          document.addEventListener(event, (evt) => {
            if (evt.code === key) {
              method.bind(this)(evt)
            }
          })
        }
        return
      }

      if (elements.length) {
        elements.forEach(target => target.addEventListener(event, (event) => {
          if (event.target.matches(element) && method) {
            // console.log(method, event)
            method.bind(this)(event)
          }
        }))
      }
    })
  }
}

export function component(name) {
  return (target, method, descriptor) => {
    window.customElements.define(name, target)
    return descriptor
  }
}

export function setAttribute(name, value) {
  return value
    ? `${name}="${value}"`
    : ''
}

export function listen(event, element, scoped = true) {
  return (target, method, descriptor) => {
    target.events = target.events || []

    target.events.push({
      event,
      element,
      method,
      scoped,
    })

    return descriptor
  }
}

export function keydown(key, element) {
  return (target, method, descriptor) => {
    target.events = target.events || []

    target.events.push({
      event: 'keydown',
      element,
      method,
      scoped: false,
      key,
    })

    return descriptor
  }
}

export function keyup(key) {
  return (target, method, descriptor) => {
    target.events = target.events || []

    target.events.push({
      event: 'keyup',
      element: undefined,
      method,
      scoped: false,
      key,
    })

    return descriptor
  }
}
