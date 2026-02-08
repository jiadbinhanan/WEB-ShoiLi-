"use client"

import { useEffect, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight, ArrowDown } from "lucide-react"

function AnimatedLetter({
  letter,
  delay,
}: { letter: string; delay: number }) {
  return (
    <motion.span
      initial={{ y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        delay,
        duration: 0.8,
        ease: [0.33, 1, 0.68, 1],
      }}
      className="inline-block"
    >
      {letter === " " ? "\u00A0" : letter}
    </motion.span>
  )
}

function StaggeredText({
  text,
  className,
  baseDelay = 0,
}: { text: string; className?: string; baseDelay?: number }) {
  return (
    <span className={`overflow-hidden inline-flex flex-wrap ${className || ""}`}>
      {text.split("").map((letter, i) => (
        <AnimatedLetter
          key={`${letter}-${i}`}
          letter={letter}
          delay={baseDelay + i * 0.035}
        />
      ))}
    </span>
  )
}

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true })

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24 pb-12 max-w-[1800px] mx-auto"
    >
      {/* Background subtle grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
        backgroundSize: "80px 80px",
      }} />

      {/* Top Tag */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="relative mb-8 lg:mb-12"
      >
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border text-xs font-medium tracking-widest uppercase text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Digital Artisans
        </span>
      </motion.div>

      {/* Main Headline */}
      <div className="relative mb-8 lg:mb-12">
        <h1 className="text-[clamp(2.5rem,8vw,9rem)] font-bold leading-[0.9] tracking-[-0.04em] text-foreground">
          {isInView && (
            <>
              <div className="overflow-hidden">
                <StaggeredText text="We create" baseDelay={0.3} />
              </div>
              <div className="overflow-hidden">
                <StaggeredText text="digital art" baseDelay={0.6} />
              </div>
              <div className="overflow-hidden flex items-baseline gap-4 flex-wrap">
                <StaggeredText text="through" baseDelay={0.9} />
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.4, duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                  className="text-accent italic font-light"
                >
                  code.
                </motion.span>
              </div>
            </>
          )}
        </h1>
      </div>

      {/* Subtext + CTA Row */}
      <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="text-base lg:text-lg text-muted-foreground max-w-md leading-relaxed"
        >
          A premium digital studio where raw engineering power meets sophisticated 
          artistic design. We don{"'"}t just build websites {"--"} we craft experiences.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex items-center gap-6"
        >
          <a
            href="#contact"
            className="group flex items-center gap-3 px-7 py-3.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            Start a Project
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#work"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors border-b border-border hover:border-foreground pb-0.5"
          >
            View Our Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-widest uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  )
}
