import React from 'react'
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa6'

function Footer() {
  return (
    <>
    <hr class="border-0 border-t-2 border-gray-400 my-4"></hr>
    <footer className='py-12'>
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
            <div className='flex flex-col items-center justify-center'>
                <div className='flex space-x-4'>
                    <FaLinkedinIn size={24}/>
                    <FaGithub size={24}/>
                    <FaInstagram size={24}/>
                    <FaXTwitter size={24}/>
                </div>
                <div className='mt-8 border-t border-gray-600 pt-8 flex flex-col items-center'>
                    <p className='text-sm'>&copy; All rights reserved</p>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
