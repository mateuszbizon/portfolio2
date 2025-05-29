import React from 'react'
import Container from '../ui/container'
import { Button } from '../ui/button'

function HeroSection() {
  return (
    <header className='h-screen radial-gradient'>
        <Container className='max-w-[700px]'>
            <div className='flex flex-col justify-center gap-8 h-full text-center'>
                <h1 className='text-white heading1'>Hi! I'm Matthew, a <span className='text-foreground'>Next.js Developer</span></h1>
                <p className='bigger-text text-foreground-2'>A front-end developer based in Poland</p>
                <div>
                    <Button size={"lg"}>
                        Show my work
                    </Button>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default HeroSection