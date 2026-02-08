"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Code2, Layers, Zap, Terminal, Palette, Database } from "lucide-react"

const codeSnippets = [
  {
    code: `const design = await\n  createArt({\n    style: "premium",\n    quality: "ultra"\n  });`,
    top: "8%",
    left: "3%",
    rotate: -6,
    delay: 1.8,
    size: "text-[10px] md:text-xs",
  },
  {
    code: `interface Pixel {\n  color: HEX;\n  glow: number;\n  depth: float;\n}`,
    top: "15%",
    right: "4%",
    rotate: 4,
    delay: 2.2,
    size: "text-[10px] md:text-xs",
  },
  {
    code: `export function\n  render(\n    canvas: GPU\n  ) {\n  // magic here\n}`,
    bottom: "18%",
    left: "5%",
    rotate: 3,
    delay: 2.6,
    size: "text-[10px] md:text-xs",
  },
  {
    code: `async deploy() {\n  await build();\n  return "live";\n}`,
    bottom: "12%",
    right: "3%",
    rotate: -3,
    delay: 3.0,
    size: "text-[10px] md:text-xs",
  },
]

const floatingIcons = [
  { Icon: Code2, top: "25%", left: "12%", delay: 2.0, size: 20 },
  { Icon: Layers, top: "20%", right: "14%", delay: 2.3, size: 18 },
  { Icon: Zap, bottom: "30%", left: "10%", delay: 2.5, size: 22 },
  { Icon: Terminal, top: "40%", right: "8%", delay: 2.8, size: 16 },
  { Icon: Palette, bottom: "25%", right: "18%", delay: 3.1, size: 20 },
  { Icon: Database, top: "60%", left: "6%", delay: 3.3, size: 16 },
]

const statItems = [
  { value: "150+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Craft" },
]

function GlowingLetter({ letter, index, total }: { letter: string; index: number; total: number }) {
  const delay = 0.8 + index * 0.04
  return (
    <motion.span
      initial={{ y: 80, opacity: 0, filter: "blur(10px)" }}
      animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      transition={{
        delay,
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Nebula Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Deep base */}
        <div className="absolute inset-0 bg-background" />

        {/* Gradient blobs */}
        <div
          className="nebula-blob-1 absolute -top-1/4 -left-1/4 w-[80vw] h-[80vw] rounded-full opacity-30"
          style={{
            background: "radial-gradient(circle, hsl(270 100% 50% / 0.4) 0%, transparent 70%)",
          }}
        />
        <div
          className="nebula-blob-2 absolute -top-1/3 -right-1/4 w-[70vw] h-[70vw] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, hsl(220 90% 50% / 0.35) 0%, transparent 65%)",
          }}
        />
        <div
          className="nebula-blob-3 absolute -bottom-1/4 left-1/4 w-[60vw] h-[60vw] rounded-full opacity-25"
          style={{
            background: "radial-gradient(circle, hsl(320 100% 50% / 0.3) 0%, transparent 70%)",
          }}
        />
        <div
          className="nebula-blob-4 absolute top-1/3 right-1/3 w-[50vw] h-[50vw] rounded-full opacity-20"
          style={{
            background: "radial-gradient(circle, hsl(280 80% 60% / 0.3) 0%, transparent 60%)",
          }}
        />

        {/* Subtle grain overlay */}
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }} />

        {/* Cyber grid */}
        <div className="absolute inset-0 cyber-grid" />
      </div>

      {/* Floating Code Snippets */}
      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: snippet.delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="float-code absolute hidden md:block pointer-events-none"
          style={{
            top: snippet.top,
            left: snippet.left,
            right: snippet.right,
            bottom: snippet.bottom,
            rotate: `${snippet.rotate}deg`,
            animationDelay: `${i * 1.5}s`,
          }}
        >
          <div className="relative rounded-xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md p-3 md:p-4 shadow-[0_4px_30px_hsl(270_100%_65%/0.08)]">
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-2 h-2 rounded-full bg-accent/60" />
              <div className="w-2 h-2 rounded-full bg-primary/40" />
              <div className="w-2 h-2 rounded-full bg-muted-foreground/30" />
            </div>
            <pre className={`${snippet.size} font-mono text-primary/70 leading-relaxed whitespace-pre`}>
              {snippet.code}
            </pre>
          </div>
        </motion.div>
      ))}

      {/* Floating Icons */}
      {floatingIcons.map(({ Icon, top, left, right, bottom, delay, size }, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="float-code absolute pointer-events-none"
          style={{
            top, left, right, bottom,
            animationDelay: `${i * 2 + 1}s`,
            animationDuration: `${7 + i}s`,
          }}
        >
          <div className="p-2.5 md:p-3 rounded-xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-sm">
            <Icon
              style={{ width: size, height: size }}
              className="text-primary/50"
            />
          </div>
        </motion.div>
      ))}

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-6xl mx-auto">
        {/* Tagline Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/[0.08] bg-white/[0.04] backdrop-blur-md text-xs font-medium tracking-widest uppercase text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Digital Art Through Code
          </span>
        </motion.div>

        {/* Main Title */}
        <h1 className="relative mb-6 md:mb-8">
          {/* Glow behind text */}
          <div className="absolute inset-0 blur-3xl opacity-20 bg-gradient-to-r from-primary via-accent to-primary pointer-events-none" />

          <div className="relative">
            {/* WEB */}
            <div className="overflow-hidden">
              <div className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.85] tracking-[-0.04em] text-foreground">
                {isInView && "WEB".split("").map((l, i) => (
                  <GlowingLetter key={`web-${i}`} letter={l} index={i} total={3} />
                ))}
              </div>
            </div>

            {/* ShoiLi */}
            <div className="overflow-hidden -mt-2 md:-mt-4">
              <div className="text-[clamp(3.5rem,12vw,10rem)] font-black leading-[0.85] tracking-[-0.04em] glow-text bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                {isInView && "ShoiLi".split("").map((l, i) => (
                  <GlowingLetter key={`shoili-${i}`} letter={l} index={i + 4} total={6} />
                ))}
              </div>
            </div>
          </div>
        </h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-xl leading-relaxed mb-10 md:mb-12"
        >
          Where raw engineering power meets{" "}
          <span className="text-foreground font-medium">sophisticated artistic design</span>.
          We don{"'"}t just build software {"--"} we craft digital masterpieces.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 md:mb-20"
        >
          <a
            href="#contact"
            className="
              group relative flex items-center gap-2.5 px-8 py-3.5
              rounded-full text-sm font-semibold
              bg-gradient-to-r from-primary to-accent
              text-primary-foreground
              shadow-[0_0_30px_hsl(270_100%_65%/0.3),0_0_60px_hsl(320_100%_60%/0.15)]
              hover:shadow-[0_0_40px_hsl(270_100%_65%/0.5),0_0_80px_hsl(320_100%_60%/0.25)]
              transition-all duration-500
            "
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a
            href="#work"
            className="
              flex items-center gap-2.5 px-8 py-3.5
              rounded-full text-sm font-medium
              border border-white/[0.1] bg-white/[0.03] backdrop-blur-md
              text-foreground
              hover:bg-white/[0.06] hover:border-white/[0.15]
              transition-all duration-300
            "
          >
            Explore Our Work
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 2.2, duration: 0.8 }}
          className="flex items-center gap-6 md:gap-12"
        >
          {statItems.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-6 md:gap-12">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase mt-1">
                  {stat.label}
                </div>
              </div>
              {i < statItems.length - 1 && (
                <div className="w-px h-8 bg-white/[0.08]" />
              )}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2.8, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/[0.15] flex items-start justify-center pt-1.5"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 4, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
