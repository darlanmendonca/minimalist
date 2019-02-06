export default class Router {
  constructor(routes, rootElement) {
    this.routes = routes
    this.rootElement = rootElement
    this.change()
    window.addEventListener('popstate', () => this.change())

    const interceptLinks = (event) => {
      if (event.target.matches('a[href]') && !event.metaKey) {
        event.preventDefault()

        if(window.location.href !== event.target.href) {
          window.history.pushState(null, null, event.target.href)
          this.change()
        }
      }
    }

    document.body.addEventListener('click', interceptLinks, true)
  }

  change() {
    // parse window.location.hash
    // call load(urlHTML)
    const name = window.location.pathname
    this.load(name)
  }

  load(routeUrl) {
    // load html
    // append html to rootElement

    const route = this.routes.find(item => item.url === routeUrl)

    if (!route)
      return

    if (route.template) {
      this.rootElement.innerHTML = route.template
      return
    }

    fetch(route.templateUrl)
      .then(response => response.text())
      .then(markup => {
        route.template = markup
        this.rootElement.innerHTML = markup
      })
  }
}
