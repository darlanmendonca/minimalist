const InputPageObject = require('../input/input.po.js')

module.exports = class SearchPageObject extends InputPageObject {
  constructor(component) {
    super(component)
    return this
  }

  requestData() {
    const status = 200
    const headers = {
      'Content-type': 'application/json',
    }

    const body = [
      'Stark',
      'Lannister',
      'Targaryen',
    ]

    const response = new window.Response(body, {status,headers})
    window.fetch.returns(Promise.resolve(response))
    return this.component.fetch('http://localhost:4000/houses')
  }
}
