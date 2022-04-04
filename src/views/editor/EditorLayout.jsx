import { useEffect } from 'react'
import Editor from './Editor'
import EditorContextProvider from './EditorContext'
import Navbar from './Navbar'
import Preview from './Preview'
import Toolbar from './toolbar/Toolbar'

const EditorLayout = () => {

  useEffect(() => {
    document.querySelector('html').classList.add('dark')

    console.log(document.documentElement.classList)
  },[])

  return (
    <EditorContextProvider>
        <div className='overscroll-y-none'>
       <Navbar/>
       <div className='flex items-center justify-between w-full h-workspace'>
         <Toolbar/>
         <div className='grid grid-cols-2 w-full'>
           <Editor/>
           <Preview/>
         </div>
       </div>
    </div>
    </EditorContextProvider>
  )
}

export default EditorLayout