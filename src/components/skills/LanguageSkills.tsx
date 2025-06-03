import React from 'react'

function LanguageSkills() {
  return (
    <div className='bg-primary rounded-2xl text-white p-5'>
        <p className='bigger-text mb-5'>Languages</p>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
            <div className='space-y-2'>
                <p className='text-lg font-medium'>HTML</p>
                <p className='text-muted'>Advanced</p>
            </div>
            <div className='space-y-2'>
                <p className='text-lg font-medium'>HTML</p>
                <p className='text-muted'>Advanced</p>
            </div>
            <div className='space-y-2'>
                <p className='text-lg font-medium'>HTML</p>
                <p className='text-muted'>Advanced</p>
            </div>
            <div className='space-y-2'>
                <p className='text-lg font-medium'>HTML</p>
                <p className='text-muted'>Advanced</p>
            </div>
        </div>
    </div>
  )
}

export default LanguageSkills