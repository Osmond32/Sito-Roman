import React from 'react';
import { ExternalLink, MapPin, Mail, Clock } from 'lucide-react';

const RESALIB_URL =
  'https://www.resalib.fr/praticien/138450-romane-de-fresnoye-sexotherapeute-lille';

const Footer = () => {
  return (
    <footer className="bg-ink-900 text-sand-50 py-16 px-6 border-t border-ink-700/50">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Colonna 1: Identità & Filosofia */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-full bg-terracotta-500/20 text-terracotta-200 flex items-center justify-center font-display text-lg font-bold">
                RF
              </span>
              <div>
                <p className="font-display text-xl font-bold text-white">Romane de Fresnoye</p>
                <p className="text-xs text-ink-200 uppercase tracking-widest">
                  Sexothérapeute certifiée CERFPA
                </p>
              </div>
            </div>

            <p className="text-sm text-ink-100 font-light leading-relaxed max-w-sm">
              Accompagnement bienveillant et confidentiel en cabinet à Lille ou en téléconsultation pour adultes, couples et adolescents.
            </p>
          </div>

          {/* Colonna 2: Coordonnées & Accès */}
          <div className="md:col-span-4 space-y-3 text-sm text-ink-100">
            <p className="font-display font-semibold text-white text-base mb-2">Cabinet & Contact</p>

            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-terracotta-500 shrink-0 mt-1" />
              <span>55 rue Jeanne d'Arc, 59000 Lille (Métro République – Beaux-Arts)</span>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock size={16} className="text-terracotta-500 shrink-0" />
              <span>Du lundi au samedi sur rendez-vous</span>
            </div>

            <div className="flex items-center gap-2.5 pt-1">
              <Mail size={16} className="text-terracotta-500 shrink-0" />
              <span className="text-xs text-ink-200">Prise de contact via la messagerie Resalib</span>
            </div>
          </div>

          {/* Colonna 3: Accès rapide */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-display font-semibold text-white text-base">Réservation</p>
            <p className="text-xs text-ink-200 leading-relaxed font-light">
              Consultez les créneaux disponibles et réservez directement en ligne 24h/24.
            </p>
            <a
              href={RESALIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-terracotta-500 hover:bg-terracotta-600 text-white text-xs font-semibold px-5 py-3 rounded-full transition-colors shadow-soft"
            >
              <span>Prendre RDV sur Resalib</span>
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Bottom Bar: Copyright & mentions */}
        <div className="pt-8 border-t border-ink-700/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-ink-200">
          <p>© {new Date().getFullYear()} Romane de Fresnoye — Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <span>Entrepreneur individuel (SIRET déclaré)</span>
            <span>•</span>
            <a
              href={RESALIB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors underline underline-offset-4"
            >
              Fiche officielle Resalib
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
