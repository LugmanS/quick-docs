import React, { useState } from 'react'
import Sections from './Sections'
import {ReactComponent as Add} from '../../../assets/icons/add.svg'
import Templates from './Templates'
import CreateModal from './CreateModal'

const Toolbar = () => {

  const [open, setOpen] = useState(false)

  const closeModal = () => setOpen(false)

  return (
    <div className=' w-[340px] h-full border-r border-e_border bg-white dark:bg-slate-900 p-2 flex flex-col items-center gap-3'>
      <div className='h-1/2 overflow-y-auto'>
        <p className='text-xs text-e_text mb-3'>Current document sections, drag to reorder</p>
        <Sections/>
      </div>
      <div className='flex flex-col items-center border-t pt-3 border-e_border h-1/2'>
        <p className='text-xs text-e_text'>Chosse a section to add it to you document</p>
        <button className='w-full py-2 px-4 border border-[#212121] rounded-md text-sm text-center mb-3 cursor-pointer my-3 ease-in-out transition duration-200' onClick={() => setOpen(true)}>
          <p>Custom Template</p>
        </button>
        <CreateModal open={open} closeModal={closeModal} />
        <Templates/>
      </div>
      
    </div>
  )
}

export default Toolbar