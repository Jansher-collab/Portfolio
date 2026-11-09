"use client";

import Link from "next/link";
import { ArrowUp, Mail, MessageCircle, Heart } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="relative bg-black border-t border-white/10 py-12 px-6 md:px-12 text-zinc-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-sm">
          {/* Brand & Copyright */}
          <div className="flex flex-col sm:flex-row items-center gap-2 font-mono text-xs">
            <span className="text-white font-bold tracking-wider">
              JAN SHER KHAN
            </span>
            <span className="hidden sm:inline text-zinc-600">•</span>
            <span>&copy; {new Date().getFullYear()} All Rights Reserved.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="mailto:jansherkhan385@gmail.com"
              className="text-zinc-400 hover:text-cyan transition-colors"
              aria-label="Email Jan Sher Khan"
            >
              <Mail className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/923272007787"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan transition-colors"
              aria-label="WhatsApp Jan Sher Khan"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/jansherkhan385"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-cyan transition-colors"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="ml-4 p-2 rounded-full border border-white/10 hover:border-cyan hover:text-cyan transition-colors flex items-center justify-center"
              aria-label="Back to Top"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Quick Action Button */}
      <a
        href="https://wa.me/923272007787"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Direct WhatsApp Message"
        className="fixed bottom-7 right-7 z-40 w-14 h-14 rounded-full bg-cyan text-black flex items-center justify-center shadow-[0_0_25px_rgba(0,242,254,0.6)] hover:shadow-[0_0_40px_rgba(0,242,254,0.9)] hover:scale-110 transition-all duration-300 group"
      >
        <span className="absolute inset-0 rounded-full bg-cyan animate-ping opacity-25 pointer-events-none" />
        <MessageCircle className="w-7 h-7 fill-black group-hover:scale-110 transition-transform" />
      </a>
    </>
  );
}
