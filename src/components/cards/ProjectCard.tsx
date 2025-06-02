import React from 'react'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ExternalLink } from 'lucide-react'
import { Project } from '@/types'

type ProjectCardProps = {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className='p-5 rounded-2xl space-y-5'>
        <figure className='aspect-video relative rounded-2xl overflow-hidden'>
            <Image src={project.image} alt={project.imageAlt} fill />
        </figure>

        <div className='space-y-2'>
            <h3 className='bigger-text'>{project.title}</h3>
            <p className='text-lg'>{project.description}</p>
        </div>

        <div className='flex items-center justify-between'>
            <Button variant={"link"} size={"link"} asChild>
                <Link href={project.link} className='text-lg font-medium text-white' target='_blank'>
                    {project.isLive ? "Check Live Site" : "Project Github"} <ExternalLink className='size-5' />
                </Link>
            </Button>
        </div>
    </div>
  )
}

export default ProjectCard