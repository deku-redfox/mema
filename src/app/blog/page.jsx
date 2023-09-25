'use client'

import Image from 'next/image'
import Link from 'next/link'
import FlatButton from '@/components/FlatButton'
import CustomInput from '@/components/CustomInput'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faComment, faSearch, faArrowRight, faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'
import PageIndicator from '@/components/PageIndicator'
import BlogSidebar from '@/components/BlogSidebar'
import Parse from 'parse'
import { useEffect, useState } from 'react'
import Skeleton from '@/components/Skeleton'
import { getFormattedDate } from '@/datas/date'
import { useSearchParams } from 'next/navigation'

Parse.initialize('Sxhd4lW1hy9yQQlPFVZrm0kyE9oCkYlWJg2D4bdi', 'PSmNS7SJKgvAqTmlU8H0URzuc1f525uWbpbsZoEA')
Parse.serverURL = 'https://memaweb.b4a.io'

export default function Blog() {

  const [posts, setPosts] = useState([])
  const [pageCount, setPageCount] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)

  const searchParams = useSearchParams()
  const pageParam = searchParams.get('page')
  const queryParam = searchParams.get('query')

  useEffect(()=> {

    try {
      new Parse.Query('Post').count().then(count=> {
        const pages = Math.ceil(count / 5)
        setPageCount(pages)
      })
    } catch (error) {
      console.error('error when getting post count', error);
    }

  }, [])

  useEffect(()=> {
    pageParam && setCurrentPage(Number(pageParam))
    
    try {
      new Parse.Query('Post').exclude('content').limit(5).skip(5 * (pageParam ? Number(pageParam)-1 : 0))
        .include('author').descending('createdAt').find().then(allPost => {
        setPosts(allPost)
      })

    } catch (error) {
      console.error('error while getting post', error);
    }

  }, [pageParam])

  return (
    <main>

      <PageIndicator page='Blog'/>

      <section>

        <div className="container py-28">

          <div className="flex flex-col xl:flex-row gap-8">

            <div className="flex flex-1 flex-col gap-12">

              {
                !posts.length > 0 &&
                Array(5).fill().map((_, index)=> (
                  <div key={index} className="flex flex-col md:flex-row rounded-lgoverflow-hidden">
                    <Skeleton width='flex-[0.7]'>
                      <div className="w-full aspect-[16/12]"></div>
                    </Skeleton>
  
                    <div className="flex-1 flex flex-col p-6">
  
                      <Skeleton>
                        <div className="h-8"></div>
                      </Skeleton>

                      <Skeleton width='w-1/2 mt-3'>
                        <div className='h-4'></div>
                      </Skeleton>
  
                      <div className="flex flex-col gap-4 mt-6">
                        <Skeleton>
                          <div className="h-6"></div>
                        </Skeleton>

                        <Skeleton>
                          <div className="h-6"></div>
                        </Skeleton>

                        <Skeleton>
                          <div className="h-6"></div>
                        </Skeleton>
                      </div>
                    </div>
                  </div>
                ))
              }

              {
                posts.map(post => {
                  const user = post.attributes.author.attributes
                  const postInfos = post.attributes
                  return (
                    <div className="flex flex-col md:flex-row rounded-lg shadeWide overflow-hidden" key={post.id}>
                      <Link href={`/blog/${post.id}`} className="flex-[0.7] relative aspect-[16/12]">
                        <Image src={postInfos.postImage} fill className='object-cover' alt={`thumbnail of ${postInfos.title}`}/>
                      </Link>
    
                      <div className="flex-1 flex flex-col p-6 items-start">
    
                        <h4 className="text-color-primary-darker hover:text-color-primary duration-500 leading-snug line-clamp-1">
                          <Link href={`/blog/${post.id}`}>{postInfos.title}</Link>
                        </h4>
    
                        <div className="flex gap-6 items-center py-3 text-sm">
                          <div className="flex gap-2 items-center">
                            <Image src={user.profile} height={20} width={20} alt={`${user.username} profile image`}/>
                            <span className='text-color-iron'>{user.username}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faComment} className='text-color-primary'/>
                            <span className='text-color-iron'>{user.job}</span>
                          </div>
                          <div className="flex gap-2 items-center">
                            <FontAwesomeIcon icon={faCalendar} className='text-color-primary'/>
                            <span className='text-color-iron'>{getFormattedDate(postInfos.createdAt)}</span>
                          </div>
                        </div>
    
                        <p className="text-color-iron line-clamp-3 lg:line-clamp-2 xl:line-clamp-3">
                          {postInfos.description}
                        </p>
    
                        <FlatButton text='Read More' className='mt-6' link={`/blog/${post.id}`}>
                          <FontAwesomeIcon icon={faArrowRight} size='sm' className='ml-2'/>
                        </FlatButton>
                      </div>
    
                    </div>
                  )
                })
              }

              <div className="flex justify-center gap-4 mt-10">
                {
                  
                  currentPage > 1 &&
                  <Link href={`/blog?page=${currentPage-1}&query=${queryParam}`} className="pageLink">
                    <FontAwesomeIcon icon={faChevronLeft} size='sm'/>
                  </Link>
                }
                {
                  Array.from(Array(pageCount).keys()).map(value => {
                    const page = value+1
                    return (
                      <Link key={page} href={`/blog?page=${page}&query=${queryParam}`}
                         className={`pageLink ${currentPage === page ? 'active' : ''}`}>{page}</Link>
                    )
                  })
                }
                {
                  currentPage < pageCount &&
                  <Link href={`/blog?page=${currentPage+1}&query=${queryParam}`} className="pageLink">
                    <FontAwesomeIcon icon={faChevronRight} size='sm'/>
                  </Link>
                }
              </div>

            </div>

            <BlogSidebar/>

          </div>

        </div>

      </section>

    </main>
  )
}
