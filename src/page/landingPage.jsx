import React from 'react';
import Header from '../component/Header';
import Features from '../component/Features';
import ImageCollage from '../component/ImageCollage';
import Footer from '../component/Footer';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
  const navigate = useNavigate();

  const handlePricingClick = () => {
    navigate('/pricing');
  };

  return (
    <div className="min-h-screen text-white flex flex-col overflow-x-hidden" style={{backgroundColor: '#1C1C1C'}}>
      <Header />

      <main className="flex-grow relative bg-cover bg-center pt-16 sm:pt-24" style={{ backgroundImage: `url('/main.png')` }}>
        <div className="absolute inset-0 bg-opacity-65" />
        <div className="relative z-20 container mx-auto px-4 py-8 sm:py-16 h-full flex items-center justify-center">
          <div className="max-w-3xl text-center p-6 sm:p-12 rounded-lg bg-opacity-60">
            <h1 className="text-3xl sm:text-5xl font-bold mb-2 sm:mb-4" style={{ fontFamily: 'Lobster Two, cursive' }}>
              Share your <span className="italic">Special</span> memories
            </h1>
            <h2 className="text-xl sm:text-3xl mb-4 sm:mb-6" style={{ fontFamily: 'Lora, serif' }}>
              Segregate now with power of Ai
            </h2>
            <p className="mb-6 sm:mb-8 text-base sm:text-lg" style={{ fontFamily: 'Lora, serif' }}>
              Deliver high-quality photos with our AI-powered, photo sharing platform.
              Perfect for weddings, birthdays, meet-ups events & more!
            </p>
            <button
              className="font-bold py-2 px-4 sm:px-8 rounded-full text-base sm:text-lg hover:opacity-90 transition duration-300 w-full sm:w-auto"
              style={{
                background: 'linear-gradient(90deg, #E58179 0%, #DD6C87 100%)',
                color: 'white',
                maxWidth: '400px',
                borderRadius: '8px'
              }}
            >
              Download
            </button>
          </div>
        </div>
      </main>
      <Features />
      <ImageCollage onPricingClick={handlePricingClick} />
      <Footer />
    </div>
  );
}

export default LandingPage;