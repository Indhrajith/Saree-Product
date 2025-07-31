import { useState, useEffect, lazy, Suspense } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'

// Lazy load components for performance
const Featured = lazy(() => import('./components/Featured'))
const Collections = lazy(() => import('./components/Collections'))
const Testimonials = lazy(() => import('./components/Testimonials'))
const Newsletter = lazy(() => import('./components/Newsletter'))

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-white font-sans scroll-smooth">
      <Header scrolled={scrolled} />
      <main>
        <Hero />
        <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
          <Featured />
          <Collections />
          <Testimonials />
          <Newsletter />
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}

export default App
