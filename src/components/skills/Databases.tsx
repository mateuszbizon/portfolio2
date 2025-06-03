import React from 'react'
import SkillCard from '../cards/SkillCard'
import { DATABASES } from '@/constants/skills'

function Databases() {
  return (
    <div className='tabs-container'>
        <p className='tabs-header'>Languages</p>
        <div className='tabs-grid'>
            {DATABASES.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    </div>
  )
}

export default Databases