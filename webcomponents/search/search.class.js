const MnSelect = require('../select/select.class.js')

module.exports = class MnSearch extends MnSelect {
  constructor(self) {
    self = super(self)
    return self
  }

  connectedCallback() {
    super.connectedCallback()
    this.setLoading()
    this.setSearchSheet()
  }

  _setStyle() {
    super._setStyle()
    this.classList.add('mn-search')
  }

  setLoading() {
    const loading = document.createElement('div')
    loading.classList.add('loading')
    this.appendChild(loading)
  }

  setSearchSheet() {
    if (this.actionSheet) {
      this.actionSheet = undefined

      const dialog = document.createElement('mn-dialog')
      this.searchSheet = dialog
      this.searchSheet.classList.add('search-sheet')
      const input = document.createElement('mn-input')
      input.setAttribute('placeholder', 'Type to search')

      this.searchSheet.appendChild(input)
      document.body.appendChild(this.searchSheet)

      this.searchSheetInput = this.searchSheet.querySelector('mn-input')
      this.setSearchSheetList()

      this.searchSheetInput.addEventListener('input', () => {
        this.filter = event.target.value
        const search = new Event('search')
        search.query = event.target.value
        this.dispatchEvent(search)
      })

      this.input.addEventListener('focus', () => {
        this.blur()
        this.searchSheet.open()
        this.searchSheetInput.value = ''
        this.searchSheetInput.dispatchEvent(new Event('input'))
        setTimeout(() => {
          this.searchSheetInput.focus()
        }, 410)
      })

    }
  }

  setSearchSheetList() {
    this.searchSheetList = document.createElement('ul')
    this.searchSheetList.classList.add('mn-list')
    this.searchSheet.querySelector('.mn-card').appendChild(this.searchSheetList)

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        const addedNode = mutation.addedNodes[0]
        const removedNode = mutation.removedNodes[0]
        const addOption = addedNode && addedNode.tagName === 'OPTION'
        const removeOption = removedNode && removedNode.tagName === 'OPTION'
        if (addOption) {
          const item = document.createElement('div')
          item.classList.add('mn-item')
          item.textContent = addedNode.textContent
          item.setAttribute('value', addedNode.getAttribute('value') || addedNode.textContent)
          this.searchSheetList.appendChild(item)

          item.addEventListener('touchend', (event) => {
            this.searchSheet.close()
            this.value = event.target.getAttribute('value')
          })
        }

        if (removeOption) {
          const value = removedNode.getAttribute('value')
          const item = this.searchSheet.querySelector(`.mn-item[value="${value}"]`)
          item.parentNode.removeChild(item)
        }
      })
    })

    observer.observe(this, {
      attributes: false,
      childList: true,
      characterData: false,
    })
  }

  _setInput() {
    super._setInput()

    this.input.addEventListener('input', () => {
      const event = new Event('search')
      event.query = this.input.value
      this.dispatchEvent(event)
    })
  }

  cleanOptions() {
    const options = this.querySelectorAll('option')
    Array
      .from(options)
      .forEach(option => this.removeChild(option))
  }

  fetch(request) {
    const requestType = typeof request
    const loader = requestType === 'function'
      ? request
      : () => fetch(request)

    this.classList.add('loading')

    return loader()
      .then(res => {
        this.cleanOptions()
        this.classList.remove('loading')
        this.dispatchEvent(new Event('loading'))

        setTimeout(() => {
          this.dispatchEvent(new Event('ready'))
        })

        return res
      })
  }
}
