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
  Cpu,
  Layout,
  ShoppingCart,
  GraduationCap,
  Building2,
} from "lucide-react"

/* ═══════════════════════════════════════════════
   SECTION A: Digital Engineering & Software
   Visual Style: Tech/Grid with Glowing Lines
   ═══════════════════════════════════════════════ */

const techStack = [
  {
    category: "Frontend Development",
    desc: "Building intuitive, fast, and responsive user interfaces that feel alive.",
    tools: ["React", "Next.js", "Astro", "Svelte", "Vue.js", "Tailwind CSS", "GSAP"],
    icon: Layout,
  },
  {
    category: "Backend & API",
    desc: "Developing robust, scalable server-side logic and secure APIs.",
    tools: ["Node.js", "Express.js", "Python (Django)", "Supabase", "MongoDB", "PostgreSQL", "REST API", "GraphQL"],
    icon: Server,
  },
  {
    category: "Full-Stack Solutions",
    desc: "From concept to deployment, complete applications tailored to your needs.",
    tools: ["E-commerce", "School Management", "Mock Test Portals", "Real Estate", "Booking Systems", "Admin Dashboards", "CMS"],
    icon: Globe,
  },
]

export function EngineeringSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="engineering" ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 overflow-hidden bg-black/20">
      {/* Tech Grid Background with Enhanced Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 cyber-grid opacity-40" />
        
        {/* Animated Glowing Lines */}
        {[20, 50, 80].map((top) => (
          <div
            key={top}
            className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent blur-[1px]"
            style={{ top: `${top}%`, opacity: 0.3 }}
          />
        ))}
        
        {/* Ambient Nebula Glow */}
        <div
          className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full opacity-20 blur-[100px]"
          style={{ background: "radial-gradient(circle, hsl(265 100% 50% / 0.4) 0%, transparent 70%)" }}
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
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-primary mb-4">
              <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_hsl(265_100%_65%)] animate-pulse" />
              Section A: Engineering
            </span>
            <h3 className="text-xl font-semibold text-foreground/80">MY SERVICES & TECH STACK</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-8"
          >
            <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-foreground text-balance">
              Technologies I use to build the{" "}
              <span className="italic font-light bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                Future
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Tech Stack Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {techStack.map((stack, i) => {
            const Icon = stack.icon
            return (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
                className="group relative glass-card-heavy rounded-3xl p-8 hover:bg-primary/5 border border-white/5 hover:border-primary/30 transition-all duration-500 overflow-hidden"
              >
                {/* Glowing Background Blob */}
                <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-800 to-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/5">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3">{stack.category}</h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {stack.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {stack.tools.map((tool) => (
                      <span 
                        key={tool} 
                        className="px-3 py-1 text-xs font-medium text-primary/90 bg-primary/10 rounded-full border border-primary/10 group-hover:border-primary/30 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
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
   Visual Style: Elegant/Paper-like with Warm Tones
   ═══════════════════════════════════════════════ */

const creativeServices = [
  {
    icon: Palette,
    title: "Brand Identity & Design",
    desc: "Crafting visual legacies. We design Logos, Visiting Cards, Stamps, and Proposal Letters that carry your brand's authority.",
    tags: ["Logo Design", "Visiting Cards", "Stamps", "Letterheads"],
  },
  {
    icon: Megaphone,
    title: "Marketing Visuals",
    desc: "High-impact designs for advertising. From social media creatives to print posters, we ensure your message is seen and remembered.",
    tags: ["Ad Creatives", "Posters", "Banners", "Social Media Kits"],
  },
  {
    icon: FileText,
    title: "Document Architecture",
    desc: "Professional structuring of critical documents. We design and format Registration Forms, Agreements, and Terms & Conditions.",
    tags: ["Registration Forms", "Agreements", "T&C", "Contracts"],
  },
  {
    icon: FileSpreadsheet,
    title: "PDF & Digital Forms",
    desc: "Transforming raw data into elegant, interactive PDFs and image formats specifically designed for digital distribution and print.",
    tags: ["Interactive PDFs", "E-Books", "Invoices", "Reports"],
  },
]

export function CreativeSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="creative" ref={ref} className="relative py-16 lg:py-24 px-6 lg:px-12 overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {/* Glowing Curves */}
        <div className="absolute -top-1/4 left-0 w-1/2 h-full bg-gradient-to-r from-accent/5 via-transparent to-transparent rounded-full blur-[100px] -rotate-45" />
        <div className="absolute -bottom-1/4 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 via-transparent to-transparent rounded-full blur-[100px] rotate-45" />
        
        {/* Warm Glow for Creativity */}
        <div
          className="absolute bottom-0 left-0 w-[80vw] h-[80vw] rounded-full opacity-10 blur-[120px]"
          style={{ background: "radial-gradient(circle, hsl(20 90% 60% / 0.4) 0%, transparent 60%)" }}
        />
        <div className="absolute top-1/4 right-0 w-[40vw] h-[40vw] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 w-full flex flex-col items-end text-right"
          >
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-accent mb-4">
              <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_10px_hsl(20_90%_60%)]" />
              Section B: Creative Studio
            </span>
            <h3 className="text-xl font-semibold text-foreground/80">DESIGN & DOCUMENTATION</h3>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="lg:col-span-8 w-full flex flex-col items-end text-right"
          >
            <h2 className="text-4xl lg:text-6xl xl:text-7xl leading-tight tracking-tight text-foreground text-balance">
              <span className="font-lobster">Where Art meets</span>{" "}
              <span className="font-sans font-light italic bg-gradient-to-r from-accent to-yellow-500 bg-clip-text text-transparent">
                Authority
              </span>
            </h2>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
              We don't just design; we structure your business identity. From the logo on your card to the legal layout of your contracts, every pixel conveys professionalism.
            </p>
          </motion.div>
        </div>

        {/* Creative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {creativeServices.map((service, i) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                className="group relative overflow-hidden rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.03] to-transparent p-8 lg:p-10 hover:border-accent/30 transition-colors duration-500"
              >
                {/* Hover Reveal Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 inline-flex p-3 rounded-xl bg-accent/10 w-fit text-accent group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-base leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-auto">
                    {service.tags.map((tag) => (
                      <span 
                        key={tag} 
                        className="px-4 py-1.5 text-xs font-semibold tracking-wide text-foreground/80 bg-white/5 rounded-full border border-white/5 group-hover:border-accent/20 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
