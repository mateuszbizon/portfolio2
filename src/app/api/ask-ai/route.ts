import { streamText } from "ai"
import { openai } from '@ai-sdk/openai';

export const runtime = "edge"

export async function POST(req: Request) {
    const { messages } = await req.json()

    const result = streamText({
        model: openai("gpt-3.5-turbo"),
        system: "Odpowiadaj jakbyś był właścicielem strony. Oto dane o sobie:\n Nazywam się Mateusz Bizon. Mam 25 lat",
        messages
    })

    return result.toDataStreamResponse()
}