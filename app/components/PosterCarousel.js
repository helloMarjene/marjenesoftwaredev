"use client";

import { useEffect, useState } from "react";

const languages = [
  {
    name: "JavaScript",
    icon: "javascript",
    code: 'console.log("Hello, Marjene!");',
  },
  {
    name: "Python",
    icon: "python",
    code: 'print("Hello, Marjene!")',
  },
  {
    name: "Java",
    icon: "java",
    logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
    code: 'System.out.println("Hello, Marjene!");',
  },
  {
    name: "C++",
    icon: "cplusplus",
    code: 'std::cout << "Hello, Marjene!";',
  },
  {
    name: "PHP",
    icon: "php",
    code: 'echo "Hello, Marjene!";',
  },
  {
    name: "C#",
    icon: "csharp",
    logoSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
    code: 'Console.WriteLine("Hello, Marjene!");',
  },
  {
    name: "Go",
    icon: "go",
    code: 'fmt.Println("Hello, Marjene!")',
  },
  {
    name: "Ruby",
    icon: "ruby",
    code: 'puts "Hello, Marjene!"',
  },
  {
    name: "TypeScript",
    icon: "typescript",
    code: 'console.log("Hello, Marjene!");',
  },
  {
    name: "Rust",
    icon: "rust",
    code: 'fn main() { println!("Hello, Marjene!"); }',
  },
  {
    name: "Swift",
    icon: "swift",
    code: 'print("Hello, Marjene!")',
  },
  {
    name: "Kotlin",
    icon: "kotlin",
    code: 'println("Hello, Marjene!")',
  },
  {
    name: "Dart",
    icon: "dart",
    code: 'print("Hello, Marjene!");',
  },
  {
    name: "C",
    icon: "c",
    code: 'printf("Hello, Marjene!");',
  },
  {
    name: "Lua",
    icon: "lua",
    code: 'print("Hello, Marjene!")',
  },
  {
    name: "R",
    icon: "r",
    code: 'cat("Hello, Marjene!\\n")',
  },
];

export default function PosterCarousel() {
  const [activeLanguage, setActiveLanguage] = useState(0);
  const [typing, setTyping] = useState({ languageIndex: 0, length: 0 });
  const language = languages[activeLanguage];
  const typedLength = typing.languageIndex === activeLanguage ? typing.length : 0;

  useEffect(() => {
    const { code } = languages[activeLanguage];
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let timeoutId;
    let rotationTimeoutId;
    let position = 0;

    if (reduceMotion) {
      timeoutId = window.setTimeout(
        () => setTyping({ languageIndex: activeLanguage, length: code.length }),
        0
      );
      rotationTimeoutId = window.setTimeout(() => {
        setActiveLanguage((index) => (index + 1) % languages.length);
      }, 5000);
      return () => {
        window.clearTimeout(timeoutId);
        window.clearTimeout(rotationTimeoutId);
      };
    }

    const typeCharacter = () => {
      position += 1;
      setTyping({ languageIndex: activeLanguage, length: position });

      if (position < code.length) {
        timeoutId = window.setTimeout(typeCharacter, 58);
      } else {
        rotationTimeoutId = window.setTimeout(() => {
          setActiveLanguage((index) => (index + 1) % languages.length);
        }, 1700);
      }
    };

    timeoutId = window.setTimeout(typeCharacter, 450);
    return () => {
      window.clearTimeout(timeoutId);
      window.clearTimeout(rotationTimeoutId);
    };
  }, [activeLanguage]);

  const selectLanguage = (index) => {
    if (index === activeLanguage) return;
    setActiveLanguage(index);
  };

  return (
    <section className="marjene-educate-section" aria-labelledby="marjene-educate-title">
      <div className="section-container">
        <header className="educate-header">
          <div className="educate-brand">
            <img src="/images/logo1.png" alt="M.A.R.J.E.N.E logo" loading="lazy" />
            <div>
              <span className="section-tag">Learn through code</span>
              <h2 className="section-title" id="marjene-educate-title">
                MARJENE <span className="accent-text">EDUCATE</span>
              </h2>
            </div>
          </div>
          <p className="educate-intro">One hello. Many ways to write it.</p>
        </header>

        <div className="educate-layout">
          <div className="educate-screen" aria-label={`${language.name} code example`}>
            <div className="educate-screen-bar">
              <div className="educate-window-dots" aria-hidden="true">
                <span />
                <span />
                <span />
              </div>
              <span className="educate-file-name">hello-world</span>
              <span className="educate-active-language">
                <img
                  src={language.logoSrc || `https://cdn.simpleicons.org/${language.icon}`}
                  alt=""
                />
                {language.name}
              </span>
            </div>

            <div className="educate-code" aria-live="polite" aria-atomic="true">
              <span className="educate-line-number">01</span>
              <code>
                {language.code.slice(0, typedLength)}
                <span className="educate-caret" aria-hidden="true" />
              </code>
            </div>

            <div className="educate-output">
              <span className="educate-output-label">OUTPUT</span>
              <strong>Hello, Marjene!</strong>
            </div>
          </div>

          <div className="educate-language-panel">
            <h3>Programming languages</h3>
            <div className="educate-language-grid">
              {languages.map((item, index) => (
                <button
                  className={`educate-language${index === activeLanguage ? " active" : ""}`}
                  key={item.name}
                  type="button"
                  aria-pressed={index === activeLanguage}
                  onClick={() => selectLanguage(index)}
                >
                  <img
                    src={item.logoSrc || `https://cdn.simpleicons.org/${item.icon}`}
                    alt=""
                    loading="lazy"
                  />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}