import React from 'react'
import SkillCard from '../cards/SkillCard'
import { FRAMEWORKS } from '@/constants/skills'

function Frameworks() {
  return (
    <div className='tabs-container'>
        <p className='tabs-header'>Languages</p>
        <div className='tabs-grid'>
            {FRAMEWORKS.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    </div>
  )
}

export default Frameworks