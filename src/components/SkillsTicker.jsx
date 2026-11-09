"use client";

import { Code2, Layers } from "lucide-react";

export default function SkillsTicker() {
  const skillsRow1 = [
    { name: "HTML", tag: "Markup" },
    { name: "CSS", tag: "Styling" },
    { name: "JavaScript", tag: "Frontend" },
    { name: "PHP", tag: "Backend" },
    { name: "Laravel", tag: "Framework" },
    { name: "C#", tag: "Language" },
    { name: "ASP.NET", tag: "Framework" },
  ];

  const skillsRow2 = [
    { name: "MongoDB", tag: "NoSQL" },
    { name: "MySQL", tag: "Database" },
    { name: "Firebase", tag: "Cloud DB" },
    { name: "Dart", tag: "Language" },
    { name: "Flutter", tag: "Mobile" },
    { name: "React", tag: "Frontend" },
    { name: "Next.js", tag: "Full Stack" },
  ];

  // Repeat for continuous seamless infinite loop
  const duplicatedRow1 = [...skillsRow1, ...skillsRow1, ...skillsRow1, ...skillsRow1];
  const duplicatedRow2 = [...skillsRow2, ...skillsRow2, ...skillsRow2, ...skillsRow2];

  return (
    <section id="skills" className="relative py-28 bg-pure border-t border-white/10 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-14 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/40 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
          <span>Skills & Technologies</span>
        </div>
        <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-4">
          Technical Arsenal <span className="text-cyan">.</span>
        </h2>
        <p className="max-w-xl text-zinc-400 font-sans text-base sm:text-lg font-light">
          Core languages, frameworks, and database technologies I work with to design and develop modern web solutions.
        </p>
      </div>

      {/* Infinite Horizontal Tickers with Vignette Gradients */}
      <div className="relative w-full flex flex-col gap-6 overflow-hidden">
        {/* Left & Right gradient masks for cinematic fade */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-r from-pure via-pure/90 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-48 bg-gradient-to-l from-pure via-pure/90 to-transparent z-10 pointer-events-none" />

        {/* Ticker Row 1 - Sliding Left */}
        <div className="flex w-max animate-marquee-left hover:[animation-play-state:paused] py-2">
          {duplicatedRow1.map((skill, index) => (
            <div
              key={`row1-${skill.name}-${index}`}
              className="mx-3 flex items-center gap-3 px-6 py-3.5 rounded-full bg-surface/90 border border-white/10 hover:border-cyan hover:bg-surfaceLight transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,242,254,0.35)] cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-cyan group-hover:shadow-[0_0_8px_#00f2fe] transition-all duration-300" />
              <span className="font-display font-bold text-white text-base tracking-wide group-hover:text-cyan transition-colors">
                {skill.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase px-2 py-0.5 rounded bg-black/60 border border-white/5">
                {skill.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Ticker Row 2 - Sliding Right */}
        <div className="flex w-max animate-marquee-right hover:[animation-play-state:paused] py-2">
          {duplicatedRow2.map((skill, index) => (
            <div
              key={`row2-${skill.name}-${index}`}
              className="mx-3 flex items-center gap-3 px-6 py-3.5 rounded-full bg-surface/90 border border-white/10 hover:border-cyan hover:bg-surfaceLight transition-all duration-300 group hover:shadow-[0_0_25px_rgba(0,242,254,0.35)] cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-cyan group-hover:shadow-[0_0_10px_#00f2fe] transition-all duration-300" />
              <span className="font-display font-bold text-white text-base tracking-wide group-hover:text-cyan transition-colors">
                {skill.name}
              </span>
              <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase px-2 py-0.5 rounded bg-black/60 border border-white/5">
                {skill.tag}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Summary Footer bar for Skills */}
      <div className="max-w-4xl mx-auto px-6 mt-14 flex items-center justify-between text-xs font-mono text-zinc-400 border-t border-white/10 pt-6">
        <span className="flex items-center gap-2">
          <Code2 className="w-4 h-4 text-cyan" /> Frontend, Backend & Database Development
        </span>
        <span className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-cyan" /> Scalable Modern Architectures
        </span>
      </div>
    </section>
  );
}
