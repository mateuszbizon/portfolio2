import { BIO } from '@/constants'
import { createOpenRouter } from '@openrouter/ai-sdk-provider'
import { streamText } from 'ai'

const openrouter = createOpenRouter({
    apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
    const { messages } = await req.json()

    const response = streamText({
        model: openrouter("openai/gpt-3.5-turbo"),
        messages: [
            {
                role: "system",
                content: `Answer as if you were the owner of the web site. Here are some details about yourself: ${BIO}`
            },
            ...messages
        ]
    })

    return response.toDataStreamResponse()
}