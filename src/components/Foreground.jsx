import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const containerRef = useRef(null);

  return (
    <>
      <div ref={containerRef} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-5 p-6 flex-wrap'>
        
        <Card download={false} progress={80} reference={containerRef} />
        <Card download={true} progress={75} reference={containerRef} />
        <Card download={false} progress={33} reference={containerRef} />
        <Card download={true} progress={75} reference={containerRef} />

      </div>
    </>
  )
}

export default Foreground