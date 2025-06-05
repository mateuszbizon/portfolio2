import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { NavItem } from '@/types'

type NavItemCardProps = {
    item: NavItem
}

function NavItemCard({ item }: NavItemCardProps) {
  return (
    <Button className='rounded-lg' size={"sm"} asChild>
        <Link href={item.link}>{item.label}</Link>
    </Button>
  )
}

export default NavItemCard