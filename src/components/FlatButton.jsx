import Link from 'next/link'
import React from 'react'

const FlatButton = ({
  children,
  text,
  hoverEffect = 'hover:text-color-primary hover:bg-transparent',
  initial = 'border-color-primary bg-color-primary text-white', 
  black = true, 
  className,
  link = '', 
  external = false,
  onclick
}) => {

    let btnClass = `py-[10px] px-6 ${initial} ${hoverEffect} border-2 flex items-center justify-center
        ${black ? 'hover:bg-black/5' : 'hover:bg-transparent'} rounded-md duration-500 whitespace-nowrap ${className}`

    if (onclick) {
      return (
        <button type='button' onClick={onclick} className={btnClass}>
          <span>{text}</span>
          {children}
        </button>
      )
    }
    
    if (external) {
      return (
        <a href={link} target='blank' rel='noopener noreferer' className={btnClass}>
          <span>{text}</span>
          {children}
        </a>
      )
    } else {
      return (
        <Link href={link} className={btnClass}>
          <span>{text}</span>
          {children}
        </Link>
      )
    }
}

export default FlatButton