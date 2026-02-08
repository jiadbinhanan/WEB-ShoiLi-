"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We immerse ourselves in your world. Through strategic sessions, we map your goals, audience, and the competitive landscape to define a crystal-clear creative brief.",
  },
  {
    number: "02",
    title: "Strategy & Design",
    description:
      "Architecture meets artistry. We design wireframes, visual concepts, and interaction patterns that translate your brand's essence into a cohesive digital narrative.",
  },
  {
    number: "03",
    title: "Engineering",
    description:
      "Clean code, robust systems. Our engineers build with modern stacks, prioritizing performance, scalability, and pixel-perfect implementation of every design detail.",
  },
  {
    number: "04",
    title: "Launch & Evolve",
    description:
      "Deployment is just the beginning. We handle seamless launches, monitor performance, and iterate based on real-world data to continuously refine the experience.",
  },
]

export function Process() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section
      id="process"
      ref={ref}
      className="relative py-24 lg:py-40 px-6 lg:px-12 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0">
        <div
          className="nebula-blob-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[60vh] rounded-full opacity-15"
          style={{
            background: "radial-gradient(circle, hsl(270 100% 50% / 0.3) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              How We Work
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-9"
          >
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
              A process built on{" "}
              <span className="italic font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">precision</span>
            </h2>
          </motion.div>
        </div>

        {/* Process Steps - Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className="relative group p-8 lg:p-10 rounded-2xl border border-white/[0.06] bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-white/[0.1] transition-all duration-500"
            >
              {/* Step Number */}
              <span className="block text-6xl lg:text-7xl font-bold text-foreground/[0.04] mb-6 tracking-tighter">
                {step.number}
              </span>

              <h3 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mb-4 group-hover:bg-gradient-to-r group-hover:from-primary group-hover:to-accent group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                {step.title}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>

              {/* Accent dot */}
              <div className="absolute top-8 right-8">
                <motion.div
                  className="w-2 h-2 rounded-full bg-primary"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: i * 0.5 }}
                />
              </div>

              {/* Corner glow on hover */}
              <div className="absolute -top-px -right-px w-20 h-20 bg-gradient-to-br from-primary/20 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
