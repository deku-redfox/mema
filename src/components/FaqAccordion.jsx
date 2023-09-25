'use client'

import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

const FaqAccordion = ({className}) => {

  const [state, setState] = useState('')

  useEffect(() => {

    document.querySelectorAll('.js-accordion').forEach((accordion, i) => {

      accordion.addEventListener('click', () => {

        const currentFaq = accordion.querySelector('.js-faq-text')
        const classname = ['h-[72px]', 'mt-4', 'mb-2', 'showText']

        document.querySelectorAll('.js-faq-text').forEach((faqText, index) => {

          const showing = faqText.classList.contains('showText')

          if (faqText != currentFaq && showing) {
              faqText.classList.remove(...classname) 
              faqText.classList.add('h-0')
          } 

        })
        if (currentFaq.classList.contains('showText')) {
            currentFaq.classList.remove(...classname) 
            currentFaq.classList.add('h-0')
            setState('')
        } else {
          currentFaq.classList.add(...classname) 
          currentFaq.classList.remove('h-0')
          setState(`${i}`)
        }
        
      })

    })

  }, [])

  

  return (
    <div className={className}>

        <article className="group rounded-lg border-2 py-4 px-6 cursor-pointer bg-white duration-500 js-accordion">
            <div className="flex justify-between items-center px-2">
                <p className="group-hover:text-color-primary text-lg hover:text-color-primary duration-100">How to use WhatsApp for marketting?</p>
                <div className={`p-1 border border-transparent ${state !== '0' && 'group-hover:border-color-primary group-hover:rotate-90'} duration-300`}>
                  <FontAwesomeIcon icon={state === '0' ? faMinus : faAdd} className='js-icon'/>
                </div>
            </div>
            <p className="text-color-iron h-0 overflow-hidden duration-300 js-faq-text">
                WhatsApp in it&apos;s normal use, only allows you to target a small number of audience. To be able to overcome this limitation
                you need to use the MEMA app which gives you the possibility to create marketting campaigns and target a large number of audience of up to
                1 millions.
            </p>
        </article>

        <article className="group rounded-lg border-2 py-4 px-6 cursor-pointer bg-white duration-500 js-accordion">
            <div className="flex justify-between items-center px-2">
                <p className="group-hover:text-color-primary text-lg hover:text-color-primary duration-100">Which payment method does MEMA support?</p>
                <div className={`p-1 border border-transparent ${state !== '1' && 'group-hover:border-color-primary group-hover:rotate-90'} duration-300`}>
                  <FontAwesomeIcon icon={state === '1' ? faMinus : faAdd} className='js-icon'/>
                </div>
            </div>
            <p className="text-color-iron h-0 overflow-hidden duration-300 js-faq-text">
                As of now MEMA doesn&apos;t support any online payment method. But we will remediate in the nearest future, for users of Cameroon, you can contact us throught
                our WhatsApp for the payment procedure
            </p>
        </article>

        <article className="group rounded-lg border-2 py-4 px-6 cursor-pointer bg-white duration-500 js-accordion">
            <div className="flex justify-between items-center px-2">
                <p className="group-hover:text-color-primary text-lg hover:text-color-primary duration-100">How many contact do i get when starting?</p>
                <div className={`p-1 border border-transparent ${state !== '2' && 'group-hover:border-color-primary group-hover:rotate-90'} duration-300`}>
                  <FontAwesomeIcon icon={state === '2' ? faMinus : faAdd} className='js-icon'/>
                </div>
            </div>
            <p className="text-color-iron h-0 overflow-hidden duration-300 js-faq-text">
                After creating a MEMA account, you have the option to start with a free 30 message-package which will be deposited to your account.
                For contacts you&apos;ll need to buy a certain quantity that you&apos;ll need. You can also manually add contacts that you have.
            </p>
        </article>

        <article className="group rounded-lg border-2 py-4 px-6 cursor-pointer bg-white duration-500 js-accordion">
            <div className="flex justify-between items-center px-2">
                <p className="group-hover:text-color-primary text-lg hover:text-color-primary duration-100">How to go about with a bespoke SMO strategy?</p>
                <div className={`p-1 border border-transparent ${state !== '3' && 'group-hover:border-color-primary group-hover:rotate-90'} duration-300`}>
                  <FontAwesomeIcon icon={state === '3' ? faMinus : faAdd} className='js-icon'/>
                </div>
            </div>
            <p className="text-color-iron h-0 overflow-hidden duration-300 js-faq-text">
                There are many variations of passages of Lorem Ipsum available but the majority suffered is alteration 
                in that words which don&apos;t look even slightly believable. If you are Lorem Ipsum you need to be sure there isn&apos;t anything ready too much embarrassing.
            </p>
        </article>

        <article className="group rounded-lg border-2 py-4 px-6 cursor-pointer bg-white duration-500 js-accordion">
            <div className="flex justify-between items-center px-2">
                <p className="group-hover:text-color-primary text-lg hover:text-color-primary duration-100">Is the cost of marketing with MEMA expensive?</p>
                <div className={`p-1 border border-transparent ${state !== '4' && 'group-hover:border-color-primary group-hover:rotate-90'} duration-300`}>
                  <FontAwesomeIcon icon={state === '4' ? faMinus : faAdd} className='js-icon'/>
                </div>
            </div>
            <p className="text-color-iron h-0 overflow-hidden duration-300 js-faq-text">
                Actually not. Compared to other marketing platforms MEMA is cost effective
            </p>
        </article>
    </div>
  )
}

export default FaqAccordion