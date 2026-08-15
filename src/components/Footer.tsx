import React from 'react';

export function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/10 flex flex-col items-center justify-center text-center px-6 pointer-events-auto z-10 relative">
      <div className="font-serif text-2xl text-[#8c8273] italic mb-6">N</div>
      <div className="flex gap-6 mb-8">
        <a href="#" className="text-[#e2d5c3]/50 hover:text-[#e2d5c3] text-xs uppercase tracking-widest transition-colors">Instagram</a>
        <a href="#" className="text-[#e2d5c3]/50 hover:text-[#e2d5c3] text-xs uppercase tracking-widest transition-colors">Journal</a>
        <a href="#" className="text-[#e2d5c3]/50 hover:text-[#e2d5c3] text-xs uppercase tracking-widest transition-colors">Contact</a>
      </div>
      <p className="text-[#e2d5c3]/30 text-[0.65rem] uppercase tracking-widest">
        © {new Date().getFullYear()} Nulla Atelier. All rights reserved.
      </p>
      <p className="text-[#e2d5c3]/30 text-[0.65rem] uppercase tracking-widest mt-2">
        By Melbourne
      </p>
    </footer>
  );
}
