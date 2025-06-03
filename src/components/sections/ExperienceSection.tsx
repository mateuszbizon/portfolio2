import React from 'react'
import Container from '../ui/container'
import { ExternalLink, FileCode2 } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '../ui/button'
import { CLIENT_PROJECTS, PROJECTS } from '@/constants/projects'
import ProjectCard from '../cards/ProjectCard'

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
            <div className='grid md:grid-cols-2 gap-10 mb-20'>
                {PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>

            <h2 className='heading2 text-center mb-10'>Projects I have done for clients</h2>
            <div className='grid md:grid-cols-2 gap-10'>
                {CLIENT_PROJECTS.map(project => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </Container>
    </section>
  )
}

export default ExperienceSection