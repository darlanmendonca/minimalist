import React, {Component} from 'react'
import './button.class.js'
import './button.style.scss'

const MnButton = (props) => {
  const {children, className, ...others} = props
  return <mn-button class={className} {...others}>{ children }</mn-button>
}

export default MnButton
