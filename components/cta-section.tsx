"use client"

import React from "react"

import { useRef, useCallback } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  // Magnetic pull effect for CTA
  const btnRef = useRef<HTMLAnchorElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const springX = useSpring(mx, { stiffness: 300, damping: 20 })
  const springY = useSpring(my, { stiffness: 300, damping: 20 })

  const handleMove = useCallback((e: React.MouseEvent) => {
    if (!btnRef.current) return
    const rect = btnRef.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left - rect.width / 2) * 0.25)
    my.set((e.clientY - rect.top - rect.height / 2) * 0.25)
  }, [mx, my])

  const handleLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  return (
    <section ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 max-w-[1800px] mx-auto text-center overflow-hidden">
      {/* Background orbs */}
      <div
        className="nebula-blob-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] rounded-full opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(265 100% 50% / 0.4) 0%, transparent 60%)" }}
      />
      <div
        className="nebula-blob-3 absolute top-[40%] left-[60%] w-[30vw] h-[30vw] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(20 80% 50% / 0.3) 0%, transparent 55%)" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative max-w-4xl mx-auto"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-6"
        >
          Ready to Begin?
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl lg:text-6xl xl:text-8xl font-bold leading-[0.95] tracking-[-0.04em] text-foreground mb-8"
        >
          Let{"'"}s create something{" "}
          <span className="italic font-light glow-text bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">extraordinary</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10"
        >
          Every great project starts with a conversation. Tell us about your vision
          and we{"'"}ll show you what{"'"}s possible.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <motion.a
            ref={btnRef}
            href="#contact"
            style={{ x: springX, y: springY }}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            className="magnetic-btn group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground text-base font-bold rounded-full shadow-[0_0_30px_hsl(265_100%_65%/0.3),0_0_60px_hsl(20_80%_55%/0.1)] hover:shadow-[0_0_50px_hsl(265_100%_65%/0.5),0_0_80px_hsl(20_80%_55%/0.2)] transition-shadow duration-500"
          >
            Get a Quote
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  )
}
