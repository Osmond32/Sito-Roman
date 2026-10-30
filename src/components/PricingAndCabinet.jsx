import React from 'react';
import { MapPin, Clock, Train, Video, ExternalLink, Calendar, Sparkles } from 'lucide-react';
import studioImg from '../assets/Studio.jpeg';

const RESALIB_URL =
  'https://www.resalib.fr/praticien/138450-romane-de-fresnoye-sexotherapeute-lille';

const PricingAndCabinet = () => {
  return (
    <section id="cabinet" className="py-24 md:py-32 px-6 bg-sand-50">
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Intestazione Sezione */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-terracotta-700 bg-terracotta-100/60 px-3.5 py-1.5 rounded-full inline-block">
            Le Cabinet & Les Consultations
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-900 tracking-tight">
            Un cocon d’écoute au cœur de Lille
          </h2>
          <p className="text-base text-ink-500 font-light leading-relaxed">
            Un espace confidentiel, chaleureux et apaisant conçu pour favoriser l’échange libre et la sérénité.
          </p>
        </div>

        {/* Studio Showcase: Foto dello Studio con Dettagli */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-clay-50/80 p-6 sm:p-10 md:p-12 rounded-[var(--radius-card)] border border-line shadow-soft">
          {/* Foto dello studio */}
          <div className="lg:col-span-7">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lift border-4 border-white group">
              <img
                src={studioImg}
                alt="Cabinet de sexothérapie de Romane de Fresnoye à Lille"
                className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md px-4 py-3 rounded-xl border border-line flex items-center justify-between text-xs text-ink-900 shadow-soft">
                <span className="font-display font-bold flex items-center gap-1.5">
                  <Sparkles size={14} className="text-terracotta-500" />
                  Cabinet Romane de Fresnoye
                </span>
                <span className="text-ink-300 font-medium">55 rue Jeanne d'Arc, Lille</span>
              </div>
            </div>
          </div>

          {/* Dettagli & Posizione dello studio */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-terracotta-700">
                Adresse & Accès
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink-900 mt-1">
                Venir au Cabinet
              </h3>
            </div>

            <p className="text-ink-500 text-sm sm:text-base leading-relaxed font-light">
              Idéalement situé au 55 rue Jeanne d'Arc, le cabinet offre un cadre calme et discret où vous serez accueilli(e) en toute sérénité.
            </p>

            <div className="space-y-3.5 pt-2 text-sm text-ink-700">
              <div className="flex items-start gap-3.5 p-3.5 bg-white/80 rounded-xl border border-line">
                <MapPin className="text-terracotta-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <strong className="font-semibold text-ink-900 block">Adresse :</strong>
                  <span className="text-ink-500">55 rue Jeanne d'Arc, 59000 Lille</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-white/80 rounded-xl border border-line">
                <Train className="text-terracotta-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <strong className="font-semibold text-ink-900 block">Transports en commun :</strong>
                  <span className="text-ink-500">Métro République – Beaux-Arts (Ligne 1)</span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 bg-white/80 rounded-xl border border-line">
                <Clock className="text-terracotta-500 shrink-0 mt-0.5" size={20} />
                <div>
                  <strong className="font-semibold text-ink-900 block">Disponibilités :</strong>
                  <span className="text-ink-500">Sur rendez-vous du lundi au samedi</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tarifs & Modalités */}
        <div id="tarifs" className="pt-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold tracking-widest uppercase text-terracotta-700 bg-terracotta-100/60 px-3.5 py-1.5 rounded-full inline-block">
                Tarifs clairs & transparents
              </span>
              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink-900 leading-tight">
                Consultations & Réservation
              </h3>
              <p className="text-ink-500 text-sm sm:text-base font-light leading-relaxed">
                Les consultations se déroulent au cabinet à Lille ou en visioconférence sécurisée selon votre préférence. La réservation s'effectue en quelques clics via Resalib.
              </p>

              <div className="flex items-center gap-3 p-4 bg-clay-50/90 rounded-2xl border border-line text-xs sm:text-sm text-ink-500">
                <Video className="text-terracotta-500 shrink-0" size={20} />
                <span>
                  <strong>Téléconsultation disponible :</strong> Idéal si vous habitez loin ou préférez échanger depuis votre domicile.
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              {/* Card 1 */}
              <div className="p-6 bg-white rounded-2xl border border-line shadow-soft flex justify-between items-center hover:border-terracotta-200 transition-colors">
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-terracotta-700">Individuel</span>
                  <p className="font-display font-bold text-ink-900 text-base sm:text-lg mt-0.5">
                    Séance Individuelle (Adulte ou Adolescent)
                  </p>
                  <p className="text-xs sm:text-sm text-ink-300 mt-0.5">
                    Au cabinet à Lille ou à distance en téléconsultation
                  </p>
                </div>
                <div className="text-right ml-4 shrink-0">
                  <span className="font-display font-bold text-terracotta-500 text-2xl sm:text-3xl">
                    60 €
                  </span>
                  <span className="block text-[11px] text-ink-300">par séance</span>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 bg-white rounded-2xl border border-line shadow-soft flex justify-between items-center hover:border-terracotta-200 transition-colors">
                <div>
                  <span className="text-xs uppercase font-semibold tracking-wider text-terracotta-700">Couple</span>
                  <p className="font-display font-bold text-ink-900 text-base sm:text-lg mt-0.5">
                    Séance de Couple
                  </p>
                  <p className="text-xs sm:text-sm text-ink-300 mt-0.5">
                    Accompagnement de l'intimité et de la dynamique relationnelle
                  </p>
                </div>
                <div className="text-right ml-4 shrink-0">
                  <span className="font-display font-bold text-terracotta-500 text-2xl sm:text-3xl">
                    60 €
                  </span>
                  <span className="block text-[11px] text-ink-300">par séance</span>
                </div>
              </div>

              {/* CTA Resalib */}
              <div className="pt-2">
                <a
                  href={RESALIB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-4 px-6 rounded-full font-medium shadow-soft hover:shadow-glow transition-all duration-300 flex items-center justify-center gap-2 text-base"
                >
                  <Calendar size={18} />
                  <span>Prendre rendez-vous en ligne sur Resalib</span>
                  <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingAndCabinet;
