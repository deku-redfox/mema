import React from 'react'
import FlatButton from '@/components/FlatButton'
import PlayBtn from '@/components/PlayBtn'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const StartBox = ({expand = false}) => {
  return (
    <div className={`${!expand && 'rounded-3xl'} bg-color-blue-grey w-full flex flex-col gap-3 items-center py-28 px-4 text-center relative overflow-hidden`}>

        <div className="absolute -top-[200px] -right-[210px] bg-color-orange rounded-full h-[300px] w-[300px] hidden xl:block"></div>

        <h5 className="text-color-orange">Let&apos;s Try! Get Free Support</h5>

        <h2 className="text-white">Start Your 14-Day Free Trial</h2>

        <p className="text-color-grey max-w-[450px] md:w-auto">We can help you to create your dream website for better business revenue.</p>

        <div className="flex flex-col sm:flex-row gap-4 items-center mt-10 mb-3">
            <FlatButton text='Contact With Us' textHover='hover:text-color-primary' borderHover='hover:border-color-primary'/>
            <PlayBtn text='How It Work'/>
        </div>

        <ul className="flex items-center justify-center flex-wrap gap-6 text-color-grey">
            <li>
                <span className="checkCircle bg-white/20 text-white">
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className='text-[17px] align-middle'>Free 14-day trial</span>
            </li>
            <li>
                <span className="checkCircle bg-white/20 text-white">
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className='text-[17px] align-middle'>No credit card required</span>
            </li>
            <li>
                <span className="checkCircle bg-white/20 text-white">
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className='text-[17px] align-middle'>Support 24/7</span>
            </li>
            <li>
                <span className="checkCircle bg-white/20 text-white">
                    <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className='text-[17px] align-middle'>Cancel anytime</span>
            </li>
        </ul>

    </div>
  )
}

export default StartBox