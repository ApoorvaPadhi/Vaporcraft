"use client";

import { motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import Image from "next/image";
import { User, MessageCircle, Settings } from "lucide-react";
import { useEffect, useState } from "react";

export default function Home() {
  // State to manage when animations should begin
  const [shouldAnimate, setShouldAnimate] = useState(false);
  // State for the year
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setShouldAnimate(true); // Enable animations only after the component has mounted
    setYear(new Date().getFullYear()); // Set the year dynamically on the client
  }, []);

  return (
    <ParallaxProvider>
      <div className="bg-background text-primary min-h-screen p-8">
        {/* Navbar */}
        <header className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <img
              src="/favicon-32x32.png"
              alt="Vaporcraft Logo"
              className="h-10 w-10 object-contain"
            />
            <h1 className="text-3xl font-header font-bold">VAPORCRAFT</h1>
          </div>
          <nav className="flex gap-6">
            {["About", "Features", "Join"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="relative group font-bold text-lg tracking-wider text-primary transition-colors duration-300"
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
        <section className="relative flex flex-col items-center justify-center h-screen bg-secondary text-background text-center">
          {shouldAnimate && (
            <>
              <motion.h2
                className="text-5xl font-header"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
              >
                Coming Soon
              </motion.h2>
              <motion.p
                className="mt-4 font-body text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1.5 }}
              >
                Veritable AI Powered Online Retail
              </motion.p>
              <motion.p
                className="mt-4 font-body text-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1.5 }}
              >
                Stay tuned for a reimagined shopping experience
              </motion.p>
            </>
          )}
        </section>

        {/* About Section */}
        <motion.section
          id="about"
          className="py-16 px-8"
          initial={shouldAnimate ? { opacity: 0, x: -100 } : {}}
          animate={shouldAnimate ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-header font-semibold mb-6 text-center">
            About Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <motion.div
              className="font-body text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
            >
              <p>
                At <span className="font-bold text-accent">Vaporcraft</span>, we are transforming the online retail experience by putting 
                <span className="italic"> you </span>— the customer — at the heart of every purchase. Our AI-powered platform curates personalized shopping 
                experiences based on your preferences, creating a seamless connection between you and the products you love.
              </p>
              <p className="mt-4">
                Founded with a vision to simplify and humanize digital shopping, 
                Vaporcraft ensures that every recommendation is tailored specifically to you—whether it is custom-crafted perfumes, mood-matching artwork, 
                or essentials that fit your lifestyle.
              </p>
              <p className="mt-4 font-semibold">
                Discover a shopping experience that is intuitive, enjoyable, and uniquely yours.
              </p>
            </motion.div>

            {/* Image or Graphic */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              <Image
                src="/AI.png"
                alt="About Us Graphic"
                className="rounded-lg shadow-lg"
                width={500}
                height={400}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-accent/40 to-transparent rounded-lg pointer-events-none"></div>
            </motion.div>
          </div>
        </motion.section>

        {/* Features Section */}
        <motion.section
          id="features"
          className="py-16 px-8 bg-secondary"
          initial={shouldAnimate ? { opacity: 0, y: 100 } : {}}
          animate={shouldAnimate ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl text-background font-header text-center mb-6">Features</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                title: "Your AI Shopping Twin",
                description:
                  "Create your digital persona by sharing your physical, social, and psychological attributes. Our AI understands everything from your style preferences to life events, ensuring recommendations that truly reflect you.",
                icon: <User className="h-12 w-12 text-accent" />,
              },
              {
                title: "Natural Conversations, Better Results",
                description:
                  "Skip the endless scrolling and filtering. Simply tell us about yourself in natural language, and our AI will understand your needs, presenting you with the three most suitable options for any search.",
                icon: <MessageCircle className="h-12 w-12 text-accent" />,
              },
              {
                title: "Custom-Crafted Solutions",
                description:
                  "Beyond standard products, discover items specially crafted for you - from perfumes matching your mood to artwork reflecting your vibe. Each recommendation becomes more personalized as our AI learns your preferences.",
                icon: <Settings className="h-12 w-12 text-accent" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="p-6 bg-background text-primary rounded-lg shadow-lg"
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: "easeOut",
                }}
              >
                <div className="flex items-center gap-4 mb-4">
                  {feature.icon}
                  <h3 className="font-header text-2xl">{feature.title}</h3>
                </div>
                <p className="font-body mt-2">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Join Mailing List */}
        <section
          id="mailing-list"
          className="py-16 px-8 bg-background text-primary text-center"
        >
          <h2 className="text-4xl font-header mb-6">Join Our Mailing List</h2>
          <form className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-4 text-primary rounded-lg w-full sm:w-auto"
            />
            <button className="bg-primary text-background px-6 py-3 rounded-lg">
              Subscribe
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center bg-primary text-background">
          <p className="font-body">
            © {year || "Loading..."} Vaporcraft. All rights reserved.
          </p>
        </footer>
      </div>
    </ParallaxProvider>
  );
}
