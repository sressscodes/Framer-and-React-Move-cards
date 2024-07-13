import React from 'react'

const Background = () => {
  return (
    <div className='fixed z-[2] w-full h-screen '>
      <div className='absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl font-semibold'>Documents</div>
      <h1 className='absolute top-[45%] left-1/2 -translate-x-[50%] -transform-x-[50%] text-[16vw] leading-none tracking-tight font-semibold text-zinc-900' >Docs.</h1>
    </div>
  )
}

export default Background