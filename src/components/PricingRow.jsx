import React from 'react'
import FlatButton from '@/components/FlatButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAdd} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const PricingRow = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start gap-6 gap-y-8 mt-16 w-full">

        <div className="flex flex-col items-start p-12 border-transparent rounded-lg shadeWide">
            <p className="text-color-primary text-lg">Standard</p>
            <div className="mt-2">
                <h2 className="text-color-primary-darker inline-block">$29</h2>
                <span className='tracking-wide'>/month</span>
            </div>
            <ul className="my-8 list-disc space-y-3 text-color-iron text-[15px]">
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>1 Team</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>1 Installed Agent</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>Real-Time Feedback</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>Video Dedicated Support</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>1 Attacked Targets Per Month</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>Team Collaboration Tools</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>Automated Updated Features</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>24/7 Life time Support</span>
                </li>
            </ul>
            <FlatButton text='Buy Now' 
                initial='border-color-primary text-color-primary'  hoverEffect='hover:bg-color-primary hover:text-white'/>
        </div>

        <div className="cover flex flex-col items-start p-12 border-transparent rounded-lg shadeWide relative">
            <FontAwesomeIcon icon={faStar} size='3x' className='absolute right-8 top-0 text-white'/>
            <p className="text-lg text-color-gold">Advanced</p>
            <div className="mt-2 text-white">
                <h2 className="inline-block">$45</h2>
                <span className='tracking-wide'>/month</span>
            </div>
            <ul className="my-8 list-disc space-y-3 text-color-grey text-[15px]">
                <li className="flex items-center gap-3">
                    <div className="dot bg-color-gold"></div>
                    <span>1 Team</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot bg-color-gold"></div>
                    <span>1 Installed Agent</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot bg-color-gold"></div>
                    <span>Real-Time Feedback</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot bg-color-gold"></div>
                    <span>Video Dedicated Support</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot bg-color-gold"></div>
                    <span>1 Attacked Targets Per Month</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot bg-color-gold"></div>
                    <span>Team Collaboration Tools</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot bg-color-gold"></div>
                    <span>Automated Updated Features</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot bg-color-gold"></div>
                    <span>24/7 Life time Support</span>
                </li>
            </ul>
            <FlatButton text='Buy Now' hoverEffect='hover:bg-color-orange hover:border-color-orange'/>
        </div>

        <div className="flex flex-col items-start p-12 border-transparent rounded-lg shadeWide">
            <p className="text-color-primary text-lg">Standard</p>
            <div className="mt-2">
                <h2 className="text-color-primary-darker inline-block">$75</h2>
                <span className='tracking-wide'>/month</span>
            </div>
            <ul className="my-8 list-disc space-y-3 text-color-iron text-[15px]">
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>1 Team</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>1 Installed Agent</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>Real-Time Feedback</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>Video Dedicated Support</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>1 Attacked Targets Per Month</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>Team Collaboration Tools</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>Automated Updated Features</span>
                </li>
                <li className="flex items-center gap-3">
                    <div className="dot"></div>
                    <span>24/7 Life time Support</span>
                </li>
            </ul>
            <FlatButton text='Buy Now'
                initial='border-color-primary text-color-primary'  hoverEffect='hover:bg-color-primary hover:text-white'/>
        </div>

    </div>
  )
}

export default PricingRow