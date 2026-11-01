import React from 'react';
import bannerImg from '../assets/Gemini_Generated_Image_4rsx5l4rsx5l4rsx.jpg';

const Banner = () => {
  return (
    <section className="relative w-full overflow-hidden select-none">
      <div className="relative w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px]">
        {/* Immagine di sfondo */}
        <img
          src={bannerImg}
          alt="Ambiance apaisante et chaleureuse"
          className="w-full h-full object-cover object-center"
        />

        {/* Sfumatura superiore verso bg-sand-50 (#FAF7F2) */}
        <div className="absolute inset-x-0 top-0 h-24 sm:h-32 md:h-40 bg-gradient-to-b from-sand-50 via-sand-50/70 to-transparent pointer-events-none" />

        {/* Sfumatura inferiore verso bg-clay-50/70 */}
        <div className="absolute inset-x-0 bottom-0 h-24 sm:h-32 md:h-40 bg-gradient-to-t from-clay-50 via-clay-50/80 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Banner;
