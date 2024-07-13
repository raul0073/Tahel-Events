'use client'
import React from 'react'
import LogoImage from './LogoImage'
import { Button } from '../ui/button'
import { ExitIcon } from '@radix-ui/react-icons'
import { redirect, usePathname, useRouter } from 'next/navigation'
import secureLocalStorage from 'react-secure-storage'

function Navbar() {
  const path = usePathname()
  const router = useRouter()
  const logout = () => {
    secureLocalStorage.removeItem("USER")
    router.replace("/")
  }
  return (
    <div className='w-full h-[10vh] bg-primary'>
      <div className='p-4 flex justify-between w-full items-center'>
        <LogoImage />
        {/* when in main, show logout btn */}
        {path.includes('main') && (<Button variant={'ghost'} onClick={logout}>  התנתק <ExitIcon className="rotate-180 mx-1"/></Button> )}
      </div>
      <div>
      </div>
    </div>
  )
}

export default Navbar
