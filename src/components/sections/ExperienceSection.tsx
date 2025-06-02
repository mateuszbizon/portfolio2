import React from 'react'
import Container from '../ui/container'
import { ExternalLink, FileCode2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'

function ExperienceSection() {
  return (
    <section className='py-section-padding bg-[#CC6FAF] text-white rounded-t-3xl'>
        <Container>
            <p className='section-name-text'>experience</p>
            <h2 className='heading2 text-center mb-10'>Places where I worked as developer</h2>
            <div className='grid md:grid-cols-2 gap-10 mb-20'>
                <div className='bg-background p-5 rounded-2xl space-y-5'>
                    <div className='flex gap-3'>
                        <div>
                            <div className='bg-primary p-4 rounded-xl text-white'>
                                <FileCode2 className='size-8' />
                            </div>
                        </div>

                        <div className='space-y-1'>
                            <h3 className='bigger-text text-foreground'>Front-end Developer (Internship)</h3>
                            <p className='text-lg text-muted mb-1'>Sharply | 21 Rataja St., Legnica</p>
                        </div>
                    </div>

                    <div className='bg-secondary p-3 rounded-lg inline-block'>
                        <span className='text-foreground'>July 2023 - August 2023</span>
                    </div>
                </div>
            </div>

            <h2 className='heading2 text-center mb-10'>My projects</h2>
            <div className='grid md:grid-cols-2 gap-10'>
                <div className='p-5 rounded-2xl space-y-5'>
                    <figure className='aspect-video relative rounded-2xl overflow-hidden'>
                        <Image src={"/social_media_app.png"} alt='Social media web application' fill />
                    </figure>

                    <div className='space-y-2'>
                        <h3 className='bigger-text'>Matgram - Social Media App</h3>
                        <p className='text-lg'>Web application for social media inspiring by Instagram with own idea</p>
                    </div>

                    <div className='flex items-center justify-between'>
                        <Button variant={"link"} size={"link"} asChild>
                            <Link href={"/"} className='text-lg font-medium text-white'>
                                Check Live Site <ExternalLink className='size-5' />
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    </section>
  )
}

export default ExperienceSection