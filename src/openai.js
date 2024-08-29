import { OpenAI } from 'openai';

const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true
});

export async function sendMsgToOpenAI(message) {
    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: message }],
        temperature: 0.7,
        max_tokens: 512,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0
    });
    return res.choices[0].message.content;
}
