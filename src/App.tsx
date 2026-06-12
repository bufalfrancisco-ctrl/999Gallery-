'use client'

import { useState } from 'react'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { UnreleasedPage } from './components/UnreleasedPage'
import { ConceptArtPage } from './components/ConceptArtPage' // 1. Importiamo la nuova pagina

export default function App() {
  // 2. Aggiornato lo stato per accettare anche la schermata 'concept-art'
  const [currentScreen, setCurrentScreen] = useState<'home' | 'unreleased' | 'concept-art'>('home')

  return (
    <div className="min-h-screen w-full bg-background text-foreground scroll-smooth">
      {/* Schermata HOME */}
      {currentScreen === 'home' && (
        <>
          <main className="relative w-full" role="main">
            <section id="hero" aria-label="Hero section">
              <Hero onNavigateToUnreleased={() => setCurrentScreen('unreleased')} />
            </section>
            
            <section id="portfolio" aria-label="Portfolio section">
              <Portfolio />
            </section>
            
            <section id="awards" aria-label="Awards section">
              <Awards />
            </section>
            
            <section id="about" aria-label="About section">
              <About />
            </section>
            
            <section id="services" aria-label="Services section">
              <Services />
            </section>
            
            <Team />
            
            <section id="contact" aria-label="Contact section">
              <Contact />
            </section>
          </main>
          <Footer />
        </>
      )}

      {/* Schermata UNRELEASED */}
      {currentScreen === 'unreleased' && (
        <UnreleasedPage 
          onBackToHome={() => setCurrentScreen('home')} 
          onNavigateToConceptArt={() => setCurrentScreen('concept-art')} // 3. Passiamo la funzione alla Navbar di UnreleasedPage
        />
      )}

      {/* Schermata CONCEPT ART */}
      {currentScreen === 'concept-art' && (
        <ConceptArtPage 
          onBackToUnreleased={() => setCurrentScreen('unreleased')} // 4. Permette di tornare alla pagina unreleased
        />
      )}
    </div>
  )
}