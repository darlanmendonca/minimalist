const {input} = require('minimalist')

const form = document.querySelector('form')

// form.classList.add('submitted')
// const mnInput = document.querySelector('mn-input')
// mnInput.querySelector('input').dispatchEvent(new Event('keyup'))
// console.log(mnInput)

form.addEventListener('submit', event => {
  form.classList.add('submitted')
  const inputs = form.querySelectorAll('.mn-input:not([disabled]):not([readonly]')

  Array
    .from(inputs)
    .forEach(element => element.validate())

  const isInvalid = form.querySelectorAll('.mn-input.invalid').length > 0
  console.log(`form isInvalid: ${isInvalid}`)
  event.preventDefault()
})
