import React from 'react';
import HeroSection from './components/HeroSection';
import QuoteSection from './components/QuoteSection';
import Features from './components/Features';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <HeroSection />
      <QuoteSection />
      <Features />
      <Footer />
    </div>
  );
}
