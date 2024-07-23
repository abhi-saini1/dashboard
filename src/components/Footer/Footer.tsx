import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Footer = (props: Props) => {
  return (
    <>
        <div className='border border-black border-t-0 w-full'>
         </div>
        <div className='flex items-center justify-center pt-2'>
            <p className='text-sm text-gray-500'>© 2024. All rights reserved.</p>
            <p className='text-sm text-gray-500'>Powered by <Link 
            target='_blank' rel='noopener noreferrer' className='text-gray-500' href="https://nextjs.org">Next.js</Link></p>
            
        </div>
    
    </>
        
  )
}

export default Footer