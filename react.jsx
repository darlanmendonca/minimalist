import React, {Component, createElement} from 'react'

module.exports = {
  'MnInput': reactComponent('mn-input'),
  'MnEmail': reactComponent('mn-email'),
  'MnPassword': reactComponent('mn-password'),
  'MnHidden': reactComponent('mn-hidden'),
  'MnNumber': reactComponent('mn-number'),
  'MnDate': reactComponent('mn-date'),
  'MnBackdrop': reactComponent('mn-backdrop'),
  'MnSelect': reactComponent('mn-select'),
  'MnActionSheet': reactComponent('mn-actionSheet'),
  'MnForm': reactComponent('mn-form'),
  'MnSidenav': reactComponent('mn-sidenav'),
  'MnCheckbox': reactComponent('mn-checkbox'),
  'MnRadio': reactComponent('mn-radio'),
  'MnDialog': reactComponent('mn-dialog'),
  'MnButton': reactComponent('mn-button'),
  'MnSearch': reactComponent('mn-search'),
  'MnList': reactComponent('mn-list'),
  'MnCode': reactComponent('mn-code'),
  'MnImage': reactComponent('mn-image'),
}

function reactComponent(ComponentName) {
  class MnComponent extends Component {
    render() {
      return <ComponentName {...this.props} />
    }
  }

  return MnComponent
}
