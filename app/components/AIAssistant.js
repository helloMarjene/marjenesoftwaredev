"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

const sectionNames = {
  "/": "HOME",
  "/about": "ABOUT",
  "/services": "SERVICES",
  "/portfolio": "PORTFOLIO",
  "/case-studies": "CASE STUDIES",
  "/careers": "CAREERS",
  "/contact": "CONTACT",
  "/documentation": "DOCUMENTATION",
  "/faq": "FAQ",
  "/blog": "BLOG",
};
const signalPrompts = [
  "TALK TO OUR AGENTS",
  "BUILD YOUR SYSTEM WITH US",
  "LET'S BRING YOUR IDEA TO LIFE",
  "NEED A CUSTOM DIGITAL SOLUTION?",
  "LET'S GROW YOUR BUSINESS WITH TECH",
  "CALL +256 704 125517",
  "CALL +256 792 096974",
  "EMAIL HELLO@MARJENESOFTWAREDEV.COM",
  "BASED IN UGANDA, WORKING WORLDWIDE",
];

const whatsappUrl = "https://wa.me/256704125517?text=Hello%2C%20I%27d%20like%20to%20discuss%20a%20project.";

export default function AIAssistant() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [customPrompt, setCustomPrompt] = useState("");
  const [isSending, setIsSending] = useState(false);
  const chatEndRef = useRef(null);
  const sectionName = sectionNames[pathname] || "WEBSITE";
  const [signalCycle, setSignalCycle] = useState({ pathname: "/", index: 0, visible: false });
  const messageIndex = signalCycle.pathname === pathname ? signalCycle.index : 0;
  const signalMessage = messageIndex === 0
    ? `YOU ARE IN THE ${sectionName} SECTION`
    : signalPrompts[messageIndex - 1];
  const [signal, setSignal] = useState({ pathname: "/", index: -1, text: "" });
  const visibleSignal = signal.pathname === pathname && signal.index === messageIndex
    ? signal.text
    : "";
  const isSignalVisible = signalCycle.pathname === pathname && signalCycle.visible;
  const [messages, setMessages] = useState([{
    id: "welcome",
    sender: "ai",
    text: "Hello! Ask me about our services, company, or contact details. For pricing, I can connect you with our team on WhatsApp.",
  }]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let position = 0;
    let timerId;
    const advanceSignal = () => {
      setSignalCycle({
        pathname,
        index: (messageIndex + 1) % (signalPrompts.length + 1),
        visible: false,
      });
    };
    const hideThenAdvance = () => {
      setSignalCycle({ pathname, index: messageIndex, visible: false });
      timerId = window.setTimeout(advanceSignal, 10000);
    };

    const writeNextCharacter = () => {
      position += 1;
      setSignal({ pathname, index: messageIndex, text: signalMessage.slice(0, position) });
      setSignalCycle({ pathname, index: messageIndex, visible: true });
      if (position < signalMessage.length) {
        timerId = window.setTimeout(writeNextCharacter, 42);
      } else {
        timerId = window.setTimeout(hideThenAdvance, 5000);
      }
    };

    timerId = window.setTimeout(
      () => {
        if (reduceMotion) {
          setSignal({ pathname, index: messageIndex, text: signalMessage });
          setSignalCycle({ pathname, index: messageIndex, visible: true });
          timerId = window.setTimeout(hideThenAdvance, 5000);
        } else {
          writeNextCharacter();
        }
      },
      0
    );

    return () => window.clearTimeout(timerId);
  }, [pathname, messageIndex, signalMessage]);

  useEffect(() => {
    if (isOpen) chatEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [isOpen, isSending, messages]);

  const addMessage = (sender, text, actionUrl, actionType = "whatsapp") => {
    setMessages((previous) => [
      ...previous,
      {
        id: `${sender}-${Date.now()}-${Math.random()}`,
        sender,
        text,
        actionUrl,
        actionType,
      },
    ]);
  };

  const handleCustomSubmit = async (event) => {
    event.preventDefault();
    const prompt = customPrompt.trim();
    if (!prompt || isSending) return;

    addMessage("user", prompt);
    setCustomPrompt("");
    setIsSending(true);

    try {
      const conversation = [
        ...messages.map(({ sender, text }) => ({
          role: sender === "ai" ? "assistant" : "user",
          content: text,
        })),
        { role: "user", content: prompt },
      ].slice(-12);
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: conversation }),
      });
      const data = await response.json();
      if (!response.ok && !data.reply) throw new Error("Chat request failed");
      if (!data.reply) throw new Error("Chat returned no answer");
      addMessage("ai", data.reply, data.actionUrl || data.whatsappUrl, data.actionType);
    } catch {
      addMessage(
        "ai",
        "I can’t reach the chat service right now. You can still message our team directly.",
        whatsappUrl
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div className={`ai-assistant ${isOpen ? "is-open" : ""}`} aria-label="AI assistant">
      <div className="ai-assistant__panel">
        <div className="ai-assistant__header">
          <div className="ai-assistant__profile">
            <img src="/images/MAJ.png" alt="M.A.R.J.E.N.E AI" className="ai-assistant__avatar" />
            <div>
              <div className="ai-assistant__name">M.A.R.J.E.N.E AI</div>
              <div className="ai-assistant__status-row">
                <span className="ai-assistant__dot" />
                {isSending ? "Typing…" : "Online"}
              </div>
            </div>
          </div>

          <button
            type="button"
            className="ai-assistant__close"
            aria-label="Close AI assistant"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>

        <div className="ai-assistant__chat-window" aria-live="polite">
          {messages.map((message) => (
            <div
              key={message.id || `${message.sender}-${message.text}`}
              className={`ai-assistant__message ai-assistant__message--${message.sender}`}
            >
              {message.text}
              {message.actionUrl && (
                <a
                  className={`ai-assistant__whatsapp-link${message.actionType === "translate" ? " ai-assistant__translate-link" : ""}`}
                  href={message.actionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={message.actionType === "translate" ? "Open Google Translate" : "Continue this conversation on WhatsApp"}
                  title={message.actionType === "translate" ? "Open Google Translate" : "Continue on WhatsApp"}
                >
                  <i className={message.actionType === "translate" ? "fas fa-language" : "fab fa-whatsapp"} aria-hidden="true" />
                </a>
              )}
            </div>
          ))}
          {isSending && (
            <div className="ai-assistant__message ai-assistant__message--ai ai-assistant__message--typing">
              <span />
              <span />
              <span />
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        <form className="ai-assistant__form" onSubmit={handleCustomSubmit}>
          <input
            type="text"
            value={customPrompt}
            onChange={(event) => setCustomPrompt(event.target.value)}
            placeholder="Message M.A.R.J.E.N.E AI"
            aria-label="Write a message to M.A.R.J.E.N.E AI"
            maxLength={1200}
          />
          <button type="submit" aria-label="Send message" disabled={isSending || !customPrompt.trim()}>
            <i className="fas fa-paper-plane" aria-hidden="true" />
          </button>
        </form>
      </div>

      <div className="ai-assistant__trigger-wrap">
        {isSignalVisible && (
          <div
            className="ai-assistant__notice"
            role="status"
            aria-live="off"
            aria-label={`M.A.R.J.E.N.E: ${signalMessage.toLowerCase()}`}
          >
            <span className="ai-assistant__signal-message">{visibleSignal}</span>
            <span className="ai-assistant__signal-caret" aria-hidden="true" />
          </div>
        )}

        <button
          type="button"
          className="ai-assistant__bubble"
          aria-label="Open M.A.R.J.E.N.E AI assistant"
          onClick={() => setIsOpen((value) => !value)}
        >
          <img src="/images/MAJ.png" alt="M.A.R.J.E.N.E AI robot" loading="lazy" />
        </button>
      </div>
    </div>
  );
}
