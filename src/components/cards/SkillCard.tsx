import { Skill } from '@/types'
import React from 'react'

type SkillCardProps = {
    skill: Skill
}

function SkillCard({ skill }: SkillCardProps) {
  return (
    <div className='space-y-2'>
        <p className='text-lg font-semibold'>{skill.name}</p>
        <p>{skill.level}</p>
    </div>
  )
}

export default SkillCard