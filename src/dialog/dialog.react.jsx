import React, {Component} from 'react'
import './dialog.class.js'
import './dialog.style.scss'

const MnDialog = (props) => {
  const {children, className, ...others} = props
  return <mn-dialog class={className} {...others}>{ children }</mn-dialog>
}

export default MnDialog
