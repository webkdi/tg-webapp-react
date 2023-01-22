import React from 'react'
import '../Button.css'

const Button = (props) => {
  return (
    <button {...props} classname={'button ' + props.className} >Button</button>
  )
}

export default Button