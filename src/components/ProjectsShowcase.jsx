"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, Activity, Sparkles, Zap, Boxes } from "lucide-react";
import GithubIcon from "@/components/icons/GithubIcon";

export default function ProjectsShowcase() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: "lifelink",
      title: "LifeLink",
      category: "react",
      subtitle: "Emergency Medical Transport Platform",
      description:
        "Emergency medical transport platform with a fully responsive UI. Built for fast and reliable ambulance coordination and immediate medical dispatch.",
      tags: ["ReactJS", "Responsive UI", "Medical Dispatch", "Emergency Services"],
      link: "https://jansher-collab.github.io/lifelink/",
      linkType: "Live Site",
      icon: Activity,
      badge: "React Application",
      color: "from-cyan/20 to-blue-500/10",
    },
    {
      id: "homestyler",
      title: "HomeStyler",
      category: "react",
      subtitle: "Interior Design Showcase & Studio",
      description:
        "Interior design showcase website with an elegant, modern UI. Displays curated design collections, architectural plans, and aesthetic room transformations.",
      tags: ["ReactJS", "UI/UX Architecture", "Showcase Design", "Modern Aesthetics"],
      link: "https://jansher-collab.github.io/Home-Styler/",
      linkType: "Live Site",
      icon: Sparkles,
      badge: "Design Showcase",
      color: "from-purple-500/20 to-cyan/10",
    },
    {
      id: "prime-fitness",
      title: "Prime Fitness",
      category: "web",
      subtitle: "High-Energy Fitness & Workout Portal",
      description:
        "Fitness platform featuring comprehensive workout plans, responsive dynamic layouts, and an energetic, high-contrast design crafted for athletes and gym enthusiasts.",
      tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Fitness Engine"],
      link: "https://jansher-collab.github.io/Prime-Fitness-/",
      linkType: "Live Site",
      icon: Zap,
      badge: "Web Application",
      color: "from-amber-500/15 to-cyan/15",
    },
    {
      id: "courier-management",
      title: "Courier Management System",
      category: "fullstack",
      subtitle: "Full-Stack Logistics & Tracking Engine",
      description:
        "Full-stack courier tracking system featuring consignment booking, live status updates, database persistence, and comprehensive administrative portal controls.",
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Relational Database"],
      link: "https://github.com/Jansher-collab/Courier-Management",
      linkType: "GitHub Repo",
      icon: Boxes,
      badge: "Full-Stack System",
      color: "from-emerald-500/20 to-cyan/15",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      className="relative py-28 md:py-36 px-6 md:px-12 bg-pure border-t border-white/10 overflow-hidden"
    >
      {/* Background radial cyan atmosphere */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-cyan/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan/40 bg-cyan/5 text-cyan text-xs font-mono tracking-widest uppercase mb-4 shadow-[0_0_15px_rgba(0,242,254,0.15)]">
              <span>Portfolio</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Featured Projects <span className="text-cyan">.</span>
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full border border-white/10 bg-surface/80 backdrop-blur-md">
            {[
              { label: "All Projects", val: "all" },
              { label: "ReactJS", val: "react" },
              { label: "Full Stack", val: "fullstack" },
              { label: "Web Core", val: "web" },
            ].map((f) => (
              <button
                key={f.val}
                onClick={() => setActiveFilter(f.val)}
                className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeFilter === f.val
                    ? "bg-cyan text-black font-bold shadow-[0_0_15px_rgba(0,242,254,0.5)]"
                    : "text-zinc-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Project Cards Grid with Moving Hover Glow & Tech Wireframe */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => {
            const IconComponent = project.icon;
            const isGithub = project.linkType === "GitHub Repo";

            return (
              <div
                key={project.id}
                className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-surface p-7 sm:p-9 transition-all duration-500 hover:border-cyan hover:shadow-[0_0_40px_rgba(0,242,254,0.25)] hover:-translate-y-1 overflow-hidden"
              >
                {/* Subtle gradient wash */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
                />

                {/* Top Category Badge & Icon Row */}
                <div>
                  <div className="flex items-center justify-between gap-4 mb-6 relative z-10">
                    <span className="font-mono text-xs tracking-wider text-cyan uppercase font-semibold">
                      {project.badge}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-black/60 border border-white/10 group-hover:border-cyan group-hover:bg-cyan/10 transition-colors flex items-center justify-center text-zinc-300 group-hover:text-cyan shadow-inner">
                      <IconComponent className="w-5 h-5 transition-transform duration-500 group-hover:scale-110" />
                    </div>
                  </div>

                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-white tracking-tight mb-2 group-hover:text-cyan transition-colors relative z-10">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-zinc-400 uppercase tracking-wider mb-4 relative z-10">
                    {project.subtitle}
                  </p>

                  <p className="text-zinc-300 font-sans text-sm sm:text-base leading-relaxed mb-6 font-light relative z-10">
                    {project.description}
                  </p>
                </div>

                {/* Bottom Tags & Link Button */}
                <div className="relative z-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-5">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono tracking-wider bg-black/80 border border-white/10 text-zinc-400 group-hover:border-cyan/30 group-hover:text-zinc-200 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold text-white bg-white/5 border border-white/20 group-hover:border-cyan group-hover:bg-cyan group-hover:text-black transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,242,254,0.5)] self-start sm:self-auto"
                  >
                    <span>{project.linkType}</span>
                    {isGithub ? (
                      <GithubIcon className="w-3.5 h-3.5" />
                    ) : (
                      <ExternalLink className="w-3.5 h-3.5" />
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
