"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"

const stats = [
  { number: "50+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "3", label: "Core Disciplines" },
]

export function About() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 max-w-[1800px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            About the Studio
          </span>
        </motion.div>

        {/* Right content */}
        <div className="lg:col-span-9">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance mb-8 lg:mb-12"
          >
            {"'"}Shoili{"'"} means{" "}
            <span className="italic font-light text-accent">Artistic Style</span>. 
            We are digital artisans who fuse raw engineering power with sophisticated design.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed mb-16"
          >
            Every pixel is intentional. Every line of code is crafted. We exist at the 
            intersection of technology and art, building digital experiences that don{"'"}t 
            just function {"--"} they resonate. From enterprise platforms to creative 
            campaigns, we bring the same obsessive attention to detail.
          </motion.p>

          {/* Stats */}
          <div className="flex flex-wrap gap-12 lg:gap-20">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.15, duration: 0.6 }}
              >
                <span className="block text-4xl lg:text-6xl font-bold text-foreground tracking-tight">
                  {stat.number}
                </span>
                <span className="block mt-2 text-sm text-muted-foreground tracking-wide">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
