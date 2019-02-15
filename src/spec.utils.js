export function renderHTML (html) {
  const container = document.createElement('div')

  container.innerHTML = html

  Array
    .from(container.children)
    .forEach(connectElement)

  return container
}

function connectElement(item, index) {
  Array
    .from(item.children)
    .forEach(connectElement)

  const newElement = item.cloneNode(true)
  item.replaceWith(newElement)
  newElement.connectedCallback()
}
