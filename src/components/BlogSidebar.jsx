import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomInput from '@/components/CustomInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const BlogSidebar = () => {
  return (
    <div className="flex-[0.4] flex flex-col gap-10">

        <div className="border border-grey rounded-lg p-6">
        <div className="flex h-[35px] border rounded-lg">
            <CustomInput strecth bgColor='bg-transparent' placeholder='Search a post...'/>
            <button className='flex items-center justify-center px-3'>
            <FontAwesomeIcon icon={faSearch}/>
            </button>
        </div>
        </div>

        <div className="border border-grey rounded-lg p-6">
        <div className="text-color-primary-darker relative text-lg">
            More Useful
            <div className="absolute bg-color-primary rounded-full top-full left-0 w-10 h-1"></div>
        </div>
        <div className="space-y-4 mt-8">
            <div className="group flex gap-4 items-center cursor-pointer">
            <figure className="relative w-[72px] aspect-square rounded-md overflow-hidden">
                <Image src='/blog4.jpg' fill className='object-cover'/>
            </figure>
            <div className="flex flex-col gap-2 text-color-iron text-sm">
                <p className="group-hover:text-color-primary font-bold line-clamp-2 tracking-wider leading-relaxed duration-500">
                <Link href='#' className='block'>How Filecoin is Up in a Week Could Take Care</Link>
                </p>
                <span>October 20, 2021</span>
            </div>
            </div>
            <div className="group flex gap-4 items-center cursor-pointer">
            <figure className="relative w-[72px] aspect-square rounded-md overflow-hidden">
                <Image src='/blog2.jpg' fill className='object-cover'/>
            </figure>
            <div className="flex flex-col gap-2 text-color-iron text-sm">
                <p className="group-hover:text-color-primary font-bold line-clamp-2 tracking-wider leading-relaxed duration-500">
                <Link href='#' className='block'>The modern product manager&apos;s tech stack</Link>
                </p>
                <span>October 20, 2021</span>
            </div>
            </div>
            <div className="group flex gap-4 items-center cursor-pointer">
            <figure className="relative w-[72px] aspect-square rounded-md overflow-hidden">
                <Image src='/blog3.jpg' fill className='object-cover'/>
            </figure>
            <div className="flex flex-col gap-2 text-color-iron text-sm">
                <p className="group-hover:text-color-primary font-bold line-clamp-2 tracking-wider leading-relaxed duration-500">
                <Link href='#' className='block'>Why communities help you build better products</Link>
                </p>
                <span>October 20, 2021</span>
            </div>
            </div>
        </div>
        </div>

        <div className="border border-grey rounded-lg p-6">
        <div className="text-color-primary-darker relative text-lg">
            Tags
            <div className="absolute bg-color-primary rounded-full top-full left-0 w-10 h-1"></div>
        </div>
        <div className="flex items-center gap-2 gap-y-2 flex-wrap mt-8">
            <Link href='#' className="ship">Business</Link>
            <Link href='#' className="ship">MEMA</Link>
            <Link href='#' className="ship">Digital</Link>
            <Link href='#' className="ship">Software</Link>
        </div>
        </div>

    </div>
  )
}

export default BlogSidebar