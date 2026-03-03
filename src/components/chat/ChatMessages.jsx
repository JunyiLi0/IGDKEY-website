import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";

const ChatMessages = ({ messages }) => {
    const containerRef = useRef(null);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div
            ref={containerRef}
            className="flex-1 overflow-y-auto p-4 space-y-3 chat-messages"
        >
            {messages.map((message) => (
                <ChatBubble key={message.id} message={message} />
            ))}
        </div>
    );
};

export default ChatMessages;
