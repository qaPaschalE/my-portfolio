import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { IoMdChatboxes, IoMdClose } from "react-icons/io";

interface Message {
  sender: "user" | "ai";
  text: string;
}

const ChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [hasProvidedInfo, setHasProvidedInfo] = useState(false);

  const chatBodyRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const n8nWebhookUrl = "https://chepsyop.app.n8n.cloud/webhook/chat"; // Make sure to use your public URL

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isOpen && !showPreview) {
        setShowPreview(true);
      }
    }, 12000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
    if (isOpen && !isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [messages, isOpen, isLoading]);

  const handleOpenFullChat = () => {
    setShowPreview(false);
    setIsOpen(true);
  };

  const handleInfoSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!visitorName.trim() || !visitorEmail.trim()) return;

    const nameValidationRegex = /^[a-zA-Z\s]*$/;
    if (!nameValidationRegex.test(visitorName)) {
      toast.error("Name can only contain letters and spaces.");
      return;
    }

    setHasProvidedInfo(true);
    setMessages([
      {
        sender: "ai",
        text: `Hi ${visitorName}! Thanks for introducing yourself. How can I help you today?`,
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
          name: visitorName,
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
              <div className="chat-head-image">
                <img
                  src="https://qapaschale.github.io/my-portfolio/images/Paschal%20Headshot.png"
                  alt="Enyimiri Paschal Chetachi"
                />
                <span className="online-dot"></span>
              </div>
              <h4>QAPaschalE AI</h4>
              <button onClick={() => setIsOpen(false)}>&times;</button>
            </div>

            {!hasProvidedInfo ? (
              <div className="chat-body">
                <form onSubmit={handleInfoSubmit} className="info-form">
                  <p>Welcome! Please introduce yourself to continue.</p>
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
              // --- THE FIX IS HERE: The chat body and footer have been restored ---
              <>
                <div className="chat-body" ref={chatBodyRef}>
                  {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.sender}`}>
                      {msg.sender === "ai" && (
                        <div className="chat-avatar">
                          <img
                            src="https://qapaschale.github.io/my-portfolio/images/Paschal%20Headshot.png"
                            alt="Paschal"
                          />
                          <span className="online-dot"></span>
                        </div>
                      )}
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

        {showPreview && (
          <motion.div
            className="chat-preview-bubble"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={handleOpenFullChat}
          >
            <div className="chat-avatar">
              <img
                src="https://qapaschale.github.io/my-portfolio/images/Paschal%20Headshot.png"
                alt="Paschal"
              />
              <span className="online-dot"></span>
            </div>
            <div className="preview-text">
              Hello there! Welcome to my portfolio.
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        className="chat-toggle-button"
        onClick={() => {
          setShowPreview(false);
          setIsOpen(!isOpen);
        }}
      >
        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-messenger"}`}></i>
      </button>
    </div>
  );
};

export default ChatWidget;
