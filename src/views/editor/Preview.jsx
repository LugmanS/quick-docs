import React, { useContext, useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { EditorContext } from './EditorContext'

const Preview = () => {

  const {allSections} = useContext(EditorContext)

  const [completeMarkdown, setCompleteMarkdown] = useState(allSections[0].markdown)

  const generateMarkdown = () => {
    const markdownArray = []
    allSections.forEach((data) => markdownArray.push(data.markdown))
    setCompleteMarkdown(markdownArray.join("\n"))
  }

  useEffect(() => {
    generateMarkdown()
  },[allSections])

  return (
    <div className='h-workspace px-4 preview overflow-y-scroll'>
        <ReactMarkdown children={completeMarkdown} remarkPlugins={[remarkGfm]} />
    </div>
  )
}

export default Preview