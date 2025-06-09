"use client"

import React from 'react'
import { useChat } from "@ai-sdk/react"
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import { Textarea } from '../ui/textarea'

type AskAIChatProps = {
    isChatOpen: boolean
}

function AskAIChat({ isChatOpen }: AskAIChatProps) {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: "/api/ask-ai"
    })

  return (
    <div className={`fixed bottom-24 right-5 flex flex-col ${isChatOpen ? "w-[280px] sm:w-[600px] h-[350px] sm:h-[400px]" : "size-0 pointer-events-none"} rounded-2xl border-2 bg-background overflow-hidden transition-all duration-300`}>
        <div className='bg-secondary p-2 text-center'>
            <p>Ask AI about me</p>
        </div>
        <div className='p-2 grow space-y-5 overflow-y-auto no-visible-scrollbar'>
            {messages.map(message => (
                <div key={message.id}>
                    {message.content}
                </div>
            ))}
        </div>
        <div className='mt-auto'>
            <form onSubmit={handleSubmit}>
                <div className='relative'>
                    <Textarea value={input} onChange={handleInputChange} className='resize-none pr-11' placeholder='Ask about anything'></Textarea>
                    <Button type='submit' size={"icon"} className='absolute top-1/2 right-2 -translate-y-1/2' disabled={input === ""}><Send /></Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AskAIChat