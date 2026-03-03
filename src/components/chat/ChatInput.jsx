import { useState } from "react";
import { motion } from "framer-motion";

const ChatInput = ({ onSend, disabled }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!input.trim() || disabled) return;
        onSend(input);
        setInput("");
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 border-t border-dusty-grape/50">
            <div className="flex gap-2 items-end">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Tapez votre message..."
                    className="flex-1 px-4 py-2.5 bg-dusty-grape/40 text-pale-sky rounded-xl text-sm placeholder-slate-grey/60 focus:outline-none focus:ring-1 focus:ring-pale-sky/40 transition-all"
                    disabled={disabled}
                />
                <motion.button
                    type="submit"
                    disabled={disabled || !input.trim()}
                    whileTap={{ scale: 0.85 }}
                    whileHover={{ scale: 1.08 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    className="w-10 h-10 flex items-center justify-center bg-pale-sky text-onyx rounded-xl disabled:opacity-30 disabled:cursor-not-allowed transition-colors hover:bg-mint-cream"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M5 12h14M12 5l7 7-7 7"
                        />
                    </svg>
                </motion.button>
            </div>
        </form>
    );
};

export default ChatInput;
