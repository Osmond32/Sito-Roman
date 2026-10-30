import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: "Comment se déroule la première séance ?",
    answer:
      "La première séance est avant tout un espace de rencontre et d'écoute bienveillante. Nous faisons le point sur votre situation, vos questionnements ou vos difficultés actuelles. Il n'y a aucun examen médical ni jugement : vous partagez uniquement ce avec quoi vous êtes à l'aise.",
  },
  {
    question: "Combien de séances sont généralement nécessaires ?",
    answer:
      "La sexothérapie est une thérapie brève. Le nombre de rendez-vous varie selon vos besoins et votre rythme, généralement de quelques séances à quelques mois avec des consultations espacées de 2 à 4 semaines.",
  },
  {
    question: "La sexothérapie est-elle remboursée par la Sécurité Sociale ?",
    answer:
      "Les séances de sexothérapie ne sont pas prises en charge par la Sécurité Sociale. Cependant, de plus en plus de mutuelles remboursent tout ou partie des consultations sous le forfait « médecines douces / thérapies alternatives ». Une facture vous est remise sur simple demande.",
  },
  {
    question: "Peut-on consulter seul(e) pour un problème de couple ?",
    answer:
      "Oui, absolument. Même si la démarche de couple est idéale lorsque les deux partenaires souhaitent s'impliquer, venir seul(e) permet d'éclairer sa propre posture, d'apaiser ses blocages et de faire évoluer positivement la dynamique relationnelle.",
  },
  {
    question: "Comment fonctionne la téléconsultation ?",
    answer:
      "La téléconsultation se déroule via un lien vidéo sécurisé envoyé avant le rendez-vous. Elle offre la même confidentialité et la même qualité d'écoute qu'une séance au cabinet, idéale si vous ne pouvez pas vous déplacer à Lille.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 bg-clay-50/50">
      <div className="max-w-4xl mx-auto space-y-14">
        <div className="text-center space-y-4">
          <span className="text-xs font-semibold tracking-widest uppercase text-terracotta-700 bg-terracotta-100/60 px-3.5 py-1.5 rounded-full inline-flex items-center gap-1.5">
            <HelpCircle size={14} />
            <span>Questions Fréquentes</span>
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-ink-900 tracking-tight">
            Tout ce qu’il faut savoir
          </h2>
          <p className="text-base text-ink-500 font-light leading-relaxed max-w-2xl mx-auto">
            Des réponses claires pour aborder votre première consultation en toute sérénité.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-line overflow-hidden transition-all duration-200 shadow-soft"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display font-bold text-ink-900 text-lg sm:text-xl">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                      isOpen
                        ? 'bg-terracotta-500 text-white rotate-180'
                        : 'bg-sand-50 text-ink-500'
                    }`}
                  >
                    <ChevronDown size={18} />
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-ink-500 text-sm sm:text-base leading-relaxed font-light border-t border-line/40 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
