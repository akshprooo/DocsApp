import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import {motion, scale} from 'motion/react';

const Card = (things) => {
  return (
    <motion.div drag dragConstraints={things.reference} whileDrag={{scale: 1.2}} className='relative w-60 h-70 p-5 rounded-[20px] bg-zinc-900/90 text-white flex flex-col gap-6'>
        <FaRegFileAlt />
        <p className=' text-md leading-none font-semibold' >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus, facilis.</p>
        <div className='flex items-center px-5 absolute bottom-0 left-0 rounded-b-[20px] w-full h-15' style={{backgroundColor: !things.download ? '#025BFF' : '', justifyContent: !things.download?'center':'space-between'}}>
            {!things.download?
            <>
                <div className='w-full bg-zinc-50/50 rounded-full h-2'>
                    <div className='h-full bg-zinc-300 rounded-full' style={{width: `${things.progress}%`}}></div>
                </div>
            </>
            :
            <>
                <h1 className=''>0.34 Mb</h1>
                <MdDownloadForOffline size={30}/>
            </>
            }
        </div>
    </motion.div>
  )
}

export default Card