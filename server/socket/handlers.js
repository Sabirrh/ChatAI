const { client } = require('../config/opneai.config')
let history = [];
const messageHandler = async (socket, data) => {
    try {
        // throw new Error("Testing error handling")
        const aiResponse = await client.chat.completions.create({
            // model:'gpt-3.5-turbo',
            model: 'openai/gpt-4.1-mini',
            messages: [
                { role: 'system', content: 'Respond in a casual, friendly way. Include emojis in your replies.' },
                ...data.messages
            ],
            stream: true,
            temperature: 0.5,
            max_tokens: 300
        })

        for await (const chunk of aiResponse) {
            const content = chunk.choices[0]?.delta?.content || "";
            if (content) {
                socket.emit('ai-response', {
                    chatID: data.id,
                    content: content,
                    role: 'assistant'
                })
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
    }catch(error){
        //  console.log("Ai response error", error)
         socket.emit('Ai-error',{
            chatID:data.id, 
            content:"Sorry, something went wrong with the Ai response. Please try again later.",
             error:error.message || error.toString()
         })
    }
}
const messageHistory = (data, reponse) => {
    const chat = history.find(chat => chat.id === data.id);
    if (chat) {
        chat.messages.push(reponse)
    } else {
        history.push({
            id: data.id,
            messages: [
                ...data.messages,
                reponse
            ]
        })
    }
    // console.log(JSON.stringify(history))
}

module.exports = { messageHandler }