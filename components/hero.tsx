import React from "react"

import { useRef, useCallback } from "react"
import {
  motion,
  useInView,
  useSpring,
  useMotionValue,
} from "framer-motion"
import {
  ArrowRight,
  Code2,
  Layers,
  Zap,
  Terminal,
  Palette,
  Database,
  Cpu,
  Globe,
  Figma,
  Braces,
  FileCode2,
} from "lucide-react"
import Image from "next/image"

const codeSnippets = [
  {
    lines: [
      { tokens: [{ text: "const ", cls: "text-purple-400" }, { text: "design", cls: "text-foreground" }, { text: " = ", cls: "text-purple-400" }, { text: "await", cls: "text-purple-400" }] },
      { tokens: [{ text: "  createArt", cls: "text-blue-400" }, { text: "(", cls: "text-foreground" }, { text: "{", cls: "text-foreground" }] },
      { tokens: [{ text: '    style', cls: "text-foreground" }, { text: ': ', cls: "text-foreground" }, { text: '"premium"', cls: "text-green-400" }, { text: ',', cls: "text-foreground" }] },
      { tokens: [{ text: '    quality', cls: "text-foreground" }, { text: ': ', cls: "text-foreground" }, { text: '"ultra"', cls: "text-green-400" }] },
      { tokens: [{ text: "  }", cls: "text-foreground" }, { text: ");", cls: "text-foreground" }] },
    ],
    top: "6%", left: "2%", rotate: -5, delay: 1.6,
  },
  {
    lines: [
      { tokens: [{ text: "interface ", cls: "text-purple-400" }, { text: "Pixel", cls: "text-yellow-300" }, { text: " {", cls: "text-foreground" }] },
      { tokens: [{ text: "  color", cls: "text-foreground" }, { text: ": ", cls: "text-foreground" }, { text: "HEX", cls: "text-yellow-300" }, { text: ";", cls: "text-foreground" }] },
      { tokens: [{ text: "  glow", cls: "text-foreground" }, { text: ": ", cls: "text-foreground" }, { text: "number", cls: "text-blue-400" }, { text: ";", cls: "text-foreground" }] },
      { tokens: [{ text: "  depth", cls: "text-foreground" }, { text: ": ", cls: "text-foreground" }, { text: "float", cls: "text-blue-400" }, { text: ";", cls: "text-foreground" }] },
      { tokens: [{ text: "}", cls: "text-foreground" }] },
    ],
    top: "12%", right: "2%", rotate: 4, delay: 2.0,
  },
  {
    lines: [
      { tokens: [{ text: "export ", cls: "text-purple-400" }, { text: "async ", cls: "text-purple-400" }, { text: "function", cls: "text-purple-400" }] },
      { tokens: [{ text: "  render", cls: "text-blue-400" }, { text: "(", cls: "text-foreground" }, { text: "canvas", cls: "text-foreground" }, { text: ": ", cls: "text-foreground" }, { text: "GPU", cls: "text-yellow-300" }, { text: ")", cls: "text-foreground" }] },
      { tokens: [{ text: "{", cls: "text-foreground" }] },
      { tokens: [{ text: "  ", cls: "" }, { text: "// magic happens", cls: "text-muted-foreground/60" }] },
      { tokens: [{ text: "  ", cls: "" }, { text: "return ", cls: "text-purple-400" }, { text: "pixels", cls: "text-foreground" }, { text: ";", cls: "text-foreground" }] },
      { tokens: [{ text: "}", cls: "text-foreground" }] },
    ],
    bottom: "16%", left: "3%", rotate: 3, delay: 2.4,
  },
  {
    lines: [
      { tokens: [{ text: "async ", cls: "text-purple-400" }, { text: "deploy", cls: "text-blue-400" }, { text: "() {", cls: "text-foreground" }] },
      { tokens: [{ text: "  ", cls: "" }, { text: "await ", cls: "text-purple-400" }, { text: "build", cls: "text-blue-400" }, { text: "();", cls: "text-foreground" }] },
      { tokens: [{ text: "  ", cls: "" }, { text: "return ", cls: "text-purple-400" }, { text: '"live"', cls: "text-green-400" }, { text: ";", cls: "text-foreground" }] },
      { tokens: [{ text: "}", cls: "text-foreground" }] },
    ],
    bottom: "10%", right: "2%", rotate: -3, delay: 2.8,
  },
]

const floatingIcons = [
  { Icon: Code2, top: "18%", left: "14%", delay: 1.8, size: 18 },
  { Icon: Layers, top: "14%", right: "16%", delay: 2.1, size: 16 },
  { Icon: Zap, bottom: "28%", left: "11%", delay: 2.4, size: 20 },
  { Icon: Terminal, top: "38%", right: "6%", delay: 2.7, size: 15 },
  { Icon: Palette, bottom: "22%", right: "15%", delay: 3.0, size: 18 },
  { Icon: Database, top: "55%", left: "5%", delay: 3.2, size: 14 },
  { Icon: Cpu, top: "30%", left: "6%", delay: 3.4, size: 16 },
  { Icon: Globe, bottom: "35%", right: "10%", delay: 3.6, size: 17 },
  { Icon: Figma, top: "65%", right: "4%", delay: 3.8, size: 14 },
  { Icon: Braces, bottom: "40%", left: "15%", delay: 4.0, size: 15 },
  { Icon: FileCode2, top: "48%", left: "3%", delay: 4.2, size: 16 },
]

const statItems = [
  { value: "150+", label: "Projects Delivered" },
  { value: "99%", label: "Client Satisfaction" },
  { value: "5+", label: "Years of Craft" },
]

function useMagneticEffect() {
  const ref = useRef<HTMLAnchorElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 300, damping: 20 })
  const springY = useSpring(y, { stiffness: 300, damping: 20 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
      const distX = e.clientX - centerX
      const distY = e.clientY - centerY
      x.set(distX * 0.3)
      y.set(distY * 0.3)
    },
    [x, y]
  )

  const handleMouseLeave = useCallback(() => {
    x.set(0)
    y.set(0)
  }, [x, y])

  return { ref, springX, springY, handleMouseMove, handleMouseLeave }
}

const smokeIn = {
  hidden: { opacity: 0, filter: "blur(10px)", transform: "translateY(30px) scale(0.95)" },
  visible: (i: number) => ({
    opacity: 1,
    filter: "blur(0px)",
    transform: "translateY(0px) scale(1)",
    transition: {
      delay: 1.3 + i * 0.2,
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  }),
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.3 })

  const magneticStart = useMagneticEffect()
  const magneticExplore = useMagneticEffect()

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-background" />
        <div
          className="nebula-blob-1 absolute -top-[30%] -left-[20%] w-[90vw] h-[90vw] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, hsl(245 80% 40% / 0.5) 0%, transparent 65%)" }}
        />
        <div
          className="nebula-blob-2 absolute -top-[25%] -right-[15%] w-[80vw] h-[80vw] rounded-full opacity-30"
          style={{ background: "radial-gradient(circle, hsl(265 100% 50% / 0.4) 0%, transparent 60%)" }}
        />
        <div
          className="nebula-blob-3 absolute -bottom-[20%] left-[10%] w-[70vw] h-[70vw] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(20 80% 50% / 0.35) 0%, transparent 65%)" }}
        />
        <div
          className="nebula-blob-4 absolute top-[20%] right-[25%] w-[55vw] h-[55vw] rounded-full opacity-20"
          style={{ background: "radial-gradient(circle, hsl(300 70% 45% / 0.3) 0%, transparent 55%)" }}
        />
        <div
          className="nebula-blob-5 absolute top-[40%] left-[30%] w-[50vw] h-[50vw] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, hsl(220 90% 50% / 0.35) 0%, transparent 60%)" }}
        />
        <div className="absolute inset-0 cyber-grid" />
      </div>

      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={`code-${i}`}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: snippet.delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="float-code absolute hidden lg:block pointer-events-none"
          style={{
            top: snippet.top,
            left: snippet.left,
            right: snippet.right,
            bottom: snippet.bottom,
            rotate: `${snippet.rotate}deg`,
            animationDelay: `${i * 1.5}s`,
          }}
        >
          <div className="glass-card-heavy rounded-xl p-3 xl:p-4 shadow-[0_4px_40px_hsl(265_100%_65%/0.08)]">
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-2 h-2 rounded-full bg-red-400/50" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/40" />
              <div className="w-2 h-2 rounded-full bg-green-400/40" />
            </div>
            <div className="font-mono text-[10px] xl:text-xs leading-relaxed">
              {snippet.lines.map((line, li) => (
                <div key={li}>
                  {line.tokens.map((token, ti) => (
                    <span key={ti} className={token.cls}>{token.text}</span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      ))}

      {floatingIcons.map(({ Icon, top, left, right, bottom, delay, size }, i) => (
        <motion.div
          key={`icon-${i}`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="float-code absolute pointer-events-none"
          style={{
            top, left, right, bottom,
            animationDelay: `${i * 1.8 + 0.5}s`,
            animationDuration: `${6 + i * 0.5}s`,
          }}
        >
          <div className="glass-card p-2 md:p-2.5 rounded-xl">
            <Icon style={{ width: size, height: size }} className="text-primary/50" />
          </div>
        </motion.div>
      ))}

      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-8 md:mb-10"
        >
          <span className="glass-card-heavy inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Digital Art Through Code
          </span>
        </motion.div>

        <div className="relative mb-6 md:mb-8">
          <div className="absolute inset-0 blur-[80px] opacity-25 bg-gradient-to-r from-primary via-accent to-primary pointer-events-none scale-150" />
          <div className="relative brand-glow">
            <Image src="/Logo1.png" alt="Web Shoili Logo" width={500} height={150} priority />
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.0, duration: 0.8 }}
          className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-10 md:mb-12"
        >
          Where raw engineering power meets{" "}
          <span className="text-foreground font-medium">sophisticated artistic design</span>.
          We don{"'"}t just build software {"--"} we craft{" "}
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold">digital masterpieces</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 mb-16 md:mb-20"
        >
          <motion.a
            ref={magneticStart.ref}
            href="#contact"
            style={{ x: magneticStart.springX, y: magneticStart.springY }}
            onMouseMove={magneticStart.handleMouseMove}
            onMouseLeave={magneticStart.handleMouseLeave}
            className="
              magnetic-btn group relative flex items-center gap-2.5 px-9 py-4
              rounded-full text-sm font-bold
              bg-gradient-to-r from-primary via-primary to-accent
              text-primary-foreground
              shadow-[0_0_30px_hsl(265_100%_65%/0.35),0_0_60px_hsl(20_80%_55%/0.12)]
              hover:shadow-[0_0_50px_hsl(265_100%_65%/0.55),0_0_90px_hsl(20_80%_55%/0.2)]
              transition-shadow duration-500
            "
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
          <motion.a
            ref={magneticExplore.ref}
            href="#work"
            style={{ x: magneticExplore.springX, y: magneticExplore.springY }}
            onMouseMove={magneticExplore.handleMouseMove}
            onMouseLeave={magneticExplore.handleMouseLeave}
            className="
              magnetic-btn group relative flex items-center gap-2.5 px-8 py-3.5
              rounded-full text-sm font-medium
              bg-gradient-to-r from-blue-500 via-blue-500 to-green-400
              text-primary-foreground
              shadow-[0_0_30px_hsl(210_100%_50%/0.35),0_0_60px_hsl(140_80%_55%/0.12)]
              hover:shadow-[0_0_50px_hsl(210_100%_50%/0.55),0_0_90px_hsl(140_80%_55%/0.2)]
              transition-shadow duration-500
            "
          >
            Explore Our Work
          </motion.a>
        </motion.div>

        <div className="flex flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-md lg:max-w-lg">
          {statItems.map((stat, i) => (
            <motion.div
              key={stat.label}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={smokeIn}
              className="glass-card-heavy rounded-2xl p-4 text-center w-32 md:w-36 lg:w-40"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-b from-foreground to-foreground/60 bg-clip-text text-transparent tracking-tighter mb-1">
                {stat.value}
              </div>
              <div className="text-[10px] md:text-xs text-muted-foreground tracking-wider uppercase">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />

      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-9 rounded-full border border-white/[0.12] flex items-start justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [1, 0.3, 1], y: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 rounded-full bg-primary"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
