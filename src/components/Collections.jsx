import React from 'react';
import saree1 from '../assets/images/saree1.jpg';
import saree2 from '../assets/images/saree2.jpg';
import saree3 from '../assets/images/saree3.jpg';

const Collections = () => {
  const collections = [
    {
      id: 1,
      name: 'Silk Sarees',
      count: '45+',
      image: saree1,
    },
    {
      id: 2,
      name: 'Cotton Sarees',
      count: '32+',
      image: saree2,
    },
    {
      id: 3,
      name: 'Designer Sarees',
      count: '28+',
      image: saree3,
    },
    {
      id: 4,
      name: 'Wedding Collection',
      count: '18+',
      image: saree1, // Reusing saree1 for now
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-rose-100" id="collections">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-3">Our Collections</h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            Discover elegance in every thread. Browse our curated saree categories designed for every style and occasion.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {collections.map((collection) => (
            <div
              key={collection.id}
              className="relative group rounded-2xl overflow-hidden shadow-lg bg-white hover:shadow-2xl transition duration-300"
            >
              <img
                src={collection.image}
                alt={collection.name}
                className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white text-2xl font-semibold mb-1">{collection.name}</h3>
                <p className="text-white text-sm">{collection.count} styles</p>
                <button className="mt-4 bg-white text-rose-600 px-5 py-2 rounded-full text-sm font-medium hover:bg-rose-50 transition-colors">
                  Explore Now
                </button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4">
                <h3 className="text-gray-800 font-semibold">{collection.name}</h3>
                <p className="text-gray-600 text-sm">{collection.count} styles</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Collections;
