"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { About } from "@/components/about"
import { EngineeringSection, CreativeSection } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { WorkShowcase } from "@/components/work-showcase"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative bg-background">
      {/* Film Grain Noise Overlay - across entire site */}
      <div className="film-grain" aria-hidden="true" />

      <Navigation />
      <Hero />
      <MarqueeBand />
      <About />
      <EngineeringSection />
      <CreativeSection />
      <Pricing />
      <WorkShowcase />
      <Process />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}
