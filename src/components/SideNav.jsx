'use client'

import React, { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { faX } from '@fortawesome/free-solid-svg-icons'

const SideNav = ({showing, disableCallBack = (bool)=>{}}) => {

    useEffect(()=> {

        document.querySelectorAll('.js-side-link').forEach(link => {
            link.addEventListener('click', ()=> {
                disableCallBack(false)
            })
        })
        
    }, [])

  return (
    <div className={`${showing ? 'translate-x-0' : '-translate-x-full'} duration-500
        fixed left-0 top-0 bottom-0 bg-white z-[100] w-[380px] max-w-full`}>

        <div className="py-6 px-4 flex items-center justify-between border-b border-color-iron/10">

            <Link href='/' className='flex gap-3 items-center'>
                <Image src='/memadark.png' height={60} width={60} alt='MeMa logo Light'/>
                <p className='text-2xl tracking-wide font-bold text-color-primary-darker'>MeMa</p>
            </Link>

            <div onClick={()=>{disableCallBack(false)}} className="h-10 w-10 rounded-full flex items-center 
                justify-center bg-color-blue-grey-soft cursor-pointer">
                <FontAwesomeIcon icon={faX}/>
            </div>

        </div>

        <div className="scrollable flex flex-col gap-4 px-3 py-6 overflow-y-scroll text-md uppercase text-color-primary-darker">
            <Link href='/' className="hover:bg-color-blue-grey-soft rounded-md px-3 py-2 duration-300 js-side-link">Home</Link>
            <Link href='/about' className="hover:bg-color-blue-grey-soft rounded-md px-3 py-2 duration-300 js-side-link">About</Link>
            <Link href='/blog' className="hover:bg-color-blue-grey-soft rounded-md px-3 py-2 duration-300 js-side-link">Blog</Link>
            <Link href='/pricing' className="hover:bg-color-blue-grey-soft rounded-md px-3 py-2 duration-300 js-side-link">Pricing</Link>
            <Link href='/contact' className="hover:bg-color-blue-grey-soft rounded-md px-3 py-2 duration-300 js-side-link">Contact</Link>
        </div>

    </div>
  )
}

export default SideNav