import React from 'react';
import { Calendar, Check } from 'lucide-react';
import profileImg from '../assets/profilo.jpeg';

const RESALIB_URL =
  'https://www.resalib.fr/praticien/138450-romane-de-fresnoye-sexotherapeute-lille';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 px-6 bg-gradient-to-b from-clay-50 via-clay-50/60 to-sand-50">
      {/* Decorative background shapes */}
      <div className="absolute top-10 right-0 w-[500px] h-[500px] rounded-full bg-terracotta-100/30 blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-terracotta-100/20 blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left Column */}
        <div className="space-y-7 animate-fade-up">
          <div className="flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-2 bg-terracotta-100 text-terracotta-700 text-xs font-semibold tracking-widest uppercase px-3.5 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta-500 animate-pulse-soft" />
              Cabinet à Lille & Téléconsultation
            </span>
            <span className="inline-block bg-white/70 border border-line text-ink-300 text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-xs">
              Certifiée CERFPA
            </span>
          </div>

          <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-[3.5rem] text-ink-900 leading-[1.08] tracking-tight">
            Retrouvez l&#8217;harmonie
            <br className="hidden sm:block" />
            <span className="text-terracotta-500"> intime</span> et
            <span className="text-terracotta-500"> relationnelle</span>.
          </h1>

          <p className="text-lg text-ink-500 font-light leading-relaxed max-w-xl">
            Sexothérapeute certifiée à Lille, je vous accueille avec bienveillance
            et sans tabou — en individuel, en couple ou pour adolescents — pour
            libérer la parole et renouer avec une vie affective épanouie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={RESALIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-terracotta-500 hover:bg-terracotta-600 text-white text-center px-8 py-4 rounded-full font-medium shadow-soft hover:shadow-glow transition-all duration-300"
            >
              <Calendar size={18} />
              <span>Prendre RDV en ligne</span>
            </a>
            <a
              href="#cabinet"
              className="inline-flex items-center justify-center border border-line-soft hover:border-terracotta-500 text-ink-700 hover:text-terracotta-500 text-center px-8 py-4 rounded-full font-medium bg-white/50 backdrop-blur-xs transition-all duration-300"
            >
              Découvrir le Cabinet
            </a>
          </div>
        </div>

        {/* Right Column: Photo + floating badge */}
        <div className="relative animate-fade-up animation-delay-200">
          {/* Decorative ring behind image */}
          <div className="absolute -inset-4 rounded-[2rem] border-2 border-dashed border-terracotta-200/50 animate-[spin_60s_linear_infinite] pointer-events-none hidden lg:block" />

          <div className="relative aspect-[4/5] rounded-[var(--radius-card)] bg-clay-50 overflow-hidden shadow-lift border-4 border-white">
            <img
              src={profileImg}
              alt="Romane de Fresnoye – Sexothérapeute à Lille"
              loading="eager"
              className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-[1.03]"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-ink-900/15 to-transparent pointer-events-none" />
          </div>

          {/* Floating trust badge */}
          <div className="absolute -bottom-5 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lift border border-line max-w-[260px] animate-float">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-terracotta-100 flex items-center justify-center text-terracotta-500 shrink-0">
                <Check size={22} strokeWidth={2.5} />
              </div>
              <div>
                <p className="font-display font-bold text-ink-900 text-sm leading-snug">
                  Confidentialité absolue
                </p>
                <p className="text-[11px] text-ink-300 mt-0.5 leading-snug">
                  Écoute active et absence totale de jugement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
