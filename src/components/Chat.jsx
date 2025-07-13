import React, { useState, useRef } from "react";

function Chat() {
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]); // Historique des messages
    const [loading, setLoading] = useState(false);
    const messagesContainerRef = useRef(null); // ref sur la div des messages
    // (ref textarea supprimée)

    const sendMessage = async () => {
        if (!input.trim()) return;
        const userMessage = { sender: "user", text: input };
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
            setMessages((prev) => [...prev, { sender: "bot", text: data.reply }]);
        } catch (err) {
            console.error("Error:", err);
            setMessages((prev) => [...prev, { sender: "bot", text: "Erreur : impossible de contacter le backend." }]);
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

    // Styles dark theme
    const darkBg = "#181c24";
    const darkPanel = "#232837";
    const userBubble = "#0078fe";
    const botBubble = "#353b4a";
    const textColor = "#f3f3f3";
    const subText = "#b0b6c1";

    return (
        <div style={{ maxWidth: 400, margin: "40px auto", border: `1px solid #232837`, borderRadius: 12, boxShadow: "0 2px 16px #10131a99", padding: 0, background: darkBg, color: textColor, fontFamily: 'Inter, Arial, sans-serif' }}>
            <div style={{ borderTopLeftRadius: 12, borderTopRightRadius: 12, background: darkPanel, padding: "18px 0 12px 0", textAlign: "center", borderBottom: `1px solid #232837` }}>
                <h2 style={{ margin: 0, fontWeight: 700, fontSize: 22, letterSpacing: 1, color: textColor }}>💬 Chatbot IA</h2>
            </div>
            <div ref={messagesContainerRef} style={{ height: 300, overflowY: "auto", marginBottom: 0, background: darkPanel, borderRadius: 0, padding: 14, borderBottom: `1px solid #232837` }}>
                {messages.length === 0 && <div style={{ color: subText, textAlign: "center", marginTop: 100 }}>Commence la conversation !</div>}
                {messages.map((msg, idx) => (
                    <div key={idx} style={{ display: "flex", justifyContent: msg.sender === "user" ? "flex-end" : "flex-start", marginBottom: 10 }}>
                        <div style={{
                            background: msg.sender === "user" ? userBubble : botBubble,
                            color: textColor,
                            borderRadius: 16,
                            padding: "10px 16px",
                            maxWidth: "75%",
                            fontSize: 15,
                            boxShadow: msg.sender === "user" ? "0 1px 4px #0078fe33" : "0 1px 2px #2223",
                            borderBottomRightRadius: msg.sender === "user" ? 4 : 16,
                            borderBottomLeftRadius: msg.sender === "user" ? 16 : 4,
                        }}>
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ padding: 16, background: darkBg, borderBottomLeftRadius: 12, borderBottomRightRadius: 12 }}>
                <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Écris ton message ici..."
                    rows={2}
                    style={{ width: "100%", borderRadius: 8, border: `1px solid #232837`, background: darkPanel, color: textColor, padding: 8, resize: "none", marginBottom: 8, fontSize: 15 }}
                    disabled={loading}
                />
                <button
                    onClick={sendMessage}
                    disabled={loading || !input.trim()}
                    style={{ width: "100%", padding: 10, borderRadius: 8, background: loading || !input.trim() ? "#444a5a" : userBubble, color: "#fff", border: "none", fontWeight: "bold", fontSize: 16, cursor: loading || !input.trim() ? "not-allowed" : "pointer", transition: "background 0.2s" }}
                >
                    {loading ? "Envoi..." : "Envoyer"}
                </button>
            </div>
        </div>
    );
}

export default Chat;