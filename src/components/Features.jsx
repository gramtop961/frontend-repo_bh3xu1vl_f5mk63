import React from 'react';
import { Shield, QrCode, Cpu, Contact } from 'lucide-react';

const features = [
  {
    icon: QrCode,
    title: 'QR + NFC Access',
    desc: 'Scan or tap to instantly view allergies, medications, blood type, and more—no app required.'
  },
  {
    icon: Shield,
    title: 'Security First',
    desc: 'Encrypted profiles with role-based views keep sensitive information protected and compliant.'
  },
  {
    icon: Cpu,
    title: 'Smart & Customizable',
    desc: 'Personalize wristbands, keychains, and cards to fit lifestyles while staying medically ready.'
  },
  {
    icon: Contact,
    title: 'Emergency Contacts',
    desc: 'One tap access to family and physician contacts helps responders coordinate faster.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative w-full bg-black py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Built for critical moments</h2>
          <p className="mt-3 text-white/70">
            Hardware that meets software—designed so lifesaving information is always one scan away.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/[0.06]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300 ring-1 ring-cyan-500/30">
                <Icon size={22} />
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
