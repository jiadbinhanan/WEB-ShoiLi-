"use client"

import { useRef, useState } from "react"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { ArrowUpRight, Code2, Palette, FileText } from "lucide-react"

const services = [
  {
    number: "01",
    title: "Engineering",
    subtitle: "Web & Software Development",
    description:
      "High-performance web applications, scalable SaaS platforms, and custom software solutions built with cutting-edge technology stacks. We engineer systems that are as elegant under the hood as they are on the surface.",
    capabilities: [
      "Full-Stack Web Apps",
      "SaaS Platforms",
      "E-Commerce",
      "API Architecture",
      "Performance Optimization",
      "Cloud Infrastructure",
    ],
    icon: Code2,
  },
  {
    number: "02",
    title: "Creative",
    subtitle: "Design & Brand Identity",
    description:
      "From brand identities that command attention to campaign visuals that stop the scroll. We create design systems, advertising materials, and visual narratives that elevate your brand above the noise.",
    capabilities: [
      "Brand Identity",
      "UI/UX Design",
      "Poster & Ad Design",
      "Social Media Creatives",
      "Motion Graphics",
      "Design Systems",
    ],
    icon: Palette,
  },
  {
    number: "03",
    title: "Professional Suite",
    subtitle: "Business Automation & Documents",
    description:
      "Transform your business operations with professionally designed document ecosystems. Custom invoices, automated PDF forms, and branded corporate documentation that make every touchpoint feel premium.",
    capabilities: [
      "Invoice Design",
      "PDF Form Systems",
      "Report Templates",
      "Proposal Decks",
      "Automated Documents",
      "Corporate Identity Kits",
    ],
    icon: FileText,
  },
]

function ServiceCard({
  service,
  index,
  isInView,
}: {
  service: (typeof services)[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = service.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.2 + index * 0.2, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative border-b border-border py-10 lg:py-14 cursor-pointer"
    >
      <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-12">
        {/* Left: Number and Icon */}
        <div className="flex items-center gap-4 lg:w-48 flex-shrink-0">
          <span className="text-xs font-mono text-muted-foreground tracking-wider">
            {service.number}
          </span>
          <motion.div
            animate={isHovered ? { scale: 1.1, rotate: -5 } : { scale: 1, rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="w-6 h-6 text-accent" />
          </motion.div>
        </div>

        {/* Middle: Content */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl lg:text-4xl font-bold text-foreground tracking-tight group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground mt-1 tracking-wide">
                {service.subtitle}
              </p>
            </div>
            <motion.div
              animate={isHovered ? { x: 4, y: -4 } : { x: 0, y: 0 }}
              transition={{ duration: 0.3 }}
              className="hidden lg:block"
            >
              <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-accent transition-colors" />
            </motion.div>
          </div>

          <p className="text-muted-foreground leading-relaxed max-w-xl mb-6">
            {service.description}
          </p>

          {/* Capabilities */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-2 pt-2">
                  {service.capabilities.map((cap, i) => (
                    <motion.span
                      key={cap}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className="px-3 py-1.5 text-xs font-medium rounded-full border border-border text-muted-foreground bg-secondary"
                    >
                      {cap}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile capabilities (always visible) */}
          <div className="flex flex-wrap gap-2 lg:hidden">
            {service.capabilities.map((cap) => (
              <span
                key={cap}
                className="px-3 py-1.5 text-xs font-medium rounded-full border border-border text-muted-foreground bg-secondary"
              >
                {cap}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hover accent line */}
      <motion.div
        className="absolute bottom-0 left-0 h-px bg-accent"
        initial={{ width: "0%" }}
        animate={isHovered ? { width: "100%" } : { width: "0%" }}
        transition={{ duration: 0.5, ease: [0.33, 1, 0.68, 1] }}
      />
    </motion.div>
  )
}

export function Services() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="services" ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 max-w-[1800px] mx-auto">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Our Services
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:col-span-9"
        >
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
            Three pillars of{" "}
            <span className="italic font-light text-accent">digital craft</span>
          </h2>
        </motion.div>
      </div>

      {/* Service Cards */}
      <div className="border-t border-border">
        {services.map((service, i) => (
          <ServiceCard key={service.number} service={service} index={i} isInView={isInView} />
        ))}
      </div>
    </section>
  )
}
