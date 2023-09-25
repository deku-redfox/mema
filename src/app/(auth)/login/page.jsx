import Image from 'next/image'
import FlatButton from '@/components/FlatButton'
import PlayBtn from '@/components/PlayBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubesStacked, faShield, faPenRuler, faDatabase, faCheck, faWaveSquare, faQuoteLeft, faStar } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'


export default function Home() {
  return (
    <main>
      
      <section id="top" className='cover'>

        <div className="container pt-60 pb-40 overflow-hidden">

          <div className="flex items-center gap-4">

            <div className="flex flex-1 flex-col">
              <h1 className='text-white tracking-tighter'>
                Empowers Businesses To Reach Their Target Audience
              </h1>
              <p className="text-color-grey leading-normal text-lg mt-4">
                Wether you're promoting a new product, running a limited time offer, or simply 
                nurturing customer relationships, MEMA ensures that your
                messages are delivered promptly and effectively.
              </p>
              <div className="flex gap-6 items-center mt-10">
                <FlatButton text='Request for Demo' link='https://wa.link/ffjq0b' external 
                  hoverEffect='hover:border-color-grey hover:text-color-white'/>
                <PlayBtn text='How It Works'/>
              </div>
              <div className="flex flex-col gap-4 mt-12">
                <p className="text-color-grey font-bold">Our Top Clients:</p>
                <div className="flex items-center gap-4 -translate-x-3">
                  <Image src="/client-1.png" height={140} width={140}/>
                  <Image src="/client-2.png" height={140} width={140}/>
                  <Image src="/client-1.png" height={140} width={140}/>
                </div>
              </div>
            </div>

            <div className='flex-[0.9] shrink-0 -mr-20 aspect-square'>
              <div className='relative w-full h-full'>
                <Image src='/banner.png' fill className=''/>
              </div>
            </div>

          </div>

        </div>

      </section>

      <section id="feature" className="bg-darker">

        <div className="container py-28">

          <div className="flex flex-col items-center">

            <div className="text-center w-[600px] max-md:w-[460px]">
              <h2 className="text-color-primary-darker mb-4">With all the Features You Need</h2>

              <p className='text-color-grey-dark'>
                Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas
                distributed for stand-alone web-readiness.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8 mt-16 flex-1">

              <div className="flex flex-col items-start py-12 px-8 border-[3px] border-transparent hover:border-white rounded-md 
                hover:translate-x-2 hover:-translate-y-2 duration-500">
                <div className="p-4 rounded-md bg-color-primary text-white">
                  <FontAwesomeIcon icon={faCubesStacked} size='xl'/>
                </div>
                <h5 className='text-color-primary-darker mt-6'>Good Performance</h5>
                <p className="text-color-grey-dark mt-2">
                  Appropriately grow competitive rather leadership the leadership processes sound without state.
                </p>
              </div>

              <div className="flex flex-col items-start py-12 px-8 border-[3px] border-transparent hover:border-white rounded-md
                hover:translate-x-2 hover:-translate-y-2 duration-500">
                <div className="p-4 rounded-md bg-red-500 text-white">
                  <FontAwesomeIcon icon={faShield} size='xl'/>
                </div>
                <h5 className='text-color-primary-darker mt-6'>Highly Secure</h5>
                <p className="text-color-grey-dark mt-2">
                  Appropriately grow competitive rather leadership the leadership processes sound without state.
                </p>
              </div>

              <div className="flex flex-col items-start py-12 px-8 border-[3px] border-transparent hover:border-white rounded-md
                hover:translate-x-2 hover:-translate-y-2 duration-500">
                <div className="p-4 rounded-md bg-color-primary-darker text-white">
                  <FontAwesomeIcon icon={faPenRuler} size='xl'/>
                </div>
                <h5 className='text-color-primary-darker mt-6'>Fast Performance</h5>
                <p className="text-color-grey-dark mt-2">
                  Appropriately grow competitive rather leadership the leadership processes sound without state.
                </p>
              </div>

            </div>

            <div className="flex gap-6 items-center flex-col md:flex-row mt-24 w-full">

              <div className="flex-1 max-md:w-full flex flex-col bg-color-pink p-12 rounded-lg items-start relative">
                <div className='w-[320px] md:w-[234px] lg:w-[320px]'>
                  <h5 className='text-color-primary-darker'>Utilize your software data</h5>
                  <p className="text-color-grey-dark mt-2 mb-8">
                    Progressively reinvent models and niche revolutionary benefits for integrated.
                  </p>
                  <FlatButton text='Learn more' black={false} textHover='hover:text-color-primary' borderHover='hover:border-color-primary'/>
                </div>
                <div className="absolute right-0 bottom-0 h-[70%] md:h-[40%] lg:h-[56%] xl:h-4/5 aspect-square">
                  <Image src='/promo-feature.png' fill/>
                </div>
              </div>

              <div className="flex-1 max-md:w-full flex flex-col bg-color-blue-light p-12 rounded-lg items-start relative">
                <div className='w-[320px] md:w-[234px] lg:w-[320px]'>
                  <h5 className='text-color-primary-darker'>Get real time updated anytime</h5>
                  <p className="text-color-grey-dark mt-2 mb-8">
                    Progressively reinvent models and niche revolutionary benefits for integrated.
                  </p>
                  <FlatButton text='Learn more' black={false} textHover='hover:text-color-primary' borderHover='hover:border-color-primary'/>
                </div>
                <div className="absolute right-0 bottom-0 h-[70%] md:h-[40%] lg:h-[56%] xl:h-4/5 aspect-square">
                  <Image src='/promo-feature-2.png' fill/>
                </div>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section>

        <div className="container py-28">

          <div className="flex flex-col max-lg:items-center lg:flex-row gap-10">

            <div className="flex flex-col items-start gap-4 flex-[1.6]">
              <div className="bg-color-primary rounded-md p-4 text-white">
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
                      <span className="rounded-full bg-blue-100 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Thought leadership</span>
                    </li>
                    <li>
                      <span className="rounded-full bg-blue-100 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Modernized prospecting</span>
                    </li>
                    <li>
                      <span className="rounded-full bg-blue-100 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Showcasing success</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul className="space-y-3">
                    <li>
                      <span className="rounded-full bg-blue-100 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Personal branding</span>
                    </li>
                    <li>
                      <span className="rounded-full bg-blue-100 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Better win rates</span>
                    </li>
                    <li>
                      <span className="rounded-full bg-blue-100 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                        <FontAwesomeIcon icon={faCheck}/>
                      </span>
                      <span className='text-[17px] align-middle'>Sales compliance</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className='aspect-[1.37] relative w-full md:w-[75%] lg:w-auto lg:flex-[1.2] xl:flex-[2] mt-6 lg:m-0'>
              <Image src='/widget-11.png' fill/>
            </div>

          </div>

          <div className="flex flex-col max-lg:items-center lg:flex-row-reverse gap-10 mt-32">

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
            
            <div className='aspect-[1.29] relative w-full md:w-[75%] lg:w-auto lg:flex-[1.2] xl:flex-[1.6] mt-6 lg:m-0'>
              <Image src='/widget-12.png' fill/>
            </div>
          </div>

        </div>

      </section>

      <section id="testimonials" className='cover'>

        <div className="container py-28">

          <div className="flex flex-col items-center">

            <div className="text-center w-[600px] max-md:w-[460px]">
              <p className="text-orange-500 mb-4">Testimonial</p>

              <h2 className="text-white mb-4">With all the Features You Need</h2>

              <p className='text-color-grey'>
                Credibly grow premier ideas rather than bricks-and-clicks strategic theme areas
                distributed for stand-alone web-readiness.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-4 mt-16">

              <div className="flex-1 flex flex-col items-start">
                <FontAwesomeIcon icon={faQuoteLeft} size='5x' className='text-white'/>
                <h4 className='text-white mt-3'>The Best Template You Got to Have it!</h4>
                <ul className='flex mt-1 space-x-1'>
                  <li className="text-color-gold"><FontAwesomeIcon icon={faStar} size='xs'/></li>
                  <li className="text-color-gold"><FontAwesomeIcon icon={faStar} size='xs'/></li>
                  <li className="text-color-gold"><FontAwesomeIcon icon={faStar} size='xs'/></li>
                  <li className="text-color-gold"><FontAwesomeIcon icon={faStar} size='xs'/></li>
                  <li className="text-color-gold"><FontAwesomeIcon icon={faStar} size='xs'/></li>
                </ul>
                <p className="text-color-grey my-6">
                  Appropriately disintermediate one-to-one vortals through cross functional infomediaries. 
                  Collaboratively pursue multidisciplinary systems through stand-alone architectures. 
                  Progressively transition covalent architectures whereas vertical applications procrastinate professional.
                </p>
                <p className="text-white mb-1 font-bold">Joe Richard</p>
                <p className="text-sm text-color-grey">Visual Designer</p>
              </div>

              <div className="flex-1 bg-[url(/dot.png)] bg-cover bg-no-repeat">
                <figure className="relative rounded-md overflow-hidden w-full aspect-square">
                  <Image src='/testimonial_tab_1.jpg' fill/>
                </figure>
              </div>

            </div>
            
          </div>

        </div>

      </section>

      <section>

        <div className="container py-28">

          <div className="bg-color-blue-grey w-full flex flex-col gap-3 items-center py-28 rounded-3xl text-center relative overflow-hidden">

            <div className="absolute -top-[200px] -right-[210px] bg-color-orange rounded-full h-[300px] w-[300px] hidden xl:block"></div>

            <h5 className="text-color-orange">Let's Try! Get Free Support</h5>

            <h2 className="text-white">Start Your 14-Day Free Trial</h2>

            <p className="text-color-grey w-[450px] md:w-auto">We can help you to create your dream website for better business revenue.</p>

            <div className="flex gap-4 items-center mt-10 mb-3">
              <FlatButton text='Contact With Us' textHover='hover:text-color-primary' borderHover='hover:border-color-primary'/>
              <PlayBtn text='How It Work'/>
            </div>

            <ul className="flex items-center justify-center flex-wrap gap-6 text-color-grey">
              <li>
                <span className="rounded-full bg-white/20 px-1 py-[2px] mr-2 text-white text-xs inline-block">
                  <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className='text-[17px] align-middle'>Free 14-day trial</span>
              </li>
              <li>
                <span className="rounded-full bg-white/20 px-1 py-[2px] mr-2 text-white text-xs inline-block">
                  <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className='text-[17px] align-middle'>No credit card required</span>
              </li>
              <li>
                <span className="rounded-full bg-white/20 px-1 py-[2px] mr-2 text-white text-xs inline-block">
                  <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className='text-[17px] align-middle'>Support 24/7</span>
              </li>
              <li>
                <span className="rounded-full bg-white/20 px-1 py-[2px] mr-2 text-white text-xs inline-block">
                  <FontAwesomeIcon icon={faCheck}/>
                </span>
                <span className='text-[17px] align-middle'>Cancel anytime</span>
              </li>
            </ul>

          </div>

        </div>

      </section>

    </main>
  )
}
