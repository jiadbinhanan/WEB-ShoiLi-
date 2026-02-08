"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 max-w-[1800px] mx-auto text-center overflow-hidden">
      {/* Background orb */}
      <div
        className="nebula-blob-1 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] rounded-full opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(270 100% 50% / 0.4) 0%, transparent 60%)",
        }}
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
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-primary to-accent text-primary-foreground text-base font-semibold rounded-full shadow-[0_0_30px_hsl(270_100%_65%/0.3)] hover:shadow-[0_0_50px_hsl(270_100%_65%/0.5)] transition-all duration-500"
          >
            Get a Quote
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
