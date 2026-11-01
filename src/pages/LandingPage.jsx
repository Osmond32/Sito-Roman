import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Approach from '../components/Approach';
import Banner from '../components/Banner';
import Specialties from '../components/Specialties';
import PricingAndCabinet from '../components/PricingAndCabinet';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-sand-50 text-ink-700">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Approach />
        <Banner />
        <Specialties />
        <PricingAndCabinet />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
