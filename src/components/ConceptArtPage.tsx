'use client'

import { motion } from 'framer-motion'
import { Volume2, VolumeX, Music } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'
import { Footer } from './Footer'

interface ConceptArtPageProps {
  onBackToHome: () => void;
  onBackToUnreleased: () => void;
}

export function ConceptArtPage({ onBackToHome, onBackToUnreleased }: ConceptArtPageProps) {
  const [isMuted, setIsMuted] = useState(true)
  const [isVisible, setIsVisible] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const progetti = [
    {
      id: 1,
      title: "BLESSED BOYS",
      category: "Fan Art",
      desc: "Blessed Boys is an unreleased collaborative mixtape by Juice WRLD and Lil Yachty, rumored to be recorded between 2018 and 2019. Although never officially announced, the project combined Juice's emotional delivery with Yachty's signature autotuned flow over bouncy, melodic production. No official tracklist exists, but numerous leaked songs and snippets have surfaced online over the years. Driven by these leaks, the project has developed a strong cult following within the hip-hop community. Today, dedicated fans continue to archive and share the material, holding onto hope for an official release.",
      imageUrl: "/images/BBC.png", 
      spotifyUrl: "https://open.spotify.com/playlist/42krKJjH0b6xnUzcMq6Cj0?si=4dc96e37b75d4b40", 
      musicUrl: "https://samply.app/p/aQDGyHFBnRrcGPafTp3L?si=5f5Xt6Po11X3442RY8jPl09pd333" 
    },
    {
      id: 2,
      title: "EVIL TWINS",
      category: "Fan Art",
      desc: "Evil Twins is the unreleased collaborative mixtape by Ski Mask The Slump God and the late Juice WRLD. This tracklist is unconfirmed. It is compiled of recent singles, snippets, and song titles sourced from streaming services, PRO’s, and social media. It is purely speculative and has not been confirmed by Ski Mask The Slump God or Juice WRLD. We will update this tracklist as more information comes to light.",
      imageUrl: "/images/Evil Twins Cover.png", 
      spotifyUrl: "https://open.spotify.com/playlist/05OOjTJ0YxcWpwdEpcg0XY?si=172bd57a9d5547af",
      musicUrl: "https://samply.app/p/VfssUnoOYgjOmA6wxlII?si=5f5Xt6Po11X3442RY8jPl09pd333"
    },
    {
      id: 3,
      title: "SLIME WRLD",
      category: "Fan Art",
      desc: "Slime WRLD is an unreleased collaborative tape by Juice WRLD and Young Thug that was expected to drop in early 2020. However, following Juice WRLD’s passing on December 8, 2019, the project was canceled. Despite this, several tracks originally intended for the tape have been repurposed for other releases over the years, such as “Bad Boy” (single, 2021), “Rich Nigga Shit” (Punk, 2021), “Money” (Business Is Business, 2023), and “Lightyears” (The Pre-Party, 2024). The album also includes their highly anticipated unreleased track “Attachments”, among others.",
      imageUrl: "/images/Slime WRLD Cover.jpg",
      spotifyUrl: "https://open.spotify.com/playlist/0fiJ8e5kAyQHTvLVCi7O4L?si=61986ce368654ece",
      musicUrl: "https://samply.app/p/QDzDkCbWXh9XHWbVWUMf?si=5f5Xt6Po11X3442RY8jPl09pd333"
    }
  ]

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.volume = 0
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      
      videoRef.current.addEventListener('play', () => {
        if (videoRef.current) {
          videoRef.current.muted = isMuted
          videoRef.current.volume = isMuted ? 0 : 0.7
        }
      })
      
      const playPromise = videoRef.current.play()
      if (playPromise !== undefined) {
        playPromise.catch(error => console.error('Vault video autoplay failed:', error))
      }
    }
  }, [])

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted
      videoRef.current.volume = isMuted ? 0 : 0.7
    }
  }, [isMuted])

  return (
    <main className="relative min-h-screen w-full bg-black text-white selection:bg-amber-500 selection:text-black">
      
      {/* BACKGROUND VIDEO */}
      <div className="absolute top-0 left-0 w-full h-screen overflow-hidden z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover scale-110"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/Concrete Art.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* HEADER DELLA NAVBAR */}
      <motion.nav
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed top-0 left-0 right-0 w-full z-[110] bg-black/80 backdrop-blur-xl border-b border-white/10"
      >
        <div className="w-full px-6 sm:px-8 lg:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center cursor-pointer" onClick={onBackToHome}>
              <span className="font-bagel text-white text-xl tracking-wider">999 Gallery</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <span 
                onClick={onBackToUnreleased}
                className="text-white hover:text-amber-400 font-medium gentle-animation hover:scale-105 cursor-pointer transition-colors"
              >
                Studio Audio
              </span>
              <span className="text-amber-500 font-medium scale-105 cursor-default">
                Concept Art
              </span>
              <span className="text-white hover:text-white/80 font-medium gentle-animation hover:scale-105 cursor-default">Tracklist</span>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="glass-effect p-2.5 rounded-full text-white hover:bg-white/20 gentle-animation cursor-pointer border border-white/10"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <button 
                onClick={onBackToUnreleased}
                className="text-xs font-sans text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700 bg-zinc-900/50 px-4 py-2 rounded-md transition-all cursor-pointer"
              >
                BACK TO VAULT
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* SEZIONE COPERTINA */}
      <div className="relative h-screen w-full z-40 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-12 left-6 sm:left-8 lg:left-12 max-w-2xl text-left pointer-events-auto"
        >
          <div className="flex items-center space-x-2 mb-3">
            <span className="h-4 w-0.5 rounded-full bg-amber-500" />
            <span className="text-lg font-black tracking-widest uppercase leading-none text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-500 to-orange-600">
              VAULT VISUALS
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-none text-white tracking-tight uppercase space-y-1">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">JUICE WRLD</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">OFFICIAL CONCEPT</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">ART & DESIGN</span>
          </h1>
        </motion.div>
      </div>

      {/* CORPO DELLA PAGINA COMPLETAMENTE ESTESO */}
      <section 
        id="concept-gallery" 
        className="relative py-40 bg-cover bg-center bg-no-repeat w-full flex flex-col items-center justify-start border-t border-white/5 z-10" 
        style={{
          backgroundImage: "url('/images/wallpaper.jpg')"
        }}
      >
        {/* Overlay scuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/75 to-black/90 pointer-events-none" />

        <div className="container mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 relative z-10">
          
          {/* Header Community inserito sopra l'inizio dei progetti */}
          <div className="text-center mb-16">
            <div className="flex flex-col items-center justify-center gap-2 mb-6 w-full">
              <span className="text-3xl sm:text-5xl font-bagel tracking-tighter text-white select-none block">
                999
              </span>
              <span className="text-lg font-semibold text-zinc-400">
                🖤 Fan Art Albums 🖤
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white uppercase tracking-tight">
              Fan Art Albums Concepts 
            </h2>
          </div>

          <div className="flex flex-col w-full">
            {progetti.map((item) => (
              <div key={item.id} className="w-full flex flex-col group">
                
                {/* Linea Orizzontale Separatrice Grigia */}
                <div className="w-full h-[1px] bg-zinc-800/40 my-24 transition-colors group-hover:bg-zinc-700/60" />

                {/* Layout Asimmetrico: Immagine Sinistra | Testi Centro | Icone con Testo Sotto a Destra */}
                <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-10 md:gap-16 w-full">
                  
                  {/* COLONNA 1: IMMAGINE ALBUM TUTTO A SINISTRA */}
                  <div className="relative aspect-square w-44 sm:w-52 lg:w-56 flex-shrink-0 bg-zinc-900/20 border border-white/10 rounded-xl overflow-hidden shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:border-amber-500/30">
                    {item.imageUrl ? (
                      <img 
                        src={item.imageUrl} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-zinc-600 font-mono text-xs">
                        <span>IMG NO BG</span>
                        <span className="text-[10px] text-amber-500/60 mt-1">#{item.id.toString().padStart(2, '0')}</span>
                      </div>
                    )}
                  </div>

                  {/* COLONNA 2: TITOLO E DESCRIZIONE AL CENTRO */}
                  <div className="flex-1 text-center md:text-left min-w-0 font-sans flex flex-col justify-start pt-1">
                    {/* Categoria */}
                    <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-amber-500/80 mb-2 block">
                      {item.category}
                    </span>
                    
                    {/* Titolo */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-white uppercase transition-colors duration-300 group-hover:text-amber-400 leading-none">
                      {item.title}
                    </h3>
                    
                    {/* Descrizione */}
                    <p className="text-sm sm:text-base text-zinc-400 leading-relaxed mt-5 w-full transition-colors duration-300 group-hover:text-zinc-200">
                      {item.desc}
                    </p>
                  </div>

                  {/* COLONNA 3: ICONE A DESTRA CON DESCRIZIONI POSIZIONATE SOTTO */}
                  <div className="flex flex-col sm:flex-row md:flex-col items-center justify-start gap-8 md:gap-8 pt-6 md:pt-2 flex-shrink-0 min-w-[160px] max-w-[180px]">
                    
                    {/* Blocco Verticale Spotify */}
                    <a 
                      href={item.spotifyUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center text-center group/btn font-sans w-full"
                      title="Apri su Spotify"
                    >
                      {/* Icona Colorata Verde Brand */}
                      <svg 
                        viewBox="0 0 24 24" 
                        className="w-8 h-8 fill-current text-[#1DB954] transform group-hover/btn:scale-110 transition-transform duration-300"
                      >
                        <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.586 14.424c-.18.295-.563.387-.857.207-2.377-1.454-5.37-1.783-8.893-.982-.336.075-.668-.135-.744-.47-.075-.336.135-.668.47-.743 3.856-.88 7.15-.51 9.822 1.13.296.178.387.563.206.858zm1.224-2.723c-.226.367-.707.487-1.074.26-2.72-1.672-6.87-2.157-10.08-1.182-.413.125-.847-.107-.972-.52-.125-.413.107-.847.52-.972 3.673-1.114 8.243-.574 11.35 1.335.366.226.486.708.26 1.074zm.104-2.82c-3.263-1.937-8.646-2.115-11.754-1.17-.5.152-1.025-.133-1.176-.633-.15-.5.133-1.025.633-1.175 3.593-1.09 9.53-.883 13.284 1.343.45.267.6.845.334 1.295-.267.45-.845.6-1.295.34z"/>
                      </svg>
                      {/* Descrizione Sotto l'icona */}
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover/btn:text-[#1DB954] transition-colors mt-2">
                        Spotify Link
                      </span>
                      {/* Sottotesto personalizzato richiesto */}
                      <span className="text-[11px] text-zinc-400 mt-1.5 font-normal normal-case leading-snug max-w-[150px]">
                        save this playlist to listen to your downloaded songs
                      </span>
                    </a>

                    {/* Blocco Verticale Apple Music / iTunes */}
                    <a 
                      href={item.musicUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex flex-col items-center text-center group/btn font-sans w-full"
                      title="Ascolta Traccia"
                    >
                      {/* Icona Colorata Rosso Brand */}
                      <Music 
                        className="w-7 h-7 text-[#FC3C44] transform group-hover/btn:scale-110 transition-transform duration-300" 
                        strokeWidth={2.5} 
                      />
                      {/* Descrizione Sotto l'icona */}
                      <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-zinc-500 group-hover/btn:text-[#FC3C44] transition-colors mt-2.5">
                        Listen Track
                      </span>
                      {/* Sottotesto personalizzato richiesto */}
                      <span className="text-[11px] text-zinc-400 mt-1.5 font-normal normal-case leading-snug max-w-[150px]">
                        download here your songs and check the tracklist!
                      </span>
                    </a>

                  </div>

                </div>
              </div>
            ))}
            
            {/* Ultima riga di chiusura finale */}
            <div className="w-full h-[1px] bg-zinc-800/40 my-24" />
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  )
}