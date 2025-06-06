import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'
import { TextGenerateEffect } from '../ui/text-generate-effect'
import { Spotlight } from '../ui/spotlight'
import Link from 'next/link'

function HeroSection() {
    const headWords = "Hi! I'm Matthew, a Next.js Developer"

  return (
    <header className='relative h-screen radial-gradient overflow-hidden'>
        <Spotlight className="-top-20 left-0 md:-top-20 md:left-60" fill='white' />
        <Container className='max-w-[700px]'>
            <div className='flex flex-col justify-center gap-8 h-full text-center'>
                <h1 className='text-white heading1'><TextGenerateEffect words={headWords} /></h1>
                <p className='bigger-text text-foreground-2'>A front-end developer based in Poland</p>
                <div>
                    <Button size={"lg"} asChild>
                        <Link href={"#experience"}>
                            Show my work
                        </Link>
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default HeroSection