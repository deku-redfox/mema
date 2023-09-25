import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const PlayBtn = ({
  text,
  initial = 'border-white/50 text-white',
  hoverEffect = 'group-hover:bg-white group-hover:text-color-primary',
  size = 'h-[42px] w-[42px]',
  className = '',
  link = ''
}) => {

  return (
    <a href={link} target='blank' rel='noopener noreferer' className={`flex items-center gap-3 group cursor-pointer ${className}`}>
        <span className={`${initial} ${hoverEffect} ${size} flex items-center 
          justify-center rounded-full border-2 ease duration-500`}>
            <FontAwesomeIcon icon={faPlay} className='-translate-1'/>
        </span>
        <span className='text-color-grey whitespace-nowrap group-hover:text-white duration-500'>{text}</span>
    </a>
  )
}

export default PlayBtn