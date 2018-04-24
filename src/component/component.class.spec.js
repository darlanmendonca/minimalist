import {expect} from 'chai'
import MnComponent from './component.class.js'

describe('MnComponent', () => {
  test('should export a class', () => {
    expect(MnComponent).to.be.a('function')
  })
})
