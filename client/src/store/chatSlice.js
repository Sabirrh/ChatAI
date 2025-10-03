import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState: {
        currentChatID: null,
        chats: [],
        loading: false
    },
    reducers: {
        storeMessage: (state, action) => {
            const { message, chatID } = action.payload;
            const chat = state.chats.find(chat => chat.id === chatID)
            if (chat) {
                chat.messages.push(message);
            } else {
                state.chats.push({
                    id: chatID,
                    messages: [message]
                })
            }
            state.loading = true
        },
        storeResponse: (state, action) => {
            const { content, role, chatID } = action.payload;
            const chat = state.chats.find(chat => chat.id === chatID);

            const isAssistant = chat.messages.at(-1).role === 'assistant'
            if (chat && !isAssistant) {
                chat.messages.push({
                    role,
                    content
                })
            } else {
                const lastMessage = chat.messages.at(-1);
                lastMessage.content += content;
            }
            state.loading = false;
        },
        removeChat: (state, action) => {
            const chatID = action.payload;
            const indexToRemove = state.chats.findIndex(chat => chat.id === chatID);
            state.chats = state.chats.filter(chat => chat.id !== chatID)
            if (state.currentChatID === chatID) {
                if (state.chats.length > 0) {
                    //Try to move to previous chat (if exists)
                    const newIndex = indexToRemove > 0 ? indexToRemove - 1 : 0;
                    state.currentChatID = state.chats[newIndex].id;
                } else {
                    state.currentChatID = null;
                }
            }
        },
        aiError: (state, action) => {
            const { content, error, chatID } = action.payload;
            const chat = state.chats.find(chat => chat.id === chatID);
            if(chat){
                chat.messages.push({
                    role:'assistant',
                    content:content,
                    error: error || 'N/A error'
                })
            }
        },
        setCurrentChatId: (state, action) => {
            state.currentChatID = action.payload;

        }
    }
})
export const { setCurrentChatId, storeMessage, storeResponse, removeChat, aiError } = chatSlice.actions;
export default chatSlice.reducer;