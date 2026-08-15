import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BlueberryCard } from '../components/BlueberryCookie';
import { MacadamiaCard } from '../components/MacadamiaCookie';
import { SmoresCard } from '../components/SmoresCookie';

export function Collection() {
  return (
    <>
      <Navigation />
      <main className="relative w-full z-10 flex flex-col items-center pt-32 pb-20 min-h-screen">
        <h1 className="font-serif text-4xl text-[#e2d5c3] mb-16">The Collection</h1>
        <div className="flex flex-col gap-24 items-center">
           <MacadamiaCard />
           <SmoresCard />
           <BlueberryCard />
        </div>
      </main>
      <Footer />
    </>
  );
}
