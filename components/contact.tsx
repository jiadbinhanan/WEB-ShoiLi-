"use client"

import React from "react"
import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { Send } from "lucide-react"

const serviceOptions = [
  "Web Development",
  "Brand & Design",
  "Professional Suite",
  "Full Package",
]

export function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedService, setSelectedService] = useState("")
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
    setTimeout(() => setFormSubmitted(false), 3000)
  }

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-24 lg:py-40 px-6 lg:px-12 border-t border-white/[0.06]"
    >
      <div className="max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
              Contact
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-9"
          >
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
              Ask us{" "}
              <span className="italic font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">anything</span>.
            </h2>
            <p className="text-base lg:text-lg text-muted-foreground mt-4 max-w-xl leading-relaxed">
              Are you a company or brand seeking creative services? Let{"'"}s connect
              and explore what we can build together.
            </p>
          </motion.div>
        </div>

        {/* Form inside a glass card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="glass-card-heavy rounded-3xl p-8 lg:p-12 max-w-4xl"
        >
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            {/* Name */}
            <div className="space-y-2">
              <label htmlFor="name" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="Your full name"
                className="w-full bg-transparent border-b border-white/[0.1] py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors text-base"
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label htmlFor="email" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full bg-transparent border-b border-white/[0.1] py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors text-base"
              />
            </div>

            {/* Organization */}
            <div className="space-y-2">
              <label htmlFor="organization" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Organization
              </label>
              <input
                id="organization"
                type="text"
                placeholder="Company name"
                className="w-full bg-transparent border-b border-white/[0.1] py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors text-base"
              />
            </div>

            {/* Service */}
            <div className="space-y-2">
              <label htmlFor="service" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Service Needed
              </label>
              <select
                id="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full bg-transparent border-b border-white/[0.1] py-3 text-foreground focus:outline-none focus:border-primary transition-colors text-base appearance-none cursor-pointer [&>option]:bg-[hsl(260_40%_7%)] [&>option]:text-foreground"
              >
                <option value="">Select a service</option>
                {serviceOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="lg:col-span-2 space-y-2">
              <label htmlFor="message" className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                placeholder="Tell us about your project, timeline, and budget range..."
                className="w-full bg-transparent border-b border-white/[0.1] py-3 text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary transition-colors text-base resize-none"
              />
            </div>

            {/* Submit */}
            <div className="lg:col-span-2 pt-4">
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-3 px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-primary-foreground text-sm font-bold rounded-full shadow-[0_0_20px_hsl(265_100%_65%/0.3)] hover:shadow-[0_0_35px_hsl(265_100%_65%/0.5)] transition-all duration-500"
              >
                {formSubmitted ? (
                  "Message Sent"
                ) : (
                  <>
                    Submit Inquiry
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
