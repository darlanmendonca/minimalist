const style = document.createElement('style')
style.id = 'minimalist'
document.head.appendChild(style)

module.exports = {
  input: require('./components/input/input.webcomponent.js'),
  email: require('./components/email/email.webcomponent.js'),
  password: require('./components/password/password.webcomponent.js'),
  hidden: require('./components/hidden/hidden.webcomponent.js'),
  number: require('./components/number/number.webcomponent.js'),
  date: require('./components/date/date.webcomponent.js'),
  backdrop: require('./components/backdrop/backdrop.class.js'),
  select: require('./components/select/select.webcomponent.js'),
  actionSheet: require('./components/action-sheet/action-sheet.webcomponent.js'),
  form: require('./components/form/form.webcomponent.js'),
  sidenav: require('./components/sidenav/sidenav.webcomponent.js'),
  checkbox: require('./components/checkbox/checkbox.webcomponent.js'),
  radio: require('./components/radio/radio.webcomponent.js'),
  dialog: require('./components/dialog/dialog.webcomponent.js'),
  button: require('./components/button/button.webcomponent.js'),
  search: require('./components/search/search.webcomponent.js'),
  list: require('./components/list/list.webcomponent.js'),
  code: require('./components/code/code.webcomponent.js'),
}
