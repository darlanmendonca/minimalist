const {input, password, number, backdrop, actionSheet} = require('minimalist')

const form = document.querySelector('form')

form.addEventListener('submit', event => {
  event.preventDefault()
  form.classList.add('submitted')
  Array
    .from(form.querySelectorAll('.mn-input'))
    // :not([disabled]):not([readonly]'
    .filter(input => !input.disabled && !input.readOnly)
    .forEach(input => input.validate())

  const isInvalid = form.querySelectorAll('.mn-input.invalid').length > 0
  console.log(`form ${isInvalid ? 'invalid' : 'valid'}`)
})


// const layer = document.querySelector('mn-backdrop')

// const button = document.querySelector('button')
// button.addEventListener('click', () => {
//   layer.show()
// })

