import React from 'react'
import "./button.css"

const Button = ({children, type}) => {
  return (
      <div className={`${type} button`}>{ children }</div>
  )
}

export default Button