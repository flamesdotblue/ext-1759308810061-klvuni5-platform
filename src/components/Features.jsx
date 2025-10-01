import React from 'react';
import { Hexagon, Shield, Globe, Zap } from 'lucide-react';

const features = [
  {
    icon: Hexagon,
    title: 'Honeycomb Architecture',
    desc: 'A modular, hexagonal layout engineered for scalability and elegant data flow.'
  },
  {
    icon: Zap,
    title: 'Always-On Efficiency',
    desc: "Inspired by the hive: streamlined interactions, fast rendering, and buttery UX."
  },
  {
    icon: Shield,
    title: 'Resilient by Design',
    desc: 'Hardened surfaces and guarded routes keep your experience safe and stable.'
  },
  {
    icon: Globe,
    title: 'Web-Native & Responsive',
    desc: 'Built with modern web tech so the experience adapts to any device or viewport.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-center text-3xl font-semibold">
          Crafted for Flow
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-white/70">
          A digital hive with thoughtful details that make complexity feel simple.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] backdrop-blur-sm transition hover:bg-white/10">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-400/20">
                <f.icon className="h-6 w-6 text-yellow-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
