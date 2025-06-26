import React from 'react'

const Background = () => {
  return (
    <>
        <div className='fixed z-[2] w-full h-screen'>
            <div className=' absolute w-full flex justify-center py-10 top-[2%]'><h1 className='text-zinc-400 text-2xl font-semibold tracking-wider'>Documents.</h1></div>
            <h1 className='absolute top-1/2 left-1/2 -translate-1/2 text-[13vw] font-semibold text-zinc-900 leading-none tracking-tight '>Docs.</h1>
        </div>
    </>
  )
}

export default Background