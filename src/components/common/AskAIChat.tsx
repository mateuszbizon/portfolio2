"use client"

import React from 'react'

type AskAIChatProps = {
    isChatOpen: boolean
}

function AskAIChat({ isChatOpen }: AskAIChatProps) {
  return (
    <div className={`fixed bottom-24 right-5 ${isChatOpen ? "w-[280px] sm:w-[600px] h-[350px] sm:h-[400px]" : "size-0 pointer-events-none"} rounded-2xl border-2 bg-background overflow-hidden transition-all duration-300`}>

    </div>
  )
}

export default AskAIChat