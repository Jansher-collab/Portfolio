"use client";

import { GraduationCap, Award, Calendar, CheckCircle2 } from "lucide-react";

export default function Education() {
  const educationItems = [
    {
      degree: "BS Software Engineering",
      institution: "Indus University, Karachi",
      period: "2024 – Present",
      type: "Bachelor's Degree",
      description:
        "Rigorous foundation in computer science principles, data structures, algorithms, object-oriented programming, and modern software design patterns.",
      highlights: [
        "Software Engineering & Architecture",
        "Data Structures & Algorithms",
        "Full-Stack Web Development",
      ],
      icon: GraduationCap,
    },
    {
      degree: "Diploma in Advanced Software Engineering",
      institution: "Aptech Learning, Karachi",
      period: "2024 – Present",
      type: "Professional Engineering Diploma",
      description:
        "Hands-on program covering modern full-stack web development, enterprise technologies, and database design with C#, ASP.NET, PHP, and SQL Server.",
      highlights: [
        "C# & ASP.NET Core Development",
        "Database Architecture (SQL Server & MySQL)",
        "Modern Frontend Development",
      ],
      icon: Award,
    },
  ];

  return (
    <section id="education" className="relative py-28 md:py-36 px-6 md:px-12 bg-pure border-t border-white/10 overflow-hidden">
      {/* Background cyan gradient accent */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-cyan/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-start mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/40 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
            <span>Academic Path</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Education & Qualifications <span className="text-cyan">.</span>
          </h2>
        </div>

        {/* Minimal High-Contrast Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {educationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-surface p-8 sm:p-10 transition-all duration-500 hover:border-cyan hover:shadow-[0_0_35px_rgba(0,242,254,0.2)] hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono tracking-wider bg-cyan/10 text-cyan border border-cyan/30">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.period}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-black border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-cyan group-hover:border-cyan transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl text-white tracking-tight mb-2 group-hover:text-cyan transition-colors">
                    {item.degree}
                  </h3>
                  <p className="font-mono text-sm text-zinc-400 uppercase tracking-wider mb-4">
                    {item.institution}
                  </p>
                  <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10 space-y-2">
                  <span className="font-mono text-[11px] uppercase tracking-widest text-zinc-400 block mb-2">
                    Key Areas of Study:
                  </span>
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-mono text-zinc-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_6px_#00f2fe]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
