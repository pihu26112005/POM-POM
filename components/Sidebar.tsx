"use client";

import { SidebarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

const Sidebar = () => {
    const pathname = usePathname();
  return (
    <section className="bg-dark-1 sticky flex flex-col h-screen left-0 top-0 w-fit justify-between text-white p-6 pt-28 max-sm:hidden lg:w-[264px]">
        <div className="flex flex-1 flex-col gap-6">
            {
                SidebarLinks.map((link, index) => {
                const isActive = pathname === link.route || pathname.endsWith(link.route);
                return (
                    <Link 
                        key={index} 
                        href={link.route}
                         className={cn('flex items-center gap-4 p-4 justify-start rounded-lg font-semibold' , {
                            'bg-blue-1': isActive
                         })}
                    >
                        <Image
                            src={link.imageUrl}
                            alt={link.label}
                            width={24}
                            height={24}
                        />
                        <p className='text-lg max-lg:hidden'>{link.label}</p>
                    </Link>
                )
            } )}
        </div>
     </section>
  )
}

export default Sidebar