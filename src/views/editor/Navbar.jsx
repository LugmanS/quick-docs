import { useContext } from 'react'
import {ReactComponent as Logo} from '../../assets/icons/logo.svg'
import {ReactComponent as Download} from '../../assets/icons/download.svg'
import { EditorContext } from './EditorContext'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const {allSections} = useContext(EditorContext)

  const generateMarkdown = () => {
    const markdownArray = []
    allSections.forEach((data) => markdownArray.push(data.markdown))
    return markdownArray.join("\n")
  }

  const downloadMarkdownFile = () => {
    const markdownData = generateMarkdown()
    const a = document.createElement('a')
    const blob = new Blob([markdownData])
    a.href = URL.createObjectURL(blob)
    a.download = 'README.md'
    a.click()
  }


  return (
    <div className="h-14 bg-white flex items-center justify-between px-3 border-b border-e_border">
        <Link to='/'>
          <div className='flex items-center gap-2'>
                    <Logo width={26}/>
                    <h1 className='text-xl font-medium'>QuickDocs</h1>
                </div>
        </Link>
        <button className='flex items-center gap-2 py-3 px-5 rounded-md transition ease-in-out duration-200' onClick={downloadMarkdownFile}>
          <Download/>
            <p className='text-sm'>Download</p>
        </button>
    </div>
  )
}

export default Navbar