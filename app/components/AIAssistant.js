"use client";

import { useEffect, useMemo, useState } from "react";

const faqItems = [
  {
    question: "What types of projects do you build?",
    answer:
      "We build business websites, web applications, mobile apps, internal business systems, AI-powered tools, and platform solutions for organizations across multiple industries.",
  },
  {
    question: "Do you work with startups and businesses?",
    answer:
      "Yes. We work with startups, growing businesses, NGOs, schools, churches, hospitals, and organizations that need better digital systems and stronger customer experiences.",
  },
  {
    question: "Can you build custom systems for our internal operations?",
    answer:
      "Yes. We build custom software that supports workflows, records, reporting, automation, and operational management for organizations with specific business needs.",
  },
  {
    question: "Do you handle design and development together?",
    answer:
      "Yes. We combine product strategy, UX design, system architecture, frontend development, backend development, and deployment support under one delivery workflow.",
  },
  {
    question: "Can I get a WhatsApp quote or inquiry?",
    answer:
      "Yes. You can send your details directly through WhatsApp and our team will respond with the next steps.",
  },
  {
    question: "Do you support future updates and growth?",
    answer:
      "Yes. We design systems with scalability in mind so they can evolve with your business, your users, and your operational needs over time.",
  },
];

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [noticeVisible, setNoticeVisible] = useState(true);
  const [customPrompt, setCustomPrompt] = useState("");
  const [selectedFaq, setSelectedFaq] = useState(null);
  const [messages, setMessages] = useState([
    {
      sender: "ai",
      text: "Hi! I’m M.A.R.J.E.N.E AI. Choose a quick reply below or ask anything and I’ll help you connect on WhatsApp.",
    },
  ]);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setNoticeVisible((value) => !value);
    }, 120000);

    return () => window.clearInterval(interval);
  }, []);

  const normalizedFaqs = useMemo(
    () =>
      faqItems.map((item) => ({
        ...item,
        normalized: item.question.toLowerCase(),
      })),
    []
  );

  const addMessage = (sender, text) => {
    setMessages((previous) => [
      ...previous,
      {
        id: `${sender}-${Date.now()}-${Math.random()}`,
        sender,
        text,
      },
    ]);
  };

  const handleFaqClick = (question, answer) => {
    setSelectedFaq(question);
    addMessage("user", question);
    addMessage("ai", answer);
    setCustomPrompt("");
  };

  const handleCustomSubmit = (event) => {
    event.preventDefault();
    const prompt = customPrompt.trim();
    if (!prompt) return;

    setSelectedFaq(null);
    addMessage("user", prompt);

    const match = normalizedFaqs.find((item) =>
      item.normalized.includes(prompt.toLowerCase()) ||
      prompt.toLowerCase().includes(item.normalized)
    );

    if (match) {
      addMessage("ai", match.answer);
      setCustomPrompt("");
      return;
    }

    const text = encodeURIComponent(
      `Hello M.A.R.J.E.N.E, I have a question that is not in the FAQ list: ${prompt}`
    );
    window.open(`https://wa.me/256704125517?text=${text}`, "_blank", "noopener,noreferrer");
    addMessage("ai", "I couldn’t find that in our FAQ. I’ve opened WhatsApp so you can ask our team directly.");
    setCustomPrompt("");
  };

  const visibleFaqs = selectedFaq
    ? faqItems.filter((item) => item.question === selectedFaq)
    : faqItems;

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
                Online
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

        <div className="ai-assistant__chat-window">
          {messages.map((message) => (
            <div
              key={message.id || `${message.sender}-${message.text}`}
              className={`ai-assistant__message ai-assistant__message--${message.sender}`}
            >
              {message.text}
            </div>
          ))}
        </div>

        <div className="ai-assistant__faq-list">
          {visibleFaqs.map((item, index) => (
            <button
              key={item.question}
              type="button"
              className="ai-assistant__faq-item"
              onClick={() => handleFaqClick(item.question, item.answer)}
            >
              <span className="ai-assistant__faq-number">{index + 1}</span>
              {item.question}
            </button>
          ))}
        </div>

        <form className="ai-assistant__form" onSubmit={handleCustomSubmit}>
          <input
            type="text"
            value={customPrompt}
            onChange={(event) => setCustomPrompt(event.target.value)}
            placeholder="Type your message..."
            aria-label="Ask the AI assistant a question"
          />
          <button type="submit">Send</button>
        </form>
      </div>

      <div className="ai-assistant__trigger-wrap">
        <div className={`ai-assistant__notice ${noticeVisible ? "visible" : "hidden"}`}>
          Chat with M.A.R.J.E.N.E AI if you need help
        </div>

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
