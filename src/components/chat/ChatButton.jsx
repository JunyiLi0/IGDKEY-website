import { motion } from "framer-motion";
import BotAvatar from "./BotAvatar";

const ChatButton = ({ onClick }) => (
    <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
        {/* Pulse ring */}
        <motion.div
            className="absolute inset-0 rounded-full bg-pale-sky/20"
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Second ring (delayed) */}
        <motion.div
            className="absolute inset-0 rounded-full bg-pale-sky/10"
            animate={{ scale: [1, 1.9, 1], opacity: [0.3, 0, 0.3] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
        />
        <motion.button
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.92 }}
            className="relative w-14 h-14 rounded-full shadow-lg shadow-dusty-grape/30 flex items-center justify-center cursor-pointer bg-onyx border border-dusty-grape/50 hover:border-pale-sky/50 transition-colors"
            aria-label="Ouvrir le chat"
        >
            <BotAvatar size={32} />
        </motion.button>
    </motion.div>
);

export default ChatButton;
