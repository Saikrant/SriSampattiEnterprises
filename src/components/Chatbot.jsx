import React, { useState, useEffect, useRef } from 'react';

const N8N_WEBHOOK_URL = import.meta.env.VITE_N8N_WEBHOOK_URL || "https://localhost:5678/webhook/webhook/sri-sampatti-chatbot";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            text: "Hello! Welcome to Sri Sampatti Enterprises. How can I help you with uPVC windows and doors?",
            isBot: true
        }
    ]);
    const [input, setInput] = useState("");
    const [loading, setLoading] = useState(false);
    const messagesEndRef = useRef(null);

    const toggleChat = () => setIsOpen(!isOpen);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen]);

    // 🔹 Call n8n webhook
    const fetchBotResponse = async (message) => {
        try {
            const response = await fetch(N8N_WEBHOOK_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message }),
            });

            const data = await response.json();
            return data.reply || "Sorry, I couldn’t find an answer for that.";
        } catch (error) {
            console.error("Chatbot error:", error);
            return "Unable to connect right now. Please try again later.";
        }
    };

    const handleSend = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;

        const userText = input;

        // 1. Add user message
        setMessages(prev => [...prev, { text: userText, isBot: false }]);
        setInput("");

        try {
            // 2. Call n8n webhook
            const response = await fetch(
                N8N_WEBHOOK_URL,
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ message: userText }),
                }
            );

            const data = await response.json();

            // 3. Add bot response
            setMessages(prev => [
                ...prev,
                { text: data.reply || "Sorry, I couldn't find an answer.", isBot: true }
            ]);
        } catch (error) {
            setMessages(prev => [
                ...prev,
                { text: "Unable to connect right now. Please try again later.", isBot: true }
            ]);
        }
    };


    return (
        <div className="chatbot-container">
            {/* Toggle Button */}
            <button
                className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
                onClick={toggleChat}
            >
                {isOpen ? "✖" : "💬"}
            </button>

            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h3>Smart Assistant</h3>
                        <p>Ask us about uPVC windows</p>
                    </div>

                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.isBot ? 'bot' : 'user'}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <form className="chatbot-input" onSubmit={handleSend}>
                        <input
                            type="text"
                            placeholder="Type your question..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            disabled={loading}
                        />
                        <button type="submit" disabled={loading}>
                            ➤
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Chatbot;
