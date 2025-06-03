import React from 'react'
import SkillCard from '../cards/SkillCard'
import { LIBRARIES } from '@/constants/skills'

function Libraries() {
  return (
    <div className='tabs-container'>
        <p className='tabs-header'>Languages</p>
        <div className='tabs-grid'>
            {LIBRARIES.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    </div>
  )
}

export default Libraries