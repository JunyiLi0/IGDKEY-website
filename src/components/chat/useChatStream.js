import { useState, useRef, useCallback } from "react";

const API_URL = "https://igdkey-backend.vercel.app/api/chat";

const initialMessage = {
    id: 1,
    text: "Bonjour ! Je suis l'assistant IA d'IGDKEY. Comment puis-je vous aider ?",
    sender: "bot",
    timestamp: new Date(),
    isStreaming: false,
};

export function useChatStream() {
    const [messages, setMessages] = useState([initialMessage]);
    const [isStreaming, setIsStreaming] = useState(false);
    const abortControllerRef = useRef(null);

    const sendMessage = useCallback(async (input) => {
        if (!input.trim() || isStreaming) return;

        const userMsg = {
            id: Date.now(),
            sender: "user",
            text: input,
            timestamp: new Date(),
            isStreaming: false,
        };
        const botMsgId = Date.now() + 1;

        // Add user message + empty bot placeholder
        setMessages((prev) => [
            ...prev,
            userMsg,
            {
                id: botMsgId,
                sender: "bot",
                text: "",
                timestamp: new Date(),
                isStreaming: true,
            },
        ]);

        setIsStreaming(true);
        abortControllerRef.current = new AbortController();

        try {
            const res = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ message: input }),
                signal: abortControllerRef.current.signal,
            });

            if (!res.ok) {
                let errorMessage = `Erreur HTTP ${res.status}`;
                try {
                    const errorData = await res.json();
                    if (errorData.error) errorMessage = errorData.error;
                } catch {
                    errorMessage = `Erreur HTTP ${res.status}: ${res.statusText}`;
                }
                throw new Error(errorMessage);
            }

            const contentType = res.headers.get("content-type") || "";

            if (contentType.includes("text/event-stream")) {
                // SSE streaming path
                const reader = res.body.getReader();
                const decoder = new TextDecoder();
                let buffer = "";

                while (true) {
                    const { done, value } = await reader.read();
                    if (done) break;

                    buffer += decoder.decode(value, { stream: true });
                    const lines = buffer.split("\n\n");
                    buffer = lines.pop(); // keep incomplete chunk

                    for (const line of lines) {
                        const data = line.replace(/^data: /, "");
                        if (data === "[DONE]") break;
                        try {
                            const parsed = JSON.parse(data);
                            if (parsed.error) {
                                throw new Error(parsed.error);
                            }
                            if (parsed.content) {
                                setMessages((prev) =>
                                    prev.map((m) =>
                                        m.id === botMsgId
                                            ? { ...m, text: m.text + parsed.content }
                                            : m
                                    )
                                );
                            }
                        } catch (e) {
                            if (e.message === "Erreur serveur") throw e;
                        }
                    }
                }
            } else {
                // JSON fallback (old backend format)
                const data = await res.json();
                const reply = data.reply || data.error || "Erreur inconnue";
                setMessages((prev) =>
                    prev.map((m) =>
                        m.id === botMsgId ? { ...m, text: reply } : m
                    )
                );
            }

            // Mark streaming complete
            setMessages((prev) =>
                prev.map((m) =>
                    m.id === botMsgId ? { ...m, isStreaming: false } : m
                )
            );
        } catch (err) {
            if (err.name !== "AbortError") {
                setMessages((prev) =>
                    prev.map((m) =>
                        m.id === botMsgId
                            ? { ...m, text: err.message || "Erreur de connexion", isStreaming: false }
                            : m
                    )
                );
            }
        } finally {
            setIsStreaming(false);
        }
    }, [isStreaming]);

    const cancelStream = useCallback(() => {
        abortControllerRef.current?.abort();
    }, []);

    return { messages, isStreaming, sendMessage, cancelStream };
}
