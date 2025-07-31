import React from 'react';
import heroBg from '../assets/images/hero-bg.jpeg'; // make sure this path and file are correct

const Hero = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-32 lg:pb-40" id="hero">
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-1]"
        style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl text-center md:text-left animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Elegance Woven in Every Thread
          </h1>
          <p className="text-lg sm:text-xl text-white mb-8">
            Discover our exquisite collection of handcrafted sarees blending traditional craftsmanship with modern elegance.
          </p>
          <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-4 sm:space-y-0">
            <button className="bg-accent hover:bg-accent-dark text-white px-8 py-3 rounded-full font-medium transition-colors">
              Shop Collection
            </button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 px-8 py-3 rounded-full font-medium transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
