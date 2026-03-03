import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import TypingIndicator from "./TypingIndicator";

const markdownComponents = {
    p: ({ children }) => <p className="text-sm mb-2 last:mb-0 leading-relaxed">{children}</p>,
    strong: ({ children }) => <strong className="font-bold text-mint-cream">{children}</strong>,
    em: ({ children }) => <em className="italic opacity-90">{children}</em>,
    ul: ({ children }) => <ul className="list-disc list-inside text-sm space-y-1 mb-2">{children}</ul>,
    ol: ({ children }) => <ol className="list-decimal list-inside text-sm space-y-1 mb-2">{children}</ol>,
    li: ({ children }) => <li className="text-sm leading-relaxed">{children}</li>,
    code: ({ children }) => (
        <code className="bg-onyx/40 px-1.5 py-0.5 rounded text-xs font-mono text-mint-cream">{children}</code>
    ),
    a: ({ href, children }) => (
        <a href={href} className="text-pale-sky underline hover:text-mint-cream transition-colors" target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    ),
    h1: ({ children }) => <h1 className="text-base font-bold mb-1">{children}</h1>,
    h2: ({ children }) => <h2 className="text-sm font-bold mb-1">{children}</h2>,
    h3: ({ children }) => <h3 className="text-sm font-semibold mb-1">{children}</h3>,
    blockquote: ({ children }) => (
        <blockquote className="border-l-2 border-pale-sky/40 pl-3 my-2 opacity-80">{children}</blockquote>
    ),
};

const ChatBubble = ({ message }) => {
    const isBot = message.sender === "bot";

    return (
        <motion.div
            className={`flex ${isBot ? "justify-start" : "justify-end"}`}
            initial={{ opacity: 0, x: isBot ? -16 : 16, y: 8 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
        >
            <div
                className={`max-w-[85%] px-3.5 py-2.5 rounded-2xl ${
                    isBot
                        ? "bg-dusty-grape/80 text-pale-sky rounded-bl-sm"
                        : "bg-pale-sky text-onyx rounded-br-sm"
                }`}
            >
                {isBot ? (
                    <div className="chat-markdown">
                        {message.text ? (
                            <ReactMarkdown components={markdownComponents}>
                                {message.text}
                            </ReactMarkdown>
                        ) : null}
                        {message.isStreaming && <TypingIndicator />}
                    </div>
                ) : (
                    <p className="text-sm leading-relaxed">{message.text}</p>
                )}
                <p className={`text-[10px] mt-1.5 ${isBot ? "opacity-50" : "opacity-60"}`}>
                    {message.timestamp.toLocaleTimeString("fr-FR", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>
            </div>
        </motion.div>
    );
};

export default ChatBubble;
