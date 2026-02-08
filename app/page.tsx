"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { WorkShowcase } from "@/components/work-showcase"
import { Process } from "@/components/process"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="relative bg-background">
      <Navigation />
      <Hero />
      <MarqueeBand />
      <About />
      <Services />
      <WorkShowcase />
      <Process />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}
