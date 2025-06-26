import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {

  const containerRef = useRef(null);

  const data = [
    { isDownload: false, progress: 0, bgcolor: '#10b981', dataAmount:'0.98 Mb', data:'making a project LOL!' }, 
    { isDownload: false, progress: 50, bgcolor: '#ef4444', dataAmount:'0.10 Mb', data:'making a project LOL!' }, 
    { isDownload: false, progress: 75, bgcolor: '#8b5cf6', dataAmount:'10.5 Mb', data:'making a project LOL!' },
    { isDownload: false, progress: 35, bgcolor: '#71717a', dataAmount:'0.34 Mb', data:'making a project LOL!' }, 
  ];

  return (
    <>
      <div ref={containerRef} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-5 p-6 flex-wrap'>
        {
          data.map((item,idx)=>{
            console.log(item)
            return(
              <Card things={item} key={idx} reference={containerRef} />
            )
          })
        }
      </div>
    </>
  )
}

export default Foreground