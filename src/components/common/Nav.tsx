"use client"

import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { EMAIL } from '@/constants'
import { AlignJustify, Send } from 'lucide-react'
import { NAV_ITEMS } from '@/constants/navItems'
import NavItemCard from '../cards/NavItemCard'
import useScrollSpy from '@/lib/hooks/useScrollSpy'
import NavSheet from './NavSheet'

function Nav() {
    const { activeLink } = useScrollSpy({
        navItems: NAV_ITEMS
    })

  return (
    <nav className='fixed top-0 w-full px-5 md:px-10 h-nav-height bg-background border-b flex items-center justify-between z-10'>
        <div>
            logo
        </div>

        <ul className='hidden md:flex items-center'>
            {NAV_ITEMS.map(item => (
                <li key={item.label}>
                    <NavItemCard item={item} activeLink={activeLink} />
                </li>
            ))}
        </ul>

        <Button className='hidden md:inline-flex' asChild>
            <Link href={`mailto:${EMAIL}`}>
                Let's get in touch <Send />
            </Link>
        </Button>

        <div className='md:hidden'>
            <NavSheet />
        </div>
    </nav>
  )
}

export default Nav