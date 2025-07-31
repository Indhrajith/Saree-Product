import React from 'react';
import saree1 from '../assets/images/banarasi.jpeg';
import saree2 from '../assets/images/kanchivaram.jpeg';
import saree3 from '../assets/images/chanderi.jpeg';

const Featured = () => {
  const featuredSarees = [
    {
      id: 1,
      name: 'Banarasi Silk',
      price: '₹8,999',
      image: saree1,
      description: 'Handwoven with pure silk and intricate zari work',
    },
    {
      id: 2,
      name: 'Kanjivaram Cotton',
      price: '₹6,499',
      image: saree2,
      description: 'Traditional South Indian weave with elegant modern patterns',
    },
    {
      id: 3,
      name: 'Chanderi Silk',
      price: '₹7,299',
      image: saree3,
      description: 'Lightweight texture with delicate gold motifs and shine',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-rose-50 to-pink-100" id="featured">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Featured Collections</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Our handpicked premium sarees that embody tradition, luxury, and timeless design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredSarees.map((saree) => (
            <div
              key={saree.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition-shadow duration-300"
            >
              <div className="relative h-80 overflow-hidden group">
                <img
                  src={saree.image}
                  alt={saree.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <h3 className="text-white text-xl font-semibold">{saree.name}</h3>
                  <p className="text-white text-sm">{saree.price}</p>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-600 text-sm mb-4">{saree.description}</p>
                <button className="w-full bg-rose-500 text-white py-2 rounded-full font-medium hover:bg-rose-600 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button className="bg-gray-800 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors">
            View All Collections
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
