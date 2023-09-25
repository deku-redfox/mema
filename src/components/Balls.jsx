'use client'

import React, { useEffect, useState } from 'react'

const Balls = () => {

  const [mousePos, setMousePos] = useState({})

  useEffect(()=> {

    const handleMouseMove = (event) => {
        setMousePos({x: -event.clientX, y: -event.clientY})
    }
    
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
        window.removeEventListener('mousemove', handleMouseMove)
    }

  }, [])

  return (
    <div>
        <div className='bg-color-grey rounded-full absolute h-10 w-10 top-0 duration-500 ease-out'
            style={{transform: `translate(${mousePos.x/40}px, ${mousePos.y/20}px)`}}></div>
        <div className='bg-color-grey rounded-full absolute h-16 w-16 top-10 left-3 duration-500 ease-out'
            style={{transform: `translate(${mousePos.x/80}px, ${mousePos.y/60}px)`}}></div>
        <div className='bg-color-grey rounded-full absolute h-[200px] w-[200px] -top-[100px] right-0 duration-500 ease-out'
            style={{transform: `translate(${mousePos.x/80}px, ${mousePos.y/80}px)`}}></div>
        <div className='bg-color-grey rounded-full absolute h-[200px] w-[200px] -bottom-[45px] lg:bottom-[40px] left-[100px] duration-500 ease-out'
            style={{transform: `translate(${mousePos.x/100}px, ${mousePos.y/100}px)`}}></div>
    </div>
  )
}

export default Balls