'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAdd, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import React, { useEffect, useState } from 'react'

const Slide = () => {
    
  const [value, setValue] = useState('')
  let slideIndex = 0

  useEffect(()=> {
    setInterval(slideRight, 3000);
  }, [])

  function slideRight() {
    slideIndex++
    if (slideIndex > 2)
        slideIndex = 0

    const value = 100 * slideIndex
    console.log(slideIndex);
    setValue(`-translate-x-[${value}%]`)
  }

  function slideLeft() {
    slideIndex--
    if (slideIndex < 0)
        slideIndex = 2

    const value = 100 * slideIndex
    console.log(slideIndex);
    setValue(`-translate-x-[${value}%]`)
  }

  return (
    <div className="relative flex-1 w-full md:w-auto overflow-hidden">
        <div className={`relative flex items-center aspect-video duration-500 ${value}`}>
            <div className="relative w-full h-full">
            <Image src='/screenshot1.jpg' fill alt='app image 1'/>
            </div>
            <div className="absolute w-full h-full left-full">
            <Image src='/screenshot2.jpg'  alt='app image 2'/>
            </div>
            <div className="absolute w-full h-full left-[200%]">
            <Image src='/screenshot3.jpg' fill alt='app image 3'/>
            </div>
            
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full flex justify-center items-center 
            bg-color-primary text-white hover:brightness-75 duration-500 cursor-pointer z-20"
            onClick={slideLeft}>
            <FontAwesomeIcon icon={faChevronLeft}/>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full flex justify-center items-center 
            bg-color-primary text-white hover:brightness-75 duration-500 cursor-pointer z-20"
            onClick={slideRight}>
            <FontAwesomeIcon icon={faChevronRight}/>
        </div>
    </div>
  )
}

export default Slide