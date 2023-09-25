'use client'

import CustomInput from '@/components/CustomInput'
import FlatButton from '@/components/FlatButton'
import Link from 'next/link'
import PageIndicator from '@/components/PageIndicator'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Parse from 'parse'


Parse.initialize('Sxhd4lW1hy9yQQlPFVZrm0kyE9oCkYlWJg2D4bdi', 'PSmNS7SJKgvAqTmlU8H0URzuc1f525uWbpbsZoEA')
Parse.serverURL = 'https://memaweb.b4a.io'

export default function Home() {
  const router = useRouter()

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [content, setContent] = useState('')
  const [image, setImage] = useState('')
  const [rating, setRating] = useState()
  const [user, setUser] = useState(null)

  useEffect(()=> {
    setUser(Parse.User.current())
  }, [])

  const onCreatePost = (e) => {
    if (!title || !description || !image || !user) {
      console.error('Fill in all the post informations');
      return
    }

    try {
      const post = new Parse.Object('Post')
      const parsedContent = JSON.stringify(content)
      post.save({
        'title': title,
        'author': user,
        'content': parsedContent,
        'description': description,
        'postImage': image
      }).then(()=> {
        router.push('/blog')
      })
    } catch (error) {
      console.error('Failed to create post', error);
    }
  }

  const onTestimonial = (e)=> {
    if (!rating || !content || !user) {
      console.error('Fill in all the Testimonial Required informations');
      return
    }

    try {
      const testimonial = new Parse.Object('Testimonial')
      testimonial.save({
        'title': title,
        'author': user,
        'content': content,
        'thumb': image,
        'note': Number(rating)
      }).then(()=> {
        router.push('/#testimonials')
      })
    } catch (error) {
      console.error('Failed to send testimonial', error);
    }
  }

  return (
    <main>

      <PageIndicator page='Post Content'/>

      <section>

        <div className="container py-28">

          <div className="grid gap-8 gap-y-12 grid-cols-1 md:grid-cols-2">

            <form className="shadeWider flex flex-col gap-6 py-12 px-8">

              <h2 className="text-color-primary">New Post</h2>

              <CustomInput placeholder='Post Title' onchanged={(e)=> setTitle(e.target.value)} className='w-full'/>

              <textarea rows="5" placeholder='Description' onChange={(e)=> setDescription(e.target.value)} className='p-4 bg-color-grey-soft 
                    rounded-md border-2 border-transparent focus:border-color-primary focus:bg-white outline-none duration-300'>
              </textarea>

              <textarea rows="5" placeholder='Content' onChange={(e)=> setContent(e.target.value)} className='p-4 bg-color-grey-soft 
                    rounded-md border-2 border-transparent focus:border-color-primary focus:bg-white outline-none duration-300'>
              </textarea>

              <CustomInput placeholder='Post image...' onchanged={(e)=> setImage(e.target.value)} className='w-full'/>

              <FlatButton text='Create Post' className='self-start' onclick={onCreatePost}/>

              </form>

              <form className="shadeWide flex flex-col gap-6 py-12 px-8">

                <h2 className="text-color-primary">Testimonial</h2>

                <textarea rows="5" placeholder='Content' onChange={(e)=> setContent(e.target.value)} className='p-4 bg-color-grey-soft 
                      rounded-md border-2 border-transparent focus:border-color-primary focus:bg-white outline-none duration-300'>
                </textarea>

                <CustomInput type='number' placeholder='Rating...' onchanged={(e)=> setRating(e.target.value)} className='w-full flex-grow-0'/>

                <CustomInput placeholder='Testimonial Title(optional)' onchanged={(e)=> setTitle(e.target.value)} className='w-full flex-grow-0'/>

                <CustomInput placeholder='Thumb Image(optional)' onchanged={(e)=> setImage(e.target.value)} className='w-full flex-grow-0'/>

                <FlatButton text='Create Post' className='self-start' onclick={onTestimonial}/>

              </form>

          </div>

        </div>

      </section>

    </main>
  )
}
