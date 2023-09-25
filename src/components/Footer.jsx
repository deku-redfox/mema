import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import FlatButton from './FlatButton'
import CustomInput from './CustomInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faKiwiBird, faVideo } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'


const Footer = () => {
  return (
    <div className="bg-color-blue-grey">

      <div className='container pt-24 pb-20'>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-16 w-full">

          <div className="flex flex-col gap-4 items-start -translate-y-6">
            <Link href='/' className='flex gap-3 items-center'>
              <Image src='/memalight.png' height={90} width={90}/>
              <p className='text-3xl tracking-wide font-bold text-white'>MeMa</p>
            </Link>
            <p className="text-color-grey leading-loose">
              With MEMA, easily create and manage multiple WhatsApp campaigns, allowing you to target specific customer segments With
              tailored messages.
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="text-white">Quick Links</h5>
            <ul className="space-y-3 text-color-grey">
              <li><a href="/" className="hover:text-white duration-300">Home</a></li>
              <li><a href="/about" className="hover:text-white duration-300">About</a></li>
              <li><a href="/contact" className="hover:text-white duration-300">Contact</a></li>
              <li><a href="/service" className="hover:text-white duration-300">Pricing</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="text-white">Ressources</h5>
            <ul className="space-y-3 text-color-grey">
              <li><a href="/about" className="hover:text-white duration-300">Blog</a></li>
              <li><a href="/pricing" className="hover:text-white duration-300">Youtube Tutorials</a></li>
              <li><a href="/request-for-demo" className="hover:text-white duration-300">Request For Demo</a></li>
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            <h5 className="text-white">Contact Us</h5>
            <ul className="space-y-3 text-color-grey">
              <li><a href="#" className="hover:text-white duration-300">WhatsApp: 699891329</a></li>
              <li><a href="#" className="hover:text-white duration-300">tel: 699891329</a></li>
              <li><a href="#" className="hover:text-white duration-300">website@gamil.com</a></li>
            </ul>
          </div>

        </div>

      </div>

      <div className="w-full border border-white/5">
        <div className="container py-6">
          <div className="flex flex-col md:flex-row gap-3 md:gap-0 gap-y-6 justify-between items-center">
            <p className="text-color-grey">
              © 2023 Quiety - All Rights Reserved Made by
              <Link href='google.com' className='text-white ml-1 hover:text-color-primary duration-200'>ThemeTags</Link>
            </p>
            <div className="flex items-center gap-3">
              <Link href='facebook.com' className="border-2 border-color-grey rounded-md py-1 px-2 
                text-white hover:bg-white hover:text-blue-500 hover:border-white cursor-pointer duration-300">
                <FontAwesomeIcon icon={faKiwiBird}/>
              </Link>
              <Link href='youtube.com' className="border-2 border-color-grey rounded-md py-1 px-2 
                text-white hover:bg-white hover:text-blue-500 hover:border-white cursor-pointer duration-300">
                <FontAwesomeIcon icon={faCamera}/>
              </Link>
              <Link href='instagram.com' className="border-2 border-color-grey rounded-md py-1 px-2 
                text-white hover:bg-white hover:text-blue-500 hover:border-white cursor-pointer duration-300">
                <FontAwesomeIcon icon={faVideo}/>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Footer