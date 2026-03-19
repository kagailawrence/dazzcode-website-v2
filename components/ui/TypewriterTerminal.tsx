"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  { text: "// Initializing Dazzcode Protocol", color: "text-emerald-500" },
  { text: "const engine = await init({", color: "text-white" },
  { text: "  scale: 'institutional',", color: "text-white" },
  { text: "  security: 'soc2_ready',", color: "text-white" },
  { text: "  performance: 'ultra_low_latency'", color: "text-white" },
  { text: "});", color: "text-white" },
];

export function TypewriterTerminal() {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));
  
  useEffect(() => {
    if (currentLineIndex >= codeLines.length) {
      // Pause at the end before looping
      const timeout = setTimeout(() => {
        setCurrentLineIndex(0);
        setDisplayedLines([]);
        count.set(0);
      }, 3000);
      return () => clearTimeout(timeout);
    }

    const controls = animate(count, codeLines[currentLineIndex].text.length, {
      duration: codeLines[currentLineIndex].text.length * 0.05,
      ease: "linear",
      onUpdate: (latest) => {
        const charCount = Math.round(latest);
        const currentText = codeLines[currentLineIndex].text.slice(0, charCount);
        setDisplayedLines((prev) => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentText;
          return newLines;
        });
      },
      onComplete: () => {
        setTimeout(() => {
          setCurrentLineIndex((prev) => prev + 1);
          count.set(0);
        }, 300);
      },
    });

    return controls.stop;
  }, [currentLineIndex, count]);

  return (
    <div className="font-mono text-xs md:text-sm leading-relaxed min-h-[160px]">
      <div className="flex gap-2 mb-6">
        <div className="w-3 h-3 rounded-full bg-red-500/20" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/20" />
        <div className="w-3 h-3 rounded-full bg-green-500/20" />
      </div>
      
      {displayedLines.map((line, i) => {
        // Simple manual highlighting for the specific snippet
        const parts = line.split(/(\s+|'[^']*'|[{}();,]|const|await)/g);
        return (
          <div key={i} className={`${codeLines[i].color} whitespace-pre`}>
            {parts.map((part, j) => {
              if (part === "const" || part === "await") {
                return <span key={j} className="text-emerald-500">{part}</span>;
              }
              if (part.startsWith("'") && part.endsWith("'")) {
                return <span key={j} className="text-emerald-500">{part}</span>;
              }
              if (["{", "}", "(", ")", ";", ","].includes(part)) {
                return <span key={j} className="text-white/40">{part}</span>;
              }
              return <span key={j}>{part}</span>;
            })}
          </div>
        );
      })}
      
      {currentLineIndex < codeLines.length && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
          className="inline-block w-2 h-4 bg-emerald-500 align-middle ml-1"
        />
      )}
      
      {currentLineIndex === codeLines.length && (
        <p className="text-emerald-500 mt-4 animate-pulse">_ Sequence complete. System operational.</p>
      )}
    </div>
  );
}
