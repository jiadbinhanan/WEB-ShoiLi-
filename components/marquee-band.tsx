"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const words = [
  "Web Development",
  "Brand Identity",
  "UI/UX Design",
  "Business Automation",
  "Creative Direction",
  "Software Engineering",
  "Document Design",
  "Digital Strategy",
]

export function MarqueeBand() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="relative py-8 lg:py-10 border-y border-white/[0.06] overflow-hidden bg-white/[0.02]"
    >
      <div className="animate-marquee flex items-center whitespace-nowrap">
        {[...words, ...words, ...words, ...words].map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center">
            <span className="text-sm lg:text-base font-medium tracking-wider uppercase text-foreground/60 px-6 lg:px-10">
              {word}
            </span>
            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
          </span>
        ))}
      </div>
    </motion.section>
  )
}
