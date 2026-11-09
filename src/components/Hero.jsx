"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight, Terminal, Sparkles, Code2, Database } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Hero() {
  const containerRef = useRef(null);
  const titleLine1Ref = useRef(null);
  const titleLine2Ref = useRef(null);
  const badgeRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const hudBoxRef = useRef(null);
  const [roleText, setRoleText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    "Full Stack Web Developer",
    "React & Next.js Architect",
    "Enterprise .NET & C# Developer",
    "High-Performance Database Engineer",
  ];

  // Dynamic Typewriter Effect for Hero
  useEffect(() => {
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const typeRole = () => {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        setRoleText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setRoleText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      let typingSpeed = isDeleting ? 40 : 80;

      if (!isDeleting && charIndex === currentRole.length) {
        typingSpeed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setRoleIndex((prev) => (prev + 1) % roles.length);
        typingSpeed = 400;
      }

      timeoutId = setTimeout(typeRole, typingSpeed);
    };

    timeoutId = setTimeout(typeRole, 500);
    return () => clearTimeout(timeoutId);
  }, [roleIndex]);

  // Cinematic GSAP Scroll & Intro Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30, filter: "blur(10px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 1 }
      )
        .fromTo(
          titleLine1Ref.current,
          { opacity: 0, y: 80, skewY: 4 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.2 },
          "-=0.7"
        )
        .fromTo(
          titleLine2Ref.current,
          { opacity: 0, y: 80, skewY: -4 },
          { opacity: 1, y: 0, skewY: 0, duration: 1.2 },
          "-=0.9"
        )
        .fromTo(
          descRef.current,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1 },
          "-=0.8"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.7"
        )
        .fromTo(
          hudBoxRef.current,
          { opacity: 0, scale: 0.9, y: 50 },
          { opacity: 1, scale: 1, y: 0, duration: 1.2 },
          "-=0.8"
        );

      // Scroll parallax depth effect
      gsap.to(hudBoxRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
        y: 120,
        opacity: 0.2,
        scale: 0.95,
      });

      gsap.to([titleLine1Ref.current, titleLine2Ref.current], {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        y: -60,
        opacity: 0.3,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-6 md:px-12 overflow-hidden bg-pure"
    >
      {/* 3D Space & Cyan Ambient Glow Layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan/15 rounded-full blur-[140px] pointer-events-none animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-[30rem] h-[30rem] bg-cyan/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Hero Central Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center">
        {/* Availability Badge */}
        <div
          ref={badgeRef}
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan/30 bg-surface/80 backdrop-blur-md mb-8 shadow-[0_0_20px_rgba(0,242,254,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan shadow-[0_0_10px_#00f2fe]"></span>
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-300">
            Available For Global Roles & Projects
          </span>
        </div>

        {/* Cinematic Headline */}
        <div className="overflow-hidden mb-3">
          <h1
            ref={titleLine1Ref}
            className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-white uppercase leading-[0.9]"
          >
            Engineering
          </h1>
        </div>
        <div className="overflow-hidden mb-6">
          <h1
            ref={titleLine2Ref}
            className="font-display font-extrabold text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan to-white"
          >
            Digital Realities
          </h1>
        </div>

        {/* Dynamic Role Typewriter & Description */}
        <div ref={descRef} className="max-w-2xl mx-auto mb-10 flex flex-col items-center gap-3">
          <div className="font-mono text-cyan text-lg sm:text-xl tracking-wider flex items-center gap-2">
            <Terminal className="w-5 h-5 text-cyan animate-pulse" />
            <span>{roleText}</span>
            <span className="w-2 h-5 bg-cyan animate-pulse inline-block" />
          </div>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed font-sans font-light">
            Architecting responsive, database-driven web platforms with cutting-edge architectures.
            Bridging scalable full-stack engineering with cinematic user experiences.
          </p>
        </div>

        {/* Action CTAs: Minimalist Outline Buttons */}
        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-5 mb-16">
          <Link
            href="#projects"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest font-semibold text-pure bg-cyan hover:bg-white transition-all duration-300 shadow-[0_0_30px_rgba(0,242,254,0.4)] hover:shadow-[0_0_40px_rgba(255,255,255,0.7)] hover:-translate-y-0.5"
          >
            <span>Explore Projects</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>

          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full font-mono text-xs uppercase tracking-widest font-semibold text-white border border-white/20 hover:border-cyan hover:text-cyan bg-pure/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,242,254,0.25)] hover:-translate-y-0.5"
          >
            <span>Get in Touch</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 group-hover:bg-cyan transition-colors" />
          </Link>
        </div>

        {/* 3D Telemetry HUD Card */}
        <div
          ref={hudBoxRef}
          className="w-full max-w-4xl p-6 md:p-8 rounded-2xl glass-panel-cyan border border-cyan/25 shadow-[0_20px_60px_rgba(0,0,0,0.9)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex flex-wrap items-center justify-between gap-6 border-b border-white/10 pb-5 mb-5 text-left">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-cyan shadow-[0_0_10px_#00f2fe]" />
              <span className="font-mono text-xs tracking-widest text-zinc-300 uppercase">
                System Status: Online / Ready for Deployment
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Code2 className="w-4 h-4 text-cyan" /> React & Next.js
              </span>
              <span className="flex items-center gap-1.5">
                <Database className="w-4 h-4 text-cyan" /> SQL & Cloud DB
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-left">
            <div>
              <div className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                04<span className="text-cyan">+</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 mt-1">
                Featured Systems
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                14<span className="text-cyan">+</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 mt-1">
                Core Technologies
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl md:text-4xl text-white tracking-tight">
                02
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 mt-1">
                Engineering Degrees
              </div>
            </div>
            <div>
              <div className="font-display font-bold text-3xl md:text-4xl text-cyan tracking-tight">
                100<span className="text-white">%</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-wider text-zinc-400 mt-1">
                Commitment Rate
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500 font-mono text-[11px] tracking-widest uppercase">
        <span>Scroll to Explore</span>
        <ArrowDown className="w-4 h-4 text-cyan animate-bounce" />
      </div>
    </section>
  );
}

