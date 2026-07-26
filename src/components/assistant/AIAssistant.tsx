"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, Send, X } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { answerQuery } from "@/lib/assistant";
import { assistantKnowledge } from "@/data/portfolio";

type Message = { role: "assistant" | "user"; content: string };

export function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: assistantKnowledge.greeting },
  ]);
  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  useEffect(() => {
    function onKeydown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, []);

  function send(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;
    setMessages((m) => [...m, { role: "user", content: trimmed }]);
    setInput("");
    window.setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: answerQuery(trimmed) }]);
    }, 350);
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    send(input);
  }

  return (
    <div className="fixed bottom-5 right-4 z-40 sm:bottom-6 sm:right-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="mb-3 w-[min(92vw,380px)]"
            role="dialog"
            aria-modal="false"
            aria-label="Portfolio assistant"
          >
            <GlassPanel accent="blue" className="flex h-[26rem] flex-col overflow-hidden p-0">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse-glow rounded-full bg-accent-green" aria-hidden />
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-text">
                    Portfolio Assistant
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close assistant"
                  className="text-muted transition-colors hover:text-text"
                >
                  <X size={16} />
                </button>
              </div>

              <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
                {messages.map((m, i) => (
                  <div
                    key={i}
                    className={`max-w-[85%] rounded-[2px] px-3 py-2 text-sm leading-relaxed ${
                      m.role === "assistant"
                        ? "border border-accent-blue/20 bg-accent-blue/[0.06] text-text"
                        : "ml-auto border border-white/10 bg-white/[0.04] text-text"
                    }`}
                  >
                    {m.content}
                  </div>
                ))}
              </div>

              {messages.length <= 1 && (
                <div className="flex flex-wrap gap-2 px-4 pb-3">
                  {assistantKnowledge.suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => send(s)}
                      className="rounded-full border border-white/10 px-3 py-1.5 font-mono text-[11px] text-muted transition-colors hover:border-accent-blue/50 hover:text-accent-blue"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/[0.06] p-3">
                <label htmlFor="assistant-input" className="sr-only">
                  Ask the assistant
                </label>
                <input
                  id="assistant-input"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask something..."
                  className="flex-1 rounded-[2px] border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-text placeholder:text-muted/60 focus-visible:border-accent-blue"
                />
                <button
                  type="submit"
                  aria-label="Send"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[2px] border border-accent-blue/40 bg-accent-blue/10 text-accent-blue transition-colors hover:bg-accent-blue/20"
                >
                  <Send size={15} />
                </button>
              </form>
            </GlassPanel>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        onClick={() => setOpen((v) => !v)}
        whileTap={{ scale: 0.94 }}
        aria-expanded={open}
        aria-label={open ? "Close portfolio assistant" : "Open portfolio assistant"}
        className="flex h-14 w-14 items-center justify-center rounded-full border border-accent-blue/50 bg-surface/90 text-accent-blue shadow-[0_0_30px_-6px_rgba(0,229,255,0.5)] backdrop-blur-md transition-colors hover:bg-surface"
      >
        {open ? <X size={22} /> : <Bot size={22} />}
      </motion.button>
    </div>
  );
}
