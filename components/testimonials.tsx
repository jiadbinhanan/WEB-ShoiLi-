"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "WEB Shoili transformed our digital presence entirely. The attention to detail in both design and code is something we have never experienced with any other agency.",
    author: "Sarah Chen",
    role: "CEO, Meridian Finance",
  },
  {
    quote:
      "They don't just build websites. They craft digital experiences. Our document automation system alone saved us 200+ hours per quarter.",
    author: "James Whitfield",
    role: "COO, Atlas Corporation",
  },
]

export function Testimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 max-w-[1800px] mx-auto">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Client Words
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:col-span-9"
        >
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
            Trusted by{" "}
            <span className="italic font-light text-accent">visionaries</span>
          </h2>
        </motion.div>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={testimonial.author}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            className="relative p-8 lg:p-12 border border-border rounded-lg bg-secondary/50 group hover:border-accent/30 transition-colors duration-500"
          >
            <Quote className="w-8 h-8 text-accent/30 mb-6" />

            <blockquote className="text-lg lg:text-xl text-foreground leading-relaxed mb-8 font-light">
              {`"${testimonial.quote}"`}
            </blockquote>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-bold">
                {testimonial.author.split(" ").map(n => n[0]).join("")}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
