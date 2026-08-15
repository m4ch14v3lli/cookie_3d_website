import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CookieBoxSequence } from '../components/CookieBoxSequence';
import { motion } from 'motion/react';

export function Home() {
  return (
    <>
      <CookieBoxSequence frameCount={300} />

      <Navigation />

      <main className="relative w-full z-10 flex flex-col">
        
        {/* Hero Section */}
        <section className="h-[100vh] w-full flex flex-col items-center justify-center p-6 text-center relative pointer-events-none">
          <div className="bg-[#050505]/40 backdrop-blur-md p-8 md:p-14 rounded-2xl border border-white/10 pointer-events-auto shadow-2xl mx-4 md:mx-0 mt-[-10vh]">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#e2d5c3] mb-6 tracking-tight drop-shadow-lg">
              A Symphony<br />of Flavor.
            </h1>
            <p className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase text-[#e2d5c3] max-w-md mx-auto leading-loose font-medium drop-shadow-md">
              Experience the art of authentic confections, crafted with intention and globally sourced ingredients.
            </p>
          </div>
          
          <div className="absolute bottom-10 flex flex-col items-center gap-4 text-[#e2d5c3] animate-pulse drop-shadow-md">
            <span className="text-[0.6rem] uppercase tracking-widest font-bold">Scroll to reveal</span>
            <ArrowDown size={16} strokeWidth={2} />
          </div>
        </section>

        {/* First Lift Phase - Left Aligned */}
        <section className="h-[120vh] w-full flex items-center justify-start p-8 md:p-16 lg:p-24 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#0a0a0a]/50 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-sm max-w-sm shadow-2xl relative overflow-hidden pointer-events-auto mt-[30vh]"
          >
            <div className="text-[#8c8273] uppercase tracking-widest text-[0.6rem] mb-4">Phase 01</div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#e2d5c3] mb-4 drop-shadow-md">The Reveal</h2>
            <p className="text-[#e2d5c3]/80 text-sm leading-relaxed font-light">
              As the box opens, the aroma of caramelized butter and toasted sugars fills the air. Every layer is carefully stacked to preserve the delicate structural integrity of our craft.
            </p>
          </motion.div>
        </section>

        {/* Second Lift Phase - Right Aligned */}
        <section className="h-[120vh] w-full flex items-center justify-end p-8 md:p-16 lg:p-24 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#0a0a0a]/50 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-sm max-w-sm shadow-2xl relative overflow-hidden pointer-events-auto"
          >
            <div className="text-[#8c8273] uppercase tracking-widest text-[0.6rem] mb-4">Phase 02</div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#e2d5c3] mb-4 drop-shadow-md">Ascension</h2>
            <p className="text-[#e2d5c3]/80 text-sm leading-relaxed font-light">
              Watch as each distinct flavor profile separates. The S'mores, the Blueberry, and the Macadamia, lifting perfectly to showcase their artisanal crags and golden-baked edges.
            </p>
          </motion.div>
        </section>

        {/* Final Phase - Left Aligned */}
        <section className="h-[120vh] w-full flex items-center justify-start p-8 md:p-16 lg:p-24 pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-20%" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="bg-[#0a0a0a]/50 backdrop-blur-xl p-8 md:p-12 border border-white/10 rounded-sm max-w-sm shadow-2xl relative overflow-hidden pointer-events-auto mb-[20vh]"
          >
            <div className="text-[#8c8273] uppercase tracking-widest text-[0.6rem] mb-4">Phase 03</div>
            <h2 className="font-serif text-3xl md:text-4xl text-[#e2d5c3] mb-4 drop-shadow-md">The Selection</h2>
            <p className="text-[#e2d5c3]/80 text-sm leading-relaxed font-light mb-8">
               suspended in perfect harmony. Every cookie is a masterpiece waiting to be chosen. Explore our collection to discover the story behind each recipe.
            </p>
            <Link to="/collection" className="text-[#e2d5c3] font-medium uppercase tracking-widest text-xs border-b border-[#e2d5c3]/50 pb-1 hover:text-white hover:border-white transition-all duration-300">
              Explore The Collection
            </Link>
          </motion.div>
        </section>

        <Footer />

      </main>
    </>
  );
}
