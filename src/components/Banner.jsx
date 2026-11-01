import React from 'react';
import bannerImg from '../assets/Gemini_Generated_Image_4rsx5l4rsx5l4rsx.jpg';

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden my-4 sm:my-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative h-64 sm:h-80 md:h-96 lg:h-[420px] rounded-[var(--radius-card)] overflow-hidden shadow-lift border-4 border-white group">
          <img
            src={bannerImg}
            alt="Atmosphère sereine et apaisante"
            className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-1000 ease-out"
          />

          {/* Sfumature eleganti per integrarla perfettamente nella palette */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink-900/60 via-ink-900/30 to-transparent flex items-center">
            <div className="px-8 sm:px-12 md:px-16 max-w-xl text-white space-y-3">
              <span className="inline-block text-xs uppercase tracking-[0.2em] font-semibold text-terracotta-200 bg-white/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/20">
                Espace & Bien-être
              </span>
              <p className="font-display text-2xl sm:text-3xl md:text-4xl text-white font-medium leading-tight">
                Prendre le temps d’écouter et de se reconnecter.
              </p>
              <p className="text-sm sm:text-base text-sand-50/90 font-light leading-relaxed hidden sm:block">
                Un cheminement personnel pour retrouver l’apaisement et la confiance au quotidien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
