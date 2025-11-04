import React from 'react';
import { ScanLine, UserCog, FileCheck2 } from 'lucide-react';

const steps = [
  {
    icon: UserCog,
    title: 'Create your profile',
    desc: 'Add allergies, conditions, medications, blood type, and emergency contacts in minutes.'
  },
  {
    icon: ScanLine,
    title: 'Link your accessory',
    desc: 'Pair a wristband, keychain, or card using the QR or NFC. Your details are now one scan away.'
  },
  {
    icon: FileCheck2,
    title: 'Share securely',
    desc: 'First responders and hospitals view essential info through a secure, read-only interface.'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative w-full bg-gradient-to-b from-black to-[#030712] py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">How Techora works</h2>
          <p className="mt-3 text-white/70">Set up in under a minute. Access anywhere, anytime.</p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/30">
                  <Icon size={20} />
                </div>
                <span className="text-sm text-white/60">Step {i + 1}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm text-white/70">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
