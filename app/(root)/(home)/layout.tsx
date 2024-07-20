import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import React, { ReactNode } from 'react'

const HomeLayout = ({children}: {children:ReactNode}) => {
  return (
    <main className='relative'>
        <Navbar />
        <div className="flex">
            <Sidebar />
            <section className="flex flex-1 flex-col px-6 pb-8 pt-28 in-h-screen ax-md:pb-14 m:px-14">
                <div className="w-full">
                {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default HomeLayout