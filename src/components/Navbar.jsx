import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#approche', label: 'Mon Approche' },
  { href: '#specialites', label: 'Accompagnements' },
  { href: '#cabinet', label: 'Le Cabinet' },
  { href: '#tarifs', label: 'Tarifs' },
  { href: '#faq', label: 'FAQ' },
];

const RESALIB_URL =
  'https://www.resalib.fr/praticien/138450-romane-de-fresnoye-sexotherapeute-lille';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-sand-50/85 backdrop-blur-md border-b border-line transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <span className="w-10 h-10 rounded-full bg-terracotta-100 group-hover:bg-terracotta-200 flex items-center justify-center text-terracotta-700 font-display text-lg font-bold transition-colors">
            RF
          </span>
          <div>
            <span className="font-display text-lg font-bold tracking-wide text-ink-900 block leading-tight">
              Romane de Fresnoye
            </span>
            <span className="text-[11px] uppercase tracking-[0.18em] text-terracotta-700 font-semibold">
              Sexothérapeute • Lille
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-ink-500">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className="relative py-1 hover:text-terracotta-500 transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-terracotta-500 after:transition-all hover:after:w-full after:rounded-full">
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA + hamburger */}
        <div className="flex items-center gap-4">
          <a
            href={RESALIB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-terracotta-500 hover:bg-terracotta-600 text-white px-5 py-2.5 rounded-full text-sm font-medium shadow-soft hover:shadow-glow transition-all duration-300"
          >
            Prendre Rendez-vous
          </a>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="md:hidden text-ink-700 p-2 rounded-lg hover:bg-clay-50 focus:outline-none transition-colors"
            aria-label="Menu"
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <nav className="bg-sand-50 border-b border-line px-6 py-6 flex flex-col gap-3 text-base font-medium text-ink-500">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 hover:text-terracotta-500 transition-colors">
              {l.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href={RESALIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="block text-center w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-3.5 rounded-full font-medium transition-colors"
            >
              Prendre Rendez-vous (Resalib)
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
