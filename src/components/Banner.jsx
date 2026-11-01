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

        {/* Sfumatura superiore molto sottile e leggera */}
        <div className="absolute inset-x-0 top-0 h-10 sm:h-14 md:h-16 bg-gradient-to-b from-sand-50/70 via-sand-50/20 to-transparent pointer-events-none" />

        {/* Sfumatura inferiore molto sottile e leggera */}
        <div className="absolute inset-x-0 bottom-0 h-10 sm:h-14 md:h-16 bg-gradient-to-t from-clay-50/70 via-clay-50/20 to-transparent pointer-events-none" />
      </div>
    </section>
  );
};

export default Banner;
