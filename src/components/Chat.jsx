import React, { useState } from "react";

function Chat() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!input.trim()) return;

        setLoading(true);
        try {
            const res = await fetch("https://igdkey-backend.vercel.app/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();
            setResponse(data.reply);
        } catch (err) {
            console.error("Error:", err);
            setResponse("Erreur : impossible de contacter le backend.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Écris ton message ici..."
            />
            <button onClick={sendMessage} disabled={loading}>
                {loading ? "Envoi..." : "Envoyer"}
            </button>
            <div><strong>Réponse :</strong> {response}</div>
        </div>
    );
}

export default Chat;