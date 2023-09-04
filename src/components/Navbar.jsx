import React from 'react'
import localFont from 'next/font/local'
import Link from 'next/link'

const myFont = localFont({src: '../customFonts/Palatino-Linotype.ttf'})

const Navbar = () => {
  return (
    <nav className='bg=[#FFFFFF] w-full'>
        <div className='max-w-[1340px] mx-auto p-4'>
            <div className='flex items-center justify-center '>
                <h1 className='navtext text-sm md:text-[24px]'>CA:0xe0c58d92a932bb60416299af2c73450e008a831d</h1>
                
            </div>
            <Link href="mailto:HOGtheHogRider@proton.me" className='flex text-2xl  mt-5 underline text-center  items-center justify-center'>HOGtheHogRider@proton.me</Link>

        </div>
        

    </nav>
  )
}

export default Navbar