import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-black font-inter text-white">
      <Hero />
      <Features />
      <HowItWorks />
      <CTA />
      <footer className="w-full border-t border-white/10 bg-black py-10 text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-center text-sm md:flex-row md:text-left">
          <p className="text-white/60">© {new Date().getFullYear()} Techora. All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/60">
            <a href="#" className="transition hover:text-white">Privacy</a>
            <a href="#" className="transition hover:text-white">Security</a>
            <a href="#" className="transition hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
