
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useChatStream } from "./useChatStream";
import ChatButton from "./ChatButton";
import ChatWindow from "./ChatWindow";

function Chat({ 
    variant = "floating",
    isOpen: externalIsOpen,
    setIsOpen: externalSetIsOpen
 }) {
    const [internalIsOpen, setInternalIsOpen] = useState(false);
    const isOpen = externalIsOpen ?? internalIsOpen;
    const setIsOpen = externalSetIsOpen ?? setInternalIsOpen;

    const {
        messages,
        isStreaming,
        sendMessage,
        cancelStream
    } = useChatStream();

    const isMobile = useMediaQuery({
        query: "(max-width: 768px)"
    });

    // Ouvrir le chatbot
    const handleOpen = () => {
        setIsOpen(true);
    };

    // Fermer le chatbot
    const handleClose = () => {
        if (isStreaming) {
            cancelStream();
        }

        setIsOpen(false);
    };

    // Bloquer le scroll uniquement sur mobile
    useEffect(() => {
        if (isMobile && isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobile, isOpen]);

    return (
        <>
            {/* ================================================= */}
            {/* BOUTON QUI A ÉTÉ DEMANDÉ                         */}
            {/* ================================================= */}

            {!isOpen && (
                <ChatButton
                    onClick={handleOpen}
                    variant={variant}
                />
            )}

            {/* ================================================= */}
            {/* FENÊTRE UNIQUE DU CHAT                           */}
            {/* ================================================= */}

            <AnimatePresence>
                {isOpen && (
                    <ChatWindow
                        key="chat-window"
                        messages={messages}
                        isStreaming={isStreaming}
                        onSend={sendMessage}
                        onClose={handleClose}
                        isMobile={isMobile}
                    />
                )}
            </AnimatePresence>
        </>
    );
}

export default Chat;

