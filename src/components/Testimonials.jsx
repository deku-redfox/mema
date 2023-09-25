'use client'

import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAdd, faChevronLeft, faChevronRight} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import React, { useEffect, useState } from 'react'
import TestiDots from 'public/quotes-dot.svg'
import Parse from 'parse'


Parse.initialize('Sxhd4lW1hy9yQQlPFVZrm0kyE9oCkYlWJg2D4bdi', 'PSmNS7SJKgvAqTmlU8H0URzuc1f525uWbpbsZoEA')
Parse.serverURL = 'https://memaweb.b4a.io'

const Testimonials = () => {

    const [value, setValue] = useState(0)
    const [testimonials, setTestimonials] = useState([])

    function getNote(id) {
        const currentTesti = testimonials.find(testi => testi.id === id)
        const stars = []

        for (let i = 0; i < 5; i++) {
            
            if (i < currentTesti.attributes.note) {
                stars.push(<li key={i} className="text-color-gold"><FontAwesomeIcon icon={faStar} size='xs'/></li>)
            }
            else{
                stars.push(<li key={i} className="text-color-primary-darker"><FontAwesomeIcon icon={faStar} size='xs'/></li>)
            }
        }

        return stars;
    }

    function slideRight() {
        const next = (value + 1) % testimonials.length
        setValue(next)
        console.log(next);
    }

    function slideLeft() {
        let previous = value - 1
        if (previous < 0)
            previous = testimonials.length - 1

        setValue(previous)
    }

    useEffect(()=> {

        try {
            new Parse.Query('Testimonial').exclude('title', 'thumb').include('author').descending('note')
                .find().then(testi => {
                    setTestimonials(testi)
                })
        } catch (error) {
            console.error('Error when getting post', error);
        }

    }, [])

    useEffect(()=> {
        
        if (testimonials.length > 0) {
            
            const id = setInterval(() => {
                slideRight()
            }, 3000);
    
            return ()=> clearInterval(id)
        }

    }, [value, testimonials])

  return (
    <div className="container py-28">

        <div className="flex flex-col items-center">

            <div className="text-center w-full lg:w-[700px]">
                <p className="text-color-primary text-lg mb-3">Testimonials</p>

                <h2 className="text-color-primary-darker mb-4">What They Say About Us</h2>

                <p className='text-color-grey-dark'>
                    Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow
                    value whereas accurate e-commerce vectors.
                </p>
            </div>

            <div className="relative px-4">

                <div className="relative overflow-hidden mt-4 px-4 py-10">

                    <div className={`flex items-center duration-500 -mx-4`}
                        style={{transform: `translateX(-${value}00%)`}}>

                        {
                            testimonials.map((testimonial, index) => {
                                const author = testimonial.attributes.author.attributes

                                return (
                                    <div key={testimonial.id} className={`${index <= 0 ? 'relative' : `absolute w-full`} shadeWide rounded-lg 
                                        py-12 px-10 flex flex-col gap-6 bg-white`} style={{left: `${index * 100}%`}}>
                                        <Image src='/quotes.svg' height={140} width={140} className='absolute right-4 bottom-12'/>
                                        <div className="flex items-center gap-4">
                                            <div className="relative z-10 h-[60px] w-[60px]">
                                                <Image src={author.profile} fill className='rounded-md object-cover'/>
                                                <Image src={TestiDots} height={80} width={80} className='absolute -left-1/3 -top-1/2 -z-10'/>
                                            </div>
                                            <div>
                                                <p className="text-color-primary-darker text-lg">{author.username}</p>
                                                <p className='text-color-iron'>{author.job}</p>
                                            </div>
                                        </div>
                                        <p className="text-color-iron pr-12 z-10">{testimonial.attributes.content}</p>
                                        <ul className="flex gap-1 text-color-gold text-sm">{getNote(testimonial.id)}</ul>
                                    </div>
                                )
                            })
                        }
                        
                    </div>

                </div>

                {
                    testimonials.length > 0 && (
                        <div className="absolute -left-4 top-1/2 -translate-y-1/2 h-10 w-10 rounded-md flex justify-center items-center shadow-md
                            bg-white text-color-primary hover:text-white hover:bg-color-primary duration-500 cursor-pointer z-20"
                            >
                            <FontAwesomeIcon icon={faChevronLeft} onClick={slideLeft}/>
                        </div>
                    )
                }

                {
                    testimonials.length > 0 && (
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-md flex justify-center items-center shadow-md
                            bg-white text-color-primary hover:text-white hover:bg-color-primary duration-500 cursor-pointer z-20"
                            >
                            <FontAwesomeIcon icon={faChevronRight} onClick={slideRight}/>
                        </div>
                    )
                }

            </div>

        </div>

    </div>
  )
}

export default Testimonials