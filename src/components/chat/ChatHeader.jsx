import { motion } from "framer-motion";
import BotAvatar from "./BotAvatar";

const ChatHeader = ({ onClose, isMobile }) => (
    <div className="flex items-center justify-between px-4 py-3 border-b border-dusty-grape/30">
        <div className="flex items-center gap-3">
            {isMobile && (
                <motion.button
                    onClick={onClose}
                    whileTap={{ scale: 0.9 }}
                    className="text-pale-sky hover:text-mint-cream transition-colors mr-1"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </motion.button>
            )}
            <BotAvatar size={36} />
            <div>
                <h3 className="text-pale-sky font-semibold text-sm">Assistant IGDKEY</h3>
                <div className="flex items-center gap-1.5">
                    <motion.div
                        className="w-1.5 h-1.5 rounded-full bg-green-400"
                        animate={{ opacity: [1, 0.4, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    />
                    <p className="text-slate-grey text-xs">En ligne</p>
                </div>
            </div>
        </div>
        {!isMobile && (
            <motion.button
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
                whileHover={{ rotate: 90 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="text-slate-grey hover:text-pale-sky transition-colors"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </motion.button>
        )}
    </div>
);

export default ChatHeader;
