import React, { useState, useRef } from "react";
import { getAssetPath } from "../config";

function Chat({ isOpen, onClose }) {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        {
            id: 1,
            text: "Bonjour ! Je suis l'assistant IA d'IGDKEY. Comment puis-je vous aider aujourd'hui ?",
            sender: "bot",
            timestamp: new Date()
        }
    ]); // Historique des messages
    const [loading, setLoading] = useState(false);
    const messagesContainerRef = useRef(null); // ref sur la div des messages
    // (ref textarea supprimée)

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMessage = {
            id: messages.length + 1,
            sender: "user",
            text: input,
            timestamp: new Date()
        };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setLoading(true);
        // (focus automatique supprimé)
        try {
            const res = await fetch("https://igdkey-backend.vercel.app/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: userMessage.text }),
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const data = await res.json();
            setMessages((prev) => [...prev, {
                id: messages.length + 2,
                sender: "bot",
                text: data.reply,
                timestamp: new Date()
            }]);
        } catch (err) {
            console.error("Error:", err);
            setMessages((prev) => [...prev, {
                id: messages.length + 2,
                sender: "bot",
                text: "Erreur : impossible de contacter le backend.",
                timestamp: new Date()
            }]);
        } finally {
            setLoading(false);
        }
    };

    // Envoi avec Entrée (sans Shift)
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    // Scroll automatique uniquement dans la fenêtre du chat
    React.useEffect(() => {
        if (messages.length > 0 && messagesContainerRef.current) {
            messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
        }
    }, [messages]);

    if (!isOpen) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 w-80 h-96 bg-black-100 border border-black-50 rounded-lg shadow-2xl flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-black-50">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white-50 rounded-full flex items-center justify-center">
                        <img src={getAssetPath("/images/chat.png")} alt="chat" className="w-5 h-5" />
                    </div>
                    <div>
                        <h3 className="text-white-50 font-semibold">Assistant IGDKEY</h3>
                        <p className="text-blue-50 text-xs">En ligne</p>
                    </div>
                </div>
                <button
                    onClick={onClose}
                    className="text-white-50 hover:text-white transition-colors"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Messages */}
            <div ref={messagesContainerRef} className="flex-1 overflow-y-auto p-4 space-y-3">
                {messages.map((message) => (
                    <div
                        key={message.id}
                        className={`flex ${message.sender === "bot" ? 'justify-start' : 'justify-end'}`}
                    >
                        <div
                            className={`max-w-xs px-3 py-2 rounded-lg ${message.sender === "bot"
                                ? 'bg-black-50 text-white-50'
                                : 'bg-white-50 text-black'
                                }`}
                        >
                            <p className="text-sm">{message.text}</p>
                            <p className="text-xs opacity-70 mt-1">
                                {message.timestamp.toLocaleTimeString('fr-FR', {
                                    hour: '2-digit',
                                    minute: '2-digit'
                                })}
                            </p>
                        </div>
                    </div>
                ))}
                {loading && (
                    <div className="flex justify-start">
                        <div className="bg-black-50 text-white-50 px-3 py-2 rounded-lg">
                            <p className="text-sm">Envoi...</p>
                        </div>
                    </div>
                )}
            </div>

            {/* Input */}
            <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="p-4 border-t border-black-50">
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Tapez votre message..."
                        className="flex-1 px-3 py-2 bg-black-50 text-white-50 rounded-md text-sm placeholder-blue-50 focus:outline-none focus:ring-2 focus:ring-white-50"
                        disabled={loading}
                    />
                    <button
                        type="submit"
                        disabled={loading || !input.trim()}
                        className="px-4 py-2 bg-white-50 text-black rounded-md hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Chat;