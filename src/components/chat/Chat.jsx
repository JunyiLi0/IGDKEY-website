import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useChatStream } from "./useChatStream";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const { messages, isStreaming, sendMessage, cancelStream } = useChatStream();
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    // Cancel stream when closing
    const handleClose = () => {
        if (isStreaming) cancelStream();
        setIsOpen(false);
    };

    // Prevent body scroll on mobile when chat is open
    useEffect(() => {
        if (isMobile && isOpen) {
            document.body.style.overflow = "hidden";
            return () => { document.body.style.overflow = ""; };
        }
    }, [isMobile, isOpen]);

    return (
        <AnimatePresence mode="wait">
            {isOpen ? (
                <ChatWindow
                    key="chat-window"
                    messages={messages}
                    isStreaming={isStreaming}
                    onSend={sendMessage}
                    onClose={handleClose}
                    isMobile={isMobile}
                />
            ) : (
                <ChatButton key="chat-button" onClick={() => setIsOpen(true)} />
            )}
        </AnimatePresence>
    );
}

export default Chat;
