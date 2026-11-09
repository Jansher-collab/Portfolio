"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 py-5 bg-transparent transition-all">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full flex items-center justify-between gap-6">
          {/* Brand Logo & Name */}
          <Link
            href="#home"
            className="flex-shrink-0 flex items-center gap-3.5 group focus:outline-none"
            aria-label="Jan Sher Khan Home"
          >
            <div className="relative w-10 h-10 rounded-full p-[2px] transition-all duration-300 group-hover:scale-105 flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan via-white/50 to-cyan opacity-40 group-hover:opacity-100 group-hover:shadow-[0_0_20px_#00f2fe] transition-all duration-300 animate-pulse-glow" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-white/20 bg-black">
                <Image
                  src="/profile1.png"
                  alt="Jan Sher Khan"
                  width={40}
                  height={40}
                  priority
                  className="w-full h-full object-cover grayscale contrast-125 transition-transform duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base md:text-lg tracking-tight text-white group-hover:text-cyan transition-colors whitespace-nowrap">
                Jan Sher Khan<span className="text-cyan">.</span>
              </span>
              <span className="text-[11px] font-mono tracking-wider text-zinc-400 uppercase hidden sm:block whitespace-nowrap">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links & Action Button */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10 flex-shrink-0">
            <nav>
              <ul className="flex items-center gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <li key={link.name} className="flex-shrink-0">
                    <Link
                      href={link.href}
                      className="relative text-xs uppercase tracking-wider font-mono text-zinc-300 hover:text-white transition-colors py-1 group whitespace-nowrap"
                    >
                      <span>{link.name}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-cyan transition-all duration-300 group-hover:w-full group-hover:shadow-[0_0_8px_#00f2fe]" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <Link
              href="#contact"
              className="flex-shrink-0 whitespace-nowrap group relative inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono font-semibold tracking-wider text-black bg-cyan hover:bg-white transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,242,254,0.6)]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex-shrink-0 p-2 rounded-lg border border-white/10 text-zinc-300 hover:text-cyan hover:border-cyan transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-pure/95 backdrop-blur-2xl transition-all duration-500 md:hidden flex flex-col justify-center px-8 ${
          mobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-display font-bold text-3xl tracking-tight text-zinc-300 hover:text-cyan transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center justify-center gap-2 py-3.5 rounded-full text-sm font-mono font-bold tracking-wider text-black bg-cyan shadow-[0_0_20px_rgba(0,242,254,0.5)]"
            >
              <span>GET IN TOUCH</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
