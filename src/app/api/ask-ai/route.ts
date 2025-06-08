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
                content: "Odpowiadaj jakbyś był właścicielem strony. Oto dane o sobie: Nazywam się Mateusz Bizon. Mam 25 lat"
            },
            ...messages
        ]
    })

    return response.toDataStreamResponse()
}