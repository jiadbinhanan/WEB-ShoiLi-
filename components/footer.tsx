"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const footerLinks = {
  Services: [
    { label: "Web Development", href: "#services" },
    { label: "Creative Design", href: "#services" },
    { label: "Professional Suite", href: "#services" },
  ],
  Company: [
    { label: "Process", href: "#process" },
    { label: "Work", href: "#work" },
    { label: "Contact", href: "#contact" },
  ],
  Connect: [
    { label: "LinkedIn", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Behance", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-secondary/30">
      <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-16 lg:py-20">
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 lg:mb-24">
          {/* Brand */}
          <div className="lg:col-span-5">
            <span className="text-2xl font-bold text-foreground tracking-tight">
              WEB <span className="text-accent">Shoili</span>
            </span>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
              Digital artisans crafting premium experiences at the intersection 
              of code and design.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="lg:col-span-2">
              <span className="text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4 block">
                {category}
              </span>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-foreground hover:text-accent transition-colors duration-200 flex items-center gap-1 group"
                    >
                      {link.label}
                      {category === "Connect" && (
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Giant brand text */}
        <div className="relative overflow-hidden mb-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="block text-[clamp(4rem,15vw,16rem)] font-bold leading-none tracking-[-0.05em] text-foreground/[0.03] select-none"
              aria-hidden="true"
            >
              SHOILI
            </span>
          </motion.div>
        </div>

        {/* Copyright bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground">
            2025 WEB Shoili. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Digital Art Through Code.
          </p>
        </div>
      </div>
    </footer>
  )
}
