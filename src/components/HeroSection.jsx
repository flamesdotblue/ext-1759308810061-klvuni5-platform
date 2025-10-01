import React from 'react';
import Spline from '@splinetool/react-spline';
import { Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline style={{ width: '100%', height: '100%' }} scene="https://prod.spline.design/xa5cMvp2ipgnnda2/scene.splinecode" />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-neutral-950/80" />

      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 backdrop-blur">
            <Sparkles className="h-4 w-4 text-yellow-300" />
            <span className="text-sm text-yellow-100">Interactive Honeycomb Experience</span>
          </div>
          <h1 className="font-semibold tracking-tight text-4xl sm:text-5xl md:text-6xl">
            The Hive, Reimagined: Technology in Perfect Harmony
          </h1>
          <p className="mt-4 text-base text-white/80 sm:text-lg">
            A 3D close-up of a honeycomb-like world where innovation hums. Explore a modern, digital hive engineered for flow, focus, and delight.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#features"
              className="rounded-lg bg-yellow-400 px-5 py-3 font-medium text-black transition hover:bg-yellow-300"
            >
              Explore Features
            </a>
            <a
              href="#quote"
              className="rounded-lg border border-white/20 px-5 py-3 font-medium text-white/90 transition hover:border-white/40"
            >
              Read the Opening Lines
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
