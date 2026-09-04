"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, Briefcase, Mail, FileText, Send, Check } from "lucide-react";
import { GlassPanel } from "@/components/ui/GlassPanel";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlowButton } from "@/components/ui/GlowButton";
import { profile, socials } from "@/data/portfolio";

const CONTACT_LINKS = [
  { id: "email", label: "Email", value: profile.email, href: socials.email, icon: Mail },
  { id: "linkedin", label: "LinkedIn", value: "Connect", href: socials.linkedin, icon: Briefcase },
  { id: "github", label: "GitHub", value: `@${profile.github}`, href: socials.github, icon: Terminal },
  { id: "resume", label: "Resume", value: "Download", href: socials.resume, icon: FileText },
];

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "a visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `${socials.email}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <SectionHeading
        eyebrow="MISSION COMPLETE"
        title="Get In Touch"
        description="Reaching the end of the page means you've read this far — might as well say hello."
        align="center"
      />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-5">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-1">
          {CONTACT_LINKS.map((link, i) => (
            <motion.a
              key={link.id}
              href={link.href}
              target={link.id === "email" ? undefined : "_blank"}
              rel={link.id === "email" ? undefined : "noopener noreferrer"}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="block"
            >
              <GlassPanel
                interactive
                accent="silver"
                className="flex items-center gap-4 p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[2px] border border-accent-silver/30 bg-accent-silver/[0.06] text-accent-silver">
                  <link.icon size={18} />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    {link.label}
                  </p>
                  <p className="truncate text-sm font-medium text-text">{link.value}</p>
                </div>
              </GlassPanel>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="lg:col-span-3"
        >
          <GlassPanel accent="bright" className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus-visible:border-accent-silver"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.2em] text-muted">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus-visible:border-accent-silver"
                    placeholder="you@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full resize-none rounded-[2px] border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm text-text placeholder:text-muted/60 focus-visible:border-accent-silver"
                  placeholder="What are you building?"
                />
              </div>
              <GlowButton type="submit" variant="primary" className="self-start">
                {status === "sent" ? (
                  <>
                    <Check size={16} aria-hidden /> Message ready
                  </>
                ) : (
                  <>
                    <Send size={16} aria-hidden /> Send Message
                  </>
                )}
              </GlowButton>
              {status === "sent" && (
                <p className="font-mono text-xs text-white">
                  Your email client should have opened with this message pre-filled.
                </p>
              )}
            </form>
          </GlassPanel>
        </motion.div>
      </div>
    </section>
  );
}
