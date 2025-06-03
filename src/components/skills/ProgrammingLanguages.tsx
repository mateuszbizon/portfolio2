import { PROGRAMMING_LANGUAGES } from '@/constants/skills'
import React from 'react'
import SkillCard from '../cards/SkillCard'

function ProgrammingLanguages() {
  return (
    <div className='tabs-container'>
        <p className='tabs-header'>Languages</p>
        <div className='tabs-grid'>
            {PROGRAMMING_LANGUAGES.map((skill) => (
                <SkillCard key={skill.id} skill={skill} />
            ))}
        </div>
    </div>
  )
}

export default ProgrammingLanguages