"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowDown, Code2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function HeroVideoScrub() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const heroContentRef = useRef(null);
  const nameRef = useRef(null);
  const subtitleRef = useRef(null);
  const descRef = useRef(null);
  const ctaGroupRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Canvas Frame Scrubber Configuration
    const frameCount = 120;
    const currentFramePath = (index) =>
      `/frames/frame_${String(index).padStart(3, "0")}.jpg`;

    // Preload image frame sequence
    const images = [];
    let loadedImageCount = 0;

    for (let i = 1; i <= frameCount; i++) {
      const img = new Image();
      img.src = currentFramePath(i);
      img.onload = () => {
        loadedImageCount++;
        if (i === 1 || loadedImageCount === 1) {
          render(img);
        }
      };
      images.push(img);
    }

    // High-performance canvas draw function with extra top headroom (show head fully)
    let lastRenderedImage = null;

    const render = (img) => {
      if (!canvas || !ctx || !img) return;

      const cw = canvas.width;
      const ch = canvas.height;
      if (cw === 0 || ch === 0) return;

      const mw = img.naturalWidth || img.width;
      const mh = img.naturalHeight || img.height;
      if (!mw || !mh) return;

      // Full-bleed edge-to-edge cover scaling
      const scale = Math.max(cw / mw, ch / mh);
      const drawWidth = mw * scale;
      const drawHeight = mh * scale;

      // Horizontal center
      const shiftX = (cw - drawWidth) / 2;

      // Vertical framing with extra headroom:
      // Instead of dead-center vertical cropping (which cuts off the top of the head),
      // we apply a top-weighted bias with extra headroom so the person's head and hair are fully visible.
      const extraHeadroom = Math.round(ch * 0.035);
      const shiftY = (ch - drawHeight) * 0.12 + extraHeadroom;

      ctx.clearRect(0, 0, cw, ch);
      ctx.drawImage(img, 0, 0, mw, mh, shiftX, shiftY, drawWidth, drawHeight);
      lastRenderedImage = img;
    };

    // Explicit full-bleed viewport canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      if (lastRenderedImage) {
        render(lastRenderedImage);
      }
    };
    setCanvasDimensions();

    window.addEventListener("resize", setCanvasDimensions);

    // Frame sequence state object for GSAP
    const frameObj = { frame: 1 };
    let lastFrameIndex = -1;

    const ctxAnimation = gsap.context(() => {
      // 1. Dramatic Letter-Assembly Fly-In Animation on Mount
      if (nameRef.current) {
        const letters = nameRef.current.querySelectorAll(".hero-letter");
        gsap.fromTo(
          letters,
          {
            opacity: 0,
            x: () => (Math.random() - 0.5) * 200,
            y: () => (Math.random() - 0.5) * 160 - 30,
            rotation: () => (Math.random() - 0.5) * 70,
            scale: () => 0.3 + Math.random() * 0.5,
            filter: "blur(8px)",
          },
          {
            opacity: 1,
            x: 0,
            y: 0,
            rotation: 0,
            scale: 1,
            filter: "blur(0px)",
            duration: 1.1,
            stagger: {
              amount: 0.6,
              from: "random",
            },
            ease: "power4.out",
            delay: 0.25,
          }
        );
      }

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 0.85, ease: "power2.out" }
        );
      }

      if (descRef.current) {
        gsap.fromTo(
          descRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 1.05, ease: "power2.out" }
        );
      }

      if (ctaGroupRef.current) {
        gsap.fromTo(
          ctaGroupRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8, delay: 1.25, ease: "power2.out" }
        );
      }

      // 2. Scroll-Scrubbed Canvas Timeline
      const scrubTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=6000", // Smooth, normal-speed frame progression
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          scrub: 0.8, // Balanced inertia damping
          onUpdate: (self) => {
            const targetIndex = Math.min(
              frameCount,
              Math.max(1, Math.round(frameObj.frame))
            );

            // Avoid redundant canvas redraws if frame index hasn't changed
            if (targetIndex !== lastFrameIndex) {
              lastFrameIndex = targetIndex;
              const currentImg = images[targetIndex - 1];

              if (currentImg && currentImg.naturalWidth > 0) {
                render(currentImg);
              }
            }
          },
        },
      });

      // Scrub Frame Sequence smoothly across scroll duration
      scrubTl.to(
        frameObj,
        {
          frame: frameCount,
          ease: "none",
          duration: 1,
        },
        0
      );

      // Smooth scroll-tied text layer transitions
      if (subtitleRef.current) {
        scrubTl.fromTo(
          subtitleRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0.85, y: -10, ease: "power1.out", duration: 0.35 },
          0.05
        );
      }

      if (descRef.current) {
        scrubTl.fromTo(
          descRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0.9, y: -14, ease: "power1.out", duration: 0.4 },
          0.1
        );
      }

      if (ctaGroupRef.current) {
        scrubTl.fromTo(
          ctaGroupRef.current,
          { opacity: 1, y: 0 },
          { opacity: 0.95, y: -6, ease: "power2.out", duration: 0.45 },
          0.2
        );
      }
    }, containerRef);

    // Initial render attempt once first frame is ready
    setTimeout(() => {
      if (images[0] && images[0].naturalWidth > 0) {
        render(images[0]);
      }
    }, 200);

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      ctxAnimation.revert();
    };
  }, []);

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative w-screen h-screen overflow-hidden bg-pure text-white flex flex-col justify-between m-0 p-0"
    >
      {/* Explicit full-bleed viewport canvas with zero max-width constraints */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full block m-0 p-0 pointer-events-none opacity-90 brightness-95 contrast-110"
      />

      {/* Lightweight, Non-blocking Atmospheric Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/50 z-10 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-cyan opacity-40 z-10 pointer-events-none" />

      {/* Spacer to guarantee clearance beneath the fixed transparent navbar */}
      <div className="h-20 w-full z-20 pointer-events-none" />

      {/* Center Hero Content with Natural Drop Shadows and Clean Proportions */}
      <div
        ref={heroContentRef}
        className="relative z-20 w-full max-w-5xl mx-auto px-6 md:px-12 my-auto flex flex-col items-center text-center"
      >
        <div className="space-y-4 max-w-4xl">
          {/* Main Headline with Dramatic Letter-Assembly Fly-In Animation */}
          <h1
            ref={nameRef}
            className="font-display font-extrabold text-2xl sm:text-4xl md:text-5xl tracking-tight text-white leading-tight drop-shadow-[0_10px_20px_rgba(0,0,0,0.95)]"
          >
            <span className="inline-block whitespace-nowrap">
              {"Jan".split("").map((c, i) => (
                <span key={`jan-${i}`} className="hero-letter inline-block">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="inline-block whitespace-nowrap">
              {"Sher".split("").map((c, i) => (
                <span key={`sher-${i}`} className="hero-letter inline-block">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="inline-block whitespace-nowrap">
              {"Khan".split("").map((c, i) => (
                <span key={`khan-${i}`} className="hero-letter inline-block">
                  {c}
                </span>
              ))}
            </span>{" "}
            <span className="inline-block whitespace-nowrap text-cyan font-sans font-semibold text-xl sm:text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(0,242,254,0.6)]">
              {"(JSK)".split("").map((c, i) => (
                <span key={`jsk-${i}`} className="hero-letter inline-block">
                  {c}
                </span>
              ))}
            </span>
          </h1>

          <div
            ref={subtitleRef}
            className="inline-flex items-center justify-center gap-2 text-cyan font-mono text-sm sm:text-base md:text-lg tracking-wider drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]"
          >
            <Code2 className="w-4 h-4 sm:w-5 sm:h-5 text-cyan" />
            <span className="font-medium">Full Stack Web Developer & Software Engineer</span>
          </div>

          <p
            ref={descRef}
            className="text-zinc-200 font-sans text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto font-light drop-shadow-[0_4px_14px_rgba(0,0,0,0.9)]"
          >
            Building responsive, database-driven web applications with modern architectures.
            Specializing in <span className="text-white font-medium">React, Next.js, PHP, MySQL</span>, and enterprise <span className="text-white font-medium">.NET & C#</span>.
          </p>
        </div>

        {/* Clean, High-Contrast Action CTAs */}
        <div
          ref={ctaGroupRef}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-bold text-black bg-cyan hover:bg-white transition-all duration-300 shadow-[0_0_25px_rgba(0,242,254,0.5)] hover:shadow-[0_0_35px_rgba(255,255,255,0.8)] hover:-translate-y-0.5"
          >
            <span>View My Work</span>
            <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          <Link
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full font-mono text-xs uppercase tracking-wider font-semibold text-white border border-white/30 hover:border-cyan hover:text-cyan bg-black/40 backdrop-blur-md transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,254,0.3)] hover:-translate-y-0.5"
          >
            <span>Connect With Me</span>
            <span className="w-1.5 h-1.5 rounded-full bg-cyan/70 group-hover:bg-cyan transition-colors" />
          </Link>
        </div>
      </div>

      {/* Bottom Scroll Cue */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 pb-8 flex items-center justify-between text-xs font-mono text-zinc-300 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
        <div className="flex items-center gap-2">
          <ArrowDown className="w-4 h-4 text-cyan animate-bounce" />
          <span className="tracking-wider">Scroll to explore</span>
        </div>
        <span className="hidden sm:inline tracking-wider text-zinc-400">
          Karachi, Pakistan • Available Worldwide
        </span>
      </div>
    </section>
  );
}
