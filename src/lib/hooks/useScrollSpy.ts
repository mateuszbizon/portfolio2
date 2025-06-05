import { NavItem } from '@/types'
import { useEffect, useState } from 'react'

type Props = {
    navItems: NavItem[]
}

function useScrollSpy({ navItems }: Props) {
   const [activeLink, setActiveLink] = useState<string>("")

    function checkActiveLink() {
        for (let i = navItems.length - 1; i >= 0; i--) {
            const section = document.getElementById(navItems[i].section)

            if (section && section.getBoundingClientRect().top < window.innerHeight / 2) {
                setActiveLink(navItems[i].section)
                break
            }
        }
    }

    useEffect(() => {
        checkActiveLink()

        document.addEventListener("scroll", checkActiveLink)

        return () => {
        document.removeEventListener("scroll", checkActiveLink)
        }
    }, [])
    

  return {
    activeLink
  }
}

export default useScrollSpy