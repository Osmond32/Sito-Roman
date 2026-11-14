import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const specialtiesData = [
  {
    number: '01',
    title: 'Comprendre et accompagner',
    paragraphs: [
      'La sexualité peut être influencée par de nombreux facteurs personnels, psychologiques, corporels et relationnels. À certaines périodes de la vie, des difficultés peuvent apparaître et affecter le bien-être individuel, la confiance en soi ou l\u2019équilibre du couple.',
      'La sexothérapie permet d\u2019aborder ces difficultés dans un cadre d\u2019écoute, de dialogue et de respect, sans jugement ni idées préconçues.',
    ],
  },
  {
    number: '02',
    title: 'Un accompagnement adapté',
    paragraphs: [
      'L\u2019accompagnement s\u2019inscrit dans une démarche individualisée, attentive à l\u2019histoire, aux besoins et au rythme de chacun.',
      'Baisse du désir, difficultés sexuelles, questionnements autour de l\u2019intimité ou difficultés dans sa vie sexuelle : les motifs de consultation sont variés et propres à chaque personne.',
      'Les séances permettent d\u2019explorer et définir les difficultés rencontrées, d\u2019en comprendre les différents aspects et ce qui peut influencer la vie sexuelle et relationnelle. Nous pourrons alors définir ensemble la façon d\u2019avancer.',
    ],
  },
  {
    number: '03',
    title: 'Accompagnement individuel',
    paragraphs: [
      'Parler de sexualité n\u2019est pas toujours facile.',
      'Certaines difficultés peuvent susciter de l\u2019inquiétude, de la gêne ou un sentiment d\u2019isolement. C\u2019est pour cela que je vous offre un espace pour aborder ces questions avec sérieux et bienveillance, dans le respect de l\u2019intimité de chacun.',
      'Que la démarche soit individuelle ou qu\u2019elle concerne la vie intime du couple, l\u2019objectif est de mieux comprendre la situation et d\u2019identifier des pistes de travail adaptées.',
    ],
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
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink-900 tracking-tight">
            Comment puis-je vous accompagner ?
          </h2>
          <p className="text-sm sm:text-base text-ink-500 font-light leading-relaxed">
            Des consultations ciblées et personnalisées pour adultes, couples et adolescents, en toute bienveillance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialtiesData.map((spec) => (
            <article
              key={spec.number}
              className="group relative p-7 sm:p-8 md:p-9 bg-white rounded-[var(--radius-card)] shadow-soft border border-line hover:shadow-lift hover:-translate-y-1.5 hover:border-terracotta-200 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="w-11 h-11 rounded-2xl bg-terracotta-50 group-hover:bg-terracotta-100 text-terracotta-700 flex items-center justify-center font-display text-xl font-bold transition-colors">
                    {spec.number}
                  </span>
                  <div className="inline-flex items-center gap-1.5 text-xs font-medium text-terracotta-600 bg-terracotta-50/80 px-2.5 py-1 rounded-full border border-terracotta-100">
                    <Sparkles size={13} className="text-terracotta-500" />
                    <span>Sexothérapie</span>
                  </div>
                </div>

                <h3 className="font-display text-lg sm:text-xl font-bold text-ink-900 mb-4 group-hover:text-terracotta-700 transition-colors">
                  {spec.title}
                </h3>

                <div className="space-y-3 text-[13.5px] sm:text-sm text-ink-500 leading-relaxed font-light">
                  {spec.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-line/60 flex items-center justify-between text-xs font-semibold text-ink-500 group-hover:text-terracotta-700 transition-colors">
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
