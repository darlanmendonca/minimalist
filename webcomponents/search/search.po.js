const SelectPageObject = require('../select/select.po.js')

module.exports = class SearchPageObject extends SelectPageObject {
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

    const response = new window.Response(JSON.stringify(body), {status,headers})
    window.fetch.returns(Promise.resolve(response))
    return this.component.fetch('http://localhost:4000/houses')
  }

  setStringOptions(response) {
    response.forEach(house => {
      const option = document.createElement('option')
      option.textContent = house
      option.setAttribute('value', house.toLowerCase())

      this.component.appendChild(option)
    })
  }

  setObjectOptions(response) {
    response.forEach(house => {
      house = {name: house, value: house.toLowerCase()}
      const option = document.createElement('option')
      option.textContent = house.name
      option.setAttribute('value', JSON.stringify(house))

      this.component.appendChild(option)
    })
  }

  setNumberOptions(response) {
    response.forEach((house, index) => {
      const option = document.createElement('option')
      option.textContent = house
      option.setAttribute('value', index)

      this.component.appendChild(option)
    })
  }

  setBooleanOptions(response) {
    response = response.slice(0, 2)
    response.forEach((house, index) => {
      const option = document.createElement('option')
      option.textContent = house
      option.setAttribute('value', index === 0)

      this.component.appendChild(option)
    })
  }

  setArrayOptions(response) {
    response.forEach(house => {
      const option = document.createElement('option')
      option.textContent = house
      option.setAttribute('value', JSON.stringify([house.toLowerCase()]))

      this.component.appendChild(option)
    })
  }
}
