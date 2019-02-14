import Minimalist, {component, listen, keydown} from '../minimalist/minimalist.class.js'
import MnBackdrop from '../backdrop/backdrop.class.js'

@component('mn-dialog')
/*
  styles: [
    'section',
    'backdrop',
    'dialog',
  ]
*/
class Dialog extends Minimalist {
  beforeRender() {
    this.classList.add('mn-dialog')
    MnBackdrop.create()
  }

  render() {
    const paddings = Array
      .from(this.classList)
      .filter(name => name.startsWith('padding'))
      .join(' ')

    return `
      <div class="mn-section ${paddings}">
        ${this.innerHTML}
      </div>
    `
  }

  @listen('click', '[open-dialog]', false)
  open(event) {
    let id

    if (event) {
      event.stopPropagation()
      id = event.target.getAttribute('open-dialog')
    }

    if (!event || this.id === id && window[id]) {
      const previousDialog = document.querySelector('.mn-dialog.visible')

      if (previousDialog) {
        previousDialog.classList.remove('visible')
      }

      this.classList.add('visible')
      this.scrollTop = 0
      document.body.classList.add('mn-dialog-visible')
      MnBackdrop.show()
      // this.dispatchEvent(new Event('open'))
    }
  }

  @keydown('Escape')
  @listen('click', '[close-dialog]', false)
  close() {
    document.body.classList.remove('mn-dialog-visible')
    this.classList.remove('visible')
    MnBackdrop.hide()
    this.dispatchEvent(new Event('close'))
  }

  @listen('click', '[toggle-dialog]', false)
  toggle() {
    this.classList.toggle('visible')
      ? this.open()
      : this.close()
  }
}

export default Dialog
