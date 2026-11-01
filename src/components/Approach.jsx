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
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 lg:gap-20 items-start">
          {/* Left: Heading block — occupies 2 cols */}
          <div className="lg:col-span-2 space-y-5 lg:sticky lg:top-28">
            <span className="text-xs font-semibold tracking-widest uppercase text-terracotta-700">
              Mon approche
            </span>
            <h2 className="font-display text-3xl sm:text-4xl text-ink-900 tracking-tight leading-[1.15]">
              Une écoute attentive,
              <br />
              <span className="text-terracotta-500">sans tabou</span> ni jugement
            </h2>
            <div className="w-12 h-1 bg-terracotta-500 rounded-full" />
            <p className="text-ink-500 font-light leading-relaxed text-[15px]">
              La sexualité et l&#8217;affectivité font partie intégrante de
              notre équilibre. Qu&#8217;il s&#8217;agisse de surmonter un
              blocage, de raviver le désir ou d&#8217;harmoniser la communication
              au sein du couple, mon cabinet à Lille vous offre un refuge de
              parole confidentiel et chaleureux.
            </p>
            <a
              href="#specialites"
              className="inline-flex items-center gap-2 text-sm font-semibold text-terracotta-500 hover:text-terracotta-700 transition-colors group pt-2"
            >
              Voir les accompagnements
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Pillars — occupies 3 cols, staggered */}
          <div className="lg:col-span-3 flex flex-col gap-5">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="group flex gap-5 p-6 bg-white rounded-2xl border border-line shadow-soft hover:shadow-lift hover:border-terracotta-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-terracotta-50 group-hover:bg-terracotta-100 flex items-center justify-center text-terracotta-500 shrink-0 transition-colors">
                  <p.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-bold text-ink-900 text-lg mb-1">
                    {p.title}
                  </h3>
                  <p className="text-sm text-ink-500 leading-relaxed">
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
