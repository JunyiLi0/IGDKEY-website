import { motion } from "framer-motion";
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

const ChatWindow = ({ messages, isStreaming, onSend, onClose, isMobile }) => (
    <motion.div
        className={
            isMobile
                ? "fixed inset-0 z-50 flex flex-col bg-onyx"
                : "fixed bottom-4 right-4 z-50 w-[420px] h-[600px] bg-onyx/95 backdrop-blur-xl border border-dusty-grape/40 rounded-2xl shadow-2xl shadow-black/40 flex flex-col overflow-hidden"
        }
        initial={{ opacity: 0, scale: isMobile ? 1 : 0.85, y: isMobile ? 40 : 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: isMobile ? 1 : 0.85, y: isMobile ? 40 : 20 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
    >
        <ChatHeader onClose={onClose} isMobile={isMobile} />
        <ChatMessages messages={messages} />
        <ChatInput onSend={onSend} disabled={isStreaming} />
    </motion.div>
);

export default ChatWindow;
