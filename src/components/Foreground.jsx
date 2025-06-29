import React, { useEffect, useRef, useState } from 'react'
import Card from './Card'
import { useDocs } from '../context/DocsContext';
import Form from './Form';

const Foreground = () => {

  const containerRef = useRef(null);
  const [showForm, setShowForm] = useState(false)

  const {docs, addDocs} = useDocs();

  const handleCloseForm = () => {
    setShowForm(false)
  }

  const handleToggleForm = () => {
    setShowForm(!showForm)
  }

  return (
    <>
      <div ref={containerRef} className='fixed z-[3] w-full h-full top-0 left-0 flex gap-5 p-6 flex-wrap'>
        {
          docs.map((item,idx)=>{
            return(
              <Card things={item} key={idx} reference={containerRef} />
            )
          })
        }
        
        {/* Add Button */}
        <div 
          onClick={handleToggleForm} 
          style={{
            rotate: showForm ? '-45deg' : '0deg', 
            transition: 'all ease 0.5s'
          }} 
          className='h-15 w-15 fixed bg-zinc-900 rounded-full top-3 right-3 flex items-center justify-center cursor-pointer hover:bg-zinc-800 transition-colors'
        >
          <h1 className='text-white text-7xl font-[100]'>+</h1>
        </div>

        {/* Form Modal */}
        {showForm && <Form onClose={handleCloseForm} />}
      </div>
    </>
  )
}

export default Foreground