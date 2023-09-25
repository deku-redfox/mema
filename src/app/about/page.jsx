import Image from 'next/image'
import Link from 'next/link'
import FlatButton from '@/components/FlatButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBalanceScale, faMarker, faPercent, faWheelchair } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PageIndicator from '@/components/PageIndicator'
import Testimonials from '@/components/Testimonials'
import StartBox from '@/components/StartBox'


export default function Home() {

  return (
    <main>

      <PageIndicator page='About Us'/>

      <section id="about">

        <div className="container py-28">

          <div className="flex flex-col md:flex-row md:items-center gap-12">

            <div className="flex-[0.8] flex flex-col text-center md:text-start">
              <h2 className="text-color-primary-darker">
                Growth strategies to be effective & competitive
              </h2>
              <p className="text-color-iron mt-8 mb-10">
                Everything we do and dream up has a solid design impact. We create human-centered 
                enterprise software that has the polished, snappy feel of the best consumer apps.
              </p>
              <FlatButton text='Get Started' className='self-center md:self-start'/>
            </div>

            <figure className="flex-1 relative aspect-video rounded-xl overflow-hidden">
              <Image src='/about-img-3.jpeg' fill alt='about-img'/>
            </figure>

          </div>

        </div>

      </section>

      <section className='bg-darker'>

        <div className="container py-28">

          <div className="flex flex-col md:flex-row items-center gap-20">

            <div className="flex-1 flex flex-col items-start gap-4">
              
              <h5 className="text-color-primary">How we Work</h5>

              <h2 className='text-color-primary-darker'>Powerful Solutions for Your Business Needs</h2>

              <p className="text-color-iron">
                Quickly incubate functional channels with multidisciplinary architectures 
                authoritatively fabricate.
              </p>

              <div className="mt-6 space-y-10">

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-blue-500 text-white rounded-md flex justify-center items-center">
                    <FontAwesomeIcon icon={faPercent} size='xl'/>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h4 className="text-color-primary-darker">Pixel Perfect Design</h4>
                    <p className="text-color-iron">
                      Progressively foster enterprise-wide systems whereas equity 
                      invested web-readiness harness installed.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-red-500 text-white rounded-md flex justify-center items-center">
                    <FontAwesomeIcon icon={faMarker} size='xl'/>
                  </div>
                  <div className="flex-1 flex flex-col gap-2">
                    <h4 className="text-color-primary-darker">Efficiency & Accountability</h4>
                    <p className="text-color-iron">
                      Objectively transition prospective collaboration and idea-sharing 
                      without focused maintain focused niche markets niches.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-yellow-500 text-white rounded-md flex justify-center items-center">
                    <FontAwesomeIcon icon={faBalanceScale} size='xl'/>
                  </div>
                  <div className="flex-1 flex items-start flex-col gap-2">
                    <h4 className="text-color-primary-darker">Efficiency & Accountability</h4>
                    <p className="text-color-iron">
                      Progressively foster enterprise-wide systems whereas equity 
                      invested web-readiness harness installed.
                    </p>
                  </div>
                </div>

              </div>

            </div>

            <figure className="flex-[0.8] relative rounded-lg overflow-hidden aspect-[13/16] max-md:w-4/5">
              <Image src='/feature-img3.jpeg' fill alt='about-img2'/>
            </figure>

          </div>

        </div>

      </section>

      <section id="testimonials">
        <Testimonials/>
      </section>

      <section className='py-28'>
        <StartBox expand/>
      </section>

    </main>
  )
}
