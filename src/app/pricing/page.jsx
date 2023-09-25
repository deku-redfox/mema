import PageIndicator from '@/components/PageIndicator'
import FaqAccordion from '@/components/FaqAccordion'
import Testimonials from '@/components/Testimonials'
import PricingRow from '@/components/PricingRow'

export default function Pricing() {

  return (
    <main>

      <section id="top" className='bg-color-blue-grey'>

        <PageIndicator page='Pricing' title='Price Suit to Your Business'/>
        
      </section>

      <section>

        <div className="container py-28">

          <div className="flex flex-col items-center">

            <div className="text-center w-full lg:w-[700px]">
              <p className="text-color-primary text-lg mb-3">Pricing</p>

              <h2 className="text-color-primary-darker mb-4">Check Our Valuable Price</h2>

              <p className='text-color-grey-dark'>
                Conveniently mesh cooperative services via magnetic outsourcing. Dynamically grow
                value whereas accurate e-commerce vectors.
              </p>
            </div>

            <PricingRow/>

          </div>

        </div>

      </section>

      <section className='bg-darker'>

        <div className="container py-28">

          <div className="flex flex-col items-center">

            <div className="text-center w-full lg:w-[800px]">
              <p className="text-color-primary text-lg mb-3">FAQ</p>

              <h2 className="text-color-primary-darker mb-4">Frequently Asked Questions</h2>

              <p className='text-color-grey-dark'>
                Completely whiteboard top-line channels and fully tested value. Competently generate testing 
                procedures before visionary maintainable growth strategies for maintainable.
              </p>
            </div>

            <FaqAccordion className='flex flex-col gap-3 mt-12 w-full lg:w-[800px]'/>
            

          </div>

        </div>

      </section>

      <Testimonials/>

    </main>
  )
}
