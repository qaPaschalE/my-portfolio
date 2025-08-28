import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

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

  const n8nWebhookUrl = "YOUR_N8N_WEBHOOK_URL";

  // This effect triggers the preview bubble after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      // Only show preview if user hasn't opened the chat or seen the preview yet
      if (!isOpen && !showPreview) {
        setShowPreview(true);
      }
    }, 12000); // 12 seconds

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
    setShowPreview(false); // Hide the preview bubble
    setIsOpen(true); // Open the full chat modal
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
    // ... (rest of handleSubmit remains the same, no changes needed here)
  };

  return (
    <div className="chat-widget-container">
      <AnimatePresence>
        {/* Full chat modal */}
        {isOpen && (
          <motion.div
            className="chat-window"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
          >
            <div className="chat-header">{/* ... header content ... */}</div>

            {/* FIX #3: This logic ensures the info form shows up correctly */}
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
              <>
                <div className="chat-body" ref={chatBodyRef}>
                  {/* ... messages mapping JSX ... */}
                </div>
                <div className="chat-footer">{/* ... chat form JSX ... */}</div>
              </>
            )}
          </motion.div>
        )}

        {/* Preview bubble */}
        {showPreview && (
          <motion.div
            className="chat-preview-bubble"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={handleOpenFullChat}
          >
            {/* ... preview bubble content ... */}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Toggle Button */}
      <button
        className="chat-toggle-button"
        onClick={() => {
          setShowPreview(false); // Always hide preview on click
          setIsOpen(!isOpen); // Toggle the main chat window
        }}
      >
        {/* FIX #2: Icon now only changes to 'X' when the full modal is open */}
        <i className={`bi ${isOpen ? "bi-x-lg" : "bi-messenger"}`}></i>
      </button>
    </div>
  );
};

export default ChatWidget;
