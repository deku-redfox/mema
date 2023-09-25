import Image from 'next/image'
import FlatButton from '@/components/FlatButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faAdd, faChevronLeft, faCheck} from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PageIndicator from '@/components/PageIndicator'
import Slide from '@/components/DownloadSlide'
import Testimonials from '@/components/Testimonials'


export default function Download() {


  return (
    <main>
      <PageIndicator page='Download'/>

      <div className="container py-28">

        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 flex flex-col gap-4 items-center text-center md:text-start md:items-start">
            <h2 className="text-color-primary-darker">Message Manager</h2>
            <p className="text-color-iron">
              VLC est un lecteur multimédia gratuit et libre et un système capable de lire la plupart des fichiers 
              multimédias ainsi que des DVD, des CD Audio, des VCD, et divers protocoles de diffusion.
            </p>
            <div className="flex flex-col items-center gap-2 text-color-iron mt-2">
              <FlatButton text='Download MeMa'
                initial='border-color-primary text-color-primary text-lg' hoverEffect='hover:text-white hover:bg-color-primary'/>
              <div className="text-center text-[13px] font-bold">
                <p>Version 3.0.18  •  Windows 64bit  •  40 MB</p>
                <p>269,404,628 downloads already !</p>
              </div>
            </div>
          </div>

          <Slide/>

        </div>

      </div>

      <section className="bg-darker">
        <div className="container py-28">

          <div className="flex items-center gap-12">

            <div className="flex-1 flex flex-col items-start space-y-4">
              <h3 className="text-color-primary-darker">A Good Level-up For Your Marketting</h3>
              <ul className="flex flex-col items-start justify-center flex-wrap gap-2 text-color-grey">
                <li>
                  <span className="rounded-full bg-blue-500/20 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span className='text-[17px] align-middle text-color-primary-darker'>
                    Peut tout lire - Fichiers, disques, webcams, périphériques et flux.
                  </span>
                </li>
                <li>
                  <span className="rounded-full bg-blue-500/20 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span className='text-[17px] align-middle text-color-primary-darker'>
                    Lit la plupart des codecs, sans paquets de codecs nécessaires - MPEG-2, MPEG-4, H.264, MKV, WebM, WMV, MP3...
                  </span>
                </li>
                <li>
                  <span className="rounded-full bg-blue-500/20 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span className='text-[17px] align-middle text-color-primary-darker'>Support 24/7</span>
                </li>
                <li>
                  <span className="rounded-full bg-blue-500/20 px-1 py-[2px] mr-2 text-color-primary text-xs inline-block">
                    <FontAwesomeIcon icon={faCheck}/>
                  </span>
                  <span className='text-[17px] align-middle text-color-primary-darker'>Cancel anytime</span>
                </li>
              </ul>
            </div>

            <div className="flex-[0.8]">
              <figure className="relative aspect-video">
                <Image src='/screenshot3.jpg' fill/>
              </figure>
            </div>

          </div>
          
        </div>
      </section>

      <section id="testimonials">
        <Testimonials/>
      </section>

    </main>
  )
}
