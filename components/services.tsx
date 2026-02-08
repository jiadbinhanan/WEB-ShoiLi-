"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import {
  Code2,
  Server,
  Shield,
  Zap,
  Globe,
  Database,
  Palette,
  PenTool,
  Megaphone,
  FileText,
  FileSpreadsheet,
  Layers,
} from "lucide-react"

/* ═══════════════════════════════════════════════
   SECTION A: Digital Engineering & Software
   Visual Style: Tech/Grid with Glowing Lines
   ═══════════════════════════════════════════════ */

const engineeringCapabilities = [
  {
    icon: Globe,
    title: "Full-Stack Web Apps",
    desc: "React, Next.js, and Node.js ecosystems built for scale and speed.",
  },
  {
    icon: Server,
    title: "SaaS Platforms",
    desc: "Multi-tenant architectures with robust billing, auth, and analytics.",
  },
  {
    icon: Database,
    title: "API Architecture",
    desc: "RESTful and GraphQL APIs with comprehensive documentation.",
  },
  {
    icon: Shield,
    title: "Cloud & Security",
    desc: "AWS/Vercel deployments with enterprise-grade security protocols.",
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Sub-second load times through intelligent caching and code splitting.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    desc: "Bespoke solutions engineered precisely for your business logic.",
  },
]

export function EngineeringSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="engineering" ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-60" />
        {/* Horizontal glowing lines */}
        {[20, 40, 60, 80].map((top) => (
          <div
            key={top}
            className="tech-grid-line absolute left-0 right-0 h-px"
            style={{
              top: `${top}%`,
              background: "linear-gradient(90deg, transparent 0%, hsl(265 100% 65% / 0.15) 30%, hsl(265 100% 65% / 0.08) 70%, transparent 100%)",
              animationDelay: `${top * 0.05}s`,
            }}
          />
        ))}
        {/* Vertical glowing lines */}
        {[25, 50, 75].map((left) => (
          <div
            key={left}
            className="tech-grid-line absolute top-0 bottom-0 w-px"
            style={{
              left: `${left}%`,
              background: "linear-gradient(180deg, transparent 0%, hsl(265 100% 65% / 0.1) 30%, hsl(265 100% 65% / 0.06) 70%, transparent 100%)",
              animationDelay: `${left * 0.04}s`,
            }}
          />
        ))}
        {/* Ambient glow */}
        <div
          className="nebula-blob-2 absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(265 100% 50% / 0.3) 0%, transparent 60%)" }}
        />
      </div>

      <div className="relative max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-primary">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_hsl(265_100%_65%/0.6)]" />
              Section A
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-8"
          >
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
              Digital Engineering{" "}
              <span className="italic font-light bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
                {"&"} Software
              </span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              High-performance web applications, scalable SaaS platforms, and custom software solutions
              built with cutting-edge technology stacks.
            </p>
          </motion.div>
        </div>

        {/* Capability Cards - Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {engineeringCapabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className="group glass-card-heavy rounded-2xl p-6 lg:p-8 hover:border-primary/20 transition-all duration-500 relative overflow-hidden"
              >
                {/* Corner accent */}
                <div className="absolute -top-px -right-px w-16 h-16 bg-gradient-to-br from-primary/15 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="glass-card p-3 rounded-xl w-fit mb-5 group-hover:border-primary/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight group-hover:text-primary transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ═══════════════════════════════════════════════
   SECTION B: Creative Arts & Documentation
   Visual Style: Fluid/Artistic with Brush-Strokes
   ═══════════════════════════════════════════════ */

const creativeCapabilities = [
  {
    icon: Palette,
    title: "Brand Identity",
    desc: "Logo systems, color palettes, and typography guidelines that command attention.",
  },
  {
    icon: PenTool,
    title: "UI/UX Design",
    desc: "Intuitive interfaces designed from research, refined through testing.",
  },
  {
    icon: Megaphone,
    title: "Ad Creatives & Posters",
    desc: "Campaign visuals that stop the scroll and drive conversion.",
  },
  {
    icon: FileText,
    title: "Professional Suite",
    desc: "Branded invoices, proposals, and PDF form systems that automate operations.",
  },
  {
    icon: FileSpreadsheet,
    title: "Document Automation",
    desc: "Dynamic templates with data binding for reports, invoices, and contracts.",
  },
  {
    icon: Layers,
    title: "Design Systems",
    desc: "Scalable component libraries ensuring brand consistency across all touchpoints.",
  },
]

export function CreativeSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="creative" ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 overflow-hidden">
      {/* Fluid artistic background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Warm terracotta glow */}
        <div
          className="nebula-blob-3 absolute -bottom-[30%] -left-[15%] w-[70vw] h-[70vw] rounded-full opacity-15"
          style={{ background: "radial-gradient(circle, hsl(20 80% 50% / 0.4) 0%, transparent 60%)" }}
        />
        {/* Purple creative glow */}
        <div
          className="nebula-blob-1 absolute -top-[25%] -right-[10%] w-[55vw] h-[55vw] rounded-full opacity-12"
          style={{ background: "radial-gradient(circle, hsl(280 80% 55% / 0.3) 0%, transparent 55%)" }}
        />

        {/* Artistic brush stroke elements */}
        <svg className="absolute top-[15%] left-[5%] w-[300px] h-[200px] opacity-[0.04]" viewBox="0 0 300 200" aria-hidden="true">
          <path d="M10,100 Q80,20 150,100 T290,100" fill="none" stroke="hsl(20 80% 55%)" strokeWidth="3" strokeLinecap="round" />
        </svg>
        <svg className="absolute bottom-[20%] right-[8%] w-[250px] h-[150px] opacity-[0.04]" viewBox="0 0 250 150" aria-hidden="true">
          <path d="M10,75 C60,10 120,140 240,75" fill="none" stroke="hsl(265 100% 65%)" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <svg className="absolute top-[50%] left-[40%] w-[200px] h-[200px] opacity-[0.03]" viewBox="0 0 200 200" aria-hidden="true">
          <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(20 80% 55%)" strokeWidth="1.5" strokeDasharray="8 12" />
        </svg>
      </div>

      <div className="relative max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <span className="inline-flex items-center gap-2 text-xs font-medium tracking-widest uppercase text-accent">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_hsl(20_80%_55%/0.6)]" />
              Section B
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-8"
          >
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
              Creative Arts{" "}
              <span className="italic font-light bg-gradient-to-r from-accent to-orange-300 bg-clip-text text-transparent">
                {"&"} Documentation
              </span>
            </h2>
            <p className="mt-4 text-base lg:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              From brand identities that command attention to automated document ecosystems
              that elevate every business touchpoint.
            </p>
          </motion.div>
        </div>

        {/* Creative Capability Cards - Alternating Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {creativeCapabilities.map((cap, i) => {
            const Icon = cap.icon
            return (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
                className="group glass-card-heavy rounded-2xl p-6 lg:p-8 hover:border-accent/20 transition-all duration-500 relative overflow-hidden"
              >
                {/* Warm corner accent */}
                <div className="absolute -top-px -right-px w-16 h-16 bg-gradient-to-br from-accent/15 to-transparent rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="glass-card p-3 rounded-xl w-fit mb-5 group-hover:border-accent/20 transition-colors duration-300">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2 tracking-tight group-hover:text-accent transition-colors duration-300">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
