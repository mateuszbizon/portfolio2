import React from 'react'
import SkillCard from '../cards/SkillCard'
import { OTHER_SKILLS } from '@/constants/skills'

function OtherSkills() {
  return (
    <div className='tabs-container'>
        <p className='tabs-header'>Languages</p>
        <div className='tabs-grid'>
            {OTHER_SKILLS.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    </div>
  )
}

export default OtherSkills