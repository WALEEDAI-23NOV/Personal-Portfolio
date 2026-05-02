import React, { useState, useEffect } from "react";
import { vsCodeLines } from "../data/portfolioData";
import "./VSCodeTyping.css";

/**
 * VSCodeTyping
 * Animates a VS Code window with a typewriter-style effect,
 * revealing lines of code one character at a time.
 */
export default function VSCodeTyping() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine,    setCurrentLine]    = useState(0);
  const [currentChars,   setCurrentChars]   = useState(0);

  useEffect(() => {
    let li = 0;
    let ci = 0;
    let timeout;

    function type() {
      if (li >= vsCodeLines.length) return;

      const plain = vsCodeLines[li].plain;

      if (ci < plain.length) {
        ci++;
        setCurrentLine(li);
        setCurrentChars(ci);
        timeout = setTimeout(type, 28 + Math.random() * 22);
      } else {
        setDisplayedLines((prev) => [...prev, { ...vsCodeLines[li] }]);
        li++;
        ci = 0;
        setCurrentLine(li);
        setCurrentChars(0);
        timeout = setTimeout(type, 80);
      }
    }

    const start = setTimeout(type, 400);
    return () => {
      clearTimeout(start);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="vscode-window">
      {/* Title Bar */}
      <div className="vscode-titlebar">
        <div className="vscode-dots">
          <span className="dot red" />
          <span className="dot yellow" />
          <span className="dot green" />
        </div>
        <span className="vscode-filename-title">life.ts — Waleed Razaq</span>
      </div>

      {/* Tabs */}
      <div className="vscode-tabs">
        <div className="vscode-tab active">
          <span className="tab-icon">⬡</span> life.ts{" "}
          <span className="tab-close">×</span>
        </div>
        <div className="vscode-tab inactive">
          <span className="tab-dot" /> config.json
        </div>
      </div>

      {/* Code Body */}
      <div className="vscode-body">
        {/* Line Numbers */}
        <div className="vscode-gutter">
          {Array.from({ length: vsCodeLines.length }, (_, i) => (
            <span key={i}>{i + 1}</span>
          ))}
        </div>

        {/* Code */}
        <div className="vscode-code">
          {displayedLines.map((line, i) => (
            <span
              key={i}
              className="code-line"
              dangerouslySetInnerHTML={{ __html: line.html }}
            />
          ))}

          {currentLine < vsCodeLines.length && (
            <span className="code-line active-line">
              {vsCodeLines[currentLine]?.plain.substring(0, currentChars)}
              <span className="cursor" />
            </span>
          )}
        </div>
      </div>

      {/* Status Bar */}
      <div className="vscode-statusbar">
        <span>
          <span className="status-ok">✓ 0 errors</span>&nbsp;|&nbsp;
          <span className="status-dot" /> master*
        </span>
        <span>
          Ln 4, Col 18 &nbsp; UTF-8 &nbsp; LF &nbsp;{" "}
          <span className="status-ts">TypeScript</span>
        </span>
      </div>
    </div>
  );
}
