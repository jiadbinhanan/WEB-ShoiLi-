"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Check, Sparkles, ArrowRight } from "lucide-react"

const pricingPlans = [
  {
    name: "Starter",
    description: "Perfect for small businesses and startups looking to establish their digital presence.",
    price: "$2,499",
    period: "per project",
    features: [
      "Single-page website or landing page",
      "Responsive mobile-first design",
      "Basic brand identity (logo + colors)",
      "SEO fundamentals setup",
      "2 rounds of revisions",
      "1-month post-launch support",
    ],
    accent: "primary",
    popular: false,
  },
  {
    name: "Professional",
    description: "For growing companies that need comprehensive digital solutions across multiple touchpoints.",
    price: "$7,999",
    period: "per project",
    features: [
      "Multi-page web application",
      "Custom UI/UX design system",
      "Full brand identity package",
      "Document automation (invoices, PDFs)",
      "CMS integration & admin panel",
      "Performance optimization",
      "5 rounds of revisions",
      "3-month post-launch support",
    ],
    accent: "accent",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "End-to-end digital transformation for organizations demanding the highest caliber.",
    price: "Custom",
    period: "tailored scope",
    features: [
      "Full-stack SaaS platform development",
      "Enterprise architecture & API design",
      "Complete creative campaign suite",
      "Professional Suite (full document ecosystem)",
      "Cloud infrastructure & DevOps",
      "Dedicated project manager",
      "Unlimited revisions",
      "12-month ongoing partnership",
    ],
    accent: "primary",
    popular: false,
  },
]

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section id="pricing" ref={ref} className="relative py-24 lg:py-40 px-6 lg:px-12 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="nebula-blob-4 absolute top-[20%] left-[50%] -translate-x-1/2 w-[70vw] h-[50vh] rounded-full opacity-10"
          style={{ background: "radial-gradient(circle, hsl(265 100% 50% / 0.3) 0%, transparent 60%)" }}
        />
        <div
          className="nebula-blob-5 absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] rounded-full opacity-8"
          style={{ background: "radial-gradient(circle, hsl(20 80% 50% / 0.2) 0%, transparent 55%)" }}
        />
      </div>

      <div className="relative max-w-[1800px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="inline-block text-xs font-medium tracking-widest uppercase text-muted-foreground mb-4"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight tracking-tight text-foreground text-balance"
          >
            Investment that{" "}
            <span className="italic font-light bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              scales
            </span>{" "}
            with ambition
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-4 text-base lg:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Transparent pricing. No hidden fees. Every tier delivers premium quality.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
              className={`
                relative rounded-2xl p-8 lg:p-10 flex flex-col
                ${plan.popular
                  ? "glass-card-heavy border-accent/20 shadow-[0_0_40px_hsl(20_80%_55%/0.08)]"
                  : "glass-card hover:border-white/[0.12]"
                }
                transition-all duration-500 group
              `}
            >
              {/* Best Value Badge */}
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="glow-badge inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-accent to-orange-400 text-xs font-bold text-primary-foreground tracking-wide uppercase">
                    <Sparkles className="w-3 h-3" />
                    Best Value
                  </span>
                </div>
              )}

              {/* Plan Header */}
              <div className="mb-8">
                <h3 className={`text-xl font-bold tracking-tight mb-2 ${plan.popular ? "text-accent" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {plan.description}
                </p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <span className={`text-4xl lg:text-5xl font-bold tracking-tight ${plan.popular ? "bg-gradient-to-r from-accent to-orange-300 bg-clip-text text-transparent" : "text-foreground"}`}>
                  {plan.price}
                </span>
                <span className="block text-xs text-muted-foreground tracking-wide uppercase mt-1.5">
                  {plan.period}
                </span>
              </div>

              {/* Divider */}
              <div className={`h-px mb-8 ${plan.popular ? "bg-gradient-to-r from-accent/30 via-accent/10 to-transparent" : "bg-white/[0.06]"}`} />

              {/* Features */}
              <ul className="flex-1 space-y-3.5 mb-10">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.popular ? "text-accent" : "text-primary"}`} />
                    <span className="text-muted-foreground leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href="#contact"
                className={`
                  flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold transition-all duration-500
                  ${plan.popular
                    ? "bg-gradient-to-r from-accent to-orange-400 text-primary-foreground shadow-[0_0_20px_hsl(20_80%_55%/0.25)] hover:shadow-[0_0_35px_hsl(20_80%_55%/0.4)]"
                    : "glass-card-heavy text-foreground hover:border-primary/20 hover:bg-white/[0.08]"
                  }
                `}
              >
                {plan.price === "Custom" ? "Contact Us" : "Get Started"}
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
