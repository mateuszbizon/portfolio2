import { Skill } from '@/types'
import React from 'react'

type SkillCardProps = {
    skill: Skill
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className='space-y-2'>
        <p className='text-lg font-medium'>{skill.name}</p>
        <p className='text-muted'>{skill.level}</p>
    </div>
  )
}

export default SkillCard