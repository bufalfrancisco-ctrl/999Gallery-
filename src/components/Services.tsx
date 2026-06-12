'use client'

import { useState, useEffect } from 'react'

export function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section 
      id="services" 
      className="relative py-24 bg-cover bg-center bg-no-repeat min-h-[85vh] flex items-center justify-center" 
      style={{
        backgroundImage: "url('/images/howtodownload.png')",
        overflow: 'visible'
      }}
    >
      
      {/* Overlay scuro per profondità e leggibilità */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/65 to-black/85 pointer-events-none" />

      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10" style={{ overflow: 'visible' }}>
        
        {/* Intestazione */}
        <div className="text-center mb-12">
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-3xl sm:text-5xl font-bagel tracking-tighter text-white select-none block">
              999
            </span>
            <span className="text-lg font-semibold text-zinc-200">
              🖤 Songs Download 🖤
            </span>
          </div>
          
          <h2 className={`text-5xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white transform transition-all duration-1000 delay-200 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
          }`}>
            How To Download Songs 
          </h2>
          
          <p className={`text-xl text-zinc-300 leading-relaxed max-w-3xl mx-auto transform transition-all duration-1000 delay-400 ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}>
            Understand how to download songs from our platform (Google Drive), and listen to them easily on Spotify through the albums we create!
          </p>
        </div>

        {/* CONTENITORE LOGHI DISPOSTI IN VERTICALE (UNO SOPRA E UNO SOTTO) */}
        <div className="flex flex-col items-center justify-center gap-14 mt-8" style={{ overflow: 'visible' }}>
          
          {/* PRIMO ELEMENTO: GOOGLE DOCS (SOPRA) */}
          <div 
            className={`transform transition-all duration-1000 delay-600 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
            style={{ overflow: 'visible' }}
          >
            <a 
              href="https://docs.google.com/document/d/1PDRe7nx0Hu7OiK76WSI8OJZcW8UA7wV9Qz097aETLtk/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 transition-all duration-300 ease-out hover:scale-110 active:scale-95 origin-center text-decoration-none"
              style={{ overflow: 'visible' }}
            >
              {/* Contenitore Icona con effetto Glow */}
              <div className="relative w-24 h-32 sm:w-28 sm:h-36 drop-shadow-[0_12px_20px_rgba(0,0,0,0.6)]" style={{ overflow: 'visible' }}>
                  <div className="absolute inset-0 bg-blue-600/20 rounded-2xl blur-[25px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  <svg 
                    viewBox="0 0 47 65" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full overflow-visible"
                  >
                    <path 
                      d="M3.5 0C1.567 0 0 1.567 0 3.5V61.5C0 63.433 1.567 65 3.5 65H43.5C45.433 65 47 63.433 47 61.5V14L33 0H3.5Z" 
                      fill="#4285F4" 
                    />
                    <path 
                      d="M47 14H35C33.8954 14 33 13.1046 33 12V0L47 14Z" 
                      fill="#A1C2FA" 
                    />
                    <rect x="10" y="28" width="27" height="4" rx="2" fill="white" fillOpacity="0.9" />
                    <rect x="10" y="38" width="27" height="4" rx="2" fill="white" fillOpacity="0.9" />
                    <rect x="10" y="48" width="18" height="4" rx="2" fill="white" fillOpacity="0.9" />
                  </svg>
              </div>

              {/* Rettangolino (Badge) Google Docs */}
              <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/20 shadow-lg shadow-black/20 group-hover:bg-blue-600/20 group-hover:border-blue-500/40 transition-all duration-300">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide select-none">
                  Google Docs Tutorial
                </span>
              </div>
            </a>
          </div>

          {/* SECONDO ELEMENTO: SPOTIFY (SOTTO E PIÙ GRANDE) */}
          <div 
            className={`transform transition-all duration-1000 delay-800 ${
              isVisible ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
            }`}
            style={{ overflow: 'visible' }}
          >
            <a 
              href="https://open.spotify.com/user/31oikbbhvrnzedjjrjlndodslxbm?si=afc84550ca0a4ce3" 
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-4 transition-all duration-300 ease-out hover:scale-110 active:scale-95 origin-center text-decoration-none"
              style={{ overflow: 'visible' }}
            >
              {/* Contenitore Immagine ingrandito (w-32 sm:w-40) */}
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 drop-shadow-[0_12px_24px_rgba(0,0,0,0.7)]" style={{ overflow: 'visible' }}>
                  {/* Effetto luce verde dietro l'immagine al passaggio del mouse */}
                  <div className="absolute inset-0 bg-[#1DB954]/25 rounded-full blur-[30px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  
                  {/* La tua immagine caricata */}
                  <img 
                    src="/images/ok.png" 
                    alt="Spotify Logo Custom"
                    className="w-full h-full object-contain rounded-full select-none pointer-events-none"
                  />
              </div>

              {/* Rettangolino (Badge) Spotify */}
              <div className="bg-white/10 backdrop-blur-md px-4 py-1.5 rounded-lg border border-white/20 shadow-lg shadow-black/20 group-hover:bg-[#1DB954]/20 group-hover:border-[#1DB954]/40 transition-all duration-300">
                <span className="text-white text-xs sm:text-sm font-medium tracking-wide select-none">
                  Public Fan-Art Albums
                </span>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}