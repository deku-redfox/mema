import Image from 'next/image'
import React from 'react'

const Loading = () => {
  return (
    <div className='fixed inset-0 bg-color-primary z-50 flex items-center justify-center'>
        <Image src='/rocket.gif' width={80} height={80}/>
    </div>
  )
}

export default Loading