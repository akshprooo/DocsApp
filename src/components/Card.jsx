import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import {motion, scale} from 'motion/react';

const Card = ({things, reference}) => {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} className='relative w-60 h-80 p-5 rounded-[20px] bg-zinc-900/90 text-white flex flex-col gap-6'>
        <FaRegFileAlt />
        <p className=' text-md leading-none font-semibold' >{things.data}</p>
        <div className='flex items-center px-5 absolute bottom-0 left-0 rounded-b-[20px] w-full h-15' style={{backgroundColor: `${things.bgcolor}`, justifyContent: !things.isDownload?'center':'space-between'}}>
            {!things.isDownload?
            <>
                <div className='w-full bg-zinc-50/50 rounded-full h-2'>
                    <div className='h-full bg-zinc-300 rounded-full' style={{width: `${things.progress}%`}}></div>
                </div>
            </>
            :
            <>
                <h1 className=''>{things.dataAmount}Mb</h1>
                <MdDownloadForOffline size={30}/>
            </>
            }
        </div>
    </motion.div>
  )
}

export default Card