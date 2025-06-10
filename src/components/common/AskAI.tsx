"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { ArrowDown, MessageCircleMore } from 'lucide-react'
import AskAIChat from './AskAIChat'

function AskAI() {
    const [isChatOpen, setIsChatOpen] = useState(false)

  return (
    <>
        <AskAIChat isChatOpen={isChatOpen} />
        <Button size={"icon"} className='fixed bottom-5 right-5 size-14 z-10' onClick={() => setIsChatOpen(prev => !prev)}>
            {isChatOpen ? <ArrowDown className='size-8' /> : <MessageCircleMore className='size-8' />}
        </Button>
    </>
  )
}

export default AskAI