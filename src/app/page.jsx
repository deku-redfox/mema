import Image from 'next/image'
import FlatButton from '@/components/FlatButton'
import PlayBtn from '@/components/PlayBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubesStacked, faShield, faPenRuler, faDatabase, faCheck, faWaveSquare, faCreditCard, faCalendarCheck, faCalendarTimes} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import Balls from '@/components/Balls'
import TestimonialSection from '@/components/TestimonialSection'
import PricingRow from '@/components/PricingRow'
import StartBox from '@/components/StartBox'

export default function Home() {

  return (
    <main>
      
      <section id="top" className='cover overflow-hidden'>

        <div className="container pt-60 pb-28">

          <div className="flex flex-col-reverse lg:flex-row lg:items-stretch gap-12 lg:gap-4 js-hidden">

            <div className="flex flex-1 flex-col max-md:items-center max-md:text-center">
              <h2 className='text-white tracking-tighter text-[38px] xl:text-[42px]'>
                Empowers Businesses To Reach Their Target Audience
              </h2>
              <p className="text-color-grey leading-normal text-lg mt-4">
                Promote a new product, run a limited time offer, or simply 
                nurture customer relationships. Your
                messages are delivered promptly and effectively.
              </p>
              <div className="flex max-sm:flex-col gap-6 items-center mt-10">
                <FlatButton text='Request for Demo' link='https://wa.link/ffjq0b' external 
                  hoverEffect='hover:border-color-grey hover:text-color-white'/>
                <PlayBtn text='How It Works'/>
              </div>
              <div className="flex flex-col gap-4 mt-12 w-full">
                <p className="text-color-grey font-bold">Our Top Clients:</p>
                <div className="grid grid-cols-3 sm:grid-cols-[repeat(3,140px)] items-center max-md:justify-center gap-y-2 gap-4 sm:-translate-x-3 max-sm:w-full">
                  <div className="relative aspect-[16/7]">
                    <Image src="/client-1.png" fill alt='Roba soft logo'/>
                  </div>
                  <div className="relative aspect-[16/7]">
                    <Image src="/client-2.png" fill alt='Waves logo'/>
                  </div>
                  <div className="relative aspect-[16/7]">
                    <Image src="/client-2.png" fill alt='Roba soft logo'/>
                  </div>
                </div>
              </div>
            </div>

            <div className='relative flex-1 shrink-0'>
              <Balls/>
              <div className='relative lg:h-[75%] xl:h-[85%] aspect-video'>
                <Image src='/banner.png' fill alt='Computer Banner'/>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section id="feature" className="bg-darker">

        <div className="container py-28">

          <div className="flex flex-col items-center">

            <div className="text-center max-w-[600px] max-md:max-w-[460px]">
              <h2 className="text-color-primary-darker mb-4">With all the Features You Need</h2>

              <p className='text-color-grey-dark'>
                Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas
                distributed for stand-alone web-readiness.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8 mt-10 flex-1">

              <div className="flex flex-col items-start py-10 px-8 border-[3px] border-transparent hover:border-color-primary rounded-md 
                hover:translate-x-2 hover:-translate-y-2 duration-500 shadeWide">
                <div className="p-4 rounded-md bg-color-primary text-white">
                  <FontAwesomeIcon icon={faCubesStacked} size='xl'/>
                </div>
                <h5 className='text-color-primary-darker mt-6'>Good Performance</h5>
                <p className="text-color-grey-dark mt-2">
                  Appropriately grow competitive rather leadership the leadership processes sound without state.
                </p>
              </div>

              <div className="flex flex-col items-start py-10 px-8 border-[3px] border-transparent hover:border-red-500 rounded-md
                hover:translate-x-2 hover:-translate-y-2 duration-500 shadeWide">
                <div className="p-4 rounded-md bg-red-500 text-white">
                  <FontAwesomeIcon icon={faShield} size='xl'/>
                </div>
                <h5 className='text-color-primary-darker mt-6'>Highly Secure</h5>
                <p className="text-color-grey-dark mt-2">
                  Appropriately grow competitive rather leadership the leadership processes sound without state.
                </p>
              </div>

              <div className="flex flex-col items-start py-10 px-8 border-[3px] border-transparent hover:border-color-orange rounded-md
                hover:translate-x-2 hover:-translate-y-2 duration-500 shadeWide">
                <div className="p-4 rounded-md bg-color-orange text-white">
                  <FontAwesomeIcon icon={faPenRuler} size='xl'/>
                </div>
                <h5 className='text-color-primary-darker mt-6'>Fast Performance</h5>
                <p className="text-color-grey-dark mt-2">
                  Appropriately grow competitive rather leadership the leadership processes sound without state.
                </p>
              </div>

            </div>

            <div className="flex gap-6 items-center flex-col md:flex-row mt-24 w-full">

              <div className="flex-1 max-md:w-full bg-color-pink p-12 rounded-lg relative">
                <div className='max-w-[320px] md:max-w-[234px] lg:max-w-[320px] flex flex-col items-start'>
                  <h5 className='text-color-primary-darker'>Utilize your software data</h5>
                  <p className="text-color-grey-dark mt-2 mb-8">
                    Progressively reinvent models and niche revolutionary benefits for integrated.
                  </p>
                  <FlatButton text='Learn more' initial='border-color-primary text-color-primary'
                    hoverEffect='hover:bg-color-primary hover:text-white'/>
                </div>
                <div className="absolute right-0 bottom-0 max-[400px]:h-[45%] max-sm:h-[55%] h-[70%] 
                  md:h-[40%] lg:h-[56%] xl:h-4/5 aspect-square">
                  <Image src='/promo-feature.png' fill/>
                </div>
              </div>

              <div className="flex-1 max-md:w-full bg-color-blue-light p-12 rounded-lg relative">
                <div className='max-w-[320px] md:max-w-[234px] lg:max-w-[320px] flex flex-col items-start'>
                  <h5 className='text-color-primary-darker'>Get real time updated anytime</h5>
                  <p className="text-color-grey-dark mt-2 mb-8">
                    Progressively reinvent models and niche revolutionary benefits for integrated.
                  </p>
                  <FlatButton text='Learn more' initial='border-color-primary text-color-primary'
                    hoverEffect='hover:bg-color-primary hover:text-white'/>
                </div>
                <div className="absolute right-0 bottom-0 max-[400px]:h-[45%] max-sm:h-[55%] h-[70%] 
                  md:h-[40%] lg:h-[56%] xl:h-4/5 aspect-square">
                  <Image src='/promo-feature-2.png' fill/>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section>

        <div className="container py-20">

          <div className="flex flex-col items-center lg:flex-row gap-10">

            <div className="flex flex-col items-start gap-4 flex-[1.6]">
              <div className="bg-color-primary rounded-md py-4 px-[20px] text-white">
                <FontAwesomeIcon icon={faDatabase}/>
              </div>
              <h2 className="text-color-primary-darker">Advanced Analytics, Understand Business</h2>
              <p className="text-color-grey-dark">
                Distinctively promote parallel vortals with ubiquitous e-markets. 
                Proactively benchmark turnkey optimize next-generation strategic leadership without resource sucking ideas.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 space-y-3 md:p-0 w-full">
                <div>
                  <ul className="space-y-3 text-color-grey-dark">
                    <li>
                      <span className="checkCircle">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Thought leadership</span>
                    </li>
                    <li>
                      <span className="checkCircle">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Modernized prospecting</span>
                    </li>
                    <li>
                      <span className="checkCircle">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Showcasing success</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li>
                      <span className="checkCircle">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Personal branding</span>
                    </li>
                    <li>
                      <span className="checkCircle">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Better win rates</span>
                    </li>
                    <li>
                      <span className="checkCircle">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Sales compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className='relative w-full md:w-[75%] lg:w-auto lg:flex-[1.3] xl:flex-[1.4] lg:m-0'>
              <div className="relative aspect-[1.37] w-full">
                <Image src='/widget-11.png' fill alt='Widget1'/>
              </div>
            </div>

          </div>

          <div className="flex flex-col max-lg:items-center lg:flex-row-reverse gap-10 mt-28">

            <div className="flex flex-col items-start gap-4 flex-[1.6]">
              <div className="bg-color-primary-darker rounded-md p-4 text-white">
                <FontAwesomeIcon icon={faWaveSquare}/>
              </div>
              <h2 className="text-color-primary-darker">Match Everything to Brand and Style</h2>
              <p className="text-color-grey-dark">
                Intrinsicly pontificate reliable metrics with enabled. Holisticly maintains clicks-and-mortar 
                manufactured products empower viral customer service through resource deliverables.
              </p>
              <p className="text-color-grey-dark">
                Customer service through resource pontificate reliable 
                metrics with enabled expedite resource maximizing information maintain manufactured products.
              </p>
            </div>
            
            <div className='relative w-full md:w-[75%] lg:w-auto lg:flex-[1.3] xl:flex-[1.4] lg:m-0'>
              <div className="relative aspect-[1.29] w-full">
                <Image src='/widget-12.png' fill alt='Widget2'/>
              </div>
            </div>
          </div>

        </div>

      </section>

      <section id="testimonials" className='cover'>

        <div className="container py-28">

          <TestimonialSection/>

        </div>

      </section>

      <section id='pricing'>

        <div className="container py-28">

          <div className="flex flex-col items-center">

            <div className="text-center w-full lg:max-w-[700px]">
              <p className="text-color-primary text-lg mb-3">Pricing</p>

              <h2 className="text-color-primary-darker mb-4">Check Our Valuable Price</h2>

              <p className='text-color-grey-dark'>
                Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow
                value whereas accurate e-commerce vectors.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 gap-y-6 items-center pt-12 md:px-16 xl:px-28 justify-between w-full">

              <div className="flex gap-3 items-center">
                <div className="h-[52px] w-[52px] rounded-full flex justify-center items-center bg-blue-500/20 text-blue-500/70">
                  <FontAwesomeIcon icon={faCreditCard} size='lg'/>
                </div>
                <p className="text-color-primary-darker font-bold">No Credit Card Required</p>
              </div>

              <div className="flex gap-3 items-center">
                <div className="h-[52px] w-[52px] rounded-full flex justify-center items-center bg-green-500/20 text-green-500/70">
                  <FontAwesomeIcon icon={faCalendarCheck} size='lg'/>
                </div>
                <p className="text-color-primary-darker font-bold">Get 30 day free trial</p>
              </div>

              <div className="flex gap-3 items-center">
                <div className="h-[52px] w-[52px] rounded-full flex justify-center items-center bg-red-500/10 text-red-500/70">
                  <FontAwesomeIcon icon={faCalendarTimes} size='lg'/>
                </div>
                <p className="text-color-primary-darker font-bold">Cancel anytime</p>
              </div>

            </div>

            <PricingRow/>

          </div>

        </div>

      </section>

      <section id="faq" className="bg-darker">

        <div className="container py-28">

          <div className="flex flex-col items-center">

            <div className="text-center w-full lg:max-w-[700px]">
              <p className="text-color-primary text-lg mb-3">FAQ</p>

              <h2 className="text-color-primary-darker mb-4">Frequently Asked Questions</h2>

              <p className='text-color-grey-dark'>
                Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow
                value whereas accurate e-commerce vectors.
              </p>
            </div>

            <div className="flex flex-col md:flex-row gap-6 mt-14">

              <div className="flex-[0.8] space-y-12">
                
                <div className="space-y-3">
                  <p className="text-color-primary-darker text-xl font-bold">
                    <span className="text-color-primary text-3xl mr-3">1.</span>How does back pricing work?
                  </p>
                  <p className="text-color-iron">
                    Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically 
                    methods of empowerment for synergistic sound scenarios.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-color-primary-darker text-xl font-bold">
                    <span className="text-color-primary text-3xl mr-3">2.</span>How do I calculate how much price?
                  </p>
                  <p className="text-color-iron">
                    Globally benchmark customized mindshare before clicks-and-mortar partnerships. 
                    Efficiently maintain economically sound scenarios and whereas client-based progressively.
                  </p>
                </div>

                <div className="space-y-3">
                  <p className="text-color-primary-darker text-xl font-bold">
                    <span className="text-color-primary text-3xl mr-3">3.</span>How does back pricing work?
                  </p>
                  <p className="text-color-iron">
                    Progressively e-enable collaborative inexpensive supply chains. Efficiently maintain economically 
                    methods of empowerment for synergistic sound scenarios.
                  </p>
                </div>

              </div>

              <figure className="relative flex-1 max-md:aspect-[16/12]">
                <Image src='/faq-min.svg' fill className='h-auto'/>
              </figure>

            </div>

          </div>

        </div>

      </section>

      <section>

        <div className="container py-28">

          <StartBox/>

        </div>

      </section>

    </main>
  )
}
