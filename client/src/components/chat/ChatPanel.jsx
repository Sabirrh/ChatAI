import ChatBubble from "./ChatBubble";
import { useSelector } from 'react-redux';
// import classes from './ChatPanel.module.css';
export default function ChatPanel() {

    const { currentChatID, chats, loading } = useSelector((state) => state.chat)
    const chat = chats.find(chat => chat.id === currentChatID)

    if (!chat || !chat.messages) {
        return <div>No messages yet.</div>;
    }
    return (
        <>
            {chat?.messages.map((message, index) => (
                <ChatBubble
                    key={index}
                    data={message}
                />
            ))}

            {loading && (
                <div className="loader"></div>
            )}

        </>
    )
}