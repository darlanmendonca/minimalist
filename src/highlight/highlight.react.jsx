import React, {Component} from 'react'
import './highlight.class.js'
import './highlight.style.scss'

const MnHighlight = (props) => {
  const {children, ...others} = props
  return <mn-highlight {...others}>{children}</mn-highlight>
}

export default MnHighlight
