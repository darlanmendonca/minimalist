import React, {Component} from 'react'
import './sidenav.class.js'
import '../backdrop/backdrop.style.scss'
import '../section/section.style.scss'
import './sidenav.style.scss'

const MnSidenav = (props) => {
  const {children, className, ...others} = props
  return <mn-sidenav class={className} {...others}>{ children }</mn-sidenav>
}

export default MnSidenav
