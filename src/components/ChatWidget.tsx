import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 1. New states to manage the initial info capture
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [hasProvidedInfo, setHasProvidedInfo] = useState(false);

  const chatBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const n8nWebhookUrl =
    "https://qapaschale.app.n8n.cloud/webhook/f5e6fd0a-3cf8-49c4-bac2-9353f13c6a98";

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
    if (isOpen && !isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen, isLoading]);

  // 2. New handler for the initial welcome form
  const handleInfoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!visitorName.trim() || !visitorEmail.trim()) return;

    setHasProvidedInfo(true); // Switch to the chat view
    setMessages([
      {
        sender: "ai",
        text: `Hi ${visitorName}! I'm Paschal's AI assistant. How can I help you today?`,
      },
    ]);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage: Message = { sender: "user", text: userInput };
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: visitorName, // 3. Send the visitor's name and email with every message
          email: visitorEmail,
          message: userInput,
          history: newMessages,
        }),
      });

      if (response.ok) {
        const aiResponseText = await response.text();
        const newAiMessage: Message = { sender: "ai", text: aiResponseText };
        setMessages((prev) => [...prev, newAiMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: "Sorry, an error occurred." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Sorry, a network error occurred." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="chat-widget-container">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="chat-header">
              <h4>QAPaschalE AI</h4>
              <button onClick={() => setIsOpen(false)}>&times;</button>
            </div>

            {/* 4. Conditionally render the info form or the chat body */}
            {!hasProvidedInfo ? (
              <div className="chat-body">
                <form onSubmit={handleInfoSubmit} className="info-form">
                  <p>Welcome! Please introduce yourself to start chatting.</p>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={visitorName}
                    onChange={(e) => setVisitorName(e.target.value)}
                    required
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={visitorEmail}
                    onChange={(e) => setVisitorEmail(e.target.value)}
                    required
                  />
                  <button type="submit">Start Chat</button>
                </form>
              </div>
            ) : (
              <>
                <div className="chat-body" ref={chatBodyRef}>
                  {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                      <p>{msg.text}</p>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="chat-message ai thinking">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  )}
                </div>
                <div className="chat-footer">
                  <form onSubmit={handleSubmit}>
                    <input
                      ref={inputRef}
                      type="text"
                      placeholder="Ask a question..."
                      value={userInput}
                      onChange={(e) => setUserInput(e.target.value)}
                      disabled={isLoading}
                    />
                    <button type="submit" disabled={isLoading}>
                      <i className="bi bi-send-fill"></i>
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
      <button className="chat-toggle-button" onClick={() => setIsOpen(!isOpen)}>
        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-chat-dots-fill"}`}></i>
      </button>
    </div>
  );
};

export default ChatWidget;
