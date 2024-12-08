"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, MessageCircle, Settings } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface SectionProps {
  children: ReactNode; // React elements passed as children
  id: string; // Unique ID for the section
  className?: string; // Optional additional class names
  style?: React.CSSProperties; // Optional inline styles
}

export default function Home() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const Section = ({ children, id, className, style }: SectionProps) => {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

    return (
      <motion.section
        id={id}
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className={className}
        style={style}
      >
        {children}
      </motion.section>
    );
  };

  return (
    <div className="bg-background text-primary min-h-screen p-4 md:p-8">
      {/* Navbar */}
      <header className="flex flex-wrap justify-between items-center py-4">
        <div className="flex items-center gap-2">
          <img
            src="/favicon-32x32.png"
            alt="Vaporcraft Logo"
            className="h-8 w-8 object-contain md:h-10 md:w-10"
          />
          <h1 className="text-2xl md:text-3xl font-header font-bold">VAPORCRAFT</h1>
        </div>
        <nav className="flex flex-wrap gap-4 md:gap-6">
          {["About", "Features", "Join"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative group font-bold text-sm md:text-lg tracking-wider text-primary transition-colors duration-300"
            >
              <span className="group-hover:text-accent transition-colors duration-300">
                {item}
              </span>
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-gradient-to-r from-[#ab5c46] via-[#982e1b] to-[#5e3032] transition-all duration-500 ease-in-out group-hover:w-full"></span>
            </a>
          ))}
        </nav>
      </header>

      {/* Coming Soon Section */}
      <Section id="home" className="relative flex flex-col items-center justify-center h-screen bg-secondary text-background text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-header"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Coming Soon
        </motion.h2>
        <motion.p
          className="mt-4 font-body text-base md:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Veritable AI Powered Online Retail
        </motion.p>
        <motion.p
          className="mt-4 font-body text-sm md:text-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          Stay tuned for a reimagined shopping experience
        </motion.p>
      </Section>

      {/* About Section */}
      <Section id="about" className="py-16 px-4 md:px-8">
        <h2 className="text-3xl md:text-4xl font-header font-semibold mb-6 text-center">
          About Us
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <motion.div
            className="font-body text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <p>
              At <span className="font-bold text-accent">Vaporcraft</span>, we are transforming the online retail experience by putting{" "}
              <span className="italic">you</span>—the customer—at the heart of
              every purchase. Our AI-powered platform curates personalized shopping
              experiences based on your preferences, creating a seamless connection
              between you and the products you love.
            </p>
            <p className="mt-4">
              Founded with a vision to simplify and humanize digital shopping,
              Vaporcraft ensures that every recommendation is tailored specifically to
              you—whether it is custom-crafted perfumes, mood-matching artwork, or
              essentials that fit your lifestyle.
            </p>
            <p className="mt-4 font-semibold">
              Discover a shopping experience that is intuitive, enjoyable, and uniquely yours.
            </p>
          </motion.div>

          {/* Image or Graphic */}
          <motion.div
            className="relative w-full h-auto"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/AI.png"
              alt="About Us Graphic"
              className="rounded-lg shadow-lg object-cover w-full h-auto"
              width={500}
              height={400}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent rounded-lg pointer-events-none"></div>
          </motion.div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-8 text-center bg-primary text-background">
        <p className="font-body">
          © {year || "Loading..."} Vaporcraft. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
