import React, { useContext, useEffect } from 'react'
import { EditorContext } from '../EditorContext'

const TemplateButton = ({data, index}) => {

    const {allSections, setAllSections, setAllTemplates, allTemplates} = useContext(EditorContext)

    const onClick = () => {
        const localAllSectionCopy = [...allSections]
        const localAllTemplatesCopy = [...allTemplates]
        localAllSectionCopy.push(data)
        localAllTemplatesCopy.splice(index, 1)
        setAllTemplates(localAllTemplatesCopy)
        setAllSections(localAllSectionCopy)
    }

    return (
        <button className='w-full h-12 py-2 px-4 border border-[#212121] rounded-md text-sm text-left flex items-center gap-2 mb-3 cursor-pointer filter hover:brightness-125 ease-in-out transition duration-200' onClick={onClick}>
          <p>{data.name}</p>
        </button>
    )
}

const Templates = () => {

    const {allTemplates} = useContext(EditorContext)
  return (
    <div className='w-full overflow-y-scroll'>
        {
            allTemplates.map((data, index) => index > 0 && <TemplateButton data={data} key={index} index={index} />)
        }
    </div>
  )
}

export default Templates