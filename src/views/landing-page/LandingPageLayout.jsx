import React from 'react'
import {ReactComponent as Logo} from '../../assets/icons/logo.svg'
import Preview from '../../assets/images/mockup.svg'
import {ReactComponent as Templates} from '../../assets/icons/templates.svg'
import {ReactComponent as LivePreview} from '../../assets/icons/live-preview.svg'
import {ReactComponent as Download} from '../../assets/icons/download.svg'
import { Link } from 'react-router-dom'

const LandingPageLayout = () => {
  return (
    <div className=' min-h-screen w-full landing-page-wrapper'>
        <div className='header w-full h-[90vh]'>
            <nav className='h-16 w-screen z-50 bg-white bg-opacity-10 filter backdrop-blur flex items-center fixed top-0'>
                <div className='flex justify-between items-center container'>
                    <div className='flex items-center gap-2'>
                    <Logo width={26}/>
                    <h1 className='text-xl font-medium'>QuickDocs</h1>
                </div>
                <Link to='/editor'>
                    <button className='border border-gray-600 text-gray-600  text-sm px-4 py-2 rounded-3xl hover:bg-black transition-colors duration-300 ease-in-out hover:text-white'>
                    Get started
                </button>
                </Link>
                </div>
            </nav>
            <div className='relative pt-16'>
                <header className='container pt-8 text-center flex items-center flex-col gap-6'>
                <h1 className='text-4xl font-bold  leading-snug'>Create descriptive readme<br/>without breaking a sweat </h1>
                <p className=" text-base">Our simple editor allows you to quickly add and customize <br/> all the sections you need for your project's readme</p>
                <Link to='/editor'>
                    <button className='bg-e_background text-white  text-sm px-6 py-3 rounded-3xl'>
                    Start creating
                </button>
                </Link>
            </header>
            <img src={Preview} className="absolute w-[1000px] left-1/2 transform -translate-x-1/2" alt=""/>
            </div>
        </div>
        <div className='container pt-64 pb-40'>
            <h1 className='text-center text-3xl font-semibold'>Features</h1>
            <div className='grid grid-cols-3 content-center place-items-center gap-20 my-8 max-w-[800px] m-auto'>
                <div className=' w-64 flex flex-col items-start gap-2 p-4 rounded-md shadow-md'>
                    <Templates/>
                    <h1 className=' font-medium'>Predefiend Templates</h1>
                    <p className='text-sm font-light text-gray-700'>Choose from our various pre defiend templates</p>
                </div>
                <div className=' w-64 flex flex-col items-start gap-2 p-4 rounded-md shadow-md'>
                    <LivePreview/>
                    <h1 className=' font-medium'>Live preview</h1>
                    <p className='text-sm font-light text-gray-700'>View your changes in the preivew window</p>
                </div>
                <div className=' w-64 flex flex-col items-start gap-2 p-4 rounded-md shadow-md'>
                    <Download/>
                    <h1 className=' font-medium'>Download</h1>
                    <p className='text-sm font-light text-gray-700'>Download your readme as a .md file</p>
                </div>
            </div>
        </div>
        <div className='container text-center pb-8'>
            <h1 className='text-gray-600 text-sm'>Made with ♥ by <a className='underline' target="_blank" href='https://github.com/LugmanS'>Lugman</a></h1>
        </div>
    </div>
  )
}

export default LandingPageLayout