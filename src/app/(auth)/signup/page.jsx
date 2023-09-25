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

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [job, setJob] = useState('')
  const [profile, setProfile] = useState('')

  useEffect(()=> {
    if (Parse.User.current() !== null) {
      router.push('/')
    }
  }, [router])

  const onSubmit = (e)=> {
    e.preventDefault()

    if (!username || !password || !job || !profile) {
      console.error('please fill form before sending')
      console.log(username, password, job, profile);
      return
    }

    try {
      Parse.User.signUp(username, password, {
        job, profile
      }).then( ()=> {
        router.push('/post')
      })
    } catch (error) {
      console.log('Signup failed', error);
    }
  }

  return (
    <main>

      <section id="top">
        <PageIndicator page='Sign up'/>
      </section>
      
      <div className="container py-28">

        <form className="shadeWide flex flex-col gap-6 py-12 px-8">

          <div className="flex gap-4">
            <CustomInput placeholder='Name please...' onchanged={(e)=> setUsername(e.target.value)}/>
            <CustomInput placeholder='Password...' type='password' onchanged={(e)=> setPassword(e.target.value)}/>
          </div>
          <div className="flex gap-4">
            <CustomInput placeholder='Add a job...' onchanged={(e)=> setJob(e.target.value)}/>
            <CustomInput placeholder='profile pic (link)...' onchanged={(e)=> setProfile(e.target.value)}/>
          </div>
          <Link href='/post' className='text-color-primary underline decoration-transparent hover:decoration-color-primary duration-500'>
            Already have an account ?
          </Link>
          <FlatButton text='SignUp' className='self-start' onclick={onSubmit}/>

        </form>

      </div>

    </main>
  )
}
