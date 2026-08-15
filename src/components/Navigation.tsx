import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 flex items-center justify-between px-6 py-8 text-[#e2d5c3] pointer-events-auto">
        <Link to="/" className="font-serif text-lg tracking-[0.3em] uppercase z-50">Nulla</Link>
        <div className="flex gap-8 items-center z-50">
          <Link to="/" className="text-xs uppercase tracking-[0.2em] hidden md:block hover:text-white transition-colors">Story</Link>
          <Link to="/collection" className="text-xs uppercase tracking-[0.2em] hidden md:block hover:text-white transition-colors">Collection</Link>
          <button className="hover:text-white transition-colors"><ShoppingBag size={20} strokeWidth={1.5} /></button>
          <button 
            className="md:hidden hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-[#050505] z-40 flex flex-col items-center justify-center gap-12 transition-all duration-500 ease-in-out md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <Link 
          to="/" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-serif text-[#e2d5c3] hover:text-white transition-colors"
        >
          Story
        </Link>
        <Link 
          to="/collection" 
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-2xl font-serif text-[#e2d5c3] hover:text-white transition-colors"
        >
          Collection
        </Link>
      </div>
    </>
  );
}
