import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: "ai",
      text: "Hi! I'm Paschal's AI assistant. Feel free to ask me anything about his skills or experience.",
    },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const chatBodyRef = useRef<HTMLDivElement>(null);

  const n8nWebhookUrl =
    "http://localhost:5678/webhook/f5e6fd0a-3cf8-49c4-bac2-9353f13c6a98"; // <-- PASTE YOUR N8N PRODUCTION URL HERE

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!userInput.trim()) return;

    const newUserMessage: Message = { sender: "user", text: userInput };
    // Create the new history immediately for sending
    const newMessages = [...messages, newUserMessage];
    setMessages(newMessages);
    setUserInput("");
    setIsLoading(true);

    try {
      const response = await fetch(n8nWebhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // THE FIX IS HERE: We now send the entire conversation history.
        body: JSON.stringify({
          message: userInput, // Still sending the latest message for easy access
          history: newMessages, // Sending the full array of messages
        }),
      });

      if (response.ok) {
        const aiResponseText = await response.text();
        const newAiMessage: Message = { sender: "ai", text: aiResponseText };
        setMessages((prev) => [...prev, newAiMessage]);
      } else {
        setMessages((prev) => [
          ...prev,
          { sender: "ai", text: "Sorry, an error occurred. Please try again." },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { sender: "ai", text: "Sorry, there was a network issue." },
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
