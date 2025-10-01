import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-white/60 sm:flex-row">
        <p>© {new Date().getFullYear()} The Digital Hive</p>
        <nav className="flex items-center gap-5">
          <a href="#features" className="hover:text-white/90">Features</a>
          <a href="#quote" className="hover:text-white/90">Opening Lines</a>
          <a href="#" className="hover:text-white/90">Back to Top</a>
        </nav>
      </div>
    </footer>
  );
}
