"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Sparkles, ChevronRight } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Software Services", href: "#engineering" },
  { label: "Creative Design", href: "#creative" },
  { label: "Pricing", href: "#pricing" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")
  const [showScrollHint, setShowScrollHint] = useState(true)
  const scrollRef = useRef<HTMLDivElement>(null)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Track active section based on scroll position
  useEffect(() => {
    const sections = ["#", "#engineering", "#creative", "#pricing"]
    const sectionIds = ["", "engineering", "creative", "pricing"]

    const handleSectionScroll = () => {
      const scrollY = window.scrollY + 200

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        if (sectionIds[i] === "") {
          if (scrollY < 600) {
            setActiveLink("Home")
            break
          }
          continue
        }
        const el = document.getElementById(sectionIds[i])
        if (el && scrollY >= el.offsetTop) {
          setActiveLink(navLinks[i].label)
          break
        }
      }
    }

    window.addEventListener("scroll", handleSectionScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleSectionScroll)
  }, [])

  // Hide scroll hint when user scrolls the nav
  const handleNavScroll = useCallback(() => {
    if (scrollRef.current && scrollRef.current.scrollLeft > 10) {
      setShowScrollHint(false)
    }
  }, [])

  return (
    <motion.header
      ref={navRef}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 pt-3 md:px-4 md:pt-4"
    >
      <nav
        className={`
          relative flex items-center w-full max-w-4xl
          rounded-full
          px-3 py-2 md:px-5 md:py-2.5
          transition-all duration-700
          ${isScrolled
            ? "glass-card-heavy shadow-[0_8px_40px_hsl(265_100%_65%/0.1)]"
            : "glass-card"
          }
        `}
      >
        {/* Inner gradient glow border */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/[0.08] via-transparent to-accent/[0.08]" />
        </div>

        {/* Brand - High contrast white with neon glow */}
        <a href="#" className="relative z-10 flex-shrink-0 mr-2 md:mr-6">
          <span className="text-base md:text-lg font-extrabold tracking-tight text-primary-foreground brand-glow">
            WEB{" "}
            <span className="text-primary-foreground">ShoiLi</span>
          </span>
        </a>

        {/* Desktop Links - Centered */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeLink === link.label
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setActiveLink(link.label)}
                className={`
                  relative px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300
                  ${isActive
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/[0.04]"
                  }
                `}
              >
                {link.label}
                {isActive && (
                  <motion.div
                    layoutId="nav-active-pill"
                    className="absolute inset-0 rounded-full bg-white/[0.1] border border-white/[0.08]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    style={{ zIndex: -1 }}
                  />
                )}
                {/* Active glowing dot */}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-dot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                    style={{
                      boxShadow: "0 0 6px hsl(265 100% 65% / 0.8), 0 0 12px hsl(265 100% 65% / 0.4)",
                    }}
                    transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* Mobile Links - Horizontally Scrollable */}
        <div className="md:hidden flex-1 relative">
          <div
            ref={scrollRef}
            onScroll={handleNavScroll}
            className="overflow-x-auto nav-scroll mx-1"
          >
            <div className="flex items-center gap-1 min-w-max px-1">
              {navLinks.map((link) => {
                const isActive = activeLink === link.label
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className={`
                      relative px-3 py-1 text-xs font-medium rounded-full whitespace-nowrap transition-all duration-300
                      ${isActive
                        ? "text-primary-foreground bg-white/[0.1]"
                        : "text-muted-foreground"
                      }
                    `}
                  >
                    {link.label}
                    {isActive && (
                      <span
                        className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        style={{
                          boxShadow: "0 0 6px hsl(265 100% 65% / 0.8)",
                        }}
                      />
                    )}
                  </a>
                )
              })}
            </div>
          </div>

          {/* Mobile Scroll Hint - pulsing arrow */}
          <AnimatePresence>
            {showScrollHint && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center pointer-events-none"
              >
                <div className="w-6 h-full bg-gradient-to-l from-white/[0.06] to-transparent" />
                <ChevronRight className="w-3.5 h-3.5 text-primary swipe-hint" />
              </motion.div>
            )}
          </AnimatePresence>
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
              bg-gradient-to-r from-primary via-primary to-accent
              text-primary-foreground
              shadow-[0_0_20px_hsl(265_100%_65%/0.3)]
              group-hover:shadow-[0_0_35px_hsl(265_100%_65%/0.5),0_0_60px_hsl(20_80%_55%/0.15)]
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
