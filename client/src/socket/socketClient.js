import { io } from 'socket.io-client';
import { store } from '../store/index.js'
import {storeResponse,aiError} from '../store/chatSlice.js'
let socket;
export const socketServer = () => {
    socket = io('https://chatai-rlig.onrender.com')


    socket.on('connect', () => {
        // console.log(`Connected to socket server: ${socket.id}`)
        socket.on('ai-response', (data) => {
            // console.log(data)
            store.dispatch(storeResponse(data))
        });
        socket.on('Ai-error', (error)=>{
            store.dispatch(aiError(error))
        })
    })
}

export const sendMessageTOServer = ({ message, chatID }) => {
    //imporing history of chat
    let state = store.getState();
    const chat = state.chat.chats.find(chat => chat.id === chatID)

    socket.emit('user-message', {
        ...chat
    })
}
