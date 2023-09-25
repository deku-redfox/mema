import Image from 'next/image'
import Link from 'next/link'
import FlatButton from '@/components/FlatButton'
import CustomInput from '@/components/CustomInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faMailBulk, faContactCard } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PageIndicator from '@/components/PageIndicator'


export default function Home() {
  return (
    <main>

      <PageIndicator page='Contact'/>

      <section>

        <div className="container py-28">

          <div className="flex flex-col md:flex-row gap-8">

            <div className="flex flex-col items-center bg-color-grey-soft py-10 px-6 rounded-lg text-center flex-1 hover:-translate-y-3 duration-500">
              <div className="bg-blue-500/20 h-[72px] w-[72px] rounded-full flex items-center justify-center text-color-primary">
                <FontAwesomeIcon icon={faMessage} size='xl'/>
              </div>
              <h4 className="text-color-primary-darker mt-8 mb-3">Chat with us</h4>
              <p className="text-color-grey-dark mb-6">
                We've got live Social Experts waiting to help you <span className="font-bold">
                monday to friday</span> <span className="font-bold">from 9am to 5pm</span> EST.
              </p>
              <Link href='#' className='underline text-color-primary text-[15px] hover:decoration-transparent duration-200'>
                Chat with us
              </Link>
            </div>

            <div className="flex flex-col items-center bg-color-grey-soft py-10 px-6 rounded-lg text-center flex-1 hover:-translate-y-3 duration-500">
              <div className="bg-blue-500/20 h-[72px] w-[72px] rounded-full flex items-center justify-center text-color-primary">
                <FontAwesomeIcon icon={faMailBulk} size='xl'/>
              </div>
              <h4 className="text-color-primary-darker mt-8 mb-3">Email Us</h4>
              <p className="text-color-grey-dark mb-6">
                Simple drop us an email at hellothemetags@gmail.com and you'll receive a reply within 24 hours
              </p>
              <FlatButton text='Email Us' black= {false} textHover='hover:text-color-primary' borderHover='hover:border-color-primary'/>
            </div>

            <div className="flex flex-col items-center bg-color-grey-soft py-10 px-6 rounded-lg text-center flex-1 hover:-translate-y-3 duration-500">
              <div className="bg-blue-500/20 h-[72px] w-[72px] rounded-full flex items-center justify-center text-color-primary">
                <FontAwesomeIcon icon={faContactCard} size='xl'/>
              </div>
              <h4 className="text-color-primary-darker mt-8 mb-3">Give us a call</h4>
              <p className="text-color-grey-dark mb-6">
                We've got live Social Experts waiting to help you <span className="font-bold">
                monday to friday</span> <span className="font-bold">from 9am to 5pm</span> EST.
              </p>
              <Link href='#' className='underline text-color-primary text-[15px] hover:decoration-transparent duration-200'>
                00-976-561-008
              </Link>
            </div>

          </div>

          <div className="flex flex-col items-center mt-32">

            <div className="text-center w-[600px] max-md:w-[460px]">
              <h2 className="text-color-primary-darker mb-4">Talk to Our Sales & Marketing Department Team</h2>

              <p className='text-color-grey-dark'>
                Collaboratively promote client-focused convergence vis-a-vis customer directed 
                alignments via standardized infrastructures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 items-center w-full sm:px-20 md:px-0 md:gap-6 mt-4 md:mt-8">

              <figure className='relative aspect-[1.2]'>
                <Image src='/contact-us-img-2.svg' fill/>
              </figure>

              <form className="flex flex-col gap-4" action='/' method='POST'>
                <div className="flex gap-6">
                  <CustomInput type='text' placeholder='First Name'/>
                  <CustomInput type='text' placeholder='Last Name'/>
                </div>
                <div className="flex gap-6">
                  <CustomInput type='tel' placeholder='Phone'/>
                  <CustomInput type='email' placeholder='Your Email'/>
                </div>
                <textarea rows="5" placeholder='Your message' className='p-4 bg-color-grey-soft 
                  rounded-md border-2 border-transparent focus:border-color-primary focus:bg-white outline-none duration-300'>
                </textarea>
                <FlatButton text='Send Message' black= {false} className='self-start'
                    textHover='hover:text-color-primary' borderHover='hover:border-color-primary'/>
              </form>

            </div>

          </div>

        </div>

      </section>

    </main>
  )
}
