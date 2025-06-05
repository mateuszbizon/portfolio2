import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { EMAIL } from '@/constants'
import { AlignJustify, Send } from 'lucide-react'

function Nav() {
  return (
    <nav className='fixed top-0 w-full px-5 md:px-10 h-nav-height bg-background border-b flex items-center justify-between z-10'>
        <div>
            logo
        </div>

        <ul className='hidden md:flex items-center'>
            <li>
                <Button className='rounded-lg' size={"sm"} asChild>
                    <Link href='#about'>About</Link>
                </Button>
            </li>
            <li>
                <Button className='rounded-lg' size={"sm"} asChild>
                    <Link href='#about'>About</Link>
                </Button>
            </li>
        </ul>

        <Button className='hidden md:inline-flex' asChild>
            <Link href={`mailto:${EMAIL}`}>
                Let's get in touch <Send />
            </Link>
        </Button>

        <Button className='md:hidden' size={"icon"}>
            <AlignJustify />
        </Button>
    </nav>
  )
}

export default Nav