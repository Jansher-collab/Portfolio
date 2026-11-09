"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { MapPin, Briefcase, Languages, CheckCircle2, GraduationCap } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, x: -40, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );

      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-pure border-t border-white/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-cyan/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/40 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <span>About Me</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Background & Experience <span className="text-cyan">.</span>
          </h2>
        </div>

        {/* Grid layout: Dedicated Image Card + Narrative Bio */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Dedicated Image Section with Clean Card Treatment */}
          <div ref={cardRef} className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-white/15 bg-surface p-3 transition-all duration-500 group-hover:border-cyan group-hover:shadow-[0_0_40px_rgba(0,242,254,0.25)]">
              {/* Corner accent markers */}
              <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-cyan pointer-events-none z-20" />
              <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-cyan pointer-events-none z-20" />
              <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-cyan pointer-events-none z-20" />
              <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-cyan pointer-events-none z-20" />

              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-black">
                <Image
                  src="/profile.png"
                  alt="Jan Sher Khan - Full Stack Developer"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover grayscale contrast-125 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                  priority
                />
                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30 opacity-70 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Bottom Overlay Info Tag */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl glass-panel border border-white/10 z-10 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-bold text-white text-base tracking-wide">
                      Jan Sher Khan
                    </h4>
                    <p className="font-mono text-xs text-cyan tracking-wider">
                      Full Stack Web Developer
                    </p>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-cyan/20 border border-cyan flex items-center justify-center text-cyan">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Narrative & Quick Details */}
          <div ref={textRef} className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white tracking-tight leading-snug">
              Building responsive, high-performance web applications with clean code and modern stacks.
            </h3>

            <div className="space-y-4 text-zinc-300 font-sans text-base sm:text-lg leading-relaxed font-light">
              <p>
                I am a <span className="text-white font-medium">Full Stack Web Developer</span> based in <span className="text-white font-medium">Karachi, Pakistan</span>, with practical experience engineering responsive web applications with <span className="text-cyan font-mono text-sm">React, Next.js, JavaScript, PHP, and MySQL</span>.
              </p>
              <p>
                Currently pursuing a <span className="text-white font-medium">BS in Software Engineering at Indus University</span> alongside an <span className="text-white font-medium">Advanced Software Engineering Diploma at Aptech Learning</span>. I am actively expanding my capabilities into enterprise technologies including <span className="text-cyan font-mono text-sm">SQL Server, C#, and ASP.NET</span>.
              </p>
              <p>
                My focus is on writing clean, well-tested code, structuring efficient database schemas, and delivering intuitive user experiences that scale seamlessly.
              </p>
            </div>

            {/* Structured Info Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl border border-white/10 bg-surface/60 hover:border-cyan/50 hover:bg-surfaceLight transition-all duration-300 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Location
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Karachi, Pakistan
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-surface/60 hover:border-cyan/50 hover:bg-surfaceLight transition-all duration-300 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan flex-shrink-0">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Availability
                  </div>
                  <div className="text-sm font-semibold text-cyan">
                    Open to Opportunities
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-surface/60 hover:border-cyan/50 hover:bg-surfaceLight transition-all duration-300 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan flex-shrink-0">
                  <Languages className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Languages
                  </div>
                  <div className="text-sm font-semibold text-white">
                    English, Urdu
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-surface/60 hover:border-cyan/50 hover:bg-surfaceLight transition-all duration-300 flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-zinc-400">
                    Development Approach
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Clean, Scalable & Impactful
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
