"use client"

import React, { KeyboardEvent, useEffect, useRef } from 'react'
import { useChat, } from "@ai-sdk/react"
import { Button } from '../ui/button'
import { Send } from 'lucide-react'
import { Textarea } from '../ui/textarea'
import DotsLoading from '../ui/dotsLoading'

type AskAIChatProps = {
    isChatOpen: boolean
}

function AskAIChat({ isChatOpen }: AskAIChatProps) {
    const { messages, input, handleInputChange, handleSubmit, status } = useChat({
        api: "/api/ask-ai"
    })
    const chatContainerRef = useRef<HTMLDivElement>(null)

    function scrollDownInChat() {
        const { scrollHeight, offsetTop, offsetHeight } = chatContainerRef.current as HTMLDivElement

        if (scrollHeight >= offsetTop + offsetHeight) {
            chatContainerRef.current?.scrollTo(0, scrollHeight)
        }
    }

    function onValueChange(e: KeyboardEvent<HTMLTextAreaElement>) {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            
            if (input.trim() !== "") {
                handleSubmit()
            }
        }
    }

    useEffect(() => {
        scrollDownInChat()
    }, [messages])

  return (
    <div className={`fixed bottom-24 right-5 flex flex-col ${isChatOpen ? "w-[280px] sm:w-[600px] h-[350px] sm:h-[400px]" : "size-0 pointer-events-none"} rounded-2xl border-2 bg-background overflow-hidden transition-all duration-300`}>
        <div className='bg-secondary p-2 text-center'>
            <p className='text-lg font-medium'>Ask AI about me</p>
        </div>
        <div ref={chatContainerRef} className='flex flex-col p-2 grow gap-5 overflow-y-auto no-visible-scrollbar'>
            {messages.map(message => (
                <div key={message.id} className={`w-fit max-w-[calc(100%-2rem)] rounded-xl py-2 px-4 ${message.role === "user" ? "self-end bg-secondary" : "bg-muted/50"}`}>
                    <p>{message.content}</p>
                </div>
            ))}
            {status === "submitted" && (
                <DotsLoading className='w-fit' />
            )}
        </div>
        <div className='mt-auto'>
            <form onSubmit={handleSubmit}>
                <div className='relative'>
                    <Textarea value={input} onKeyDown={onValueChange} onChange={handleInputChange} className='resize-none pr-11' placeholder='Ask about anything'></Textarea>
                    <Button type='submit' size={"icon"} className='absolute top-1/2 right-2 -translate-y-1/2' disabled={input.trim() === "" || status === "submitted"}><Send /></Button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default AskAIChat