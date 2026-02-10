"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Stats Data
const stats = [
  { number: "150+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "24/7", label: "Dedicated Support" },
];

// Animation Variants (Smoke/Blur Effect)
const smokeVariant = {
  hidden: { opacity: 0, filter: "blur(10px)", y: 10 },
  visible: { opacity: 1, filter: "blur(0px)", y: 0 },
};

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative pt-12 pb-24 lg:pt-20 lg:pb-32 px-6 lg:px-12 max-w-[1800px] mx-auto overflow-hidden"
    >
      {/* Background Decorative Gradient (Optional Glow) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[128px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-8"
        >
          <span className="glass-card-heavy inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-medium tracking-widest uppercase text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            About The Studio
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="h-[1px] w-12 bg-primary/50"></span>
          <span className="text-sm font-semibold tracking-widest uppercase text-muted-foreground">
            Who We Are
          </span>
        </motion.div>

        {/* Main Heading with Smoke Reveal */}
        <motion.h2
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ staggerChildren: 0.1 }}
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground mb-12 md:mb-16"
        >
          <motion.span variants={smokeVariant} className="inline-block">
            We define
          </motion.span>{" "}
          <motion.span
            variants={smokeVariant}
            className="italic font-light text-primary inline-block"
          >
            Digital
          </motion.span>{" "}
          <motion.span
            variants={smokeVariant}
            className="bg-gradient-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent inline-block"
          >
            Excellence
          </motion.span>
          .
        </motion.h2>

        {/* Description Paragraph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-base lg:text-lg text-muted-foreground max-w-3xl leading-relaxed mb-16 space-y-6"
        >
          <p>
            <strong className="text-foreground">WEB শৈলী (Shoili)</strong> isn't just an agency; it represents a unique method of craftsmanship. In Bengali, <em>'Shoili'</em> means style or manner. We bring that distinct artistic touch to every line of code we write.
          </p>
          <p>
            We bridge the gap between complex engineering and elegant design. Whether it's a high-performance web app or a stunning brand identity, we ensure your digital presence is not just functional, but unforgettable.
          </p>
        </motion.div>

        {/* Enhanced Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ delay: 0.7 + i * 0.15, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="relative group"
            >
              {/* Card Background & Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -z-10 blur-xl" />
              
              <div className="h-full p-8 rounded-2xl bg-background/40 border border-white/10 backdrop-blur-md shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300">
                <span className="block text-5xl lg:text-6xl font-bold bg-gradient-to-b from-foreground to-foreground/40 bg-clip-text text-transparent tracking-tighter mb-2 group-hover:scale-105 transition-transform duration-300 origin-left">
                  {stat.number}
                </span>
                <div className="h-1 w-12 bg-primary/20 group-hover:bg-primary group-hover:w-full transition-all duration-500 mb-4 rounded-full" />
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors">
                  {stat.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
