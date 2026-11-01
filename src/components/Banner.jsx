import React from 'react';
import bannerImg from '../assets/Gemini_Generated_Image_4rsx5l4rsx5l4rsx.jpg';

const Banner = () => {
  return (
    <section className="w-full overflow-hidden select-none">
      <div className="w-full h-64 sm:h-80 md:h-[420px] lg:h-[480px]">
        <img
          src={bannerImg}
          alt="Ambiance apaisante et chaleureuse"
          className="w-full h-full object-cover object-center"
        />
      </div>
    </section>
  );
};

export default Banner;
