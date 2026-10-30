import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const specialtiesData = [
  {
    number: '01',
    title: 'Thérapie de Couple & Communication',
    description:
      'Difficultés de communication, baisse ou discordance du désir, traversée d’une crise, reconnexion affective et intimité partagée.',
    audience: 'Pour les couples',
    highlight: 'Rétablir le dialogue',
  },
  {
    number: '02',
    title: 'Troubles de la Sexualité',
    description:
      'Prise en charge des blocages intimes : pannes d’érection, éjaculation prématurée, douleurs intimes (vaginisme, dyspareunie) et anorgasmie.',
    audience: 'Adultes & Adolescents',
    highlight: 'Retrouver la sérénité',
  },
  {
    number: '03',
    title: 'Estime de Soi & Relation au Corps',
    description:
      'Accompagnement individuel face à l’anxiété de performance, aux complexes corporels, au manque de confiance et à la réconciliation intime.',
    audience: 'Accompagnement individuel',
    highlight: 'S’épanouir pleinement',
  },
];

const Specialties = () => {
  return (
    <section id="specialites" className="py-24 md:py-32 px-6 bg-clay-50/70 relative">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-terracotta-700 bg-terracotta-100/60 px-3.5 py-1.5 rounded-full inline-block">
            Domaines d’intervention
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-900 tracking-tight">
            Comment puis-je vous accompagner ?
          </h2>
          <p className="text-base text-ink-500 font-light leading-relaxed">
            Des consultations ciblées et personnalisées pour adultes, couples et adolescents, en toute bienveillance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialtiesData.map((spec) => (
            <article
              key={spec.number}
              className="group relative p-8 md:p-10 bg-white rounded-[var(--radius-card)] shadow-soft border border-line hover:shadow-lift hover:-translate-y-1.5 hover:border-terracotta-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="w-13 h-13 rounded-2xl bg-terracotta-50 group-hover:bg-terracotta-100 text-terracotta-700 flex items-center justify-center font-display text-2xl font-bold transition-colors">
                    {spec.number}
                  </span>
                  <span className="text-xs font-semibold text-terracotta-700 bg-sand-50 px-3 py-1 rounded-full border border-line">
                    {spec.audience}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-medium text-terracotta-600 mb-2">
                  <Sparkles size={14} />
                  <span>{spec.highlight}</span>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink-900 mb-4 group-hover:text-terracotta-700 transition-colors">
                  {spec.title}
                </h3>

                <p className="text-ink-500 text-sm sm:text-base leading-relaxed font-light">
                  {spec.description}
                </p>
              </div>

              <div className="pt-8 mt-6 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-ink-300 group-hover:text-terracotta-700 transition-colors">
                <span>Cabinet ou visio</span>
                <ArrowUpRight size={16} className="transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
