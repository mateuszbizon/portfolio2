import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import Link from 'next/link'
import { EMAIL, SOCIALS } from '@/constants'
import { Send } from 'lucide-react'

function Footer() {
  return (
    <footer id='contact' className='bg-foreground text-foreground-2 pt-section-padding pb-10'>
        <Container>
            <div className='flex flex-col items-center gap-8'>
                <h2 className='heading2 text-center'>Do <span className='text-primary'>you</span> have any questions?</h2>
                <p className='text-lg text-center'>Reach out to me now and let's discuss how we can change the digital world for the better</p>
                <Button asChild>
                    <Link href={`mailto:${EMAIL}`}>
                        Let's get in touch <Send />
                    </Link>
                </Button>
            </div>

            <div className='flex flex-col md:flex-row md:justify-between items-center gap-5 mt-10'>
                <p>{/*"©"*/} {new Date().getFullYear()} Mateusz Bizoń</p>
                <div className='flex items-center gap-3 order-first md:order-none'>
                    {SOCIALS.map(social => (
                        <Button key={social.name} size={"icon"} asChild>
                            <Link href={social.link} target='_blank'>
                                <social.icon />
                            </Link>
                        </Button>
                    ))}
                </div>
            </div>
        </Container>
    </footer>
  )
}

export default Footer