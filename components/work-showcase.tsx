"use client"

import { useRef, useState } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    title: "Meridian Finance",
    category: "Web Platform",
    description: "A next-gen fintech dashboard with real-time data visualization and seamless UX for institutional investors.",
    tags: ["React", "TypeScript", "D3.js"],
    year: "2025",
    gradient: "from-primary/40 via-primary/20 to-accent/30",
  },
  {
    title: "Vanta Studios",
    category: "Brand Identity",
    description: "Complete brand overhaul for a creative agency, including logo system, typography guidelines, and campaign visuals.",
    tags: ["Branding", "Identity", "Print"],
    year: "2025",
    gradient: "from-accent/40 via-accent/20 to-primary/30",
  },
  {
    title: "Atlas Corp",
    category: "Professional Suite",
    description: "Automated document ecosystem including invoices, proposals, and reports with dynamic data binding and branded templates.",
    tags: ["PDF Systems", "Automation", "Design"],
    year: "2024",
    gradient: "from-blue-600/30 via-primary/20 to-blue-500/20",
  },
  {
    title: "Solstice Health",
    category: "Web Application",
    description: "Patient portal and telehealth platform handling 100K+ monthly active users with HIPAA-compliant architecture.",
    tags: ["Next.js", "Node.js", "AWS"],
    year: "2024",
    gradient: "from-primary/30 via-accent/20 to-fuchsia-600/30",
  },
]

function ProjectCard({
  project,
  index,
  isInView,
}: {
  project: (typeof projects)[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        delay: 0.15 + index * 0.15,
        duration: 0.9,
        ease: [0.33, 1, 0.68, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
    >
      {/* Project Image Placeholder */}
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 border border-white/[0.06]">
        <motion.div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
          animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Glassy geometric pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-32 h-32 lg:w-48 lg:h-48"
              animate={isHovered ? { rotate: 45 } : { rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="absolute inset-0 border border-white/[0.15] rounded-2xl backdrop-blur-sm bg-white/[0.03]" />
              <div className="absolute inset-6 border border-white/[0.08] rounded-xl" />
              <div className="absolute inset-12 bg-white/[0.05] rounded-lg" />
            </motion.div>
          </div>

          {/* Grid overlay */}
          <div className="absolute inset-0 cyber-grid opacity-50" />

          {/* Bottom gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </motion.div>

        {/* Hover CTA */}
        <motion.div
          className="absolute bottom-4 right-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full border border-white/[0.1] bg-white/[0.06] backdrop-blur-xl text-foreground">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Year badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full text-xs font-mono text-foreground/70 tracking-wider border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm">
            {project.year}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-xs font-medium bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-wider uppercase">
              {project.category}
            </span>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mt-1 group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>
        </div>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4 max-w-sm">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium text-muted-foreground tracking-wide"
            >
              {tag}
              {tag !== project.tags[project.tags.length - 1] && (
                <span className="ml-2 text-white/[0.15]">{"/"}</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export function WorkShowcase() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="work" ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 max-w-[1800px] mx-auto">
      {/* Section Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16 lg:mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3"
        >
          <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground">
            Selected Work
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="lg:col-span-9"
        >
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance">
            Projects that speak{" "}
            <span className="italic font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">volumes</span>
          </h2>
        </motion.div>
      </div>

      {/* Project Grid - Asymmetric */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {projects.map((project, i) => (
          <div
            key={project.title}
            className={i % 2 === 1 ? "lg:mt-20" : ""}
          >
            <ProjectCard project={project} index={i} isInView={isInView} />
          </div>
        ))}
      </div>
    </section>
  )
}
