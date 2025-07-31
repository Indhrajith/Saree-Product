import { useState } from 'react';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Subscribed with:', email);
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <section className="py-16 bg-primary" id="newsletter">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Stay Updated</h2>
          <p className="text-gray-700 mb-8">
            Subscribe to our newsletter for exclusive offers, new arrivals, and styling tips.
          </p>

          {subscribed ? (
            <div className="bg-white text-gray-800 px-6 py-4 rounded-lg shadow-md inline-block font-medium transition-all duration-300">
              ✅ Thank you for subscribing! Check your inbox for confirmation.
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-center gap-4 max-w-lg mx-auto"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow px-5 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
