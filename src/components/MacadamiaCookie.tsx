import React, { useState, useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useMotionTemplate, useTransform } from 'motion/react';

export function MacadamiaCard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // Framer motion values for 3D rotation
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  
  // Create a gradient reflection that moves with the rotation
  const backgroundX = useTransform(rotateY, [-8, 8], [26, 74]);
  const backgroundY = useTransform(rotateX, [-8, 8], [74, 26]);
  const backgroundGradient = useMotionTemplate`radial-gradient(circle at ${backgroundX}% ${backgroundY}%, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 60%)`;

  // High-performance animation loop using Framer Motion
  useAnimationFrame((time) => {
    // 1. Update 3D wobble
    rotateX.set(Math.sin(time / 1500) * 8);
    rotateY.set(Math.cos(time / 2000) * 8);
  });

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3.0; // Play 3x faster for an immediate splash
      videoRef.current.currentTime = 0;
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <motion.div 
        onClick={handleClick}
        className="relative w-[90vw] md:w-[600px] lg:w-[800px] aspect-[4/3] sm:aspect-video rounded-2xl shadow-2xl shrink-0 cursor-pointer"
        style={{
          perspective: 1000,
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
      >
        <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]">
          <img src="/macadamia.avif" alt="Macadamia Cookie animation" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        </div>
        
        {/* 3D Floating Content */}
        <div 
          className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-left"
          style={{ transform: 'translateZ(50px)' }}
        >
          <div className="text-[#8c8273] uppercase tracking-widest text-[0.6rem] mb-2">No. 01</div>
          <h3 className="font-serif text-3xl text-[#e2d5c3] mb-4">Macadamia</h3>
          <p className="text-[#a1998c] text-sm leading-relaxed font-light backdrop-blur-md bg-black/40 p-4 rounded-lg border border-white/10 shadow-lg md:max-w-md">
            Features toasted macadamia nuts, rich caramelized brown butter, salted caramel, and a sprinkle of flaky sea salt.
          </p>
        </div>
        
        <div className="absolute top-6 right-6" style={{ transform: 'translateZ(30px)' }}>
          <div className="w-10 h-10 border border-[#8c8273]/40 rounded-full flex items-center justify-center backdrop-blur-md bg-black/20 shadow-lg">
            <span className="text-[#8c8273] font-serif italic text-lg">N</span>
          </div>
        </div>
        
        {/* Inner reflection highlight for 3D realism */}
        <motion.div 
          className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-screen"
          style={{ background: backgroundGradient }}
        />
      </motion.div>

      {/* Screen-Space Splash Video Overlay */}
      <div 
        className={`fixed inset-0 w-[100vw] h-[100vh] z-50 pointer-events-none transition-opacity duration-300 ${isPlaying ? 'opacity-100' : 'opacity-0'}`}
        style={{ top: 0, left: 0 }}
      >
        <video 
          ref={videoRef}
          src="/macadamia-splash.webm"
          className="w-full h-full object-cover"
          playsInline
          muted
          onEnded={() => setIsPlaying(false)}
        />
      </div>
    </>
  );
}
