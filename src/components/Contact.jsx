"use client";

import { useState } from "react";
import { Mail, MessageCircle, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("jansherkhan385@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-6 md:px-12 bg-pure border-t border-white/10 overflow-hidden">
      {/* Background cyan nebula glow */}
      <div className="absolute bottom-0 right-1/4 w-[36rem] h-[36rem] bg-cyan/15 rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/40 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-6xl text-white tracking-tight mb-4">
            Let's Work Together <span className="text-cyan">.</span>
          </h2>
          <p className="max-w-xl text-zinc-400 font-sans text-base sm:text-lg font-light">
            I am open to full-time software engineering roles, contracts, and freelance projects.
            Feel free to reach out directly through any channel below.
          </p>
        </div>

        {/* Contact Channels Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {/* Email Direct */}
          <div className="group rounded-2xl border border-white/10 bg-surface p-8 transition-all duration-300 hover:border-cyan hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mb-6">
                <Mail className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                Email
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1 mb-2 break-all">
                jansherkhan385@gmail.com
              </h3>
              <p className="text-zinc-400 text-sm font-light mb-6">
                Direct inbox access with quick responses.
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-white/10">
              <a
                href="mailto:jansherkhan385@gmail.com"
                className="flex-1 inline-flex items-center justify-center gap-2 py-3 rounded-xl bg-cyan text-black font-mono text-xs uppercase font-bold tracking-wider hover:bg-white transition-colors shadow-[0_0_15px_rgba(0,242,254,0.4)]"
              >
                <span>Compose</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                onClick={copyEmail}
                className="p-3 rounded-xl border border-white/10 hover:border-cyan hover:text-cyan text-zinc-300 transition-colors"
                title="Copy Email Address"
                aria-label="Copy Email Address"
              >
                {copied ? <Check className="w-4 h-4 text-cyan" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* WhatsApp Direct */}
          <div className="group rounded-2xl border border-white/10 bg-surface p-8 transition-all duration-300 hover:border-cyan hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mb-6">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                WhatsApp
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">
                +92 327 2007787
              </h3>
              <p className="text-zinc-400 text-sm font-light mb-6">
                Available for fast messages, calls, and project inquiries.
              </p>
            </div>

            <div className="pt-4 border-t border-white/10">
              <a
                href="https://wa.me/923272007787"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl border border-white/20 bg-pure text-white font-mono text-xs uppercase font-semibold tracking-wider hover:border-cyan hover:text-cyan transition-all duration-300"
              >
                <span>Chat on WhatsApp</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* GitHub Repositories */}
          <div className="group rounded-2xl border border-white/10 bg-surface p-8 transition-all duration-300 hover:border-cyan hover:shadow-[0_0_30px_rgba(0,242,254,0.25)] flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan mb-6">
                <GithubIcon className="w-6 h-6" />
              </div>
              <span className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                GitHub
              </span>
              <h3 className="font-display font-bold text-xl text-white mt-1 mb-2">
                @jansherkhan385
              </h3>
              <p className="text-zinc-400 text-sm font-light mb-6">
                Browse code repositories, commits, and open-source contributions.
              </p>
            </div>

            <div className="flex flex-col gap-2 pt-4 border-t border-white/10">
              <a
                href="https://github.com/jansherkhan385"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg border border-white/10 text-xs font-mono text-zinc-300 hover:border-cyan hover:text-cyan transition-colors"
              >
                <span>github.com/jansherkhan385</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://github.com/Jansher-collab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-lg border border-white/10 text-xs font-mono text-zinc-300 hover:border-cyan hover:text-cyan transition-colors"
              >
                <span>github.com/Jansher-collab</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Global Location & Availability Banner */}
        <div className="p-6 md:p-8 rounded-2xl glass-panel border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-display font-bold text-white text-base">
                Karachi, Pakistan (UTC+5)
              </h4>
              <p className="font-mono text-xs text-zinc-400">
                Comfortable working across global asynchronous workflows and remote teams.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse shadow-[0_0_8px_#00f2fe]" />
            <span className="font-mono text-xs text-zinc-300 tracking-wider uppercase">
              Status: Available for Opportunities
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
