import React from 'react'
import Container from '../ui/container'
import { Tabs } from '../ui/tabs'
import { SKILL_TABS } from '@/constants/tabs'

function SkillsSection() {
  return (
    <section className='py-section-padding bg-[#DDF1F9]'>
        <Container>
            <p className='section-name-text'>skills</p>
            <h2 className='heading2 text-center mb-5'>My expertise</h2>
            <div className='h-[10rem] md:h-[20rem] [perspective:1000px] relative mb-40'>
                <Tabs tabs={SKILL_TABS} />
            </div>
        </Container>
    </section>
  )
}

export default SkillsSection