"use client"

import { useRef } from "react"
import { motion } from "framer-motion"
import { Check, Star, ArrowRight, Sparkles, Crown, Briefcase, FileBadge, PenTool } from "lucide-react"

// Updated Bundle Data (Design & Documentation Only)
const bundles = [
  {
    title: "Identity Starter",
    subtitle: "Essential branding assets to make your business official.",
    price: "₹4,999",
    originalPrice: "₹6,500",
    save: "Save 23%",
    features: [
      "Professional Logo Design (3 Concepts)",
      "Visiting Card (Double Sided + QR)",
      "Digital Stamp / Company Seal",
      "Official Letterhead Design",
      "Source Files (AI, PDF, PNG)"
    ],
    gradient: "from-cyan-400 to-blue-600",
    icon: PenTool,
    popular: false
  },
  {
    title: "Legal & Docs Suite",
    subtitle: "Professional document infrastructure for operations.",
    price: "₹7,999",
    originalPrice: "₹10,500",
    save: "Save 24%",
    features: [
      "Registration / Application Form Design",
      "Legal Agreement / Contract Format",
      "Project Proposal / Quotation Template",
      "Professional Invoice Design",
      "Terms & Conditions Layout"
    ],
    gradient: "from-amber-400 to-orange-600",
    icon: FileBadge,
    popular: true
  },
  {
    title: "Corporate 360°",
    subtitle: "Complete visual dominance: Branding + Docs + Marketing.",
    price: "₹14,999",
    originalPrice: "₹20,000",
    save: "Save 25%",
    features: [
      "Everything in Identity & Legal Packs",
      "Company Profile / Brochure (4 Pages)",
      "Social Media Intro Kit (5 Posts)",
      "Employee ID Card Templates",
      "Priority Delivery (48 Hours)"
    ],
    gradient: "from-purple-400 to-pink-600",
    icon: Crown,
    popular: false
  }
]

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export function BundleSection() {
  const ref = useRef<HTMLDivElement>(null)

  return (
    <section ref={ref} className="relative py-12 lg:py-16 px-6 lg:px-12 overflow-hidden bg-[#050505]">
      
      {/* ═══════════════════════════════════════════════
         Background: Circuit Lines & Golden Glows
         ═══════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none">
        
        {/* Tech Circuit Pattern (SVG) */}
        <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
          <pattern id="circuit-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 L30 10 L30 30 M70 70 L90 70 L90 90 M10 90 L30 90 L30 70 M70 30 L90 30 L90 10" fill="none" stroke="white" strokeWidth="1"/>
            <circle cx="30" cy="30" r="2" fill="white"/>
            <circle cx="70" cy="70" r="2" fill="white"/>
          </pattern>
          <rect width="100%" height="100%" fill="url(#circuit-pattern)" />
        </svg>

        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-b from-purple-500/10 to-transparent blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-[1600px] mx-auto z-10">
        
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={containerVariants}
          className="text-center mb-16 lg:mb-20"
        >
          <motion.span variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-bold tracking-widest uppercase text-amber-500 mb-6 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
            <Briefcase className="w-3 h-3" />
            Value Packs
          </motion.span>
          
          <motion.h2 variants={itemVariants} className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Corporate Design Bundles
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg text-white/50 max-w-2xl mx-auto">
            Save up to 25% by choosing a complete branding or documentation ecosystem.
          </motion.p>
        </motion.div>

        {/* Bundles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {bundles.map((bundle, index) => {
            const Icon = bundle.icon
            return (
              <motion.div
                key={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, margin: "-50px" }}
                variants={{
                  hidden: { opacity: 0, y: 50, scale: 0.95 },
                  visible: { 
                    opacity: 1, 
                    y: 0, 
                    scale: 1, 
                    transition: { duration: 0.6, delay: index * 0.15 } 
                  }
                }}
                className={`relative group rounded-3xl p-1 transition-all duration-300 hover:scale-[1.02]`}
              >
                {/* Gradient Border Glow */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${bundle.gradient} opacity-20 group-hover:opacity-40 blur-md transition-opacity duration-500`} />
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${bundle.gradient} opacity-10`} />

                {/* Card Content */}
                <div className="relative h-full bg-[#0a0a0a] rounded-[22px] p-8 overflow-hidden border border-white/5 group-hover:border-white/10 flex flex-col">
                  
                  {/* Top Badge */}
                  {bundle.popular && (
                    <div className="absolute top-0 right-0 bg-gradient-to-bl from-amber-500 to-yellow-600 px-4 py-1.5 rounded-bl-xl text-[10px] font-bold uppercase tracking-widest text-black flex items-center gap-1 shadow-lg">
                      <Star className="w-3 h-3 fill-black" />
                      Most Popular
                    </div>
                  )}

                  {/* Icon & Title */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${bundle.gradient} flex items-center justify-center mb-6 shadow-lg shadow-black/50`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{bundle.title}</h3>
                  <p className="text-sm text-white/50 mb-6 min-h-[56px]">{bundle.subtitle}</p>

                  {/* Pricing */}
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-4xl font-bold text-white">{bundle.price}</span>
                     <div className="flex flex-col mb-1">
                      <span className="text-sm text-white/30 line-through decoration-white/30">{bundle.originalPrice}</span>
                      <span className={`text-xs font-bold bg-gradient-to-r ${bundle.gradient} bg-clip-text text-transparent`}>
                        {bundle.save}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px w-full bg-white/10 mb-6" />

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {bundle.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${bundle.popular ? "text-amber-400" : "text-white/60"}`} />
                        <span className="text-sm text-white/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button className={`w-full mt-auto py-3.5 rounded-xl text-sm font-bold tracking-wide uppercase flex items-center justify-center gap-2 transition-all 
                    ${bundle.popular 
                      ? "bg-gradient-to-r from-amber-500 to-yellow-500 text-black hover:shadow-[0_0_20px_rgba(245,158,11,0.4)]" 
                      : "bg-white/5 text-white hover:bg-white/10 border border-white/5"
                    }`}
                  >
                    Claim Bundle <ArrowRight className="w-4 h-4" />
                  </button>

                </div>
              </motion.div>
            )
          })}
        </div>

        {/* ═══════════════════════════════════════════════
           Custom Quote Section (Full Width)
           ═══════════════════════════════════════════════ */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.7 } }
          }}
          className="relative rounded-3xl overflow-hidden border border-white/10"
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f]" />
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          
          {/* Glowing Orbs */}
          <div className="absolute -top-[100px] -left-[100px] w-[300px] h-[300px] bg-purple-600/20 rounded-full blur-[80px] animate-pulse-slow" />
          <div className="absolute -bottom-[100px] -right-[100px] w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[80px] animate-pulse-slow" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 lg:p-12 items-center">
            
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-white/60 mb-6">
                <Sparkles className="w-3 h-3" />
                Custom Order
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Need something unique? <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-400 to-gray-600">
                  Let's design it.
                </span>
              </h3>
              <p className="text-lg text-white/50 leading-relaxed max-w-xl">
                Looking for a specific combination of designs? Need bulk employee ID cards or a complex legal contract structure? We create custom quotes tailored to your exact needs.
              </p>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-6">
              <div className="flex flex-wrap gap-3 justify-start lg:justify-end">
                {["Bulk ID Cards", "Complex Contracts", "Annual Reports", "Event Branding"].map((tag) => (
                  <span key={tag} className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-sm text-white/70">
                    {tag}
                  </span>
                ))}
              </div>
              
              <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full text-base font-bold tracking-wide overflow-hidden transition-all hover:w-[220px]">
                <span className="relative z-10">Get Custom Quote</span>
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
                <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <p className="text-sm text-white/30">
                Response time: Within 2 hours
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}
