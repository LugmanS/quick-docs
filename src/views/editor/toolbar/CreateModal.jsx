import { Dialog, Transition } from '@headlessui/react'
import React, { Fragment, useContext, useState } from 'react'
import { EditorContext } from '../EditorContext'

const CreateModal = ({open, closeModal}) => {

    const {allSections, setAllSections} = useContext(EditorContext)

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        const localAllSectionCopy = [...allSections]
        localAllSectionCopy.push({
            id: name.toLowerCase(),
            name,
            markdown: `
`
        })
        setAllSections(localAllSectionCopy)
        setName("")
        closeModal()
    }

  return (
     <Transition appear show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center bg-e_background bg-opacity-80">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-md">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 mb-2 text-black"
                >
                  Add custom section
                </Dialog.Title>
                <form className='flex items-end justify-between' onSubmit={handleSubmit}>
                    <div className="mt-2 flex items-start flex-col gap-1 w-full mr-4">
                        <label className='text-xs text-gray-800 mb-1'>Section name</label>
                        <input className='w-full py-2 px-2 text-sm rounded bg-gray-100 outline-none' type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <button
                        type="submit"
                        className="text-sm bg-[#212121] text-white px-4 py-2 rounded"
                    >
                        Create
                    </button>
                </form>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
  )
}

export default CreateModal