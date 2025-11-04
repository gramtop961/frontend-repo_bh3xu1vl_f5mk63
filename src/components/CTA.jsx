import React from 'react';

export default function CTA() {
  return (
    <section className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.15),transparent_40%),radial-gradient(circle_at_80%_60%,rgba(59,130,246,0.12),transparent_35%)]" />
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 text-center shadow-2xl backdrop-blur">
        <h3 className="text-2xl font-semibold tracking-tight sm:text-3xl">
          Make your medical data instantly available—only when it counts
        </h3>
        <p className="mt-3 text-white/70">
          Join thousands putting safety first with QR and NFC powered profiles.
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#"
            className="inline-flex min-w-[180px] items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 text-sm font-medium text-black shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-400"
          >
            Get started
          </a>
          <a
            href="#"
            className="inline-flex min-w-[180px] items-center justify-center rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
          >
            View accessories
          </a>
        </div>
        <p className="mt-4 text-xs text-white/60">
          No app required. Works on any modern smartphone.
        </p>
      </div>
    </section>
  );
}
