const InputPageObject = require('../input/input.po.js')

module.exports = class DatePageObject extends InputPageObject {
  constructor(component) {
    super(component)
    return this
  }

  pressArrowUp(times = 1) {
    times = new Array(times)
    times.fill(true)
    times.forEach(() => {
     this.component.input.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowUp'}))
    })
  }

  pressArrowDown(times = 1) {
    times = new Array(times)
    times.fill(true)
    times.forEach(() => {
     this.component.input.dispatchEvent(new KeyboardEvent('keydown', {key: 'ArrowDown'}))
    })
  }
}
