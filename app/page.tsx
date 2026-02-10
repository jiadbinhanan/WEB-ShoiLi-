"use client"

import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { MarqueeBand } from "@/components/marquee-band"
import { About } from "@/components/about"
import { EngineeringSection, CreativeSection } from "@/components/services"
import { Pricing } from "@/components/pricing"
import { BundleSection } from "@/components/arts_pricing"
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
      <EngineeringSection />
      <CreativeSection />
      <Pricing />
      <BundleSection />
      <WorkShowcase />
      <Process />
      <Testimonials />
      <CTASection />
      <Contact />
      <Footer />
    </main>
  )
}
