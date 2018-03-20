import '@webcomponents/custom-elements'
import minimalist from '../index.js'
// import minimalistAngular from '../angular.js'
// import MnInput from '../components/input/input.react.jsx'
import React, {Component} from 'react'
import {MnInput} from '../react.jsx'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      placeholder: 'Lastname',
      value: 'Mendonça',
    }
  }

  render() {
    return (
      <div>
        <MnInput {...this.state} onInput={(e) => this.setValue(e.currentTarget.value)} />
        <br />
        <p>Nome: {this.state.value}</p>
        <div>wow</div>
      </div>
    )
  }

  setValue(value) {
    this.setState({value})
  }
}

ReactDOM.render(<App />, window.reactApp)


