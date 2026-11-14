import React from 'react';
import { HeartHandshake, Award, ShieldCheck, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: HeartHandshake,
    title: 'Écoute active',
    text: 'Un échange centré sur votre vécu, vos ressentis et vos besoins, dans le respect de votre rythme.',
  },
  {
    icon: Award,
    title: 'Praticienne certifiée',
    text: 'Formation reconnue par l\u2019Institut CERFPA. Un cadre éthique et un accompagnement rigoureux.',
  },
  {
    icon: ShieldCheck,
    title: 'Secret professionnel',
    text: 'Confidentialité absolue dans un espace conçu pour vous libérer de tout tabou, sans jugement.',
  },
];

const Approach = () => {
  return (
    <section id="approche" className="py-24 md:py-32 px-6 bg-sand-50 relative overflow-hidden">
      {/* Decorative accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-transparent via-terracotta-200 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left: Mon Approche text — occupies 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-terracotta-700">
              Mon approche
            </span>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl text-ink-900 tracking-tight leading-[1.2]">
              La sexualité ne se résume pas{' '}
              <span className="text-terracotta-500">au corps</span> ou aux rapports sexuels.
            </h2>
            <div className="w-12 h-1 bg-terracotta-500 rounded-full" />

            <div className="space-y-4 text-ink-500 font-light leading-relaxed text-sm sm:text-base">
              <p>
                Elle peut être influencée par les émotions, l&#8217;histoire personnelle, les
                relations, les expériences vécues et la façon dont on se perçoit.
              </p>
              <p>
                Mon approche intégrative vise à prendre en compte les différentes dimensions de votre
                vécu afin de mieux comprendre vos difficultés, vos besoins et vos attentes.
              </p>
              <p>
                Chaque personne est différente. L&#8217;accompagnement se construit à partir de votre
                situation, de ce que vous souhaitez aborder et de votre rythme.
              </p>
            </div>

            {/* Reassuring callout */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-terracotta-200/80 shadow-soft">
              <p className="text-sm sm:text-base text-ink-900 font-medium italic">
                « Vous n&#8217;avez pas besoin d&#8217;avoir toutes les réponses avant de consulter.
                Vous pouvez venir simplement, avec vos questions. »
              </p>
            </div>

            <div>
              <a
                href="#specialites"
                className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta-500 hover:text-terracotta-700 transition-colors group pt-2"
              >
                Voir les accompagnements
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right: Pillars — occupies 5 cols */}
          <div className="lg:col-span-5 flex flex-col gap-4 lg:pt-8">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group flex gap-4 p-5 sm:p-6 bg-white rounded-2xl border border-line shadow-soft hover:shadow-lift hover:border-terracotta-200 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-terracotta-50 group-hover:bg-terracotta-100 flex items-center justify-center text-terracotta-500 shrink-0 transition-colors">
                  <p.icon size={22} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink-900 text-base sm:text-lg mb-1">
                    {p.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-ink-500 leading-relaxed font-light">
                    {p.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
