'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './header.module.css'
import FlatButton from './FlatButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import SideNav from '@/components/SideNav'

const Header = () => {

  const [isActive, setScroll] = useState(false)
  const [showSide, setSideState] = useState(false)

  useEffect(() => {
    setScroll(window.scrollY > 84)

    window.addEventListener('scroll', () => {
      setScroll(window.scrollY > 84)
    })

  }, [])

  return (
    <div>
      <div className={`darkOverlay ${!showSide && 'opacity-0 pointer-events-none'}`}></div>

      <SideNav disableCallBack={(value)=> {setSideState(value)}} showing={showSide}/>

      <div className={`${styles.header} ${isActive ? styles.active : ''} top-0 right-0 left-0`}>

        <div className="container flex items-center justify-between h-[84px]">

          <Link href='/'>
            <div className="flex gap-3 items-center">
              {
                !isActive 
                  ? <Image src='/memalight.png' height={90} width={90} alt='MeMa logo Light'></Image>
                  : <Image src='/memadark.png' height={90} width={90} alt='MeMa logo Dark'></Image>
              }
              <p className={`text-3xl tracking-wide font-bold ${isActive ? 'text-color-primary-darker' : 'text-white'} max-sm:hidden`}>MeMa</p>
            </div>
          </Link>

          <div className="flex items-center gap-12 xl:gap-14">

            <nav>
              <ul className="hidden lg:flex items-center space-x-8 xl:space-x-10">
                <li className={styles.navlink}><a href="/">Home</a></li>
                <li className={styles.navlink}><a href="/about">About</a></li>
                <li className={styles.navlink}><a href="/blog">Blog</a></li>
                <li className={styles.navlink}><a href="/pricing">Pricing</a></li>
                <li className={styles.navlink}><a href="/contact">Contact</a></li>
              </ul>
            </nav>

            <FlatButton text='Download' black= {isActive ? false : true} className='hidden md:block max-xl:text-[15px]' link='/download'/>

            <div onClick={()=> {setSideState(true); console.log(showSide);}} 
              className={`js-nav-btn lg:hidden cursor-pointer ${showSide && 'hidden'} ${!isActive ? 'text-white':''}`}>
              <FontAwesomeIcon icon={faBars} size='xl'/>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}

export default Header