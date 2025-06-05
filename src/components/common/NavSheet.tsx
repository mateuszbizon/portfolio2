"use client"

import React from 'react'
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { AlignJustify, Send } from 'lucide-react'
import { NAV_ITEMS } from '@/constants/navItems'
import Link from 'next/link'
import { EMAIL } from '@/constants'

function NavSheet() {
  return (
    <Sheet>
        <SheetTrigger asChild>
            <Button className='md:hidden' size={"icon"}>
                <AlignJustify />
            </Button>
        </SheetTrigger>
        <SheetContent className='py-12 px-3'>
            <SheetHeader className='hidden'>
                <SheetTitle>Mobile navigation</SheetTitle>
            </SheetHeader>
            <ul className='space-y-5'>
                {NAV_ITEMS.map(item => (
                    <li key={item.label} className='text-center'>
                        <SheetClose asChild>
                            <Link href={item.link}>
                                {item.label}
                            </Link>
                        </SheetClose>
                    </li>
                ))}
            </ul>
            <Button asChild>
                <Link href={`mailto:${EMAIL}`} className='mt-5'>
                    Let's get in touch <Send />
                </Link>
            </Button>
        </SheetContent>
    </Sheet>
  )
}

export default NavSheet