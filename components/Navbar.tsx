import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="flex flex-between fixed z-40 w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link
        href="/"
        className=' flex items-center gap-1'
      >
        <Image
          src='/icons/logo.svg'
          alt='logo'
          width={35}
          height={35}
          className='max-sm:size-10'
        />
        <p className='text-white font-extrabold max-sm:hidden'>POM-POM</p>
      </Link>
      <div className="flex gap-5 flex-between">
        <SignedIn>
          <UserButton />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar