import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Project } from '@/types'
import { AnimatedTooltip } from '../ui/animated-tooltip'

type ProjectCardProps = {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    const emptyTechs = project.technologies.length < 1

  return (
    <Link href={project.link} target='_blank' className='hover:rotate-2 transition-transform duration-200'>
        <div className='rounded-2xl space-y-5'>
            <figure className='aspect-video relative rounded-xl overflow-hidden'>
                <Image src={project.image} alt={project.imageAlt} fill />
            </figure>

            <div className='space-y-2'>
                <h3 className='bigger-text'>{project.title}</h3>
                <p className='text-lg'>{project.description}</p>
            </div>

            <div className={`flex flex-col ${emptyTechs ? "md:flex-row-reverse" : "md:flex-row"} items-center justify-between gap-1`}>
                <div className='flex'>
                    <AnimatedTooltip items={project.technologies} />
                </div>
                <p className='flex items-center gap-2 font-medium'>{project.isLive ? "Check Live Site" : "Project Github"} <ExternalLink className='size-5' /></p>
            </div>
        </div>
    </Link>
  )
}

export default ProjectCard