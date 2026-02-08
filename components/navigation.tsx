"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Software Services", href: "#services" },
  { label: "Creative Design", href: "#work" },
  { label: "Pricing", href: "#pricing" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 md:pt-5"
    >
      <nav
        className={`
          relative flex items-center w-full max-w-4xl
          rounded-full border border-white/[0.08]
          px-3 py-2 md:px-5 md:py-2.5
          transition-all duration-700
          ${isScrolled
            ? "bg-white/[0.06] backdrop-blur-2xl shadow-[0_8px_40px_hsl(270_100%_65%/0.08)] border-white/[0.12]"
            : "bg-white/[0.03] backdrop-blur-xl"
          }
        `}
      >
        {/* Inner glow border */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/10 via-transparent to-accent/10 pointer-events-none" />

        {/* Brand */}
        <a href="#" className="relative z-10 flex-shrink-0 mr-2 md:mr-6">
          <span className="text-base md:text-lg font-bold tracking-tight text-foreground">
            WEB{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ShoiLi
            </span>
          </span>
        </a>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setActiveLink(link.label)}
              className={`
                relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300
                ${activeLink === link.label
                  ? "text-foreground bg-white/[0.08]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                }
              `}
            >
              {link.label}
              {activeLink === link.label && (
                <motion.div
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-white/[0.08] border border-white/[0.06]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  style={{ zIndex: -1 }}
                />
              )}
            </a>
          ))}
        </div>

        {/* Mobile Links - Horizontally Scrollable */}
        <div
          ref={scrollRef}
          className="md:hidden flex-1 overflow-x-auto nav-scroll mx-1"
        >
          <div className="flex items-center gap-1 min-w-max px-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`
                  relative px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-all duration-300
                  ${activeLink === link.label
                    ? "text-foreground bg-white/[0.1]"
                    : "text-muted-foreground"
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <a
          href="#contact"
          className="relative z-10 flex-shrink-0 ml-2 md:ml-6 group"
        >
          <span
            className="
              relative flex items-center gap-1.5
              px-4 py-1.5 md:px-5 md:py-2
              text-xs md:text-sm font-semibold
              rounded-full
              bg-gradient-to-r from-primary to-accent
              text-primary-foreground
              shadow-[0_0_20px_hsl(270_100%_65%/0.3)]
              group-hover:shadow-[0_0_30px_hsl(270_100%_65%/0.5)]
              transition-shadow duration-500
            "
          >
            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5" />
            <span className="hidden sm:inline">Get Started</span>
            <span className="sm:hidden">Start</span>
          </span>
        </a>
      </nav>
    </motion.header>
  )
}
