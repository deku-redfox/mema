'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComment, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PageIndicator from '@/components/PageIndicator'
import BlogSidebar from '@/components/BlogSidebar'
import { useEffect, useState } from 'react'
import Parse from 'parse'
import Skeleton from '@/components/Skeleton'
import Dates, { getFormattedDate } from '@/datas/date'

Parse.initialize('Sxhd4lW1hy9yQQlPFVZrm0kyE9oCkYlWJg2D4bdi', 'PSmNS7SJKgvAqTmlU8H0URzuc1f525uWbpbsZoEA')
Parse.serverURL = 'https://memaweb.b4a.io'

export default function BlogDetails({params}) {

  const [post, setPost] = useState({})
  const [author, setAuthor] = useState({})

  useEffect(()=> {
    
    try {
      new Parse.Query('Post').equalTo('objectId', params.id).include('author').first().then(data => {
        setPost(data.attributes)
        setAuthor(data.attributes.author.attributes)

        const content = JSON.parse(data.attributes.content)
        document.querySelector('.js-content').innerHTML = content
      })

    } catch (error) {
      console.error('error while getting post', error);
    }

  }, [])

  return (
    <main>

      <PageIndicator page={post.title}/>

      <section>

        <div className="container py-28">

          <div className="flex flex-col xl:flex-row gap-8">

            <div className="flex flex-1 flex-col gap-12">

              <div className="flex flex-col">
                <figure className="relative aspect-[16/9] rounded-lg overflow-hidden bg-skeleton">
                  {post.postImage && <Image src={post.postImage} fill className='animate-fadeIn'/>}
                </figure>

                <div className="flex-1 flex flex-col items-start">

                  <div className="flex gap-6 items-center my-6 text-sm">
                    {
                      author.username 
                        ? (
                          <div className="flex gap-2 items-center animate-fadeIn">
                            <Image src='/admin.png' height={30} width={30}/>
                            <span className='text-color-iron'>{author.username}</span>
                          </div>
                        )
                        : (
                          <Skeleton>
                            <div className="h-8 w-24"></div>
                          </Skeleton>
                        )
                    }
                    {
                      author.job 
                        ? (
                          <div className="flex gap-2 items-center animate-fadeIn">
                            <FontAwesomeIcon icon={faComment} className='text-color-primary'/>
                            <span className='text-color-iron'>{author.job}</span>
                          </div>
                        )
                        : (
                          <Skeleton>
                            <div className="h-8 w-24"></div>
                          </Skeleton>
                        )
                    }
                    {
                      post.createdAt 
                        ? (
                          <div className="flex gap-2 items-center animate-fadeIn">
                            <FontAwesomeIcon icon={faCalendar} className='text-color-primary'/>
                            <span className='text-color-iron'>{getFormattedDate(post.createdAt)}</span>
                          </div>
                        )
                        : (
                          <Skeleton>
                            <div className="h-8 w-24"></div>
                          </Skeleton>
                        )
                    }
                  </div>

                  <div className="w-full flex flex-col gap-4 text-color-iron js-content animate-fadeIn">
                    <div className="flex flex-col gap-3 mb-4">
                      <Skeleton>
                        <div className="h-6"></div>
                      </Skeleton>
                      <Skeleton width='w-1/2'>
                        <div className="h-6"></div>
                      </Skeleton>
                      <Skeleton width='w-1/3'>
                        <div className="h-6"></div>
                      </Skeleton>
                    </div>
                    <div className="flex flex-col gap-3 mb-4 w-full">
                      <Skeleton>
                        <div className="h-6"></div>
                      </Skeleton>
                      <Skeleton width='w-2/3'>
                        <div className="h-6"></div>
                      </Skeleton>
                      <Skeleton width='w-1/2'>
                        <div className="h-6"></div>
                      </Skeleton>
                    </div>
                  </div>

                  <div className="flex items-center w-full gap-3 pt-6 border-t border-color-iron/10 text-color-primary-darker mt-8">
                    <span >Tags :</span>
                    <Link href='#' className="ship">Digital</Link>
                    <Link href='#' className="ship">Software</Link>
                    <Link href='#' className="ship">MEMA</Link>
                  </div>

                  <div className="flex flex-wrap items-center w-full gap-y-6 py-6 mt-10 border-y border-color-iron/10">

                    <div className="group flex items-center gap-4 cursor-pointer">
                      <div className="h-14 w-14 rounded-full border-2 border-color-blue-grey-soft flex justify-center 
                        items-center group-hover:bg-color-primary group-hover:text-white group-hover:border-color-primary duration-500">
                        <FontAwesomeIcon icon={faChevronLeft}/>
                      </div>
                      <div className="flex flex-col text-sm md:w-[200px] lg:w-[263px]">
                        <p className="text-color-grey-dark">Older Post</p>
                        <p className="text-color-primary-darker font-bold group-hover:text-color-primary duration-500">
                          Protect your workspace from CyberAttack
                        </p>
                      </div>
                    </div>

                    <div className="group flex items-center gap-4 cursor-pointer ml-auto">
                    <div className="flex flex-col text-sm md:w-[200px] lg:w-[263px] text-right">
                        <p className="text-color-grey-dark">Next Post</p>
                        <p className="text-color-primary-darker font-bold group-hover:text-color-primary duration-500">
                          Protect your workspace from CyberAttack
                        </p>
                      </div>
                      <div className="h-14 w-14 rounded-full border-2 border-color-blue-grey-soft flex justify-center 
                        items-center group-hover:bg-color-primary group-hover:text-white group-hover:border-color-primary duration-500">
                        <FontAwesomeIcon icon={faChevronRight}/>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              <div className="py-12 space-y-8">

                <h3 className="text-color-primary-darker">Related Post</h3>

                <div className="grid grid-cols-2 gap-6">

                  <div className="flex flex-col rounded-lg overflow-hidden">
                    <Link href='#' className="relative aspect-[16/10]">
                      <Image src='/blog4.jpg' fill/>
                    </Link>

                    <div className="flex-1 flex flex-col p-6 items-start bg-color-blue-grey-soft">
                      <h5 className="text-color-primary-darker hover:text-color-primary duration-500 leading-snug">
                        <Link href='/blog/10121245'>How Filecoin is Up in a Week Could Take Care</Link>
                      </h5>

                      <div className="flex gap-6 items-center py-3 text-sm">
                        <div className="flex gap-2 items-center">
                          <FontAwesomeIcon icon={faCalendar} className='text-color-primary'/>
                          <span className='text-color-iron'>October 20, 2021</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <FontAwesomeIcon icon={faComment} className='text-color-primary'/>
                          <span className='text-color-iron'>No Comment</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col rounded-lg overflow-hidden">
                    <Link href='#' className="relative aspect-[16/10]">
                      <Image src='/blog2.jpg' fill/>
                    </Link>

                    <div className="flex-1 flex flex-col p-6 items-start bg-color-blue-grey-soft">
                      <h5 className="text-color-primary-darker hover:text-color-primary duration-500 leading-snug">
                        <Link href='/blog/10121245'>How Filecoin is Up in a Week Could Take Care</Link>
                      </h5>

                      <div className="flex gap-6 items-center py-3 text-sm">
                        <div className="flex gap-2 items-center">
                          <FontAwesomeIcon icon={faCalendar} className='text-color-primary'/>
                          <span className='text-color-iron'>October 20, 2021</span>
                        </div>
                        <div className="flex gap-2 items-center">
                          <FontAwesomeIcon icon={faComment} className='text-color-primary'/>
                          <span className='text-color-iron'>No Comment</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>

              </div>

            </div>

            <BlogSidebar/>

          </div>

        </div>

      </section>

    </main>
  )
}
