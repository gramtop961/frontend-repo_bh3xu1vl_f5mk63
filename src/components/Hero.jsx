import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Subtle gradient overlays for readability */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/80 to-transparent" />

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl items-center px-6 md:px-10">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs md:text-sm text-white/80 backdrop-blur">
            <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
            Instant access. When every second matters.
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl">
            Secure medical profiles, unlocked with a scan or tap
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            Techora connects customizable accessories to a secure online medical profile via QR and NFC. First responders, hospitals, and insurers get the details they need—fast.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
            >
              See how it works
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              Explore features
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-white/70">
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">60s</span>
              <span className="text-sm">setup</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">24/7</span>
              <span className="text-sm">access</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="text-xl font-semibold text-white">HIPAA</span>
              <span className="text-sm">aligned</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
