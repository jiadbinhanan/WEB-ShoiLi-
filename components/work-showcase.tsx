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
    color: "hsl(220 60% 20%)",
  },
  {
    title: "Vanta Studios",
    category: "Brand Identity",
    description: "Complete brand overhaul for a creative agency, including logo system, typography guidelines, and campaign visuals.",
    tags: ["Branding", "Identity", "Print"],
    year: "2025",
    color: "hsl(20 80% 50%)",
  },
  {
    title: "Atlas Corp",
    category: "Professional Suite",
    description: "Automated document ecosystem including invoices, proposals, and reports with dynamic data binding and branded templates.",
    tags: ["PDF Systems", "Automation", "Design"],
    year: "2024",
    color: "hsl(220 60% 20%)",
  },
  {
    title: "Solstice Health",
    category: "Web Application",
    description: "Patient portal and telehealth platform handling 100K+ monthly active users with HIPAA-compliant architecture.",
    tags: ["Next.js", "Node.js", "AWS"],
    year: "2024",
    color: "hsl(20 80% 50%)",
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
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-secondary">
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: project.color }}
          animate={isHovered ? { scale: 1.03 } : { scale: 1 }}
          transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
        >
          {/* Abstract geometric pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="relative w-32 h-32 lg:w-48 lg:h-48"
              animate={isHovered ? { rotate: 45 } : { rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
            >
              <div className="absolute inset-0 border-2 border-primary-foreground/20 rounded-lg" />
              <div className="absolute inset-4 border border-primary-foreground/10 rounded-md" />
              <div className="absolute inset-8 bg-primary-foreground/5 rounded-sm" />
            </motion.div>
          </div>
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
        </motion.div>

        {/* Hover CTA */}
        <motion.div
          className="absolute bottom-4 right-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isHovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background text-foreground">
            <ArrowUpRight className="w-5 h-5" />
          </div>
        </motion.div>

        {/* Year badge */}
        <div className="absolute top-4 left-4">
          <span className="text-xs font-mono text-primary-foreground/80 tracking-wider">
            {project.year}
          </span>
        </div>
      </div>

      {/* Project Info */}
      <div>
        <div className="flex items-start justify-between mb-2">
          <div>
            <span className="text-xs font-medium text-accent tracking-wider uppercase">
              {project.category}
            </span>
            <h3 className="text-xl lg:text-2xl font-bold text-foreground tracking-tight mt-1 group-hover:text-accent transition-colors duration-300">
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
                <span className="ml-2 text-border">{"/"}</span>
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
            <span className="italic font-light text-accent">volumes</span>
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
