const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Priya Sharma',
      role: 'Fashion Designer',
      content:
        'The quality of silk and craftsmanship in these sarees is unmatched. My clients always appreciate the unique designs.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Ananya Patel',
      role: 'Regular Customer',
      content:
        'I bought a Kanjivaram saree for my wedding and received so many compliments. The colors were even more vibrant in person!',
      rating: 5,
    },
    {
      id: 3,
      name: 'Dr. Meena Krishnan',
      role: 'Corporate Professional',
      content:
        'Perfect blend of traditional and contemporary styles. I wear these sarees to important meetings and always feel confident.',
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50" id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from women who have experienced the elegance of our sarees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-2xl shadow-lg transition-transform hover:scale-[1.02]"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'
                    }`}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-700 italic mb-6">“{testimonial.content}”</p>

              <div className="flex items-center">
                <div className="bg-primary text-white rounded-full h-12 w-12 flex items-center justify-center font-semibold text-lg">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4 text-left">
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
