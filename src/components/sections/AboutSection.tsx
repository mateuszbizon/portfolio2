import React from 'react'
import Container from '../ui/container'

function AboutSection() {
  return (
    <section className='py-section-padding'>
        <Container>
            <p className='section-name-text'>about me</p>

            <div className='flex flex-col gap-5 md:grid grid-cols-3 grid-rows-2 md:h-[500px]'>
                <div className='relative flex flex-col-reverse aspect-video md:aspect-auto card row-span-full col-start-1 col-end-3 bg-[url(/about_img.jpg)] bg-center bg-cover z-0 overflow-hidden'>
                    <div className='absolute inset-0 bg-black/20 -z-10'></div>
                    <h2 className='heading2 text-white max-w-[500px]'>Let's talk a little about me</h2>
                </div>
                <div className='card flex flex-col justify-center gap-5'>
                    <div className='space-y-1'>
                        <p className='uppercase text-muted text-sm'>name</p>
                        <p className='font-medium'>Mateusz Bizoń</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='uppercase text-muted text-sm'>age</p>
                        <p className='font-medium'>25</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='uppercase text-muted text-sm'>country</p>
                        <p className='font-medium'>Poland</p>
                    </div>
                </div>
                <div className='card flex'>
                    <div className='min-w-1/2 flex flex-col justify-center'>
                        <p className='bigger-text'>Hobbys</p>
                    </div>
                    <div className='grow flex flex-col justify-center gap-5 text-sm text-white text-center'>
                        <p className='bg-primary p-2 rounded-lg min-w-1/2 self-end'>Rubik's cube</p>
                        <p className='bg-primary p-2 rounded-lg w-1/2'>Music</p>
                        <p className='bg-primary p-2 rounded-lg w-1/2 self-end'>Games</p>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default AboutSection