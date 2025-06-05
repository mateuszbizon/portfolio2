import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { NavItem } from '@/types'

type NavItemCardProps = {
    item: NavItem
    activeLink: string
}

function NavItemCard({ item, activeLink }: NavItemCardProps) {
    const isLinkActive = item.section === activeLink

  return (
    <Button className='rounded-lg' variant={isLinkActive ? "default" : "transparent"} size={"sm"} asChild>
        <Link href={item.link}>{item.label}</Link>
    </Button>
  )
}

export default NavItemCard