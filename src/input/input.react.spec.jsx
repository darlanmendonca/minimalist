import {expect} from 'chai'
import MnInput from './input.react.jsx'
import React, {Component} from 'react'

let input

describe('MnInput (React)', () => {
  beforeEach(createElement)

  test('should export a class', () => {
    expect(MnInput).to.be.an('function')
  })
})

function createElement() {
  input = <MnInput />
}

