"use client"

import { useRef, useState, MouseEvent } from "react"
import { motion } from "framer-motion"
import { Check, Sparkles, ArrowRight, MessageCircle, Zap, Crown } from "lucide-react"

// Pricing Data
const pricingPlans = [
  {
    name: "Frontend Starter",
    price: "₹2,499",
    description: "Perfect for personal portfolios or simple landing pages.",
    features: [
      "1-3 Pages Static Site",
      "React / Astro / Svelte",
      "Responsive Mobile Design",
      "Basic SEO Setup"
    ],
    gradient: "from-cyan-400 to-blue-500",
    recommended: false,
    buttonText: "Get Started",
  },
  {
    name: "Designed Frontend",
    price: "₹6,999",
    description: "Custom UI/UX designed multi-page experience.",
    features: [
      "5-7 Pages (Home, About, Services)",
      "Premium UI/UX Design",
      "GSAP/Framer Animations",
      "Speed Optimization"
    ],
    gradient: "from-purple-400 to-pink-500",
    recommended: false,
    buttonText: "Get Started",
  },
  {
    name: "Dynamic Web App",
    price: "₹11,999",
    description: "Dynamic content with a functional CMS integration.",
    features: [
      "Blog / Portfolio System",
      "CMS Integration (Supabase)",
      "Contact Forms & Emails",
      "Basic Admin Dashboard"
    ],
    gradient: "from-emerald-400 to-teal-500",
    recommended: false,
    buttonText: "Get Started",
  },
  {
    name: "Complex Backend",
    price: "₹16,999",
    description: "Robust applications like LMS or Portals with user roles.",
    features: [
      "Multi-User Roles (Admin/User)",
      "Secure REST API Design",
      "Student/Teacher Panels",
      "Real-time Data Updates"
    ],
    gradient: "from-orange-400 to-amber-500",
    recommended: true, // Highlighted Plan
    buttonText: "Get Started",
  },
  {
    name: "Full Pro Solution",
    price: "₹20,999",
    description: "Enterprise-grade E-commerce or SaaS platforms.",
    features: [
      "Full E-commerce Logic",
      "Payment Gateway Setup",
      "Advanced Auth & Security",
      "Scalable Database Architecture"
    ],
    gradient: "from-blue-500 to-indigo-600",
    recommended: false,
    buttonText: "Get Started",
  },
  {
    name: "Custom Build",
    price: "Custom",
    description: "For unique ideas that defy standard tiers.",
    features: [
      "Bespoke Architecture",
      "API Development",
      "Long-term Maintenance",
      "Consultation & Strategy"
    ],
    gradient: "from-white to-gray-300",
    recommended: false,
    isCustom: true,
    buttonText: "Request Quote",
  }
]

// ═══════════════════════════════════════════════
//  Spotlight Card Component
// ═══════════════════════════════════════════════
function SpotlightCard({ children, className = "", gradient }: { children: React.ReactNode; className?: string, gradient?: string }) {
  const divRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [opacity, setOpacity] = useState(0)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return
    const rect = divRef.current.getBoundingClientRect()
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={`relative h-full rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md transition-all duration-300 ${className}`}
    >
      {/* Moving Spotlight Gradient */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      
      {/* Static Color Tint */}
      <div className={`absolute -top-20 -right-20 w-60 h-60 bg-gradient-to-br ${gradient} rounded-full blur-[100px] opacity-10`} />
      
      <div className="relative z-20 h-full">{children}</div>
    </div>
  )
}

// Animation Variants
const cardContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

const smokeContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // Slower stagger
    },
  },
};

const smokeWordVariant = {
  hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.2, // Longer duration per word
      ease: "easeOut",
    },
  },
};

export function Pricing() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section id="pricing" ref={ref} className="relative pt-24 lg:pt-32 pb-24 lg:pb-32 px-6 lg:px-12 overflow-hidden bg-[#050505]">
      
      {/* ═══════════════════════════════════════════════
         Background Elements
         ═══════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* 1. Bright Top Glow (Beam) */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[500px] bg-gradient-to-b from-primary/20 via-purple-500/5 to-transparent blur-[80px]" />
        
        {/* 2. Cyber Grid Pattern (Visible) */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_60%,transparent_100%)] opacity-40" />

        {/* 3. Static Abstract GUILLOCHE Lines (Currency Style) */}
        <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 1440 800" fill="none" preserveAspectRatio="xMidYMid slice">
          <path d="M-100 600 C 200 400, 400 800, 700 500 S 1100 200, 1500 400" stroke="url(#lineGradient1)" strokeWidth="1.5" />
          <path d="M-100 650 C 200 450, 400 850, 700 550 S 1100 250, 1500 450" stroke="url(#lineGradient2)" strokeWidth="1.5" />
          <path d="M-100 300 C 300 100, 600 500, 900 200 S 1300 0, 1600 300" stroke="url(#lineGradient1)" strokeWidth="1" strokeDasharray="10 10"/>
          <defs>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0)" />
              <stop offset="50%" stopColor="rgba(139, 92, 246, 0.8)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0)" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(249, 115, 22, 0)" />
              <stop offset="50%" stopColor="rgba(249, 115, 22, 0.6)" />
              <stop offset="100%" stopColor="rgba(249, 115, 22, 0)" />
            </linearGradient>
          </defs>
        </svg>

        {/* 4. Nebula Glows */}
        <div className="absolute top-[20%] right-[10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="relative max-w-[1600px] mx-auto z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Animates every time
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/10 text-xs font-bold tracking-widest uppercase text-white/80 mb-6 backdrop-blur-md shadow-lg shadow-purple-500/10">
            <Zap className="w-3 h-3 text-yellow-400 fill-yellow-400" />
            Pricing Plans
          </span>
          
          <motion.h2
            variants={smokeContainerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: "-100px" }}
            className="text-4xl lg:text-7xl font-bold text-white mb-6 tracking-tight"
          >
            <motion.span variants={smokeWordVariant} className="inline-block">
              Investment
            </motion.span>{" "}
            <motion.span variants={smokeWordVariant} className="inline-block">
              that
            </motion.span>{" "}
            <motion.span
              variants={smokeWordVariant}
              className="relative inline-block font-light italic pr-2"
            >
              <span className="relative z-10 bg-gradient-to-r from-cyan-400 via-purple-400 to-orange-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(168,85,247,0.5)]">
                Scales
              </span>
            </motion.span>
          </motion.h2>
          
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Transparent pricing designed for ambitious projects. 
            Choose the tier that matches your vision.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, margin: "-50px" }} // Triggers animation on scroll
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.1 } }
              }}
              className="h-full"
            >
              <SpotlightCard gradient={plan.gradient} className={plan.recommended ? "border-orange-500/40 shadow-[0_0_50px_rgba(249,115,22,0.15)]" : "hover:border-white/20"}>
                
                {/* Content Container with Staggered Animation */}
                <motion.div 
                  className="flex flex-col h-full p-8 lg:p-10"
                  variants={cardContainerVariants} // Applies staggered animation to children
                >
                  
                  {/* Recommended Badge */}
                  {plan.recommended && (
                    <div className="absolute top-0 right-0">
                      <div className="bg-gradient-to-bl from-orange-500 to-red-600 text-white text-[10px] font-extrabold uppercase tracking-widest py-2 px-4 rounded-bl-2xl shadow-lg flex items-center gap-1">
                        <Crown className="w-3 h-3 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="mb-8">
                    <motion.h3 variants={childVariants} className="text-xl font-bold mb-3 text-white">
                      {plan.name}
                    </motion.h3>
                    <motion.p variants={childVariants} className="text-sm text-white/50 leading-relaxed min-h-[40px]">
                      {plan.description}
                    </motion.p>
                  </div>

                  {/* Price Display */}
                  <motion.div variants={childVariants} className="mb-8">
                    <div className="flex items-baseline gap-1">
                      {plan.price !== "Custom" && <span className="text-sm text-white/40 font-medium">INR</span>}
                    </div>
                    <div className={`
                      text-5xl font-extrabold tracking-tighter
                      bg-gradient-to-br ${plan.gradient} bg-clip-text text-transparent
                      drop-shadow-[0_0_20px_rgba(255,255,255,0.25)]
                    `}>
                      {plan.price}
                    </div>
                    {plan.price !== "Custom" && <span className="text-xs text-white/30 uppercase tracking-widest mt-2 block">One-time payment</span>}
                  </motion.div>

                  {/* Divider */}
                  <motion.div variants={childVariants} className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-8" />

                  {/* Features */}
                  <ul className="space-y-4 mb-10 flex-1">
                    {plan.features.map((feature, idx) => (
                      <motion.li 
                        key={idx} 
                        variants={childVariants}
                        className="flex items-start gap-3 group/item"
                      >
                        <div className={`
                          mt-0.5 p-0.5 rounded-full flex-shrink-0 transition-colors duration-300
                          ${plan.recommended ? "bg-orange-500 text-white shadow-orange-500/50 shadow-md" : "bg-white/10 text-white/60 group-hover/item:bg-white/20 group-hover/item:text-white"}
                        `}>
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-sm text-white/70 group-hover/item:text-white transition-colors duration-300">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Action Button */}
                  <motion.div variants={childVariants}>
                    <button
                      className={`
                        w-full py-4 rounded-xl text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all duration-300
                        ${plan.recommended 
                          ? "bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02]" 
                          : plan.isCustom
                            ? "bg-white text-black hover:bg-white/90 hover:scale-[1.02]"
                            : "bg-white/5 text-white border border-white/10 hover:bg-white/10 hover:border-white/30 hover:text-white hover:scale-[1.02]"
                        }
                      `}
                    >
                      {plan.buttonText}
                      {plan.isCustom ? <MessageCircle className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                    </button>
                  </motion.div>

                </motion.div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-sm text-white/30">
            * All plans include standard support. Prices may vary based on specific customization.
          </p>
        </motion.div>
        
      </div>
    </section>
  )
}