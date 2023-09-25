'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Image from 'next/image'
import Parse from 'parse'
import Skeleton from './Skeleton'

Parse.initialize('Sxhd4lW1hy9yQQlPFVZrm0kyE9oCkYlWJg2D4bdi', 'PSmNS7SJKgvAqTmlU8H0URzuc1f525uWbpbsZoEA')
Parse.serverURL = 'https://memaweb.b4a.io'

const TestimonialSection = () => {

    const [testimonials, setTestimonials] = useState([])
    const [current, setCurrent] = useState({})
    const [note, setNote] = useState([])

    const [anim, setAnim] = useState('')

    function setTestimonial(id, fallBackObj) {
        const datas = testimonials.length > 0 ? testimonials : fallBackObj
        const currentTesti = datas.find(testi => testi.id === id)
        console.log(id);
        console.log(datas);
        setCurrent(currentTesti.attributes)
        setAnim('animate-fadeIn')

        const stars = []

        for (let i = 0; i < 5; i++) {
            
            if (i < currentTesti.attributes.note) {
                stars.push(<li key={i} className="text-color-gold"><FontAwesomeIcon icon={faStar} size='xs'/></li>)
            }
            else{
                stars.push(<li key={i} className="text-white"><FontAwesomeIcon icon={faStar} size='xs'/></li>)
            }
        }

        setNote(stars)
    }

    useEffect(()=> {

        try {
            new Parse.Query('Testimonial').notEqualTo('title', '').include('author').descending('note')
                .find().then(testi => {
                    setTestimonials(testi)
                    console.log(testi);

                    const firstId = testi[0].id
                    setTestimonial(firstId, testi)
                })
        } catch (error) {
            console.error('Error when getting post', error);
        }

    }, [])

  return (
    <div className="flex flex-col items-center">

        <div className="text-center max-w-[600px] max-md:max-w-[460px]">
        <h5 className="text-color-orange mb-4">Testimonial</h5>

        <h2 className="text-white mb-4">What They Say About Us</h2>

        <p className='text-color-grey'>
            Uniquely promote adaptive quality vectors rather than stand-alone e-markets.
            pontificate alternative architectures whereas iterate.
        </p>
        </div>

        {
            testimonials.length > 0 ? (
                <div className={`flex flex-col md:flex-row md:items-center gap-8 mt-16 ${anim}`} 
                    onAnimationEnd={()=> { setAnim('') }}>

                    <div className="flex-1 flex flex-col items-start">
                        <FontAwesomeIcon icon={faQuoteLeft} size='3x' className='text-white'/>
                        <h3 className='text-white mt-3 tracking-wide'>{current.title}</h3>
                        <ul className='flex mt-1 space-x-1'>
                            { note }
                        </ul>
                        <p className="text-[#FFFFFF91] my-6 text-lg leading-normal">{current.content}</p>
                        <p className="text-white mb-1 font-bold mt-2">{current.author.attributes.username}</p>
                        <p className="text-sm text-[#FFFFFF91]">{current.author.attributes.job}</p>
                    </div>

                    <div className="relative flex-[0.95] pt-6 pl-6">
                        <div className="absolute top-0 left-0 h-[250px] w-[250px]">
                            <Image src='/dot.png' fill alt='dots'/>
                        </div>
                        <figure className="relative rounded-xl overflow-hidden w-full aspect-[1.25] shadeVast after:content-['']
                            after:absolute after:inset-0 after:bg-[linear-gradient(180deg,transparent,#171347)] after:opacity-60">
                            <Image src={current.thumb} fill alt='testimonial1'/>
                        </figure>
                    </div>

                </div>
            )
            : (
                <div className={`flex flex-col md:flex-row md:items-center gap-8 mt-16 ${anim} w-full`}>

                    <div className="flex-1 flex flex-col items-start">
                        <Skeleton width='w-full' white>
                            <div className='h-14'></div>
                        </Skeleton>
                        <Skeleton width='w-1/3' className='mt-4' white>
                            <div className='h-4 mt-1'></div>
                        </Skeleton>
                        <div className="w-full space-y-4 mt-20">
                            <Skeleton width='w-full' white>
                                <div className="h-6">{current.content}</div>
                            </Skeleton>
                            <Skeleton width='w-1/3' white>
                                <div className="h-6">{current.content}</div>
                            </Skeleton>
                            <Skeleton width='w-full' white>
                                <div className="h-6">{current.content}</div>
                            </Skeleton>
                        </div>
                    </div>

                    <div className="relative flex-[0.95] pt-6 pl-6">
                        <Skeleton white>
                            <div className="relative rounded-xl overflow-hidden w-full aspect-[1.25]"></div>
                        </Skeleton>
                    </div>

                </div>
            )
        }

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-16 w-full">
        
            {
                testimonials.map(testimonial => {
                    const author = testimonial.attributes.author.attributes
                    return (
                        <div key={testimonial.id} onClick={() => {setTestimonial(testimonial.id)}} 
                         className={`${current.author === author ? 'max-sm:translate-x-2 sm:-translate-y-2 bg-white/10' : 'bg-white/5'} 
                            flex-1 p-3 border border-[#eaeaeb0e] rounded-md cursor-pointer flex gap-4 items-center text-white duration-300`}>
                            <div className="h-[52px] w-[52px] rounded-full relative overflow-clip">
                            <Image src={author.profile} fill alt='author1' className='object-cover'/>
                            </div>
                            <div className="flex flex-col">
                            <h6>{author.username}</h6>
                            <p className="text-sm">{author.job}</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>
        
    </div>
  )
}

export default TestimonialSection