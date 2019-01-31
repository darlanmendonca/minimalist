export default class MnCore extends window.HTMLElement {
  connected = false

  static observedAttributes = []

  constructor(self) {
    super(self)
  }

  connectedCallback() {
    this.connected = true
    this.innerHTML = this.render(this.props)
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
}

export function setAttribute(name, value) {
  return value
    ? `${name}="${value}"`
    : ''
}
